import { Children, cloneElement, useEffect, useRef, useState, type ReactNode } from 'react';
import type { ChompModuleProps, DiningRoom, Restaurant } from './contracts';
import { asset, demoMembers, restaurants } from './recommendations/data';
import { castVote, pickRandom, validInviteCode, winningRestaurant } from './group/model';
import { bindView, textBinding, type Binding } from './View';
import D5 from './recommendations/views/Decide5';
import D6 from './recommendations/views/Decide6';
import D7 from './group/views/Decide7';
import D8 from './group/views/Decide8';
import D13 from './group/views/Decide13';
import D14 from './group/views/Decide14';
import D15 from './group/views/Decide15';
import D16 from './group/views/Decide16';
import D17 from './group/views/Decide17';

export const screens = {
  '/recommendations':{label:'Decide 5 · Solo recommendations',height:1444,view:D5},
  '/recommendations/result':{label:'Decide 6 · Solo result',height:844,view:D6},
  '/group':{label:'Decide 7 · Create or join',height:844,view:D7},
  '/group/create':{label:'Decide 8 · Create room',height:844,view:D8},
  '/group/join':{label:'Decide 9 · Group information',height:844,view:D8},
  '/group/consensus':{label:'Decide 13 · Preference consensus',height:1061,view:D13},
  '/group/recommendations':{label:'Decide 14 · Group recommendations',height:1713,view:D14},
  '/group/vote':{label:'Decide 15 · Free choice vote',height:844,view:D15},
  '/group/random-vote':{label:'Decide 16 · Random vote',height:844,view:D16},
  '/group/result':{label:'Decide 17 · Group result',height:844,view:D17}
} as const;
export type Route=keyof typeof screens;
const initialRoom=():DiningRoom=>({id:'demo-room',code:'EAT-404',name:'Friday Dinner Squad',dateTime:'Today, 7:30 PM',scope:'Downtown (5 mi)',members:demoMembers,invited:['taylor'],votes:[{userId:'alex',restaurantId:'oishii',method:'free'},{userId:'jamie',restaurantId:'oishii',method:'random'},{userId:'taylor',restaurantId:'oishii',method:'free'}]});
type Saved={room:DiningRoom;selectedId:string;bookmarks:string[];method:'free'|'random'};
function loadState():Saved {
  try{const raw=JSON.parse(localStorage.getItem('chomp.yuhan.v1')??'null');if(raw?.room?.members?.length && restaurants.some(r=>r.id===raw.selectedId) && Array.isArray(raw.bookmarks))return raw;}catch{/* A stale demo session must not prevent starting. */}
  return {room:initialRoom(),selectedId:'oishii',bookmarks:[],method:'free'};
}
function currentRoute():Route {const r=location.hash.slice(1);return r in screens?r as Route:'/group';}

export function ChompModule({user,room:providedRoom,onRoomChange,onHome,onPreferences,onRestaurantSelected}:ChompModuleProps){
  const [saved,setSaved]=useState(loadState);
  const [route,setRoute]=useState<Route>(currentRoute);
  const [inviteCode,setInviteCode]=useState('');
  const [notice,setNotice]=useState('');
  const [modal,setModal]=useState<{title:string;body:ReactNode}|null>(null);
  const panel=useRef<HTMLDivElement>(null);
  const dialog=useRef<HTMLDialogElement>(null);
  const [width,setWidth]=useState(Math.min(390,window.innerWidth));
  const room=providedRoom??saved.room;
  const selectedId=route.startsWith('/group')?(room.votes.find(v=>v.userId===user.id)?.restaurantId??saved.selectedId):saved.selectedId;
  const selected=restaurants.find(r=>r.id===selectedId)??restaurants[0];
  const result=winningRestaurant(room,restaurants)??selected;
  const screen=screens[route];
  useEffect(()=>{const listener=()=>{setRoute(currentRoute());panel.current?.scrollTo(0,0);};window.addEventListener('hashchange',listener);return()=>window.removeEventListener('hashchange',listener);},[]);
  useEffect(()=>{try{localStorage.setItem('chomp.yuhan.v1',JSON.stringify(saved));}catch{/* Demo remains usable without storage. */}},[saved]);
  useEffect(()=>{const resize=()=>setWidth(Math.min(390,window.innerWidth));window.addEventListener('resize',resize);return()=>window.removeEventListener('resize',resize);},[]);
  useEffect(()=>{if(!notice)return;const timer=setTimeout(()=>setNotice(''),3500);return()=>clearTimeout(timer);},[notice]);
  useEffect(()=>{if(modal)dialog.current?.showModal();else dialog.current?.close();},[modal]);
  function go(next:Route){location.hash=next;setRoute(next);setNotice('');panel.current?.scrollTo(0,0);}
  function updateRoom(next:DiningRoom){setSaved(s=>({...s,room:next}));onRoomChange?.(next);}
  function vote(restaurant:Restaurant,method:'free'|'random'){
    const updated=castVote(room,{userId:user.id,restaurantId:restaurant.id,method});
    onRoomChange?.(updated);
    setSaved(s=>({...s,selectedId:restaurant.id,method,room:updated}));go(method==='random'?'/group/random-vote':'/group/vote');
  }
  function showAction(kind:'Directions'|'Call Table'|'View Menu',restaurant:Restaurant){
    const body=kind==='View Menu'?<ul className="menu-items">{restaurant.menu.map(item=><li key={item.name}><span>{item.name}</span><strong>${item.price}</strong></li>)}</ul>:kind==='Directions'?<p>{restaurant.name} is {restaurant.distanceMiles} miles away. Walking and driving details are sample data for this HiFi.</p>:<p>Table availability for {restaurant.name} is a demonstration. No phone call will be placed.</p>;
    setModal({title:kind==='View Menu'?restaurant.name:kind,body});
  }
  function preferences(){
    if(!room.name.trim()){setNotice('Please enter a group name.');return;}
    if(onPreferences)onPreferences(room,preferences=>{updateRoom({...room,members:room.members.map(m=>m.id===user.id?{...m,preferences}:m)});go('/group/consensus');});
    else go('/group/consensus');
  }
  function join(){
    const code=inviteCode.trim().toUpperCase();
    if(!validInviteCode(code)){setNotice('Use a code like EAT-404 (three letters and three digits).');return;}
    if(code!==room.code){setNotice('Room not found. Try the demo invite EAT-404.');return;}
    go('/group/join');
  }
  const bindings:Record<string,Binding>={};
  const action=(id:string,label:string,fn:()=>void)=>bindings[id]={label,action:fn};
  const text=(ids:string[],value:ReactNode)=>ids.forEach(id=>bindings[id]=textBinding(value));
  ['258:22217','281:22980'].forEach(id=>action(id,'Back',()=>onHome?.()));
  action('281:24778','Back to consensus',()=>go('/group/consensus'));
  action('281:23257','Back to group options',()=>go('/group'));
  action('281:23013','Create Room',()=>{updateRoom(initialRoom());go('/group/create');});
  action('281:23040','Join Room',join);
  bindings['281:23034']={children:<input className="invite-input" aria-label="Invite code" placeholder="e.g. EAT-404" value={inviteCode} maxLength={7} onChange={e=>setInviteCode(e.target.value.toUpperCase())} onKeyDown={e=>{if(e.key==='Enter')join();}}/>};
  bindings['281:23269']={children:<input className="group-input" aria-label="Group name" value={room.name} maxLength={40} onChange={e=>updateRoom({...room,name:e.target.value})}/>};
  action('281:23272','Clear group name',()=>updateRoom({...room,name:''}));
  text(['281:23290'],route==='/group/join'?'Group information':'Start group feast');
  text(['281:23306'],room.code);
  text(['281:23283'],room.dateTime);
  text(['281:23288'],room.scope);
  action('281:23279','Change dinner time',()=>setModal({title:'Dinner time',body:<input type="datetime-local" aria-label="Dinner date and time" onChange={e=>{if(e.target.value)updateRoom({...room,dateTime:new Date(e.target.value).toLocaleString('en-US',{month:'short',day:'numeric',hour:'numeric',minute:'2-digit'})});}}/>}));
  action('281:23284','Change dining area',()=>setModal({title:'Dining area',body:<select aria-label="Dining area" value={room.scope} onChange={e=>updateRoom({...room,scope:e.target.value})}><option>Downtown (5 mi)</option><option>Midtown (3.5 mi)</option><option>Nearby (1 mi)</option></select>}));
  action('281:23307','Copy Code',async()=>{try{await navigator.clipboard.writeText(room.code);setNotice('Invite code copied.');}catch{setModal({title:'Invite code',body:<input aria-label="Copy invite code" readOnly value={room.code} onFocus={e=>e.target.select()}/>});}});
  action('281:23382',room.invited.includes('david')?'Invited':'Invite David',()=>{updateRoom({...room,invited:[...new Set([...room.invited,'david'])]});setNotice('David added to the demo invitation list.');});
  if(room.invited.includes('david'))text(['281:23386'],'Invited');
  action('281:23397','Next: Set Dining Preferences',preferences);
  action('298:25569','View Recommended Restaurants',()=>go('/group/recommendations'));
  text(['298:25426'],room.name);
  const soloCtas=['258:22278','258:22329','258:22379'];
  const groupCtas=['281:24826','281:24871','281:24916'];
  const hearts=['258:22244','258:22295','258:22345','281:24792','281:24837','281:24882'];
  restaurants.forEach((r,i)=>{
    action(soloCtas[i],`Chomp at ${r.name}`,()=>{setSaved(s=>({...s,selectedId:r.id}));onRestaurantSelected?.(r);go('/recommendations/result');});
    action(groupCtas[i],`Vote for ${r.name}`,()=>vote(r,'free'));
    [hearts[i],hearts[i+3]].forEach(id=>{action(id,`${saved.bookmarks.includes(r.id)?'Unsave':'Save'} ${r.name}`,()=>setSaved(s=>({...s,bookmarks:s.bookmarks.includes(r.id)?s.bookmarks.filter(x=>x!==r.id):[...s.bookmarks,r.id]})));bindings[id].props={'aria-pressed':saved.bookmarks.includes(r.id),'data-saved':saved.bookmarks.includes(r.id)};});
  });
  action('294:25235','Spin Between These 3',()=>vote(pickRandom(restaurants),'random'));
  ['312:26550','312:26389'].forEach(id=>action(id,'View Result',()=>{const winner=winningRestaurant(room,restaurants);if(!winner){setNotice('Waiting for everyone to vote.');return;}onRestaurantSelected?.(winner,room);go('/group/result');}));
  ['312:26556','312:26395'].forEach(id=>action(id,'Change My Vote',()=>go('/group/recommendations')));
  ['258:22709','312:26918'].forEach(id=>action(id,'Back to Home',()=>onHome?.()));
  [['258:22678','312:26888','Directions'],['258:22688','312:26898','Call Table'],['258:22698','312:26908','View Menu']].forEach(([a,b,label])=>{action(a,label,()=>showAction(label as 'Directions',selected));action(b,label,()=>showAction(label as 'Directions',result));});
  const voted=room.votes.filter(v=>room.members.some(m=>m.id===v.userId)).length;
  text(['312:26461','309:26217'],`${voted} of ${room.members.length}`);
  text(['312:26484','312:26259'],`${Math.round(voted/room.members.length*100)}% Complete`);
  text(['312:26474','312:26501','309:26246','312:26276','258:22652'],selected.name);
  text(['312:26470','309:26242'],selected.rating);
  text(['312:26476','309:26248'],`${selected.cuisine} • ${selected.category}`);
  text(['258:22656'],`${selected.cuisine} • ${selected.category} • $${selected.price.join('–')} • ${selected.distanceMiles} miles away`);
  if(selected.id!=='oishii'){
    text(['312:26444','309:26176'],<>You voted for <strong>{selected.name}</strong> in the Chomp poll. Your squad will see your vote counted.</>);
    ['312:26444','309:26176'].forEach(id=>bindings[id].props={className:'v327 dynamic-vote-description'});
    text(['258:22647'],`${selected.rating} (${selected.reviews})`);
    text(['258:22662'],selected.perks[0]);text(['258:22664'],selected.perks[1]);text(['258:22666'],selected.perks[2]);
  }
  // Images supplied by restaurant data stay dynamic, with each design's crop retained.
  function dynamicImages(node:ReactNode):ReactNode{
    if(!node || typeof node!=='object' || !('props' in node))return node;
    const element=node as import('react').ReactElement<{children?:ReactNode;src?:string;alt?:string;style?:Record<string,unknown>;className?:string}>;
    const src=element.props.src;
    const restaurant=route==='/group/result'?result:selected;
    if(src && /\/(91d18|f37ad)\.png$/.test(src)){
      const imageName=src.endsWith('f37ad.png')?restaurant.voteImage:restaurant.resultImage;
      return cloneElement(element,{src:asset(imageName),alt:restaurant.name,...(restaurant.id!=='oishii'?{style:{...element.props.style,inset:0,width:'100%',height:'100%',objectFit:'cover'}}:{})});
    }
    return cloneElement(element,{children:Children.map(element.props.children,dynamicImages)});
  }
  const view=dynamicImages(bindView(screen.view(),bindings));
  return <>
    <div className="phone-scroll" ref={panel} style={{width}} aria-label={screen.label}>
      <div style={{height:screen.height*width/390,width}}><div className="phone-canvas" style={{height:screen.height,transform:`scale(${width/390})`}}>{view}</div></div>
    </div>
    {notice&&<div role="status" className="toast">{notice}</div>}
    <dialog ref={dialog} className="chomp-dialog" onCancel={()=>setModal(null)} onClick={e=>{if(e.target===dialog.current)setModal(null);}}><h2>{modal?.title}</h2>{modal?.body}<button className="primary" onClick={()=>setModal(null)}>Done</button></dialog>
  </>;
}
