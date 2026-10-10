import { useEffect, useState } from 'react'
import { Image, Platform, Pressable, StyleSheet, Text, View } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import type { RootStackParamList } from '../../navigation/types'
import { SplitFrame, SplitAction } from './components'
import { cloneReceipt, emptyReceipt, sampleReceipt } from './model'
import { useSplit } from './store'
import { theme } from '../../styles/theme'
import OCR from '../../assets/split/4a5bf.svg'
import ScanStart from '../../assets/split/8887b.svg'
import ScanMiddle from '../../assets/split/5e9b5.svg'
import ScanEnd from '../../assets/split/c3379.svg'
export function SplitScanScreen({route,navigation}:NativeStackScreenProps<RootStackParamList,'SplitScan'>) {
  const {setDraft}=useSplit(),[uri,setUri]=useState(route.params?.imageUri),[phase,setPhase]=useState(0),[previewWidth,setPreviewWidth]=useState(334),[running,setRunning]=useState(false),[message,setMessage]=useState('')
  useEffect(()=>{if(!running)return;const timer=setTimeout(()=>{if(phase<2)setPhase(phase+1);else{setDraft(cloneReceipt(sampleReceipt));navigation.replace('SplitReceipt')}},650);return()=>clearTimeout(timer)},[running,phase,navigation,setDraft])
  async function takePhoto(){setMessage('');try{if(Platform.OS!=='web'){const p=await ImagePicker.requestCameraPermissionsAsync();if(!p.granted){setMessage('Camera permission is needed. You can use the sample instead.');return}}const result=await ImagePicker.launchCameraAsync({mediaTypes:['images'],quality:1});if(!result.canceled){setUri(result.assets[0].uri);setPhase(0)}}catch{setMessage('Camera is unavailable here. Choose Photo on Split or use the sample receipt.')}}
  const Scan=[ScanStart,ScanMiddle,ScanEnd][phase]
  function enterManually(){setDraft(emptyReceipt());navigation.replace('SplitReceipt')}
  return <SplitFrame onBack={()=>navigation.canGoBack()?navigation.goBack():navigation.navigate('Main',{screen:'Split'})}>
    <Text style={s.title}>Scan Paper Receipt</Text><View style={s.tip}><View style={s.tipIcon}><OCR/></View><View style={{flex:1}}><View style={s.tipHeader}><Text style={s.tipTitle}>Position receipt in frame</Text><Text style={s.badge}>{uri?'Manual entry':'Auto OCR'}</Text></View><Text style={s.tipText}>Make sure all items, prices, tax, and tip are visible &amp; glare-free.</Text></View></View>
    <View onLayout={event=>setPreviewWidth(event.nativeEvent.layout.width)} style={[s.preview,{height:490*previewWidth/334}]}><View style={{width:334,height:490,transform:[{scale:previewWidth/334}],transformOrigin:'top left'}}><Image source={uri?{uri}:require('../../assets/split/f04dd.png')} resizeMode={uri?'contain':'cover'} style={s.receipt} accessibilityLabel={uri?'Your selected receipt':'Figma sample receipt'}/><View pointerEvents="none" style={s.scanOverlay}><Scan/></View></View></View>
    <View style={s.controls}><Text accessibilityLiveRegion="polite" style={s.demo}>{running?'Scanning sample receipt…':uri?'OCR is not connected. Enter the items from your photo.':'Sample receipt preview. Scan the sample or take your own photo.'}</Text><SplitAction label={uri?'Enter receipt manually':running?'Scanning…':'Scan sample receipt'} disabled={running} onPress={uri?enterManually:()=>{setPhase(0);setRunning(true)}}/><Pressable accessibilityRole="button" onPress={takePhoto} disabled={running} style={s.camera}><Text style={s.cameraText}>Take photo</Text></Pressable>{!!message&&<Text accessibilityRole="alert" style={s.error}>{message}</Text>}</View>
  </SplitFrame>
}
const s=StyleSheet.create({title:{marginTop:1,fontFamily:theme.fonts.extrabold,fontSize:24,lineHeight:36,letterSpacing:-.7,color:theme.colors.ink},tip:{marginTop:19,backgroundColor:'white',borderRadius:12,padding:12,flexDirection:'row',alignItems:'flex-start',gap:8,minHeight:82,boxShadow:'0px 1px 1px rgba(0,0,0,0.05)'},tipIcon:{width:32,height:32,borderRadius:16,backgroundColor:'#f9eaba',alignItems:'center',justifyContent:'center',marginTop:2},tipHeader:{flexDirection:'row',alignItems:'center',justifyContent:'space-between',gap:4,flexWrap:'wrap'},tipTitle:{fontFamily:theme.fonts.bold,fontSize:16,lineHeight:22,color:theme.colors.ink},badge:{fontFamily:theme.fonts.semibold,fontSize:11,lineHeight:14,color:'#725b00',backgroundColor:'#f9eaba',paddingHorizontal:4,paddingVertical:2,borderRadius:999},tipText:{fontFamily:theme.fonts.regular,fontSize:12,lineHeight:16,color:theme.colors.ink,marginTop:2},preview:{alignSelf:'center',width:334,maxWidth:'100%',height:490,marginTop:25},receipt:{position:'absolute',left:14,top:7,width:305,height:476},scanOverlay:{position:'absolute',left:-2,top:-2},controls:{marginTop:24,gap:12},demo:{fontFamily:theme.fonts.regular,fontSize:12,lineHeight:18,color:theme.colors.muted,textAlign:'center'},camera:{alignSelf:'center',padding:8},cameraText:{fontFamily:theme.fonts.bold,fontSize:14,color:theme.colors.secondary},error:{fontFamily:theme.fonts.regular,fontSize:12,lineHeight:18,color:theme.colors.secondary}})
