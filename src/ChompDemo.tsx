import { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ChompModule, screens, type Route } from './features/ChompModule';
import { demoMembers } from './features/recommendations/data';
import { Button, Sheet, ui } from './features/native/Controls';
import type { ChompModuleProps } from './features/contracts';
/** Demo-only navigation keeps teammates' screens outside this module. */
export function ChompDemo(){
  const [route,setRoute]=useState<Route>('/group');
  const [preferencesStep,setPreferencesStep]=useState<Parameters<NonNullable<ChompModuleProps['onPreferences']>>|null>(null);
  const [boundary,setBoundary]=useState(false);const [showScreens,setShowScreens]=useState(false);const [session,setSession]=useState(0);
  const wide=useWindowDimensions().width>=800;
  const go=(next:Route)=>{setRoute(next);setBoundary(false);setShowScreens(false);};
  const links=<>{Object.entries(screens).map(([path,screen])=><Button key={path} secondary={route!==path} onPress={()=>go(path as Route)}>{screen.label}</Button>)}<Text style={ui.body}>Local sample data. Group activity is simulated.</Text><Button secondary onPress={()=>{void AsyncStorage.removeItem('chomp.yuhan.native.v1').then(()=>{go('/group');setSession(s=>s+1);});}}>Reset demo</Button></>;
  return <View style={styles.root}>
    {wide&&<ScrollView style={styles.sidebar} contentContainerStyle={{padding:24,gap:12}}><Text style={ui.title}>CHOMP · YUHAN</Text><Text style={ui.body}>Interactive HiFi preview</Text>{links}</ScrollView>}
    <View style={{flex:1}}><ChompModule key={session} route={route} onNavigate={go} user={demoMembers[0]} onHome={()=>setBoundary(true)} onPreferences={(...args)=>setPreferencesStep(args)}/></View>
    <Sheet visible={showScreens} title="Preview screens" onClose={()=>setShowScreens(false)}>{links}</Sheet>
    <Sheet visible={!!preferencesStep} title="Dining preferences" onClose={()=>setPreferencesStep(null)}><Text style={ui.body}>Shan owns this screen. Continue with sample preferences to preview Yuhan’s consensus report.</Text><Text style={ui.buttonText}>{preferencesStep?.[0].name}</Text><Button onPress={()=>{preferencesStep?.[1](demoMembers[0].preferences);setPreferencesStep(null);}}>Continue with demo preferences</Button></Sheet>
    <Sheet visible={boundary} title="Choose a preview flow" onClose={()=>setBoundary(false)}><Text style={ui.body}>The main home and Split screens belong to Tongrong. Choose Yuhan’s flow to preview.</Text><Button onPress={()=>go('/recommendations')}>Solo recommendations</Button><Button secondary onPress={()=>go('/group')}>Eat with the squad</Button><Button secondary onPress={()=>{setBoundary(false);setShowScreens(true);}}>Preview all screens</Button></Sheet>
  </View>;
}
const styles=StyleSheet.create({root:{flex:1,flexDirection:'row',backgroundColor:'#fff8f4'},sidebar:{width:310,flexGrow:0,backgroundColor:'#f4e6d9'},preview:{position:'absolute',top:12,right:12,padding:8,borderRadius:16,backgroundColor:'#ffd43b',opacity:.9}});
