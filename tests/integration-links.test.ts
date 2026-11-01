import { test } from 'node:test';
import assert from 'node:assert/strict';
import { getStateFromPath, getPathFromState } from '@react-navigation/core';
import { linkConfig, linkFallback } from '../src/navigation/linking';
import { recentChomps } from '../src/features/history';
import { restaurants } from '../src/features/recommendations/data';
test('page URLs resolve and round-trip to the original nested screens', () => {
  for (const [path, name, tab] of [['/decide','Main','Decide'],['/decide/preferences','DecidePreferences',null],['/recommendations','Recommendations',null],['/split','Main','Split'],['/profile','Main','Profile'],['/split/scan','SplitScan',null],['/split/receipt','SplitReceipt',null],['/sign-in','SignIn',null],['/sign-up','SignUp',null],['/history','History',null]] as const) {
    const state = getStateFromPath(path, linkConfig)!;
    assert.equal(state.routes.at(-1)?.name, name);
    if (tab) assert.equal(state.routes.at(-1)?.state?.routes.at(-1)?.name, tab);
    assert.equal(getPathFromState(state, linkConfig), path);
  }
});
test('restaurant ids and group flags survive links', () => {
  const state = getStateFromPath('/restaurants/oishii?group=true', linkConfig)!;
  assert.deepEqual(state.routes.at(-1)?.params,{id:'oishii',group:true});
  assert.equal((getStateFromPath('/recommendations?group=false',linkConfig)!.routes.at(-1)?.params as {group:boolean}).group,false);
  const edit = getStateFromPath('/decide/preferences/edit?group=true&surprise=false', linkConfig)!;
  assert.equal(edit.routes.at(-1)?.name, 'DecideEditPreferences');
  assert.deepEqual(edit.routes.at(-1)?.params, { group: true, surprise: false });
  const confirmation = getStateFromPath('/decide/preferences?customized=true&group=false', linkConfig)!;
  assert.equal(confirmation.routes.at(-1)?.name, 'DecidePreferences');
  assert.deepEqual(confirmation.routes.at(-1)?.params, { customized: true, group: false });
});
test('links respect signed-out, onboarding and signed-in navigation', () => {
  assert.equal(linkFallback('SplitScan', false, false, false),'Welcome');
  assert.equal(linkFallback('Main', true, false, false),'Preferences');
  assert.equal(linkFallback('SignIn', true, true, false),'Main');
  assert.equal(linkFallback('SignIn', true, true, true),undefined);
  assert.equal(linkFallback('SplitScan', true, true, false),undefined);
});

test('protected deep links, including V3 screens, reject guests and unfinished onboarding', () => {
  const urls = ['/decide', '/profile', '/profile/preferences', '/history', '/recommendations',
    '/restaurants/oishii', '/group', '/group/room', '/group/consensus', '/group/vote/free',
    '/group/tie', '/group/tie/spin', '/group/tie/reveal', '/split', '/split/scan',
    '/split/receipt', '/split/manual', '/split/manual/items'];
  for (const url of urls) {
    const state = getStateFromPath(url, linkConfig)!;
    const name = state.routes.at(-1)!.name;
    assert.notEqual(name, 'NotFound', url);
    assert.equal(linkFallback(name, false, false, false), 'Welcome', `guest: ${url}`);
    assert.equal(linkFallback(name, true, false, false), 'Preferences', `onboarding: ${url}`);
    assert.equal(linkFallback(name, true, true, false), undefined, `account: ${url}`);
  }
});

test('V3 tie and manual-bill URLs retain their distinct screens when refreshed', () => {
  for (const [url, name] of [['/group/tie', 'GroupTie'], ['/group/tie/spin', 'GroupTieSpin'],
    ['/group/tie/reveal', 'GroupTieReveal'], ['/split/manual', 'SplitManualSetup'],
    ['/split/manual/items', 'SplitManualItems']] as const) {
    const state = getStateFromPath(url, linkConfig)!;
    assert.equal(state.routes.at(-1)?.name, name);
    assert.equal(getPathFromState(state, linkConfig), url);
  }
});
test('homepage and history use the same unique list with selected restaurants first', () => {
  const samples=[restaurants[0],restaurants[2],restaurants[1]];
  assert.equal(recentChomps([],samples).length,3);
  assert.deepEqual(recentChomps([restaurants[1]],samples).map(r=>r.id),['taqueria','oishii','pasta']);
  assert.deepEqual(recentChomps([]),[]);
  assert.deepEqual(recentChomps([restaurants[1],restaurants[1]]).map(r=>r.id),['taqueria']);
});
