import fs from 'node:fs';
import assert from 'node:assert/strict';
import {PGlite} from '@electric-sql/pglite';
const root='./';
const db=new PGlite();
await db.exec(`create role anon; create role authenticated; create schema auth;
create table auth.users(id uuid primary key,raw_user_meta_data jsonb default '{}',created_at timestamptz default now(),email_confirmed_at timestamptz default now());
create function auth.uid() returns uuid language sql stable as $$select nullif(current_setting('request.jwt.claim.sub',true),'')::uuid$$;
grant usage on schema public,auth to anon,authenticated;`);
await db.exec(fs.readFileSync(root+'supabase/migrations/202610090001_accounts_and_preferences.sql','utf8'));
await db.exec(fs.readFileSync(root+'supabase/migrations/202611010001_split_receipts.sql','utf8'));
await db.exec(`insert into auth.users(id) values('11111111-1111-4111-8111-111111111111'),('22222222-2222-4222-8222-222222222222');
insert into public.dining_preferences(user_id) select id from auth.users;`);
for(const [file,expected] of [['account-isolation.sql',48],['receipt-isolation.sql',24]]){
  if(file==='receipt-isolation.sql')await db.exec(`insert into auth.users(id) values('33333333-3333-4333-8333-333333333333'); insert into public.dining_preferences(user_id) values('33333333-3333-4333-8333-333333333333');`);
  const results=await db.exec(fs.readFileSync(root+'supabase/checks/'+file,'utf8'));
  const rows=results.flatMap(r=>r.rows).filter(r=>'result' in r);
  assert.equal(rows.length,expected);assert.ok(rows.every(r=>r.result==='PASS'),JSON.stringify(rows.filter(r=>r.result!=='PASS')));
  console.log(file+': '+rows.length+' PASS');
}
const fixture={id:'validation-test',restaurantName:'Synthetic',date:'2026-11-01',guestCount:2,source:'manual',taxRate:0,tipRate:0,items:[{id:'x',name:'Test',quantity:1,unitPriceCents:101}]};
for(const changes of [null,{guestCount:0},{source:'sample'},{date:'2026-02-30'},{restaurantName:null},{id:null},{items:[]},{importedTaxCents:-1}]){
  const input={...fixture,...changes};const r=await db.query('select public.valid_split_receipt($1::jsonb) as valid',[JSON.stringify(input)]);
  assert.equal(r.rows[0].valid,changes===null,JSON.stringify(changes));
}
console.log('receipt validation: 8 PASS');
assert.equal((await db.query('select count(*)::int as n from public.split_receipts')).rows[0].n,0);
console.log('Rollback: no fixture receipts remain');
await db.close();
