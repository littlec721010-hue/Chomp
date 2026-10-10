import { describe,expect,it,vi } from 'vitest';
vi.mock('../assets',()=>({asset:(name:string)=>name}));
import { castVote,consensus,pickRandom,rankRestaurants,validInviteCode,winningRestaurant } from './model';
import { demoMembers,restaurants } from '../recommendations/data';
import type { DiningRoom } from '../contracts';
const room:DiningRoom={id:'test',code:'EAT-404',name:'Squad',dateTime:'Tonight',scope:'Downtown',members:demoMembers,invited:[],votes:[]};
describe('group decisions',()=>{
  it('normalizes codes and rejects malformed input',()=>{expect(validInviteCode(' eat-404 ')).toBe(true);expect(validInviteCode('EAT404')).toBe(false);expect(validInviteCode('EAT-40!')).toBe(false);});
  it('intersects budget and uses the most restrictive distance',()=>{expect(consensus(demoMembers)).toMatchObject({budget:[15,30],distanceMiles:3.5,budgetOverlap:true});});
  it('excludes unsafe restaurants before ranking cuisines',()=>{const unsafe={...restaurants[0],id:'unsafe',supports:[]};expect(rankRestaurants([unsafe,...restaurants],demoMembers).map(r=>r.id)).toEqual(['oishii','pasta','taqueria']);});
  it('returns no choices when budgets do not overlap',()=>{const members=[demoMembers[0],{...demoMembers[1],preferences:{...demoMembers[1].preferences,budget:[60,90] as [number,number]}}];expect(rankRestaurants(restaurants,members)).toEqual([]);});
  it('changing a vote replaces it instead of double counting',()=>{const first=castVote(room,{userId:'sarah',restaurantId:'oishii',method:'free'});const second=castVote(first,{userId:'sarah',restaurantId:'pasta',method:'random'});expect(second.votes).toHaveLength(1);expect(second.votes[0].restaurantId).toBe('pasta');expect(room.votes).toHaveLength(0);});
  it('only exposes a winner after every member votes, with stable tie breaks',()=>{expect(winningRestaurant(room,restaurants)).toBeUndefined();const complete={...room,votes:demoMembers.map((m,i)=>({userId:m.id,restaurantId:i<2?'oishii':'pasta',method:'free' as const}))};expect(winningRestaurant(complete,restaurants)?.id).toBe('oishii');});
  it('random selection can reach all three choices and rejects an empty list',()=>{expect([0,.4,.9].map(x=>pickRandom(restaurants,()=>x).id)).toEqual(['oishii','taqueria','pasta']);expect(()=>pickRandom([])).toThrow();});
});
