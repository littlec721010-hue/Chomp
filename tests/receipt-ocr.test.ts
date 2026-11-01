import { test } from 'node:test';
import assert from 'node:assert/strict';
import { parseReceiptText } from '../src/features/split/ocr-parser';
import { calculateReceipt, validateReceipt, cloneReceipt } from '../src/features/split/model';

const text='CHOMP TEST CAFE\n2 x Noodles 20.00\nTea 3.00\nSubtotal 23.00\nTax 2.04\nTip 4.00\nTotal 29.04';
test('OCR item totals, quantity, tax and tip are counted once and split exactly',()=>{
  const r=parseReceiptText(text);validateReceipt(r);
  assert.equal(r.source,'ocr');assert.equal(r.items.length,2);
  assert.equal(r.items[0].quantity,2);assert.equal(r.items[0].unitPriceCents,1000);
  const totals=calculateReceipt({...r,guestCount:5});
  assert.equal(totals.totalCents,2904);assert.equal(totals.subtotalCents,2300);
  assert.deepEqual(totals.guestSharesCents,[581,581,581,581,580]);
});
test('OCR rejects unreadable/no-price text instead of substituting a sample',()=>{
  assert.throws(()=>parseReceiptText(''));
  assert.throws(()=>parseReceiptText('CAFE\nUnreadable item ??.??'));
});
test('ambiguous quantities, discounts, charges and payment lines are flagged, not invented',()=>{
  const r=parseReceiptText('CAFE\nTea 3.00\n3 x Cake 10.00\nDiscount -1.00\nService charge 2.00\nVISA 14.00\nTotal 14.00');
  assert.equal(r.items.length,1);assert.equal(r.items[0].name,'Tea');
  assert.ok(r.reviewNotes?.some(s=>s.includes('could not be interpreted')));
  assert.notEqual(calculateReceipt(r).totalCents,r.printedTotalCents);
});
test('explicit quantity/unit-price notation is checked against the line total',()=>{
  const r=parseReceiptText('CAFE\n2 Tea @ 3.00 6.00\nTotal 6.00');
  assert.equal(r.items[0].quantity,2);assert.equal(r.items[0].unitPriceCents,300);
});
test('missing printed values and inconsistent subtotal retain review warnings',()=>{
  const r=parseReceiptText('CAFE\nTea 3.00\nSubtotal 10.00');
  assert.ok(r.reviewNotes?.some(s=>s.includes('subtotal')));
  assert.ok(r.reviewNotes?.some(s=>s.includes('Printed total was not recognized')));
  assert.equal(calculateReceipt(r).taxCents,0);
});
test('edited OCR items use corrected values and retain the printed-total comparison',()=>{
  const r=parseReceiptText(text);const copy=cloneReceipt(r);
  copy.items[0].unitPriceCents=1100;copy.items.push({id:'missing',name:'Soup',quantity:1,unitPriceCents:400});
  assert.equal(calculateReceipt(copy).subtotalCents,2900);
  assert.equal(calculateReceipt(copy).totalCents,3504);
  assert.equal(copy.printedTotalCents,2904);assert.equal(r.items[0].unitPriceCents,1000);
});
test('saved receipt validation rejects malformed payloads and unsafe imported amounts',()=>{
  const r=parseReceiptText(text);
  for(const changes of [{items:[]},{date:'2026-02-30'},{guestCount:0},{source:'unknown'},
    {importedTaxCents:-1},{importedTipCents:1.2},{items:[r.items[0],r.items[0]]},
    {items:[{...r.items[0],quantity:101}]},{reviewNotes:[null]}]) {
    assert.throws(()=>validateReceipt({...r,...changes}));
  }
});
