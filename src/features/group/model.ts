import type { DiningRoom, Preferences, Restaurant, User, Vote } from '../contracts';
export function validInviteCode(code: string): boolean { return /^[A-Z]{3}-\d{3}$/.test(code.trim().toUpperCase()); }
export function consensus(members: User[]) {
  const counts = new Map<string,number>();
  if (!members.length) return { cuisines: [] as [string, number][], restrictions: [] as string[], budget: [0, 0] as [number, number], budgetOverlap: false, distanceMiles: 0 };
  members.forEach(m => new Set(m.preferences.cuisines).forEach(c => counts.set(c,(counts.get(c)??0)+1)));
  const budget: [number,number] = [Math.max(...members.map(m=>m.preferences.budget[0])),Math.min(...members.map(m=>m.preferences.budget[1]))];
  return {cuisines:[...counts].sort((a,b)=>b[1]-a[1]),restrictions:[...new Set(members.flatMap(m=>m.preferences.restrictions))],budget,budgetOverlap:budget[0]<=budget[1],distanceMiles:Math.min(...members.map(m=>m.preferences.distanceMiles))};
}
export function rankRestaurants(list: Restaurant[], members: User[]): Restaurant[] {
  if(!members.length) return [];
  const c=consensus(members);
  const disliked=new Set(members.flatMap(m=>m.preferences.dislikedFoods??[]).map(food=>food.trim().toLowerCase()));
  return list.filter(r=>c.restrictions.every(x=>r.supports.includes(x)) && !(r.ingredients??[]).some(food=>disliked.has(food.trim().toLowerCase())) && r.distanceMiles<=c.distanceMiles && c.budgetOverlap && r.price[0]<=c.budget[1] && r.price[1]>=c.budget[0]).sort((a,b)=>{
    const score=(r: Restaurant)=>members.filter(m=>m.preferences.cuisines.includes(r.cuisine)).length*10+r.rating;
    return score(b)-score(a);
  });
}
export function castVote(room: DiningRoom, vote: Vote): DiningRoom {
  if(!room.members.some(m=>m.id===vote.userId)) throw new Error('Only room members may vote');
  return {...room,votes:[...room.votes.filter(v=>v.userId!==vote.userId),vote]};
}
export function pickRandom(list: Restaurant[], random=Math.random): Restaurant {
  if(!list.length) throw new Error('No matching restaurants');
  return list[Math.min(list.length-1,Math.floor(random()*list.length))];
}
export function winningRestaurant(room: DiningRoom,list: Restaurant[]): Restaurant|undefined {
  if(!room.members.length || !room.members.every(m=>room.votes.some(v=>v.userId===m.id)))return undefined;
  const votes=new Map<string,number>();room.votes.forEach(v=>votes.set(v.restaurantId,(votes.get(v.restaurantId)??0)+1));
  return [...list].sort((a,b)=>(votes.get(b.id)??0)-(votes.get(a.id)??0)||b.rating-a.rating)[0];
}
export function submitPreferences(room: DiningRoom,userId: string,preferences: Preferences): DiningRoom {
  return {...room,members:room.members.map(m=>m.id===userId?{...m,preferences}:m)};
}
