import { useEffect, useRef, useState } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import type { DiningRoom } from '../contracts';
import { DesignImage } from '../yuhan/native/Design';
import { asset } from '../yuhan/assets';
import { Sheet, ui } from '../yuhan/native/Controls';
import { DinnerTimePicker } from '../yuhan/native/DinnerTimePicker';
import { Action } from '../decide/ui';
export type RoomDetails = Pick<DiningRoom,'name'|'dateTime'|'scope'>;
/** Figma 281:23260. Keep unsaved edits stable while the room polls. */
export function RoomDetailsCard({room,editable,busy,onSave}:{room:DiningRoom;editable:boolean;busy:boolean;onSave:(details:RoomDetails)=>Promise<void>}) {
 const normalize=(d:RoomDetails):RoomDetails=>({...d,dateTime:['This meal','Date, Time'].includes(d.dateTime)?'':d.dateTime,scope:['Choose area','Location'].includes(d.scope)?'':d.scope});
 const [draft,setDraft]=useState<RoomDetails>(normalize(room));
 const [dirty,setDirty]=useState(false),[error,setError]=useState(''),[saved,setSaved]=useState(false);
 const pendingDate=useRef('');
 const [picker,setPicker]=useState<'time'|'area'|null>(null);
 useEffect(()=>{if(!dirty)setDraft(normalize(room));},[room.name,room.dateTime,room.scope,dirty]);
 function change(update:Partial<RoomDetails>){setDraft(d=>({...d,...update}));setDirty(true);setSaved(false);setError('');}
 async function save(next=draft){try{await onSave({name:next.name.trim(),dateTime:next.dateTime.trim()||'Date, Time',scope:next.scope.trim()||'Location'});setDirty(false);setSaved(true);}catch(e){setError(e instanceof Error?e.message:'Unable to save. Try again.');}}
 const icon=(file:string)=><DesignImage src={asset(file)} style={{width:16,height:16}}/>;
 return <View style={{width:'100%',backgroundColor:'white',borderRadius:12,padding:16,gap:12}}>
  <View style={{flexDirection:'row',gap:4,alignItems:'center'}}>{icon('fec63.svg')}<Text style={[ui.body,{color:'#111C2D'}]}>Group Name</Text></View>
  <View style={{backgroundColor:'#FFF2C4',borderRadius:8,flexDirection:'row',alignItems:'center',minHeight:44}}>
   <TextInput accessibilityLabel="Group name" editable={editable&&!busy} value={draft.name} maxLength={40} onChangeText={name=>change({name})} style={[ui.body,{flex:1,minWidth:0,padding:12,color:'#111C2D'}]}/>
   {editable&&<Pressable accessibilityRole="button" accessibilityLabel="Clear group name" disabled={busy} onPress={()=>change({name:''})} style={{padding:14}}>{icon('64ad8.svg')}</Pressable>}
  </View>
  <View style={{gap:4}}><Text style={{fontFamily:'JakartaSemiBold',fontSize:11,color:'#464555'}}>Date, Time &amp; Scope</Text>
   <View style={{flexDirection:'row',gap:8}}>
    {(['time','area'] as const).map(kind=><Pressable key={kind} accessibilityRole="button" accessibilityLabel={kind==='time'?'Change dinner time':'Change dining area'} accessibilityState={{disabled:!editable||busy}} disabled={!editable||busy} onPress={()=>{pendingDate.current='';setPicker(kind);}} style={{flex:1,backgroundColor:'#FFF2C4',borderRadius:8,minHeight:44,padding:8,flexDirection:'row',gap:4,alignItems:'center',justifyContent:'center'}}>{icon(kind==='time'?'b34dc.svg':'9e0eb.svg')}<Text style={{fontFamily:'JakartaMedium',fontSize:12,color:'#111C2D',flexShrink:1}}>{kind==='time'?(draft.dateTime||'Date, Time'):(draft.scope||'Location')}</Text></Pressable>)}
   </View>
  </View>
  {editable&&dirty&&<Action title={busy?'Saving…':'Save group details'} disabled={busy||!draft.name.trim()} onPress={()=>void save()}/>}
  {!!error&&<Text accessibilityRole="alert" style={[ui.body,{color:'#A53B22'}]}>{error}</Text>}
  {saved&&!dirty&&<Text accessibilityLiveRegion="polite" style={[ui.body,{fontSize:12}]}>Group details saved for everyone.</Text>}
  {!editable&&<Text style={[ui.body,{fontSize:11}]}>{room.status==='lobby'?'The host manages group details.':'Group details are locked for this voting round.'}</Text>}
  <Sheet visible={!!picker} title={picker==='time'?'Dinner time':'Dining area'} onClose={()=>{if(picker==='time'&&pendingDate.current){const dateTime=pendingDate.current;change({dateTime});void save({...draft,dateTime});}setPicker(null);}}>
   {picker==='time'?<DinnerTimePicker onChange={value=>{pendingDate.current=value;}} initial={draft.dateTime} onConfirm={dateTime=>{change({dateTime});setPicker(null);void save({...draft,dateTime});}}/>:<><TextInput accessibilityLabel="Dining area" value={draft.scope} maxLength={80} onChangeText={scope=>change({scope})} style={ui.field}/><Text style={ui.body}>Describe the meeting area. Restaurant distance filters use each diner's meal preferences.</Text></>}
  </Sheet>
 </View>;
}
