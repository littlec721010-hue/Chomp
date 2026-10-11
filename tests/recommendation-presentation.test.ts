import { test } from 'node:test';
import assert from 'node:assert/strict';
import { samplePreferences } from '../src/types/models';
import { diningPreferences } from '../src/features/preferencesAdapter';
import { rankRestaurants } from '../src/features/group/model';
import { restaurants } from '../src/features/recommendations/data';
import { recommendationPresentation } from '../src/features/yuhan/presentation';

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
