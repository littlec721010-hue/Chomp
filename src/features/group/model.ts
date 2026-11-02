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
  if(room.luckyDiner?.voteSignature===voteSignature(room))throw new Error('This round is complete. Create a new room to vote again.');
  return {...room,luckyDiner:undefined,votes:[...room.votes.filter(v=>v.userId!==vote.userId),vote]};
}
export function pickRandom(list: Restaurant[], random=Math.random): Restaurant {
  if(!list.length) throw new Error('No matching restaurants');
  return list[Math.min(list.length-1,Math.floor(random()*list.length))];
}
export function winningRestaurant(room: DiningRoom,list: Restaurant[]): Restaurant|undefined {
  if(room.remote)return room.status==='complete'?list.find(r=>r.id===room.winnerId):undefined;
  const outcome=groupOutcome(room,list);
  if(outcome.status==='winner')return outcome.leaders[0];
  if(outcome.status==='tie'&&room.luckyDiner?.voteSignature===voteSignature(room)){
    const vote=room.votes.find(v=>v.userId===room.luckyDiner!.userId);
    if(vote?.restaurantId===room.luckyDiner.restaurantId&&outcome.nominees.some(m=>m.id===vote.userId))return list.find(r=>r.id===vote.restaurantId);
  }
  return undefined;
}

export function voteSignature(room:DiningRoom):string {
  return JSON.stringify([room.id,[...room.members.map(m=>m.id)].sort(),room.votes.map(v=>[v.userId,v.restaurantId]).sort((a,b)=>a[0].localeCompare(b[0]))]);
}
export function groupOutcome(room:DiningRoom,list:Restaurant[]) {
  const counts=new Map(list.map(r=>[r.id,0]));
  const ids=new Set(room.members.map(m=>m.id));
  const votes=room.votes.filter(v=>ids.has(v.userId));
  const valid=room.members.length>0&&ids.size===room.members.length&&votes.length===room.members.length&&room.members.every(m=>votes.filter(v=>v.userId===m.id).length===1)&&votes.every(v=>counts.has(v.restaurantId));
  if(!valid)return {status:'pending' as const,leaders:[] as Restaurant[],nominees:[] as User[],counts};
  for(const vote of votes)counts.set(vote.restaurantId,counts.get(vote.restaurantId)!+1);
  const highest=Math.max(...counts.values());
  const leaders=list.filter(r=>counts.get(r.id)===highest&&highest>0);
  if(leaders.length===1)return {status:'winner' as const,leaders,nominees:[] as User[],counts};
  // V3 illustrates a completely split pool (2–2). Do not invent 2–2–1 rules.
  if(!room.remote&&votes.some(v=>!leaders.some(r=>r.id===v.restaurantId)))return {status:'unsupported' as const,leaders,nominees:[] as User[],counts};
  return {status:'tie' as const,leaders,nominees:room.members.filter(m=>votes.some(v=>v.userId===m.id&&leaders.some(r=>r.id===v.restaurantId))),counts};
}
export function pickLuckyDiner(room:DiningRoom,list:Restaurant[],random=Math.random):DiningRoom {
  if(winningRestaurant(room,list)&&room.luckyDiner?.voteSignature===voteSignature(room))return room;
  const outcome=groupOutcome(room,list);
  if(outcome.status!=='tie')throw new Error(outcome.status==='unsupported'?'This tie format needs an agreed diner-pool rule.':'Complete all votes before picking a lucky diner.');
  const draw=random();if(!Number.isFinite(draw)||draw<0||draw>=1)throw new Error('Invalid random draw.');
  const member=outcome.nominees[Math.floor(draw*outcome.nominees.length)];
  const vote=room.votes.find(v=>v.userId===member.id)!;
  return {...room,luckyDiner:{userId:member.id,restaurantId:vote.restaurantId,voteSignature:voteSignature(room)}};
}
export function submitPreferences(room: DiningRoom,userId: string,preferences: Preferences): DiningRoom {
  return {...room,members:room.members.map(m=>m.id===userId?{...m,preferences}:m)};
}
