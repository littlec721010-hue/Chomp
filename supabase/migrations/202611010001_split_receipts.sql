-- Run once after 202610090001_accounts_and_preferences.sql.
begin;
create function public.valid_split_receipt(r jsonb) returns boolean
language plpgsql immutable set search_path = '' as $$
declare item jsonb; subtotal bigint := 0; ids text[] := '{}'; amount bigint; field text;
begin
  if jsonb_typeof(r) <> 'object' or not (r ?& array['id','restaurantName','date','guestCount','items','taxRate','tipRate','source']) then return false; end if;
  foreach field in array array['id','restaurantName','date','source'] loop
    if jsonb_typeof(r->field) is distinct from 'string' then return false; end if;
  end loop;
  if char_length(btrim(r->>'restaurantName')) not between 1 and 100 or r->>'source' not in ('manual','ocr') then return false; end if;
  if (r->>'date') !~ '^\d{4}-\d{2}-\d{2}$' or to_char((r->>'date')::date,'YYYY-MM-DD') <> r->>'date' then return false; end if;
  if jsonb_typeof(r->'guestCount') <> 'number' or (r->>'guestCount')::numeric <> trunc((r->>'guestCount')::numeric) or (r->>'guestCount')::numeric not between 1 and 100 then return false; end if;
  foreach field in array array['taxRate','tipRate'] loop
    if jsonb_typeof(r->field) <> 'number' or (r->>field)::numeric not between 0 and 100 then return false; end if;
  end loop;
  if jsonb_typeof(r->'items') <> 'array' or jsonb_array_length(r->'items') not between 1 and 200 then return false; end if;
  for item in select * from jsonb_array_elements(r->'items') loop
    if not (item ?& array['id','name','quantity','unitPriceCents']) then return false; end if;
    if jsonb_typeof(item->'id') <> 'string' or char_length(item->>'id') not between 1 and 120 or item->>'id' = any(ids) then return false; end if;
    ids := array_append(ids,item->>'id');
    if jsonb_typeof(item->'name') <> 'string' or char_length(btrim(item->>'name')) not between 1 and 100 then return false; end if;
    if jsonb_typeof(item->'quantity') <> 'number' or (item->>'quantity')::numeric <> trunc((item->>'quantity')::numeric) or (item->>'quantity')::numeric not between 1 and 100 then return false; end if;
    if jsonb_typeof(item->'unitPriceCents') <> 'number' or (item->>'unitPriceCents')::numeric <> trunc((item->>'unitPriceCents')::numeric) or (item->>'unitPriceCents')::numeric not between 0 and 99999999 then return false; end if;
    subtotal := subtotal + (item->>'quantity')::bigint * (item->>'unitPriceCents')::bigint;
  end loop;
  if subtotal > 999999999 then return false; end if;
  foreach field in array array['importedTaxCents','importedTipCents','printedTotalCents'] loop
    if r ? field then
      if jsonb_typeof(r->field) <> 'number' or (r->>field)::numeric <> trunc((r->>field)::numeric) or (r->>field)::numeric not between 0 and 999999999 then return false; end if;
    end if;
  end loop;
  return true;
exception when others then return false;
end $$;
revoke all on function public.valid_split_receipt(jsonb) from public,anon;
grant execute on function public.valid_split_receipt(jsonb) to authenticated;
create table public.split_receipts (
  user_id uuid not null references auth.users(id) on delete cascade,
  receipt_id text not null check (char_length(receipt_id) between 1 and 120),
  receipt jsonb not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  primary key (user_id,receipt_id),
  constraint receipt_object check (
    public.valid_split_receipt(receipt)
    and jsonb_typeof(receipt) = 'object'
    and receipt ?& array['id','restaurantName','date','guestCount','items','taxRate','tipRate','source']
    and receipt->>'id' = receipt_id
    and receipt->>'source' in ('manual','ocr')
    and char_length(receipt->>'restaurantName') between 1 and 100
    and jsonb_typeof(receipt->'items') = 'array'
    and jsonb_array_length(receipt->'items') between 1 and 200
    and pg_column_size(receipt) < 131072
  )
);
create index split_receipts_account_updated on public.split_receipts(user_id,updated_at desc);
alter table public.split_receipts enable row level security;
revoke all on public.split_receipts from anon;
grant select,insert,update,delete on public.split_receipts to authenticated;
create policy "Own receipts only" on public.split_receipts for all to authenticated
using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);
create trigger split_receipts_updated before update on public.split_receipts
for each row execute function public.set_updated_at();
commit;
