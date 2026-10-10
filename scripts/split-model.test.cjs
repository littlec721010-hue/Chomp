const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const ts=require('typescript');
const Module=require('node:module');
const source=fs.readFileSync('src/features/split/model.ts','utf8');
const compiled=ts.transpileModule(source,{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText;
const modelModule=new Module('split-model');modelModule._compile(compiled,'split-model.cjs');
const {calculateReceipt,cloneReceipt,sampleReceipt,taqueriaReceipt,parsePrice}=modelModule.exports;
test('original receipt keeps printed amounts and all guest shares balance',()=>{
  const totals=calculateReceipt(sampleReceipt);
  assert.equal(totals.subtotalCents,10050);assert.equal(totals.taxCents,905);assert.equal(totals.tipCents,1800);assert.equal(totals.totalCents,12755);
  assert.deepEqual(totals.guestSharesCents,[3189,3189,3189,3188]);assert.equal(totals.guestSharesCents.reduce((a,b)=>a+b,0),totals.totalCents);
});
test('editing prices recomputes percentages and does not mutate original sample',()=>{
  const edited=cloneReceipt(sampleReceipt);edited.items[0].quantity=1;edited.importedTipCents=undefined;
  const totals=calculateReceipt(edited);assert.equal(totals.subtotalCents,9500);assert.equal(totals.taxCents,855);assert.equal(totals.tipCents,1710);assert.equal(totals.totalCents,12065);assert.equal(sampleReceipt.items[0].quantity,2);
});
test('small totals and larger guest counts allocate every cent once',()=>{
  const receipt={...cloneReceipt(sampleReceipt),items:[{id:'one',name:'One item',quantity:1,unitPriceCents:2}],taxRate:0,tipRate:0,importedTipCents:undefined,guestCount:4};
  assert.deepEqual(calculateReceipt(receipt).guestSharesCents,[1,1,0,0]);
});
test('invalid guests, quantities and rates cannot produce invalid balances',()=>{
  for(const guestCount of [0,-1,1.5,101])assert.throws(()=>calculateReceipt({...sampleReceipt,guestCount}));
  assert.throws(()=>calculateReceipt({...sampleReceipt,taxRate:NaN}));assert.throws(()=>calculateReceipt({...sampleReceipt,tipRate:101}));
  assert.throws(()=>calculateReceipt({...sampleReceipt,items:[{id:'bad',name:'Bad',quantity:0,unitPriceCents:100}]}));
});
test('currency input rejects negative, scientific and fractional-cent prices',()=>{
  assert.equal(parsePrice('5.50'),550);assert.equal(parsePrice('0'),0);assert.equal(parsePrice('0.01'),1);
  for(const value of ['', '-1', 'NaN', '1e3', '2.555', '.5'])assert.equal(parsePrice(value),null);
});
test('second history receipt has its own total',()=>{assert.equal(calculateReceipt(taqueriaReceipt).totalCents,4820)});
