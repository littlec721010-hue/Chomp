import { Children, cloneElement, useEffect, useRef, useState, type ReactNode } from 'react';
import { ScrollView, View, Text, TextInput, useWindowDimensions, StyleSheet, type ImageSourcePropType } from 'react-native';
import * as Clipboard from 'expo-clipboard';
import { DesignImage, DesignText } from './native/Design';
import { Button, Sheet, ui } from './native/Controls';
import type { ChompModuleProps, DiningRoom, Restaurant } from '../contracts';
import { demoMembers, restaurants } from '../recommendations/data';
import { asset } from './assets';
import { recommendationPresentation } from './presentation';
import { castVote, consensus, groupOutcome, pickRandom, validInviteCode, winningRestaurant } from '../group/model';
import { bindView, textBinding, type Binding } from './View';
import { DinnerTimePicker } from './native/DinnerTimePicker';
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
const defaultState=():Saved=>({room:initialRoom(),selectedId:'oishii',bookmarks:[],method:'free'});
export type IntegratedProps = Omit<ChompModuleProps, 'room'> & {
  route?: Route; onNavigate?: (route: Route) => void;
  room?: DiningRoom; selectedId?: string; bookmarks?: string[];
  onBookmark?: (id: string) => void; matches?: Restaurant[];
  onCreateRoom?: () => void; onJoinRoom?: () => void; onBackToPreferences?: () => void; summaryContent?: ReactNode;
  onTie?: () => void;
};

export function ChompModule({user,room:providedRoom,onRoomChange,onHome,onPreferences,onRestaurantSelected,route:providedRoute,onNavigate,selectedId:providedSelectedId,bookmarks:providedBookmarks,onBookmark,matches=restaurants,onCreateRoom,onJoinRoom,onBackToPreferences,onTie,summaryContent}:IntegratedProps){
  const [saved,setSaved]=useState(defaultState);
  const [internalRoute,setInternalRoute]=useState<Route>('/group');
  const route=providedRoute??internalRoute;
  const [inviteCode,setInviteCode]=useState('');
  const [notice,setNotice]=useState('');
  const [consensusHeight,setConsensusHeight]=useState(1061);
  const [groupResultHeight,setGroupResultHeight]=useState(844);
  const [modal,setModal]=useState<{title:string;body:ReactNode}|null>(null);
  const panel=useRef<ScrollView>(null);
  const width=Math.min(390,useWindowDimensions().width);
  const room=providedRoom??saved.room;
  const selectedId=providedSelectedId??(route.startsWith('/group')?(room.votes.find(v=>v.userId===user.id)?.restaurantId??saved.selectedId):saved.selectedId);
  const selected=restaurants.find(r=>r.id===selectedId)??restaurants[0];
  const result=winningRestaurant(room,matches)??selected;
  const bookmarks=providedBookmarks??saved.bookmarks;
  const screen=screens[route];
  useEffect(()=>{panel.current?.scrollTo({y:0,animated:false});},[route]);
  useEffect(()=>{if(!notice)return;const timer=setTimeout(()=>setNotice(''),3500);return()=>clearTimeout(timer);},[notice]);
  function go(next:Route){setInternalRoute(next);onNavigate?.(next);setNotice('');panel.current?.scrollTo({y:0,animated:false});}
  function updateRoom(next:DiningRoom){setSaved(s=>({...s,room:next}));onRoomChange?.(next);}
  function vote(restaurant:Restaurant,method:'free'|'random'){
    if(room.luckyDiner){setNotice('This round is complete. Create a new room to vote again.');return;}
    if(!matches.some(r=>r.id===restaurant.id)){setNotice('This restaurant does not match the current preferences.');return;}
    const updated=castVote(room,{userId:user.id,restaurantId:restaurant.id,method});
    onRoomChange?.(updated);
    setSaved(s=>({...s,selectedId:restaurant.id,method,room:updated}));go(method==='random'?'/group/random-vote':'/group/vote');
  }
  function showAction(kind:'Directions'|'Call Table'|'View Menu',restaurant:Restaurant){
    const body=kind==='View Menu'?<View style={{gap:12}}>{restaurant.menu.map(item=><View key={item.name} style={{flexDirection:'row',justifyContent:'space-between',gap:12}}><Text style={ui.body}>{item.name}</Text><Text style={ui.buttonText}>${item.price}</Text></View>)}</View>:<Text style={ui.body}>{kind==='Directions'?`${restaurant.name} is ${restaurant.distanceMiles} miles away. Walking and driving details are sample data for this HiFi.`:`Table availability for ${restaurant.name} is a demonstration. No phone call will be placed.`}</Text>;
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
    onJoinRoom?.();go('/group/join');
  }
  const bindings:Record<string,Binding>={};
  const action=(id:string,label:string,fn:()=>void)=>bindings[id]={label,action:fn};
  const text=(ids:string[],value:ReactNode)=>ids.forEach(id=>bindings[id]=textBinding(value));
  action('258:22217','Back to preferences',()=>onBackToPreferences?.());
  action('281:22980','Back to home',()=>onHome?.());
  action('281:24778','Back to consensus',()=>go('/group/consensus'));
  action('281:23257','Back to group options',()=>go('/group'));
  action('281:23013','Create Room',()=>{if(onCreateRoom)onCreateRoom();else updateRoom(initialRoom());go('/group/create');});
  action('281:23040','Join Room',join);
  bindings['281:23034']={props:{style:{backgroundColor:'white',height:52}},children:<TextInput style={[ui.input,{height:25,fontFamily:'JakartaBold',fontSize:20,lineHeight:25,includeFontPadding:false,backgroundColor:'transparent',borderWidth:0,outlineWidth:0}]} accessibilityLabel="Invite code" placeholder="e.g. EAT-404" placeholderTextColor="#d0c6ad" value={inviteCode} maxLength={7} autoCapitalize="characters" autoCorrect={false} onChangeText={value=>setInviteCode(value.toUpperCase())} onSubmitEditing={join} returnKeyType="go"/>};
  bindings['281:23269']={children:<TextInput style={[ui.input,{fontSize:16,fontFamily:'Jakarta'}]} accessibilityLabel="Group name" value={room.name} maxLength={40} onChangeText={name=>updateRoom({...room,name})}/>};
  action('281:23272','Clear group name',()=>updateRoom({...room,name:''}));
  text(['281:23290'],route==='/group/join'?'Group information':'Start group feast');
  text(['281:23306'],room.code);
  text(['281:23283'],room.dateTime);
  text(['281:23288'],room.scope);
  action('281:23279','Change dinner time',()=>setModal({title:'Dinner time',body:<DinnerTimePicker initial={room.dateTime} onConfirm={dateTime=>{updateRoom({...room,dateTime});setModal(null);}}/>}));
  action('281:23284','Change dining area',()=>setModal({title:'Dining area',body:<View style={{gap:12}}>{['Downtown (5 mi)','Midtown (3.5 mi)','Nearby (1 mi)'].map(scope=><Button key={scope} secondary onPress={()=>{updateRoom({...room,scope});setModal(null);}}>{scope}</Button>)}</View>}));
  ['281:23279','281:23284'].forEach(id=>bindings[id].props={style:{flexGrow:1,flexShrink:1,flexBasis:0,minWidth:0,paddingLeft:8,paddingRight:8}});
  ['281:23282','281:23287'].forEach(id=>bindings[id]={props:{style:{minWidth:0,flexShrink:1,alignItems:'center'}}});
  ['281:23283','281:23288'].forEach(id=>bindings[id].props={style:{minWidth:0,flexShrink:1,textAlign:'center'}});
  action('281:23307','Copy Code',async()=>{try{await Clipboard.setStringAsync(room.code);setNotice('Invite code copied.');}catch{setModal({title:'Invite code',body:<Text selectable style={ui.title}>{room.code}</Text>});}});
  action('281:23382',room.invited.includes('david')?'Invited':'Invite David',()=>{updateRoom({...room,invited:[...new Set([...room.invited,'david'])]});setNotice('David added to the demo invitation list.');});
  if(room.invited.includes('david')){
    bindings['281:23382'].props={className:'v229',disabled:true};
    bindings['281:23383']={props:{className:'v230'},children:<DesignImage className="v8" src={asset('baf78.svg')} />};
    text(['281:23386'],'Invited');
    bindings['281:23386'].props={className:'v231'};
  }
  action('281:23397','Next: Set Dining Preferences',preferences);
  action('298:25569','View Recommended Restaurants',()=>go('/group/recommendations'));
  bindings['281:24327']={props:{style:{height:'auto',paddingTop:44,paddingBottom:67,paddingHorizontal:20},onLayout:(event:{nativeEvent:{layout:{height:number}}})=>setConsensusHeight(event.nativeEvent.layout.height)}};
  bindings['298:25420']={props:{style:{display:'none'}}};
  ['298:25421','298:25431','298:25451','298:25492','298:25542'].forEach(id=>bindings[id]={props:{style:{position:'relative',top:undefined,left:undefined,right:undefined,width:'100%'}}});
  bindings['298:25569'].props={style:{position:'relative',top:undefined,left:undefined,right:undefined,marginTop:24,marginHorizontal:23,alignSelf:'stretch'}};
  text(['298:25426'],room.name);
  const shared=consensus(room.members),count=room.members.length;
  const overlap=shared.cuisines.length?Math.round(shared.cuisines.reduce((sum,[,n])=>sum+n,0)/(shared.cuisines.length*count)*100):0;
  text(['298:25430'],`${count} of ${count} Submitted`);
  text(['298:25437'],`${overlap}%`);
  text(['298:25446'],`${shared.restrictions.length} Diets Accommodated`);
  text(['298:25450'],shared.budgetOverlap?`Budget Overlap: $${shared.budget[0]}–${shared.budget[1]}`:'Budget: No overlap');
  text(['298:25461'],`${count} members’ recorded preferences`);
  text(['298:25491'],<>Filtered by recorded restrictions. Confirm sample dietary information with the restaurant.</>);
  bindings['298:25490']={props:{style:{flex:1,minWidth:0,paddingRight:0,flexShrink:1}}};
  bindings['298:25491'].props={style:{width:'100%',minWidth:0,flexShrink:1}};
  const restricted=[...room.members].sort((a,b)=>Number(b.id===user.id)-Number(a.id===user.id)).filter(m=>m.id===user.id||m.preferences.restrictions.length);
  [['298:25466','298:25468','298:25470'],['298:25474','298:25476','298:25478'],['298:25482','298:25484','298:25486']].forEach((ids,i)=>{
    const member=restricted[i];text([ids[0]],member?.name.slice(0,2).toUpperCase()??'—');text([ids[1]],member?`${member.name}${member.id===user.id?' (You)':''}`:'No restriction');text([ids[2]],member?.preferences.restrictions.join(', ')??'None recorded');
    const rowIds=['298:25463','298:25471','298:25479'], identityIds=['298:25464','298:25472','298:25480'],nameIds=['298:25467','298:25475','298:25483'],tagIds=['298:25469','298:25477','298:25485'];
    bindings[rowIds[i]]={props:{style:{flexWrap:'wrap',gap:8}}};
    bindings[identityIds[i]]={props:{style:{width:'100%',minWidth:0,flexShrink:1}}};
    bindings[nameIds[i]]={props:{style:{flex:1,minWidth:0,flexShrink:1}}};
    bindings[ids[1]].props={style:{width:'100%',flexShrink:1}};
    bindings[tagIds[i]]={props:{style:{backgroundColor:'transparent',paddingLeft:0,paddingRight:0,paddingTop:0,paddingBottom:0,width:'100%',flexShrink:1}},children:<View style={{flexDirection:'row',flexWrap:'wrap',gap:4,flex:1,minWidth:0}}>{(member?.preferences.restrictions??['None recorded']).map(tag=><Text key={tag} style={{fontFamily:'JakartaSemiBold',fontSize:11,lineHeight:16,maxWidth:'100%',backgroundColor:/allergy|shellfish/i.test(tag)?'#FFDAD6':'#FFDC73',color:/allergy|shellfish/i.test(tag)?'#93000A':'#725B00',paddingHorizontal:8,paddingVertical:2,borderRadius:10}}>{tag}</Text>)}</View>};
  });
  [['298:25506','298:25509','298:25511'],['298:25520','298:25523','298:25525'],['298:25534','298:25537','298:25539']].forEach((ids,i)=>{
    const cuisine=shared.cuisines[i];text([ids[0]],cuisine?.[0]??'No selection');text([ids[1]],`${cuisine?.[1]??0}/${count} matched`);text([ids[2]],`${Math.round(100*(cuisine?.[1]??0)/count)}%`);
  });
  text(['298:25553'],shared.budgetOverlap?`$${shared.budget[0]}–$${shared.budget[1]}`:'No overlap');
  text(['298:25555'],shared.budgetOverlap?'Shared budget range':'Review group budgets');
  text(['298:25565'],`≤ ${shared.distanceMiles} mi`);text(['298:25567'],room.scope);
  text(['312:26960'],`${count} Feasters Attending`);text(['312:26962'],room.members.map(m=>m.name).join(', '));
  bindings['312:26958']={props:{style:{flex:1,minWidth:0,flexShrink:1}}};
  bindings['312:26949']={props:{style:{flex:1,minWidth:0,flexShrink:1}}};
  ['312:26959','312:26961','312:26960','312:26962'].forEach(id=>bindings[id]={...bindings[id],props:{style:{width:'100%',minWidth:0,flexShrink:1}}});
  text(['312:26859'],`${result.rating} (${result.reviews})`);
  bindings['478:1975']={children:<Text accessibilityRole="header" style={{fontFamily:'JakartaBold',fontSize:20,lineHeight:28,letterSpacing:-.5,color:'#251e14'}}>{result.name}</Text>};
  text(['478:1978'],`${result.cuisine} • ${result.category} • ${result.price.join('–')}`);
  bindings['312:26947']={props:{style:{height:'auto'}}};
  text(['312:26967'],'SAMPLE RESTAURANT PERKS');
  ['312:26973','312:26978','312:26983','312:26988'].forEach((id,i)=>text([id],result.perks[i]??''));
  ['312:26969','312:26974','312:26979','312:26984'].forEach(id=>bindings[id]={props:{style:{height:'auto',minHeight:44,width:'100%',overflow:'hidden'}}});
  ['312:26972','312:26977','312:26982','312:26987'].forEach(id=>bindings[id]={props:{style:{flex:1,minWidth:0,flexShrink:1}}});
  ['312:26973','312:26978','312:26983','312:26988'].forEach(id=>bindings[id].props={style:{width:'100%',minWidth:0,flexShrink:1}});
  bindings['312:26834']={props:{style:{height:'auto',paddingHorizontal:20,paddingBottom:40},onLayout:(event:{nativeEvent:{layout:{height:number}}})=>setGroupResultHeight(event.nativeEvent.layout.height)}};
  bindings['312:26847']={props:{style:{position:'relative',top:undefined,left:undefined,right:undefined,width:'100%',marginTop:141}}};
  bindings['312:26887']={props:{style:{position:'relative',top:undefined,left:undefined,right:undefined,width:'100%',marginTop:20}}};
  text(['312:26490','312:26265'],user.name.slice(0,1));text(['312:26497','312:26272'],user.name);
  const pulseIds=route==='/group/random-vote'?[['312:26292','312:26294','312:26296'],['312:26307','312:26309','312:26311'],['312:26411','312:26413','312:26415']]:[['312:26515','312:26517','312:26519'],['312:26530','312:26532','312:26534'],['312:26545','312:26547','312:26549']];
  pulseIds.forEach((ids,i)=>{
    const member=room.members.filter(m=>m.id!==user.id)[i],vote=room.votes.find(v=>v.userId===member?.id);
    text([ids[0]],member?.name??'');text([ids[1]],vote?'Locked in':'Waiting…');text([ids[2]],vote?(vote.method==='random'?'Chomp Random':'Free Choice'):'Waiting');
  });
  const soloCtas=['258:22278','258:22329','258:22379'];
  const groupCtas=['281:24826','281:24871','281:24916'];
  const hearts=['258:22244','258:22295','258:22345','281:24792','281:24837','281:24882'];
  const soloCards=["258:22235","258:22286","258:22336"],groupCards=["281:24786","281:24830","281:24875"];
  const soloTops=[182,583,984],groupTops=[182,609,1009];
  const {cards:displayed}=recommendationPresentation(matches,restaurants);
  text(['258:22233'],matches.length?`Top ${matches.length} ${matches.length===1?'match':'matches'} based on your preferences`:'Sample restaurants · No verified matches for your preferences');
  restaurants.forEach((r,i)=>{
    const index=displayed.findIndex(match=>match.id===r.id);
    bindings[soloCards[i]]={props:{style:index<0?{display:'none'}:{top:soloTops[index]}}};
    bindings[groupCards[i]]={props:{style:index<0?{display:'none'}:{top:groupTops[index]}}};
    action(soloCtas[i],`Chomp at ${r.name}`,()=>{setSaved(s=>({...s,selectedId:r.id}));onRestaurantSelected?.(r);go('/recommendations/result');});
    action(groupCtas[i],`Vote for ${r.name}`,()=>vote(r,'free'));
    if(!matches.length){
      text([['258:22239','258:22290','258:22340'][i],['281:24790','281:24834','281:24879'][i]],'Sample');
      bindings[soloCtas[i]].props={disabled:true,style:{opacity:0.45}};
      bindings[groupCtas[i]].props={disabled:true,style:{opacity:0.45}};
    }
    [hearts[i],hearts[i+3]].forEach(id=>{action(id,`${bookmarks.includes(r.id)?'Unsave':'Save'} ${r.name}`,()=>{if(onBookmark)onBookmark(r.id);else setSaved(s=>({...s,bookmarks:s.bookmarks.includes(r.id)?s.bookmarks.filter(x=>x!==r.id):[...s.bookmarks,r.id]}));});bindings[id].props={accessibilityState:{selected:bookmarks.includes(r.id)},style:bookmarks.includes(r.id)?{backgroundColor:'#ffd43b'}:undefined};});
  });
  action('294:25235','Spin Between These 3',()=>{if(!matches.length){setNotice('No matching restaurants. Adjust your preferences.');return;}vote(pickRandom(matches),'random');});
  ['312:26550','312:26389'].forEach(id=>action(id,'View Result',()=>{const winner=winningRestaurant(room,matches);if(!winner){const outcome=groupOutcome(room,matches);if(outcome.status==='tie'){onTie?.();return;}setNotice(outcome.status==='unsupported'?'This tie format needs an agreed diner-pool rule.':'Waiting for everyone to vote.');return;}onRestaurantSelected?.(winner,room);go('/group/result');}));
  ['312:26556','312:26395'].forEach(id=>action(id,'Change My Vote',()=>{if(room.luckyDiner){setNotice('This round is complete. Create a new room to vote again.');return;}go('/group/recommendations');}));
  ['258:22709','312:26918'].forEach(id=>action(id,'Back to Home',()=>onHome?.()));
  bindings['312:26918'].props={style:{position:'relative',top:undefined,left:undefined,right:undefined,marginHorizontal:16,marginTop:32,alignSelf:'stretch'}};
  [['258:22678','312:26888','Directions'],['258:22688','312:26898','Call Table'],['258:22698','312:26908','View Menu']].forEach(([a,b,label])=>{action(a,label,()=>showAction(label as 'Directions',selected));action(b,label,()=>showAction(label as 'Directions',result));});
  const voted=room.votes.filter(v=>room.members.some(m=>m.id===v.userId)).length;
  text(['312:26461','309:26217'],`${voted} of ${room.members.length}`);
  text(['312:26484','312:26259'],`${Math.round(voted/room.members.length*100)}% Complete`);
  text(['312:26474','312:26501','309:26246','312:26276','258:22652'],selected.name);
  text(['312:26470','309:26242'],selected.rating);
  text(['312:26476','309:26248'],`${selected.cuisine} • ${selected.category}`);
  text(['258:22656'],`${selected.cuisine} • ${selected.category} • $${selected.price.join('–')} • ${selected.distanceMiles} miles away`);
  text(['312:26444','309:26176'],<>You voted for <DesignText style={{fontFamily:'JakartaBold'}}>{selected.name}</DesignText> in the Chomp poll. Your squad will see your vote counted.</>);
    ['312:26444','309:26176'].forEach(id=>bindings[id].props={className:'v327',style:{width:350,fontSize:12,lineHeight:17}});
  {
    text(['258:22647'],`${selected.rating} (${selected.reviews})`);
    const tags=selected.id==='oishii'?['Nut & Shellfish-Free','Gluten-Free Noodles','Vegan Broth']:selected.id==='taqueria'?['Nut & Shellfish-Free','Corn Tortillas','Plant-Based Fillings']:['Nut & Shellfish-Free','Gluten-Free Pasta','Vegetarian'];
    text(['258:22662'],tags[0]);text(['258:22664'],tags[1]);text(['258:22666'],tags[2]);
    // Data-driven labels must flow together rather than use Figma's fixed chip coordinates.
    bindings['258:22658']={props:{style:{height:'auto',flexDirection:'row',flexWrap:'wrap',gap:6,alignItems:'flex-start'}}};
    ['258:22659','258:22663','258:22665'].forEach(id=>bindings[id]={props:{style:{position:'relative',top:undefined,bottom:undefined,left:undefined,right:undefined,maxWidth:'100%',minHeight:22}}});
    ['258:22662','258:22664','258:22666'].forEach(id=>bindings[id].props={style:{flexShrink:1}});
  }
  // Images supplied by restaurant data stay dynamic, with each design's crop retained.
  function dynamicImages(node:ReactNode):ReactNode{
    if(typeof node==='string')return node
      .replace(/Oishii Ramen & Izakaya/g,restaurants[0].name)
      .replace(/Taqueria El Sol Dorado/g,restaurants[1].name)
      .replace(/Pasta Fresca Handcrafted/g,restaurants[2].name)
      .replace(/Mexican/g,restaurants[1].cuisine)
      .replace(/Street Food/g,restaurants[1].category)
      .replace(/1\.2 mi/g,`${restaurants[1].distanceMiles} mi`)
      .replace(/1\.5 mi/g,`${restaurants[2].distanceMiles} mi`)
      .replace(/\$15–30/g,'$15–24').replace(/\$20–30/g,'$18–26').replace(/\$25–40/g,'$20–28');
    if(!node || typeof node!=='object' || !('props' in node))return node;
    const element=node as import('react').ReactElement<{children?:ReactNode;src?:ImageSourcePropType;alt?:string;contentFit?:'fill'|'cover';style?:Record<string,unknown>;className?:string;'data-name'?:string}>;
    const resultPage=route==='/recommendations/result'||route==='/group/result'||route==='/group/vote'||route==='/group/random-vote';
    if(resultPage&&element.props['data-name']==='Subtle ambient celebratory decorative canvas')return null;
    if(resultPage&&element.props.className==='v1')return cloneElement(element,{style:{...element.props.style,backgroundColor:'transparent'},children:Children.map(element.props.children,dynamicImages)});
    const src=element.props.src;
    const restaurant=route==='/group/result'?result:selected;
    if(src && (src===asset('91d18.png')||src===asset('f37ad.png'))){
      const imageName=src===asset('f37ad.png')?restaurant.voteImage:restaurant.resultImage;
      return cloneElement(element,{key:`${restaurant.id}:${imageName}`,src:asset(imageName),alt:restaurant.name,...(restaurant.id!=='oishii'?{contentFit:'cover' as const,style:{...element.props.style,top:0,left:0,right:0,bottom:0,width:'100%',height:'100%'}}:{})});
    }
    return cloneElement(element,{children:Children.map(element.props.children,dynamicImages)});
  }
  const view=dynamicImages(bindView(screen.view(),bindings));
  const canvasHeight=route==='/group/result'?groupResultHeight:route==='/group/consensus'?consensusHeight:route==='/recommendations'?screen.height-401*(3-displayed.length):screen.height;
  return <View style={{flex:1,alignItems:'center',backgroundColor:['/recommendations/result','/group/result','/group/vote','/group/random-vote'].includes(route)?'transparent':'#fff8f4'}}>
    <ScrollView ref={panel} style={{width}} contentContainerStyle={{minHeight:777*width/390,paddingBottom:48}} keyboardShouldPersistTaps="handled" showsVerticalScrollIndicator={false} accessibilityLabel={screen.label}>
      {route==='/group/consensus'&&summaryContent}
      <View style={{height:(canvasHeight-33)*width/390,width,overflow:'hidden'}}><View style={{width:390,height:route==='/group/consensus'||route==='/group/result'?undefined:canvasHeight,top:-33*width/390,transform:[{scale:width/390}],transformOrigin:'top left'}}>{view}</View></View>
    </ScrollView>
    {!!notice&&<View accessibilityLiveRegion="polite" style={nativeStyles.toast}><Text style={{color:'#fff',fontFamily:'JakartaMedium',textAlign:'center'}}>{notice}</Text></View>}
    <Sheet visible={!!modal} title={modal?.title??''} onClose={()=>setModal(null)}>{modal?.body}</Sheet>
  </View>;
}
const nativeStyles=StyleSheet.create({toast:{position:'absolute',bottom:40,left:24,right:24,maxWidth:350,alignSelf:'center',backgroundColor:'#251e14',padding:16,borderRadius:20}});
