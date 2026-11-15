import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { PGlite } from '@electric-sql/pglite';

const ids=['00000000-0000-4000-8000-000000000001','00000000-0000-4000-8000-000000000002','00000000-0000-4000-8000-000000000003','00000000-0000-4000-8000-000000000004','00000000-0000-4000-8000-000000000005'];
const preferences={cuisines:['Japanese'],restrictions:[],dislikedFoods:[],budget:[15,30],distanceMiles:5};

test('group migration executes in PostgreSQL; authenticated clients share one immutable result',async t=>{
 const db=new PGlite();
 await db.exec(`create role anon; create role authenticated; create schema auth; create table auth.users(id uuid primary key); create function auth.uid() returns uuid language sql as $$ select nullif(current_setting('request.jwt.claim.sub',true),'')::uuid $$; grant usage on schema auth to authenticated,anon; grant execute on function auth.uid() to authenticated,anon;`);
 for(const id of ids)await db.query('insert into auth.users values($1)',[id]);
 await db.exec(await readFile(new URL('../supabase/migrations/202611010001_group_voting.sql',import.meta.url),'utf8'));
 await db.exec(await readFile(new URL('../supabase/migrations/202611010002_test_restaurant_restrictions.sql',import.meta.url),'utf8'));
 await db.exec(await readFile(new URL('../supabase/migrations/202611010003_group_details.sql',import.meta.url),'utf8'));
 // Transactions model distinct JWT identities; PGlite serializes connections. Live parallel HTTP test is separate.
 async function rpc(user:number,action:string,room:string|null=null,payload:object={}){
  return db.transaction(async tx=>{
   await tx.exec('set local role authenticated');
   await tx.query("select set_config('request.jwt.claim.sub',$1,true)",[ids[user]]);
   const res=await tx.query<{result:any}>('select public.chomp_group($1,$2,$3::jsonb) result',[action,room,JSON.stringify(payload)]);
   return res.rows[0].result;
  });
 }
 async function prepared(count:number){
  const room=await rpc(0,'create',null,{displayName:'A'});
  for(let i=1;i<count;i++)await rpc(i,'join',null,{code:room.code,displayName:String(i)});
  for(let i=0;i<count;i++)await rpc(i,'preferences',room.id,{preferences});
  return room;
 }
 await t.test('anonymous access and direct table writes are denied',async()=>{
  await assert.rejects(db.transaction(async tx=>{await tx.exec('set local role anon');await tx.query("select public.chomp_group('resume')");}),/permission denied/);
  await assert.rejects(db.transaction(async tx=>{await tx.exec('set local role authenticated');await tx.query('select * from public.chomp_group_rooms');}),/permission denied/);
  await assert.rejects(db.transaction(async tx=>{await tx.exec('set local role authenticated');await tx.query("insert into public.chomp_group_votes values($1,$2,'pasta','free')",[ids[0],ids[0]]);}),/permission denied/);
 });
 await t.test('two people, unique votes, same winner, refresh and rejoin preserve result',async()=>{
  const room=await prepared(2);
  await assert.rejects(rpc(1,'start',room.id),/host/);
  await assert.rejects(rpc(2,'read',room.id),/unavailable/);
  await assert.rejects(rpc(2,'vote',room.id,{restaurantId:'pasta',method:'free',userId:ids[0]}),/unavailable/);
  await rpc(0,'start',room.id);
  await assert.rejects(rpc(2,'join',null,{code:room.code,displayName:'C'}),/started/);
  await assert.rejects(rpc(1,'preferences',room.id,{preferences}),/frozen/);
  await assert.rejects(rpc(0,'vote',room.id,{restaurantId:'forged',method:'free'}),/Choose/);
  await rpc(0,'vote',room.id,{restaurantId:'oishii',method:'free'});
  const changed=await rpc(0,'vote',room.id,{restaurantId:'pasta',method:'free'});
  assert.equal(changed.votes.length,1);
  const final=await rpc(1,'vote',room.id,{restaurantId:'pasta',method:'free',userId:ids[0]});
  assert.equal(final.status,'complete');assert.equal(final.winnerId,'pasta');
  assert.equal(final.votes.find((v:any)=>v.userId===ids[1]).restaurantId,'pasta');
  for(const action of ['read','resume','draw'])assert.equal((await rpc(0,action,room.id)).winnerId,'pasta');
  assert.equal((await rpc(1,'join',null,{code:room.code})).winnerId,'pasta');
  await assert.rejects(rpc(0,'vote',room.id,{restaurantId:'oishii',method:'free'}),/not accepting/);
 });
 await t.test('4-person 2–2 draw is persisted and repeated callers cannot reroll',async()=>{
  const room=await prepared(4);await rpc(0,'start',room.id);
  for(let i=0;i<4;i++)await rpc(i,'vote',room.id,{restaurantId:i<2?'oishii':'taqueria',method:'free'});
  assert.equal((await rpc(1,'read',room.id)).status,'tie');
  const first=await rpc(0,'draw',room.id);
  assert.equal(first.status,'complete');
  assert.equal(first.votes.find((v:any)=>v.userId===first.luckyUserId).restaurantId,first.winnerId);
  for(let i=0;i<4;i++){const next=await rpc(i,'draw',room.id);assert.equal(next.winnerId,first.winnerId);assert.equal(next.luckyUserId,first.luckyUserId);}
 });
 await t.test('readiness, capacity, idempotent join and filtered options enforced on server',async()=>{
  const room=await rpc(0,'create',null,{displayName:'A'});
  await assert.rejects(rpc(0,'start',room.id),/Invite/);
  for(let i=1;i<4;i++)await rpc(i,'join',null,{code:room.code,displayName:'Diner'});
  assert.equal((await rpc(1,'join',null,{code:room.code})).members.length,4);
  assert.equal((await rpc(4,'join',null,{code:room.code,displayName:'E'})).members.length,5);
  await assert.rejects(rpc(0,'start',room.id),/every diner/);
  for(let i=0;i<5;i++)await rpc(i,'preferences',room.id,{preferences:{...preferences,dislikedFoods:['Sesame']}});
  const start=await rpc(0,'start',room.id);assert.deepEqual(start.optionIds,['oishii','pasta']);
  await assert.rejects(rpc(1,'vote',room.id,{restaurantId:'taqueria',method:'free'}),/Choose/);
  const random=await rpc(1,'vote',room.id,{restaurantId:'forged',method:'random'});
  assert.ok(start.optionIds.includes(random.votes[0].restaurantId));
 });
 await t.test('fictional fixtures support the reported vegetarian, fish, seafood and dragon-fruit constraints',async()=>{
  const room=await prepared(2);
  await rpc(0,'preferences',room.id,{preferences:{...preferences,restrictions:['seafood','dragon fruit'],budget:[20,50]}});
  await rpc(1,'preferences',room.id,{preferences:{...preferences,restrictions:['Vegetarian (Strict)','Fish'],budget:[20,50]}});
  const voting=await rpc(0,'start',room.id);
  assert.deepEqual(voting.optionIds,['oishii','pasta','taqueria']);
 });
 await t.test('invalid and no-match preferences do not silently drop restrictions',async()=>{
  const room=await prepared(2);
  await assert.rejects(rpc(1,'preferences',room.id,{preferences:{...preferences,budget:[40,5]}}),/Invalid/);
  await assert.rejects(rpc(1,'preferences',room.id,{preferences:{...preferences,restrictions:[null]}}),/Invalid/);
  await rpc(1,'preferences',room.id,{preferences:{...preferences,restrictions:['unsupported allergy']}});
  await assert.rejects(rpc(0,'start',room.id),/No sample/);
  assert.equal((await rpc(1,'read',room.id)).status,'lobby');
 });
 await t.test('host details persist for all diners; invalid and unauthorized changes are rejected',async()=>{
  const room=await prepared(2), details={name:'Friday Dinner Squad',dateTime:'Nov 6, 7:30 PM',scope:'Downtown (5 mi)'};
  await assert.rejects(rpc(1,'details',room.id,details),/host/);
  await assert.rejects(rpc(0,'details',room.id,{...details,name:' '}),/Enter/);
  await rpc(0,'details',room.id,details);
  const read=await rpc(1,'read',room.id);
  for(const [key,value] of Object.entries(details))assert.equal(read[key],value);
  await rpc(0,'start',room.id);
  await assert.rejects(rpc(0,'details',room.id,details),/frozen/);
 });
 await t.test('five diners can finish a 2–2–1 tie with a stable leading-voter draw',async()=>{
  const room=await prepared(5);await rpc(0,'start',room.id);
  for(let i=0;i<5;i++)await rpc(i,'vote',room.id,{restaurantId:i<2?'oishii':i<4?'taqueria':'pasta',method:'free'});
  const result=await rpc(0,'draw',room.id);
  assert.ok(['oishii','taqueria'].includes(result.winnerId));
  assert.notEqual(result.luckyUserId,ids[4]);
  assert.equal((await rpc(4,'draw',room.id)).winnerId,result.winnerId);
 });
 await db.exec(await readFile(new URL('../supabase/migrations/202611010005_dynamic_demo.sql',import.meta.url),'utf8'));
 await t.test('generated demo round accepts arbitrary recorded restrictions but rejects conflicting budgets',async()=>{
  const room=await prepared(2);
  await rpc(1,'preferences',room.id,{preferences:{...preferences,restrictions:['Custom demo exclusion'],budget:[15,20]}});
  assert.equal((await rpc(0,'start',room.id)).optionIds.length,3);
  const conflict=await prepared(2);
  await rpc(1,'preferences',conflict.id,{preferences:{...preferences,budget:[50,60]}});
  await assert.rejects(rpc(0,'start',conflict.id),/Budgets/);
 });
 await db.close();
});
