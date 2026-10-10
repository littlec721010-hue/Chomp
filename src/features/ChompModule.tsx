import { Children, cloneElement, useEffect, useRef, useState, type ReactNode } from 'react';
import { ScrollView, View, Text, TextInput, useWindowDimensions, StyleSheet, type ImageSourcePropType } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Clipboard from 'expo-clipboard';
import { DesignText } from './native/Design';
import { Button, Sheet, ui } from './native/Controls';
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
const defaultState=():Saved=>({room:initialRoom(),selectedId:'oishii',bookmarks:[],method:'free'});
const storageKey='chomp.yuhan.native.v1';

export function ChompModule({user,room:providedRoom,onRoomChange,onHome,onPreferences,onRestaurantSelected,route:providedRoute,onNavigate}:ChompModuleProps){
  const [saved,setSaved]=useState(defaultState);
  const [internalRoute,setInternalRoute]=useState<Route>('/group');
  const route=providedRoute??internalRoute;
  const [ready,setReady]=useState(false);
  const [inviteCode,setInviteCode]=useState('');
  const [notice,setNotice]=useState('');
  const [modal,setModal]=useState<{title:string;body:ReactNode}|null>(null);
  const panel=useRef<ScrollView>(null);
  const width=Math.min(390,useWindowDimensions().width);
  const room=providedRoom??saved.room;
  const selectedId=route.startsWith('/group')?(room.votes.find(v=>v.userId===user.id)?.restaurantId??saved.selectedId):saved.selectedId;
  const selected=restaurants.find(r=>r.id===selectedId)??restaurants[0];
  const result=winningRestaurant(room,restaurants)??selected;
  const screen=screens[route];
  useEffect(()=>{let active=true;AsyncStorage.getItem(storageKey).then(raw=>{if(!active)return;try{const value=JSON.parse(raw??'null');if(value?.room?.members?.length&&restaurants.some(r=>r.id===value.selectedId)&&Array.isArray(value.bookmarks))setSaved(value);}catch{}setReady(true);}).catch(()=>{if(active)setReady(true);});return()=>{active=false;};},[]);
  useEffect(()=>{if(ready)void AsyncStorage.setItem(storageKey,JSON.stringify(saved)).catch(()=>{});},[saved,ready]);
  useEffect(()=>{panel.current?.scrollTo({y:0,animated:false});},[route]);
  useEffect(()=>{if(!notice)return;const timer=setTimeout(()=>setNotice(''),3500);return()=>clearTimeout(timer);},[notice]);
  function go(next:Route){setInternalRoute(next);onNavigate?.(next);setNotice('');panel.current?.scrollTo({y:0,animated:false});}
  function updateRoom(next:DiningRoom){setSaved(s=>({...s,room:next}));onRoomChange?.(next);}
  function vote(restaurant:Restaurant,method:'free'|'random'){
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
  bindings['281:23034']={children:<TextInput style={ui.input} accessibilityLabel="Invite code" placeholder="e.g. EAT-404" placeholderTextColor="#9c8a7c" value={inviteCode} maxLength={7} autoCapitalize="characters" autoCorrect={false} onChangeText={value=>setInviteCode(value.toUpperCase())} onSubmitEditing={join} returnKeyType="go"/>};
  bindings['281:23269']={children:<TextInput style={[ui.input,{fontSize:16,fontFamily:'Jakarta700'}]} accessibilityLabel="Group name" value={room.name} maxLength={40} onChangeText={name=>updateRoom({...room,name})}/>};
  action('281:23272','Clear group name',()=>updateRoom({...room,name:''}));
  text(['281:23290'],route==='/group/join'?'Group information':'Start group feast');
  text(['281:23306'],room.code);
  text(['281:23283'],room.dateTime);
  text(['281:23288'],room.scope);
  action('281:23279','Change dinner time',()=>setModal({title:'Dinner time',body:<View style={{gap:12}}><Text style={ui.body}>Choose a dinner time or enter your own.</Text>{['Today, 7:30 PM','Tomorrow, 7:00 PM'].map(dateTime=><Button key={dateTime} secondary onPress={()=>{updateRoom({...room,dateTime});setModal(null);}}>{dateTime}</Button>)}<TextInput accessibilityLabel="Dinner date and time" style={ui.field} defaultValue={room.dateTime} onEndEditing={e=>{if(e.nativeEvent.text.trim())updateRoom({...room,dateTime:e.nativeEvent.text.trim()});}}/></View>}));
  action('281:23284','Change dining area',()=>setModal({title:'Dining area',body:<View style={{gap:12}}>{['Downtown (5 mi)','Midtown (3.5 mi)','Nearby (1 mi)'].map(scope=><Button key={scope} secondary onPress={()=>{updateRoom({...room,scope});setModal(null);}}>{scope}</Button>)}</View>}));
  action('281:23307','Copy Code',async()=>{try{await Clipboard.setStringAsync(room.code);setNotice('Invite code copied.');}catch{setModal({title:'Invite code',body:<Text selectable style={ui.title}>{room.code}</Text>});}});
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
    [hearts[i],hearts[i+3]].forEach(id=>{action(id,`${saved.bookmarks.includes(r.id)?'Unsave':'Save'} ${r.name}`,()=>setSaved(s=>({...s,bookmarks:s.bookmarks.includes(r.id)?s.bookmarks.filter(x=>x!==r.id):[...s.bookmarks,r.id]})));bindings[id].props={accessibilityState:{selected:saved.bookmarks.includes(r.id)},style:saved.bookmarks.includes(r.id)?{backgroundColor:'#ffd43b'}:undefined};});
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
  text(['312:26444','309:26176'],<>You voted for <DesignText style={{fontFamily:'Jakarta700'}}>{selected.name}</DesignText> in the Chomp poll. Your squad will see your vote counted.</>);
    ['312:26444','309:26176'].forEach(id=>bindings[id].props={className:'v327',style:{width:350,fontSize:12,lineHeight:17}});
  if(selected.id!=='oishii'){
    text(['258:22647'],`${selected.rating} (${selected.reviews})`);
    text(['258:22662'],selected.perks[0]);text(['258:22664'],selected.perks[1]);text(['258:22666'],selected.perks[2]);
  }
  // Images supplied by restaurant data stay dynamic, with each design's crop retained.
  function dynamicImages(node:ReactNode):ReactNode{
    if(!node || typeof node!=='object' || !('props' in node))return node;
    const element=node as import('react').ReactElement<{children?:ReactNode;src?:ImageSourcePropType;alt?:string;contentFit?:'fill'|'cover';style?:Record<string,unknown>;className?:string}>;
    const src=element.props.src;
    const restaurant=route==='/group/result'?result:selected;
    if(src && (src===asset('91d18.png')||src===asset('f37ad.png'))){
      const imageName=src===asset('f37ad.png')?restaurant.voteImage:restaurant.resultImage;
      return cloneElement(element,{src:asset(imageName),alt:restaurant.name,...(restaurant.id!=='oishii'?{contentFit:'cover' as const,style:{...element.props.style,top:0,left:0,right:0,bottom:0,width:'100%',height:'100%'}}:{})});
    }
    return cloneElement(element,{children:Children.map(element.props.children,dynamicImages)});
  }
  const view=dynamicImages(bindView(screen.view(),bindings));
  return <View style={{flex:1,alignItems:'center',backgroundColor:'#fff8f4'}}>
    <ScrollView ref={panel} style={{width}} contentContainerStyle={{minHeight:844*width/390}} keyboardShouldPersistTaps="handled" showsVerticalScrollIndicator={false} accessibilityLabel={screen.label}>
      <View style={{height:screen.height*width/390,width,overflow:'hidden'}}><View style={{width:390,height:screen.height,transform:[{scale:width/390}],transformOrigin:'top left'}}>{view}</View></View>
    </ScrollView>
    {!!notice&&<View accessibilityLiveRegion="polite" style={nativeStyles.toast}><Text style={{color:'#fff',fontFamily:'Jakarta500',textAlign:'center'}}>{notice}</Text></View>}
    <Sheet visible={!!modal} title={modal?.title??''} onClose={()=>setModal(null)}>{modal?.body}</Sheet>
  </View>;
}
const nativeStyles=StyleSheet.create({toast:{position:'absolute',bottom:40,left:24,right:24,maxWidth:350,alignSelf:'center',backgroundColor:'#251e14',padding:16,borderRadius:20}});
