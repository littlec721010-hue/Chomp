import { test } from 'node:test';
import assert from 'node:assert/strict';
import { samplePreferences } from '../src/types/models';
import { diningPreferences } from '../src/features/preferencesAdapter';
import { rankRestaurants } from '../src/features/group/model';
import { restaurants } from '../src/features/recommendations/data';
import { recommendationPresentation, restaurantResult } from '../src/features/yuhan/presentation';
import { winningRestaurant } from '../src/features/group/model';
import type { DiningRoom } from '../src/features/contracts';

test('unavailable result IDs never resolve to a default restaurant', () => {
  for (const id of [undefined, '', 'deleted-restaurant', '__proto__']) {
    assert.equal(restaurantResult(restaurants, id), undefined);
  }
});

test('each result identity keeps its own name and hero image when switching restaurants', () => {
  for (const restaurant of [restaurants[2], restaurants[0], restaurants[1], restaurants[2]]) {
    const result = restaurantResult(restaurants, restaurant.id)!;
    assert.equal(result.restaurant.id, restaurant.id);
    assert.equal(result.name, restaurant.name);
    assert.equal(result.image, restaurant.resultImage);
  }
});

test('group result presentation follows the winner rather than the current member vote', () => {
  const room: DiningRoom = { id:'result-test', code:'ABC-123', name:'Test', dateTime:'Today', scope:'Nearby', invited:[],
    members: ['a','b','c'].map(id => ({id,name:id,preferences:{cuisines:[],restrictions:[],budget:[0,100],distanceMiles:5}})),
    votes: [{userId:'a',restaurantId:'oishii',method:'free'},{userId:'b',restaurantId:'pasta',method:'free'},{userId:'c',restaurantId:'pasta',method:'free'}] };
  const winner = winningRestaurant(room, restaurants)!;
  const result = restaurantResult(restaurants, winner.id)!;
  assert.equal(result.name, restaurants[2].name);
  assert.equal(result.image, restaurants[2].resultImage);
  assert.notEqual(result.restaurant.id, room.votes[0].restaurantId);
});

test('generated mock restaurants match the Figma profile including shellfish restrictions', () => {
  const preferences=diningPreferences(samplePreferences);
  assert.ok(preferences.restrictions.includes('Shellfish'));
  const matches=rankRestaurants(restaurants,[{id:'sarah',name:'Sarah',preferences}]);
  assert.equal(matches.length,3);
  assert.ok(matches.every(r=>r.isMock && r.supports.includes('Shellfish') && r.price[1]<=samplePreferences.budgetMax));
  const screen=recommendationPresentation(matches,restaurants);
  assert.deepEqual(screen.cards.map(r=>r.cuisine),['Japanese','Korean','Italian']);
  assert.equal(screen.previewOnly,false);
});

test('disliked ingredients exclude a mock restaurant and unsupported allergies retain preview-only state', () => {
  const base={id:'sarah',name:'Sarah',preferences:diningPreferences(samplePreferences)};
  const list=rankRestaurants(restaurants,[{...base,preferences:{...base.preferences,dislikedFoods:['BASIL']}}]);
  assert.ok(!list.some(r=>r.id==='pasta'));
  const noMatches=rankRestaurants(restaurants,[{...base,preferences:{...base.preferences,restrictions:['Unknown allergy']}}]);
  const preview=recommendationPresentation(noMatches,restaurants);
  assert.equal(preview.cards.length,3);
  assert.equal(preview.previewOnly,true);
});

test('matching options retain their filtered order and allow selection', () => {
  const screen=recommendationPresentation([restaurants[2],restaurants[0]],restaurants);
  assert.deepEqual(screen.cards.map(r=>r.id),['pasta','oishii']);
  assert.equal(screen.previewOnly,false);
});

test('the user’s one-mile radius still offers three compatible mock options', () => {
  const preferences=diningPreferences({...samplePreferences,travelMiles:1});
  const matches=rankRestaurants(restaurants,[{id:'sarah',name:'Sarah',preferences}]);
  assert.equal(matches.length,3);
  assert.ok(matches.every(r=>r.distanceMiles<=1 && r.supports.includes('Shellfish')));
});
