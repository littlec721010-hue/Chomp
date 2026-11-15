import {test} from 'node:test';
import assert from 'node:assert/strict';
import {emptyReceipt} from '../src/features/split/model';
import {readDraftSession,writeDraftSession,type DraftStorage,type DraftSession} from '../src/features/split/draft-session';
import {canReuseAccount} from '../src/lib/account-session';

function storage(){const values=new Map<string,string>();return {values,getItem:(key:string)=>values.get(key)??null,setItem:(key:string,value:string)=>{values.set(key,value)}}}
const snapshot=():DraftSession=>({draft:{...emptyReceipt(),source:'ocr',date:'',guestCount:null},manualEntry:{name:'Unfinished item',price:'1.',quantity:2,editId:null},forms:{'setup:example:tax':'8.','scroll:example:receipt':420,'receipt:example:editor':{kind:'rates'}}});
test('unfinished bill, raw fields and scroll position survive an account-scoped session round trip',()=>{
  const cache=storage(),draft=snapshot();
  assert.equal(writeDraftSession(cache,'account-a',draft,1000),true);
  assert.deepEqual(readDraftSession(cache,'account-a',2000),draft);
  assert.equal(readDraftSession(cache,'account-b',2000),null);
  assert.equal(readDraftSession(cache,undefined,2000),null);
});
test('expired, mismatched-owner, corrupt and invalid bill sessions are not restored',()=>{
  const cache=storage(),draft=snapshot();writeDraftSession(cache,'account-a',draft,1000);
  assert.equal(readDraftSession(cache,'account-a',1000+24*60*60*1000+1),null);
  const [key,raw]=[...cache.values.entries()][0];
  cache.setItem(key,JSON.stringify({...JSON.parse(raw),owner:'account-b'}));assert.equal(readDraftSession(cache,'account-a',2000),null);
  cache.setItem(key,'{');assert.equal(readDraftSession(cache,'account-a',2000),null);
  writeDraftSession(cache,'account-a',{...draft,draft:{...draft.draft,taxRate:-1}},1000);assert.equal(readDraftSession(cache,'account-a',2000),null);
});
test('unavailable or full browser storage does not throw or change the editing state',()=>{
  const blocked:DraftStorage={getItem(){throw new Error('blocked')},setItem(){throw new Error('full')}};
  const draft=snapshot(),before=JSON.stringify(draft);
  assert.equal(readDraftSession(blocked,'account-a'),null);
  assert.equal(writeDraftSession(blocked,'account-a',draft),false);
  assert.equal(JSON.stringify(draft),before);
});
test('focus and token events reuse only an already-loaded identical account',()=>{
  assert.equal(canReuseAccount('SIGNED_IN','a','a'),true);
  assert.equal(canReuseAccount('TOKEN_REFRESHED','a','a'),true);
  for(const event of ['SIGNED_IN','TOKEN_REFRESHED']){
    assert.equal(canReuseAccount(event,'b','a'),false);
    assert.equal(canReuseAccount(event,'a',null),false);
    assert.equal(canReuseAccount(event,undefined,'a'),false);
  }
  assert.equal(canReuseAccount('SIGNED_OUT',undefined,'a'),false);
  assert.equal(canReuseAccount('USER_UPDATED','a','a'),false);
});
