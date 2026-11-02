import { test } from 'node:test';
import assert from 'node:assert/strict';
import type { DiningRoom } from '../src/features/contracts';
import { castVote, groupOutcome, pickLuckyDiner, winningRestaurant } from '../src/features/group/model';
import { restaurants, demoMembers } from '../src/features/recommendations/data';
import { calculateReceipt, emptyReceipt, parseRate, receiptItem, validReceiptDate } from '../src/features/split/model';

function tiedRoom():DiningRoom {return {id:'v3-tie',name:'Dinner',code:'ABC-123',dateTime:'Today',scope:'Nearby',members:demoMembers,invited:[],votes:demoMembers.map((m,i)=>({userId:m.id,restaurantId:i<2?'oishii':'taqueria',method:'free'}))};}
test('a completed tie has no rating-based winner before diner selection',()=>{
  const room=tiedRoom();assert.equal(groupOutcome(room,restaurants).status,'tie');assert.equal(winningRestaurant(room,restaurants),undefined);
  assert.equal(winningRestaurant({...room,votes:room.votes.slice(0,3)},restaurants),undefined);
});
test('every nominated diner can be selected and their original vote chooses the restaurant',()=>{
  const room=tiedRoom();
  for(let i=0;i<room.members.length;i++){
    const resolved=pickLuckyDiner(room,restaurants,()=>i/room.members.length);
    assert.equal(resolved.luckyDiner?.userId,room.members[i].id);
    assert.equal(winningRestaurant(resolved,restaurants)?.id,room.votes[i].restaurantId);
  }
  assert.equal(room.luckyDiner,undefined);
});
test('re-entering a resolved round does not redraw; finalized votes cannot silently reroll',()=>{
  const resolved=pickLuckyDiner(tiedRoom(),restaurants,()=>.9);
  assert.equal(pickLuckyDiner(resolved,restaurants,()=>{throw Error('must not draw again');}),resolved);
  assert.throws(()=>castVote(resolved,{userId:resolved.members[0].id,restaurantId:'pasta',method:'free'}),/round is complete/);
});
test('changed membership or stale diner records cannot display an old final result',()=>{
  const resolved=pickLuckyDiner(tiedRoom(),restaurants,()=>.9);
  const added={...resolved,members:[...resolved.members,{...demoMembers[0],id:'new'}]};
  assert.equal(winningRestaurant(added,restaurants),undefined);
  assert.throws(()=>pickLuckyDiner(added,restaurants),/Complete all votes/);
  assert.equal(winningRestaurant({...resolved,luckyDiner:{...resolved.luckyDiner!,restaurantId:'pasta'}},restaurants),undefined);
});
test('unknown choices and ambiguous mixed-count tie rules do not invent outcomes',()=>{
  const room=tiedRoom();
  assert.equal(winningRestaurant({...room,votes:room.votes.map((v,i)=>i===0?{...v,restaurantId:'gone'}:v)},restaurants),undefined);
  const mixed={...room,members:[...room.members,{...demoMembers[0],id:'fifth'}],votes:[...room.votes,{userId:'fifth',restaurantId:'pasta',method:'free' as const}]};
  assert.equal(groupOutcome(mixed,restaurants).status,'unsupported');assert.throws(()=>pickLuckyDiner(mixed,restaurants),/diner-pool rule/);
});
test('a unique leader wins without randomization and duplicate member votes cannot finish a round',()=>{
  const room=tiedRoom();const unique={...room,votes:room.votes.map((v,i)=>({...v,restaurantId:i<3?'pasta':'oishii'}))};
  assert.equal(winningRestaurant(unique,restaurants)?.id,'pasta');
  assert.equal(groupOutcome({...room,votes:[...room.votes,room.votes[0]]},restaurants).status,'pending');
});
test('manual bill validates item/date/rate boundaries, including V3 three-decimal tax',()=>{
  assert.equal(parseRate('8.875'),8.875);assert.equal(parseRate('100'),100);
  for(const input of ['-1','101','8.8751','1e2',''])assert.equal(parseRate(input),null);
  assert.equal(validReceiptDate('2028-02-29'),true);assert.equal(validReceiptDate('2026-02-29'),false);
  for(const [name,price,qty] of [['','1',1],['Tea','2.555',1],['Tea','2',0],['Tea','2',1.5]] as const)assert.throws(()=>receiptItem(name,price,qty,'test'));
});
test('independently created and edited manual bills preserve exact cents and allocate every remainder',()=>{
  const draft={...emptyReceipt(),restaurantName:'Manual test',guestCount:3,taxRate:8.875,tipRate:18,items:[receiptItem('Soup','6.00',1,'soup'),receiptItem('Tea','2.00',2,'tea')]};
  const totals=calculateReceipt(draft);assert.equal(totals.subtotalCents,1000);assert.equal(totals.taxCents,89);assert.equal(totals.tipCents,180);assert.equal(totals.totalCents,1269);assert.deepEqual(totals.guestSharesCents,[423,423,423]);
  const edited={...draft,taxRate:9};const updated=calculateReceipt(edited);assert.deepEqual(updated.guestSharesCents,[424,423,423]);assert.equal(draft.taxRate,8.875);
});
