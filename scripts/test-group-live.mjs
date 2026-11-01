/** Run only with dedicated test accounts. Creates identifiable test rooms; never deletes production data. */
import assert from 'node:assert/strict';
import { createClient } from '@supabase/supabase-js';
const url=process.env.EXPO_PUBLIC_SUPABASE_URL,key=process.env.EXPO_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
if(!url||!key)throw new Error('Load the local Supabase URL and publishable key.');
const letters=['A','B',...(['C','D'].every(x=>process.env[`CHOMP_TEST_${x}_EMAIL`]&&process.env[`CHOMP_TEST_${x}_PASSWORD`])?['C','D']:[])];
for(const letter of letters)if(!process.env[`CHOMP_TEST_${letter}_EMAIL`]||!process.env[`CHOMP_TEST_${letter}_PASSWORD`])throw new Error(`Missing dedicated test account ${letter}. Set CHOMP_TEST_${letter}_EMAIL and CHOMP_TEST_${letter}_PASSWORD locally.`);
function client(){return createClient(url,key,{auth:{persistSession:false,autoRefreshToken:false,detectSessionInUrl:false}});}
async function login(letter){const c=client();const {error}=await c.auth.signInWithPassword({email:process.env[`CHOMP_TEST_${letter}_EMAIL`],password:process.env[`CHOMP_TEST_${letter}_PASSWORD`]});if(error)throw new Error(`Test login ${letter} failed: ${error.message}`);return c;}
const clients=await Promise.all(letters.map(login));
async function rpc(c,action,room_id=null,payload={}){const {data,error}=await c.rpc('chomp_group',{action,room_id,payload}).abortSignal(AbortSignal.timeout(15000));if(error)throw new Error(error.message);return data;}
const prefs={cuisines:[],restrictions:[],dislikedFoods:[],budget:[15,30],distanceMiles:5};
async function setup(count,label){const room=await rpc(clients[0],'create',null,{name:`Group sync test ${label}`,displayName:'Test A'});for(let i=1;i<count;i++)await rpc(clients[i],'join',null,{code:room.code,displayName:`Test ${letters[i]}`});await Promise.all(clients.slice(0,count).map(c=>rpc(c,'preferences',room.id,{preferences:prefs})));await rpc(clients[0],'start',room.id);return room;}
try{
 const room=await setup(2,'no tie');
 await assert.rejects(rpc(client(),'read',room.id));
 await Promise.all(clients.slice(0,2).map(c=>rpc(c,'vote',room.id,{restaurantId:'oishii',method:'free'})));
 const results=await Promise.all(clients.slice(0,2).map(c=>rpc(c,'read',room.id)));
 for(const r of results){assert.equal(r.status,'complete');assert.equal(r.winnerId,'oishii');assert.equal(r.votes.length,2);}
 await assert.rejects(rpc(clients[0],'vote',room.id,{restaurantId:'pasta',method:'free'}));
 const fresh=await login('B');assert.equal((await rpc(fresh,'resume')).winnerId,'oishii');await fresh.auth.signOut({scope:'local'});
 console.log('PASS: two independent authenticated clients, concurrent votes, identical final result, fresh-session restore, anonymous denial.');
 if(clients.length===4){
  const tie=await setup(4,'2-2 tie');
  await Promise.all(clients.map((c,i)=>rpc(c,'vote',tie.id,{restaurantId:i<2?'oishii':'taqueria',method:'free'})));
  assert.equal((await rpc(clients[0],'read',tie.id)).status,'tie');
  const draws=await Promise.all(clients.map(c=>rpc(c,'draw',tie.id)));
  for(const d of draws){assert.equal(d.winnerId,draws[0].winnerId);assert.equal(d.luckyUserId,draws[0].luckyUserId);assert.equal(d.votes.find(v=>v.userId===d.luckyUserId).restaurantId,d.winnerId);}
  const restored=await rpc(clients[1],'read',tie.id);assert.equal(restored.luckyUserId,draws[0].luckyUserId);
  console.log('PASS: four clients, concurrent 2-2 votes and concurrent Lucky Diner requests persist the same draw.');
 }else console.log('NOT RUN: four-account tie check (set C and D test credentials to enable).');
}finally{await Promise.all(clients.map(c=>c.auth.signOut({scope:'local'})));}
