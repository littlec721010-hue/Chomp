import { test } from 'node:test';
import assert from 'node:assert/strict';
import { snapshotRoom, newerRoom, wirePreferences, type RoomSnapshot } from '../src/features/group/remote';
import { winningRestaurant } from '../src/features/group/model';
import { restaurants } from '../src/features/recommendations/data';
const p={cuisines:[],restrictions:[],budget:[15,30] as [number,number],distanceMiles:Infinity};
const base:RoomSnapshot={id:'room',code:'ABC-123',name:'Dinner',hostId:'a',status:'voting',optionIds:['oishii','taqueria'],winnerId:null,luckyUserId:null,revision:1,members:[{id:'a',name:'A',preferences:p,ready:true},{id:'b',name:'B',preferences:p,ready:true}],votes:[]};
test('live result is never computed optimistically from client votes',()=>{
 const room=snapshotRoom({...base,votes:[{userId:'a',restaurantId:'oishii',method:'free'},{userId:'b',restaurantId:'oishii',method:'free'}]});
 assert.equal(winningRestaurant(room,restaurants),undefined);
 assert.equal(winningRestaurant({...room,status:'complete',winnerId:'taqueria'},restaurants)?.id,'taqueria');
});
test('persisted draw maps back to the existing V3 tie screens',()=>{
 const room=snapshotRoom({...base,status:'complete',revision:4,luckyUserId:'a',winnerId:'oishii',votes:[{userId:'a',restaurantId:'oishii',method:'free'},{userId:'b',restaurantId:'taqueria',method:'free'}]});
 assert.equal(room.luckyDiner?.userId,'a');assert.equal(winningRestaurant(room,restaurants)?.id,'oishii');
 assert.equal(newerRoom(room,snapshotRoom(base)),room);
 assert.equal(newerRoom(room,snapshotRoom({...base,id:'new-room'})).id,'new-room');
});
test('unlimited travel is represented as a valid finite JSON preference',()=>{
 const wire=JSON.parse(JSON.stringify(wirePreferences(p)));
 assert.equal(wire.distanceMiles,100000);assert.deepEqual(wire.dislikedFoods,[]);assert.equal(p.distanceMiles,Infinity);
});
