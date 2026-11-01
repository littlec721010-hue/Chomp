import {test} from 'node:test';
import assert from 'node:assert/strict';
import {demoRestaurants} from '../src/features/recommendations/demo';
import {rankRestaurants} from '../src/features/group/model';
import type {User} from '../src/features/contracts';
const a:User={id:'a',name:'A',preferences:{cuisines:['Thai'],restrictions:['Custom exclusion'],dislikedFoods:['tofu'],budget:[10,25],distanceMiles:.1}};
const b:User={id:'b',name:'B',preferences:{cuisines:['Chinese'],restrictions:['Seafood'],budget:[20,30],distanceMiles:2}};
test('fictional menus match shared limits and are identical across member ordering',()=>{
 const rows=demoRestaurants([a,b]);assert.equal(rows.length,3);
 assert.deepEqual(rows,demoRestaurants([b,a]));assert.equal(rankRestaurants(rows,[a,b]).length,3);
 for(const r of rows){assert.deepEqual(r.price,[20,25]);assert.ok(r.distanceMiles<=.1);assert.ok(r.isMock);}
});
test('disjoint budgets yield no invented match',()=>assert.deepEqual(demoRestaurants([a,{...b,preferences:{...b.preferences,budget:[40,50]}}]),[]));
