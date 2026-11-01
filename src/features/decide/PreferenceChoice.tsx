import React, { useEffect, useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { T, Message } from '../../components/ui';
import { useAccount } from '../../state/AccountProvider';
import { useDining } from '../DiningProvider';
import type { RootStackParamList } from '../../navigation/types';
import type { Preferences } from '../../types/models';
import { fonts } from '../../theme/tokens';
import { diningPreferences } from '../preferencesAdapter';
import { pickRandom, rankRestaurants } from '../group/model';
import { restaurants } from '../recommendations/data';
import { Icon, type IconName } from './assets';
import { Action, Page } from './ui';

const fields: {label:string; icon:IconName; small:IconName; color:string; hint:string; value:(p:Preferences)=>string}[]=[
 {label:'FAVORITES',icon:'36920.svg',small:'eee56.svg',color:'#FFF2B8',hint:'Choose the cuisines you enjoy most',value:p=>p.cuisines.join(', ')||'Any cuisine'},
 {label:'DISLIKE',icon:'3eb93.svg',small:'39f93.svg',color:'#DDFBF4',hint:'Mark foods or ingredients you prefer to avoid',value:p=>p.dislikedFoods.join(', ')||'None'},
 {label:'ALLERGIES',icon:'8b7a5.svg',small:'e36ed.svg',color:'#FFE7DB',hint:'Add any food allergies or restrictions',value:p=>p.allergens.join(', ')||'None'},
 {label:'DIETARY',icon:'77429.svg',small:'14d47.svg',color:'#D6F5D6',hint:'Set your dietary preferences or requirements',value:p=>p.dietaryHabits.join(', ')||'None'},
 {label:'BUDGET',icon:'61292.svg',small:'981b3.svg',color:'#DEE8FF',hint:'Choose your preferred price range',value:p=>`$${p.budgetMin}–${p.budgetMax}`},
 {label:'DISTANCE',icon:'684da.svg',small:'623c6.svg',color:'#EEE0D4',hint:'Set how far you’re willing to travel',value:p=>p.travelMiles===null?'No preference':`Within ${p.travelMiles} miles`},
];
export function PreferenceChoice({route,navigation}:NativeStackScreenProps<RootStackParamList,'DecidePreferences'>) {
 const account=useAccount(),d=useDining(),group=route.params?.group??false;
 const [contentWidth,setContentWidth]=useState(0);
 const wide=contentWidth>=350;
 const customized=route.params?.customized??false;
 const [choice,setChoice]=useState<'saved'|'custom'|null>(customized?'custom':null),[error,setError]=useState<string|null>(null);
 useEffect(()=>{if(customized){setChoice('custom');setError(null);}},[customized,d.meal]);
 function submit(surprise=false) {
  if(!choice){setError('Choose saved preferences or customize for this time.');return;}
  if(choice==='custom'&&!customized){navigation.navigate('DecideEditPreferences',{group});return;}
  const preferences=choice==='custom'?d.meal:account.preferences;
  d.saveMeal(preferences,group);
  if(group){if(!d.room){navigation.replace('Group');return;}navigation.navigate('GroupConsensus');return;}
  if(surprise){const matches=rankRestaurants(restaurants,[{...d.user,preferences:diningPreferences(preferences)}]);if(!matches.length){setError('No sample restaurants match these preferences. Customize your preferences to try again.');return;}const r=pickRandom(matches);d.select(r);navigation.navigate('Restaurant',{id:r.id});}
  else navigation.navigate('Recommendations',{group:false});
 }
 return <Page title="How would you like to set your preferences?" onBack={()=>navigation.canGoBack()?navigation.goBack():navigation.navigate('Main',{screen:'Decide'})}>
  <Pressable accessibilityRole="radio" accessibilityState={{checked:choice==='saved'}} onPress={()=>{setChoice('saved');setError(null);}} onLayout={event=>setContentWidth(event.nativeEvent.layout.width)} style={[styles.option,choice==='saved'&&styles.selectedOption]}>
   <View style={styles.heading}><T style={styles.optionTitle}>Use Saved Profile Preferences</T><Radio selected={choice==='saved'}/></View><T style={styles.description}>Instantly use your existing default profile settings.</T>
   <View style={styles.summary}><T style={styles.eyebrow}>DEFAULT</T><View style={styles.grid}>{fields.map(f=><View key={f.label} style={styles.field}><View style={[styles.icon,{backgroundColor:f.color}]}><Icon name={f.icon}/></View><View style={{flex:1,minWidth:0}}><T style={styles.label}>{f.label}</T><T numberOfLines={1} style={styles.value}>{f.value(account.preferences)}</T></View></View>)}</View></View>
  </Pressable>
  <Pressable accessibilityRole="radio" accessibilityState={{checked:choice==='custom'}} onPress={()=>{setChoice('custom');setError(null);navigation.navigate('DecideEditPreferences',{group});}} onLayout={event=>setContentWidth(event.nativeEvent.layout.width)} style={[styles.option,choice==='custom'&&styles.selectedOption]}>
   <View style={styles.heading}><T style={styles.optionTitle}>Customize for This Time Only</T><Radio selected={choice==='custom'}/></View><T style={styles.description}>Tweak your preferences for this time without modifying your master profile.</T>
   {customized?<View style={styles.summary}><T style={styles.eyebrow}>FOR THIS TIME</T><View style={styles.grid}>{fields.map(f=><View key={f.label} style={styles.field}><View style={[styles.icon,{backgroundColor:f.color}]}><Icon name={f.icon}/></View><View style={{flex:1,minWidth:0}}><T style={styles.label}>{f.label}</T><T numberOfLines={1} style={styles.value}>{f.value(d.meal)}</T></View></View>)}</View></View>:<View style={styles.hints}>{fields.map(f=><View key={f.label} style={styles.hint}><Icon name={f.small}/><T numberOfLines={wide?1:undefined} adjustsFontSizeToFit={wide} minimumFontScale={0.85} style={{fontSize:12,lineHeight:22,flex:1,minWidth:0}}>{f.hint}</T></View>)}</View>}
  </Pressable>
  <Message text={error}/><View style={{gap:14,marginHorizontal:24,marginTop:4}}><Action title={group?'Submit & View Group Summary':'Submit & Show Me Options'} icon="1fbe0.svg" onPress={()=>submit()}/>{!group && <Action title="Submit & Surprise Me" icon="41dba.svg" variant="red" onPress={()=>submit(true)}/>}</View>
 </Page>;
}
function Radio({selected}:{selected:boolean}){return <View style={[styles.radio,selected&&{backgroundColor:'#FFD43B',borderColor:'#C99C00'}]}>{selected&&<Icon name="3c93a.svg"/>}</View>;}
const styles=StyleSheet.create({selectedOption:{borderColor:'#C99C00',backgroundColor:'#fffbed'},option:{backgroundColor:'white',borderWidth:1,borderColor:'#E8DDD2',borderRadius:21,padding:12,gap:8,boxShadow:'0px 8px 24px -4px rgba(62,45,18,0.08)'},heading:{flexDirection:'row',gap:8,alignItems:'center'},optionTitle:{fontFamily:fonts.extra,fontSize:17,lineHeight:25.5,flex:1},description:{fontSize:13,lineHeight:21.13},radio:{width:24,height:24,borderRadius:12,borderWidth:2,borderColor:'#C99C00',alignItems:'center',justifyContent:'center'},summary:{backgroundColor:'#FFF1E5',borderRadius:21,borderWidth:1,borderColor:'#E8DDD2',padding:12,gap:8},eyebrow:{fontFamily:fonts.extra,fontSize:10,lineHeight:15,color:'#8C7E71'},grid:{flexDirection:'row',flexWrap:'wrap',gap:8},field:{width:'48%',flexGrow:1,height:49,borderRadius:12,borderWidth:1,borderColor:'#E8DDD2',backgroundColor:'white',padding:10,flexDirection:'row',alignItems:'center',gap:10},icon:{width:28,height:28,borderRadius:8,alignItems:'center',justifyContent:'center'},label:{fontFamily:fonts.bold,fontSize:10,lineHeight:15,color:'#6B5E52',letterSpacing:.5},value:{fontFamily:fonts.extra,fontSize:12,lineHeight:18},hints:{backgroundColor:'#FFF1E5',borderRadius:21,borderWidth:1,borderColor:'#E8DDD2',paddingHorizontal:14,paddingVertical:8},hint:{flexDirection:'row',alignItems:'center',gap:10}});
