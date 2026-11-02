import type { Restaurant, User } from '../contracts';
import { restaurants } from './data';
/** Deterministic fictional menus; never real restaurant or allergy claims. */
export function demoRestaurants(members:User[]):Restaurant[]{
 if(!members.length)return restaurants;
 const min=Math.max(...members.map(m=>m.preferences.budget[0])),max=Math.min(...members.map(m=>m.preferences.budget[1]));
 if(min>max)return [];
 const restrictions=[...new Set(members.flatMap(m=>m.preferences.restrictions))].sort();
 const cuisines=[...new Set(members.flatMap(m=>m.preferences.cuisines))].sort((a,b)=>members.filter(m=>m.preferences.cuisines.includes(b)).length-members.filter(m=>m.preferences.cuisines.includes(a)).length||a.localeCompare(b));
 const distance=Math.min(...members.map(m=>m.preferences.distanceMiles));
 return restaurants.map((r,i)=>({...r,name:`Chomp ${cuisines[i%cuisines.length]||'Fusion'} Demo Kitchen ${i+1}`,cuisine:cuisines[i%cuisines.length]||'Fusion',category:'Custom fictional menu',price:[min,max],distanceMiles:Number.isFinite(distance)?Math.round(distance*(i+1)/4*100)/100:(i+1)/4,supports:restrictions,ingredients:[],perks:['Generated fictional menu','Customized to recorded preferences','Illustrative photo only'],menu:[{name:'Custom demo meal (ingredients unspecified)',price:Math.round((min+max)/2*100)/100}]}));
}
