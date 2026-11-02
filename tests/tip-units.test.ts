import {test} from 'node:test';
import assert from 'node:assert/strict';
import {emptyReceipt,calculateReceipt,validateReceipt,parsePrice,cloneReceipt,type SplitReceipt} from '../src/features/split/model';

test('fixed USD tip remains cent-exact when items change and survives saved payload round trip',()=>{
  const bill:SplitReceipt={...emptyReceipt(),restaurantName:'Test bill',guestCount:2,taxRate:0,tipRate:0,tipMode:'fixed',importedTipCents:parsePrice('2')!,items:[{id:'one',name:'Test item',quantity:1,unitPriceCents:1001}]};
  const original=calculateReceipt(bill);assert.equal(original.tipCents,200);assert.equal(original.totalCents,1201);assert.deepEqual(original.guestSharesCents,[601,600]);
  const edited=cloneReceipt(bill);edited.items[0].quantity=2;
  assert.equal(calculateReceipt(edited).tipCents,200);assert.equal(calculateReceipt(edited).totalCents,2202);
  const restored=JSON.parse(JSON.stringify(edited));validateReceipt(restored);assert.equal(calculateReceipt(restored).tipCents,200);
});
test('percentage presets recalculate independently and invalid fixed tips cannot be saved',()=>{
  const bill:SplitReceipt={...emptyReceipt(),restaurantName:'Test bill',guestCount:2,taxRate:0,tipRate:18,tipMode:'percent',items:[{id:'one',name:'Test item',quantity:1,unitPriceCents:1000}]};
  assert.equal(calculateReceipt(bill).tipCents,180);
  assert.equal(calculateReceipt({...bill,items:[{...bill.items[0],quantity:2}]}).tipCents,360);
  assert.throws(()=>validateReceipt({...bill,tipMode:'fixed'}),/fixed tip/);
  assert.throws(()=>validateReceipt({...bill,tipMode:'fixed',importedTipCents:-1}));
  assert.equal(parsePrice('2.001'),null);
});
