import {test} from 'node:test';
import assert from 'node:assert/strict';
import {futureDinnerTime} from '../src/features/group/dinner-time';
test('dinner time rejects past, current and invalid dates in local time',()=>{
 const now=new Date(2026,10,1,20,0);
 assert.equal(futureDinnerTime('2026-11-01, 7:30 PM',now),false);
 assert.equal(futureDinnerTime('2026-11-01, 8:00 PM',now),false);
 assert.equal(futureDinnerTime('2026-11-01, 8:01 PM',now),true);
 assert.equal(futureDinnerTime('2026-11-02, 7:30 AM',now),true);
 assert.equal(futureDinnerTime('2026-02-30, 7:30 PM',now),false);
});
