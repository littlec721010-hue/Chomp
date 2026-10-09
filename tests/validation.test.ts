import test from 'node:test';
import assert from 'node:assert/strict';
import { addUnique, validateAuth, validateBudget, validatePreferences } from '../src/lib/validation';
import { emptyPreferences, samplePreferences } from '../src/types/models';
test('custom tags trim whitespace, prevent case-insensitive duplicates and bound input', () => {
  assert.deepEqual(addUnique(['Italian'], ' italian '), ['Italian']);
  assert.deepEqual(addUnique([], '  Tree   nuts '), ['Tree nuts']);
  assert.deepEqual(addUnique([], ' '.repeat(3)), []);
  assert.deepEqual(addUnique([], 'x'.repeat(61)), []);
});
test('budget accepts zero and cents but rejects blank, negative, nonfinite and reversed ranges', () => {
  assert.equal(validateBudget('0', '30.50'), null);
  for (const values of [['', '30'], ['-1', '30'], ['NaN', '30'], ['30', '15'], ['5', 'Infinity'], ['1', '100001'], ['1e2', '200'], ['1.999', '2']]) assert.ok(validateBudget(values[0], values[1]));
});
test('signup requires identity, valid email, password confirmation and consent', () => {
  const signup = { name: 'Shan', confirm: 'test-password', accepted: true };
  assert.equal(validateAuth('shan@example.com', 'test-password', signup), null);
  assert.ok(validateAuth('shan', 'test-password', signup));
  assert.ok(validateAuth('shan@example.com', 'test-password', { ...signup, accepted: false }));
  assert.ok(validateAuth('shan@example.com', 'test-password', { ...signup, confirm: 'different' }));
  assert.ok(validateAuth('shan@example.com', 'test-password', { ...signup, name: ' ' }));
});
test('new accounts never inherit sample allergies; stored preferences are validated', () => {
  assert.deepEqual(emptyPreferences.allergens, []);
  assert.doesNotThrow(() => validatePreferences(samplePreferences));
  assert.throws(() => validatePreferences({ ...emptyPreferences, travelMiles: 8 }));
  assert.throws(() => validatePreferences({ ...emptyPreferences, allergens: Array(51).fill('Peanuts') }));
});
