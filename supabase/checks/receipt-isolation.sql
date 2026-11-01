-- Run this COMPLETE query after the receipt migration. All fixture rows roll back.
-- Uses the earliest two confirmed accounts with saved profiles/preferences.
begin;
set local statement_timeout = '30s';
create temporary table receipt_test_accounts on commit drop as
select u.id,row_number() over(order by u.created_at,u.id) as ordinal from auth.users u
join public.profiles p on p.id=u.id
join public.dining_preferences d on d.user_id=u.id
where u.email_confirmed_at is not null
order by u.created_at,u.id limit 2;
do $$ begin if (select count(*) from receipt_test_accounts) <> 2 then raise exception 'Requires at least two confirmed accounts with saved profiles and preferences'; end if; end $$;
create temporary table receipt_test_results(actor text,operation text,result text,detail text) on commit drop;
create temporary table receipt_test_fixture on commit drop as
select 'rls-check-' || gen_random_uuid()::text as id;
-- Same receipt ID for both owners verifies the composite key does not mix accounts.
insert into public.split_receipts(user_id,receipt_id,receipt)
select a.id,f.id,jsonb_build_object('id',f.id,'restaurantName','Synthetic test receipt','date','2026-11-01',
  'guestCount',2,'source','manual','taxRate',0,'tipRate',0,'items',
  jsonb_build_array(jsonb_build_object('id','line','name','Test item','quantity',1,'unitPriceCents',101)))
from receipt_test_accounts a cross join receipt_test_fixture f;
grant select on receipt_test_accounts,receipt_test_fixture to authenticated,anon;
grant insert on receipt_test_results to authenticated,anon;
set local role authenticated;
do $$
declare a record; target uuid; rid text; payload jsonb; op text; own boolean; n bigint; passed boolean; info text;
begin
  if current_user <> 'authenticated' or (select rolbypassrls from pg_roles where rolname=current_user) then raise exception 'Invalid RLS test role'; end if;
  select id into rid from receipt_test_fixture;
  for a in select * from receipt_test_accounts order by ordinal loop
    perform set_config('request.jwt.claim.sub',a.id::text,true);
    perform set_config('request.jwt.claims',json_build_object('sub',a.id,'role','authenticated')::text,true);
    if auth.uid() is distinct from a.id then raise exception 'Invalid test identity'; end if;
    select receipt into payload from public.split_receipts where user_id=a.id and receipt_id=rid;
    if payload is null then raise exception 'Own fixture was not readable'; end if;
    foreach own in array array[true,false] loop
      if own then target:=a.id; else select id into target from receipt_test_accounts where id<>a.id; end if;
      foreach op in array array['SELECT','UPDATE','DELETE','INSERT','UPSERT'] loop
        passed:=false; info:='';
        begin
          case op
            when 'SELECT' then select count(*) into n from public.split_receipts where user_id=target and receipt_id=rid;
            when 'UPDATE' then update public.split_receipts set receipt=payload where user_id=target and receipt_id=rid; get diagnostics n=row_count;
            when 'DELETE' then delete from public.split_receipts where user_id=target and receipt_id=rid; get diagnostics n=row_count;
            when 'INSERT' then
              if own then delete from public.split_receipts where user_id=target and receipt_id=rid; end if;
              insert into public.split_receipts(user_id,receipt_id,receipt) values(target,rid,payload); get diagnostics n=row_count;
            when 'UPSERT' then
              insert into public.split_receipts(user_id,receipt_id,receipt) values(target,rid,payload)
              on conflict(user_id,receipt_id) do update set receipt=excluded.receipt; get diagnostics n=row_count;
          end case;
          passed:=n=case when own then 1 else 0 end and (own or op not in ('INSERT','UPSERT'));
          info:='affected/visible rows: '||n;
          raise exception using errcode='PT001',message='Undo attempt';
        exception
          when sqlstate 'PT001' then null;
          when insufficient_privilege then passed:=not own; info:='Denied (42501)';
          when others then passed:=false; info:=sqlstate||': '||sqlerrm;
        end;
        insert into receipt_test_results values('Account '||a.ordinal||case when own then ' -> own' else ' -> other' end,op,case when passed then 'PASS' else 'FAIL' end,info);
      end loop;
    end loop;
  end loop;
end $$;
reset role;
set local role anon;
select set_config('request.jwt.claim.sub','',true);
select set_config('request.jwt.claims','{"role":"anon"}',true);
do $$
declare op text; n bigint; passed boolean; info text; target uuid; rid text;
begin
  select id into target from receipt_test_accounts order by ordinal limit 1;
  select id into rid from receipt_test_fixture;
  foreach op in array array['SELECT','UPDATE','DELETE','INSERT'] loop
    passed:=false; info:='';
    begin
      case op
        when 'SELECT' then select count(*) into n from public.split_receipts where receipt_id=rid;
        when 'UPDATE' then update public.split_receipts set receipt_id=receipt_id where receipt_id=rid; get diagnostics n=row_count;
        when 'DELETE' then delete from public.split_receipts where receipt_id=rid; get diagnostics n=row_count;
        when 'INSERT' then insert into public.split_receipts(user_id,receipt_id,receipt) values(target,rid,'{}'); get diagnostics n=row_count;
      end case;
      passed:=op<>'INSERT' and n=0; info:='affected/visible rows: '||n;
      raise exception using errcode='PT001',message='Undo attempt';
    exception
      when sqlstate 'PT001' then null;
      when insufficient_privilege then passed:=true; info:='Denied (42501)';
      when others then passed:=false; info:=sqlstate||': '||sqlerrm;
    end;
    insert into receipt_test_results values('Anonymous',op,case when passed then 'PASS' else 'FAIL' end,info);
  end loop;
end $$;
reset role;
-- Expected: 24 PASS, zero FAIL. No real receipt values returned.
select * from receipt_test_results order by actor,operation;
rollback;
