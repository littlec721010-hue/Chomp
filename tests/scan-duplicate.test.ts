import {test} from 'node:test';
import assert from 'node:assert/strict';
import {emptyReceipt} from '../src/features/split/model';
import {sameScan,scanHashes} from '../src/features/split/scan-duplicate';
test('repeat OCR images or complete normalized text match despite manual edits',()=>{
  const first={...emptyReceipt(),source:'ocr' as const,scanImageHash:'a'.repeat(64),scanTextHash:'b'.repeat(64)};
  assert.equal(sameScan(first,{...first,id:'new',restaurantName:'Edited'}),true);
  assert.equal(sameScan(first,{...first,scanImageHash:'c'.repeat(64)}),true);
  assert.equal(sameScan(first,{...first,scanImageHash:'c'.repeat(64),scanTextHash:'d'.repeat(64)}),false);
});
test('matching merchant metadata alone, missing fingerprints and manual bills do not match',()=>{
  const bill=emptyReceipt();
  assert.equal(sameScan({...bill,source:'ocr'},{...bill,source:'ocr'}),false);
  assert.equal(sameScan({...bill,scanImageHash:'a'.repeat(64)},{...bill,source:'ocr',scanImageHash:'a'.repeat(64)}),false);
  assert.deepEqual(scanHashes({...bill,scanImageHash:'invalid,filter'}),[]);
});
