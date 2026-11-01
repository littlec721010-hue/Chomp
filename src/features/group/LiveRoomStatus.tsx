import { View } from 'react-native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../navigation/types';
import { T } from '../../components/ui';
import { Action } from '../decide/ui';
import { useDining } from '../DiningProvider';

/** Room controls use the existing V3 buttons; no simulated members are inserted. */
export function LiveRoomStatus({navigation}:{navigation:NativeStackNavigationProp<RootStackParamList>}) {
 const d=useDining(),room=d.room;
 function resume() {
  if(!room)return;
  if(room.status==='complete'&&room.winnerId)navigation.navigate('Restaurant',{id:room.winnerId,group:true});
  else if(room.status==='tie')navigation.navigate('GroupTie');
  else if(room.status==='voting')navigation.navigate('Recommendations',{group:true});
  else navigation.navigate('GroupRoom',{joined:room.hostId!==d.user.id});
 }
 return <View style={{padding:12,gap:8,backgroundColor:'#FFF1E5'}}>
  <T style={{fontSize:12}} accessibilityLiveRegion="polite">{d.live.busy?'Saving…':room?`${room.code} · ${room.members.length} ${room.members.length===1?'diner':'diners'} · ${room.status==='lobby'?`${room.members.filter(m=>m.ready).length} ready`:room.status==='voting'?`${room.votes.length} votes received`:room.status==='tie'?'Tie — pick a Lucky Diner':'Result saved'}`:'Live rooms · Sign-in required · 2 or more diners'}</T>
  {!!d.live.error&&<><T accessibilityRole="alert" style={{fontSize:12}}>{d.live.error}</T><Action title="Retry connection" variant="beige" disabled={d.live.busy} onPress={()=>void d.live.refresh()}/></>}

 </View>;
}

/** Separate primary action, placed in the scrolling content rather than the navigation toolbar. */
export function StartVotingPanel({navigation}:{navigation:NativeStackNavigationProp<RootStackParamList>}) {
 const d=useDining(),room=d.room;
 if(!room||room.status!=='lobby')return null;
 const ready=room.members.filter(m=>m.ready).length,host=room.hostId===d.user.id;
 const canStart=room.members.length>=2&&ready===room.members.length;
 return <View style={{margin:16,padding:18,gap:10,borderRadius:20,backgroundColor:'#FFF2C4',borderWidth:1,borderColor:'#FFDB45'}}>
  <T style={{fontFamily:'JakartaBold',fontSize:20}}>Ready to vote?</T>
  <T style={{fontSize:13}}>{ready} of {room.members.length} diners have submitted preferences.</T>
  <T style={{fontSize:12}}>{room.members.length<2?'Invite at least one other diner to join.':ready<room.members.length?'Waiting for everyone to submit their preferences.':host?'Everyone is ready. Start voting to unlock restaurant choices.':'Everyone is ready. Waiting for the host to start voting.'}</T>
  {host&&<Action title={d.live.busy?'Starting…':'Start voting →'} variant="dark" style={{width:'100%',minHeight:56}} disabled={d.live.busy||!canStart} onPress={()=>void d.live.act('start').then(()=>navigation.navigate('Recommendations',{group:true})).catch(()=>{})}/>}
 </View>;
}
