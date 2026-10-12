import { test } from 'node:test';
import assert from 'node:assert/strict';
import { diningPreferences } from '../src/features/preferencesAdapter';
import { emptyPreferences, samplePreferences } from '../src/types/models';
import { castVote, consensus, pickRandom, rankRestaurants, validInviteCode, winningRestaurant, submitPreferences } from '../src/features/group/model';
import { restaurants, demoMembers } from '../src/features/recommendations/data';
import type { DiningRoom } from '../src/features/contracts';
const room: DiningRoom = { id:'test', code:'EAT-404', name:'Squad', dateTime:'Tonight', scope:'Downtown', members:demoMembers, invited:[], votes:[] };
test('preference bridge normalizes known restrictions and preserves unsupported allergens', () => {
  const before = structuredClone(samplePreferences), converted = diningPreferences(samplePreferences);
  assert.deepEqual(converted.restrictions, ['Gluten-Free', 'Peanut Allergy', 'Shellfish']);
  assert.deepEqual(converted.dislikedFoods, samplePreferences.dislikedFoods);
  assert.equal(rankRestaurants(restaurants, [{...demoMembers[0], preferences: converted}]).length, 3);
  const unsupported=diningPreferences({...samplePreferences,allergens:['Sesame']});
  assert.ok(unsupported.restrictions.includes('Sesame'));
  assert.equal(rankRestaurants(restaurants,[{...demoMembers[0],preferences:unsupported}]).length,0);
  converted.cuisines.push('Thai'); assert.deepEqual(samplePreferences, before);
  assert.equal(diningPreferences({...emptyPreferences,travelMiles:null}).distanceMiles, Infinity);
});
test('consensus intersects budgets and radii, and empty group produces no result', () => {
  assert.deepEqual(consensus(demoMembers).budget, [15,30]); assert.equal(consensus(demoMembers).distanceMiles,3.5);
  assert.equal(consensus([]).budgetOverlap,false); assert.equal(winningRestaurant({...room,members:[]},restaurants),undefined);
  const members=[demoMembers[0],{...demoMembers[1],preferences:{...demoMembers[1].preferences,budget:[60,90] as [number,number]}}];
  assert.deepEqual(rankRestaurants(restaurants,members),[]);
});
test('restriction filtering runs before cuisine ranking', () => {
  const unsupported={...restaurants[0],id:'unsupported',supports:[]};
  assert.deepEqual(rankRestaurants([unsupported,...restaurants],demoMembers).map(r=>r.id),['oishii','pasta','taqueria']);
});
test('vote replacement, member validation and complete group result', () => {
  const first=castVote(room,{userId:'sarah',restaurantId:'oishii',method:'free'});
  const second=castVote(first,{userId:'sarah',restaurantId:'pasta',method:'random'});
  assert.equal(second.votes.length,1); assert.equal(second.votes[0].restaurantId,'pasta'); assert.equal(room.votes.length,0);
  assert.throws(()=>castVote(room,{userId:'outsider',restaurantId:'oishii',method:'free'}));
  assert.equal(winningRestaurant(second,restaurants),undefined);
  const complete={...room,votes:demoMembers.map((m,i)=>({userId:m.id,restaurantId:i<2?'oishii':'pasta',method:'free' as const}))};
  assert.equal(winningRestaurant(complete,restaurants)?.id,'oishii');
});
test('updating occasion preferences leaves other members and source preferences intact', () => {
  const before=structuredClone(room); const next=submitPreferences(room,'sarah',diningPreferences(emptyPreferences));
  assert.deepEqual(room,before); assert.deepEqual(next.members[1],room.members[1]); assert.deepEqual(next.members[0].preferences.cuisines,[]);
});
test('sample codes and random selection boundaries', () => {
  assert.equal(validInviteCode(' eat-404 '),true); assert.equal(validInviteCode('EAT404'),false);
  assert.deepEqual([0,.4,.9].map(x=>pickRandom(restaurants,()=>x).id),['oishii','taqueria','pasta']); assert.throws(()=>pickRandom([]));
});
