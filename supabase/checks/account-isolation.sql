-- Run ALL of this file as postgres in Supabase SQL Editor (new query).
-- Requires exactly two confirmed accounts with saved profiles/preferences.
-- Each mutation is rolled back in a subtransaction; the entire run also rolls back.
-- Tests database roles/policies, NOT signed JWTs or the HTTP API.
begin;
set local statement_timeout = '30s';

create temporary table beta_accounts on commit drop as
select u.id, row_number() over (order by u.created_at, u.id) as ordinal
from auth.users u
join public.profiles p on p.id = u.id
join public.dining_preferences d on d.user_id = u.id
where u.email_confirmed_at is not null;

do $$ begin
  if (select count(*) from beta_accounts) <> 2 then
    raise exception 'Requires exactly two confirmed accounts with saved preferences. Stop and review account selection.';
  end if;
end $$;

create temporary table beta_rls_results (
  actor text, table_name text, operation text, result text, detail text
) on commit drop;
grant select on beta_accounts to authenticated, anon;
grant insert on beta_rls_results to authenticated, anon;

set local role authenticated;
do $$
declare
  a record; t text; owner_column text; actor_id uuid; target_id uuid;
  op text; n bigint; passed boolean; detail text; own boolean;
begin
  if current_user <> 'authenticated' or
    (select rolbypassrls from pg_roles where rolname = current_user) then
    raise exception 'Invalid test role: RLS must not be bypassed';
  end if;
  for a in select * from beta_accounts order by ordinal loop
    actor_id := a.id;
    select id into target_id from beta_accounts where id <> actor_id;
    perform set_config('request.jwt.claim.sub', actor_id::text, true);
    perform set_config('request.jwt.claims', json_build_object('sub', actor_id, 'role', 'authenticated')::text, true);
    if auth.uid() is distinct from actor_id then raise exception 'Identity setup failed'; end if;
    foreach t in array array['profiles','dining_preferences'] loop
      owner_column := case when t = 'profiles' then 'id' else 'user_id' end;
      foreach own in array array[true, false] loop
        foreach op in array array['SELECT','UPDATE','DELETE','UPSERT','INSERT'] loop
          passed := false; detail := '';
          begin
            if op = 'SELECT' then
              execute format('select count(*) from public.%I where %I = $1', t, owner_column)
                into n using case when own then actor_id else target_id end;
              passed := n = case when own then 1 else 0 end;
            elsif op = 'UPDATE' then
              execute format('update public.%I set %I = %I where %I = $1', t, owner_column, owner_column, owner_column)
                using case when own then actor_id else target_id end;
              get diagnostics n = row_count;
              passed := n = case when own then 1 else 0 end;
            elsif op = 'DELETE' then
              execute format('delete from public.%I where %I = $1', t, owner_column)
                using case when own then actor_id else target_id end;
              get diagnostics n = row_count;
              passed := n = case when own then 1 else 0 end;
            else
              -- Own INSERT deletes only the own row inside this rolled-back block.
              if own and op = 'INSERT' then
                execute format('delete from public.%I where %I = $1', t, owner_column) using actor_id;
              end if;
              execute format('insert into public.%I (%I) values ($1)%s', t, owner_column,
                case when op = 'UPSERT' then format(' on conflict (%I) do update set %I = excluded.%I', owner_column, owner_column, owner_column) else '' end)
                using case when own then actor_id else target_id end;
              get diagnostics n = row_count;
              passed := own and n = 1;
            end if;
            detail := format('affected/visible rows: %s', n);
            -- Always undo this attempt, including successful DELETE/INSERT.
            raise exception using errcode = 'PT001', message = 'Undo test attempt';
          exception
            when sqlstate 'PT001' then null;
            when insufficient_privilege then
              passed := not own; detail := 'Denied (42501): ' || sqlerrm;
            when others then
              passed := false; detail := sqlstate || ': ' || sqlerrm;
          end;
          insert into beta_rls_results values (
            'Account ' || a.ordinal || case when own then ' -> own' else ' -> other' end,
            t, op, case when passed then 'PASS' else 'FAIL' end, detail);
        end loop;
      end loop;
    end loop;
  end loop;
end $$;

reset role;
set local role anon;
select set_config('request.jwt.claim.sub', '', true);
select set_config('request.jwt.claims', '{"role":"anon"}', true);
do $$
declare t text; op text; col text; target uuid; n bigint; passed boolean; detail text;
begin
  if current_user <> 'anon' then raise exception 'Invalid anonymous role'; end if;
  select id into target from beta_accounts order by ordinal limit 1;
  foreach t in array array['profiles','dining_preferences'] loop
    col := case when t = 'profiles' then 'id' else 'user_id' end;
    foreach op in array array['SELECT','UPDATE','DELETE','INSERT'] loop
      passed := false; detail := '';
      begin
        case op
          when 'SELECT' then execute format('select count(*) from public.%I', t) into n;
          when 'UPDATE' then execute format('update public.%I set %I = %I where %I = $1', t,col,col,col) using target; get diagnostics n = row_count;
          when 'DELETE' then execute format('delete from public.%I where %I = $1', t,col) using target; get diagnostics n = row_count;
          when 'INSERT' then execute format('insert into public.%I (%I) values ($1)', t,col) using target; get diagnostics n = row_count;
        end case;
        passed := op <> 'INSERT' and n = 0;
        detail := format('affected/visible rows: %s', n);
        raise exception using errcode = 'PT001', message = 'Undo test attempt';
      exception
        when sqlstate 'PT001' then null;
        when insufficient_privilege then passed := true; detail := 'Denied (42501)';
        when others then passed := false; detail := sqlstate || ': ' || sqlerrm;
      end;
      insert into beta_rls_results values ('Anonymous',t,op,case when passed then 'PASS' else 'FAIL' end,detail);
    end loop;
  end loop;
end $$;
reset role;

-- Expected: 48 PASS rows, zero FAIL. No personal data or tokens are returned.
select * from beta_rls_results order by actor, table_name, operation;
rollback;
