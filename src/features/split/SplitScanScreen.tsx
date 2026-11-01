import { useEffect, useRef, useState } from 'react'
import { Image, Modal, Platform, Pressable, StyleSheet, Text, View } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import type { RootStackParamList } from '../../navigation/types'
import { SplitFrame, SplitAction } from './components'
import { cloneReceipt, emptyReceipt, sampleReceipt } from './model'
import { useSplit } from './store'
import { recognizeReceipt } from './ocr'
import { useAccount } from '../../state/AccountProvider'
import type { SplitReceipt } from './model'
import { theme } from '../../styles/theme'
import OCR from '../../assets/split/4a5bf.svg'
import ScanStart from '../../assets/split/8887b.svg'
import ScanMiddle from '../../assets/split/5e9b5.svg'
import ScanEnd from '../../assets/split/c3379.svg'
import Shutter from '../../assets/split/84297.svg'
import Photos from '../../assets/split/fbcbb.svg'
import AutoFlash from '../../assets/split/b29f7.svg'
export function SplitScanScreen({route,navigation}:NativeStackScreenProps<RootStackParamList,'SplitScan'>) {
  const {setDraft,draft,setPhotoUri}=useSplit(),account=useAccount(),[uri,setUri]=useState(route.params?.imageUri),[phase,setPhase]=useState(0),[previewWidth,setPreviewWidth]=useState(334),[running,setRunning]=useState(false),[message,setMessage]=useState(''),[progress,setProgress]=useState(0),[replacement,setReplacement]=useState<SplitReceipt|null>(null)
  const controller=useRef<AbortController|null>(null),mounted=useRef(true)
  useEffect(()=>{mounted.current=true;return()=>{mounted.current=false;controller.current?.abort()}},[])
  function accept(receipt:SplitReceipt){if(draft.items.length){setReplacement(receipt);return}setDraft(receipt);setPhotoUri(receipt.source==='ocr'?uri:undefined);navigation.replace('SplitReceipt',{returnTo:'Split'})}
  async function scan(){
    if(!uri||running)return
    const request=new AbortController();controller.current=request;setRunning(true);setMessage('');setProgress(0)
    try{const receipt=await recognizeReceipt(uri,request.signal,p=>{if(mounted.current&&!request.signal.aborted){setProgress(p);setPhase(Math.min(2,Math.floor(p*3)))}});if(mounted.current&&!request.signal.aborted)accept(receipt)}
    catch(e){if(mounted.current&&!request.signal.aborted)setMessage(e instanceof Error?e.message:'Unable to recognize this receipt. Retry or enter it manually.')}
    finally{if(mounted.current&&controller.current===request){setRunning(false);controller.current=null}}
  }
  async function takePhoto(){setMessage('');try{if(Platform.OS!=='web'){const p=await ImagePicker.requestCameraPermissionsAsync();if(!p.granted){setMessage('Camera permission was denied. Choose a photo or create a bill manually.');return}}const result=await ImagePicker.launchCameraAsync({mediaTypes:['images'],quality:1});if(!result.canceled){setUri(result.assets[0].uri);setPhase(0)}}catch{setMessage('Camera is unavailable here. Choose another photo or create a bill manually.')}}
  async function choosePhoto(){try{const r=await ImagePicker.launchImageLibraryAsync({mediaTypes:['images'],quality:1});if(!r.canceled){setUri(r.assets[0].uri);setMessage('');setPhase(0)}}catch{setMessage('Unable to open photo library. Please retry.')}}
  const Scan=[ScanStart,ScanMiddle,ScanEnd][phase]
  function enterManually(){const receipt=emptyReceipt();if(draft.items.length){setReplacement(receipt);return}setDraft(receipt);navigation.replace('SplitManualSetup')}
  return <SplitFrame onBack={()=>navigation.canGoBack()?navigation.goBack():navigation.navigate('Main',{screen:'Split'})}>
    <Text style={s.title}>Scan Paper Receipt</Text><View style={s.tip}><View style={s.tipIcon}><OCR/></View><View style={{flex:1}}><View style={s.tipHeader}><Text style={s.tipTitle}>Position receipt in frame</Text><Text style={s.badge}>English · USD</Text></View><Text style={s.tipText}>Use a clear printed receipt. Recognition runs on this browser; review every amount before saving.</Text></View></View>
    {!!message&&<View style={{marginTop:12,padding:12,borderRadius:12,backgroundColor:'#fff0ec',gap:8}}><Text accessibilityRole="alert" style={s.error}>{message}</Text><Pressable accessibilityRole="button" disabled={running} onPress={enterManually}><Text style={s.cameraText}>Use manual entry instead</Text></Pressable></View>}
    {running&&<Text accessibilityLiveRegion="polite" style={[s.demo,{marginTop:12}]}>{progress===0?'Preparing recognition. The first model download may take longer…':'Reading receipt… '+Math.round(progress*100)+'%'}</Text>}
    <View onLayout={event=>setPreviewWidth(event.nativeEvent.layout.width)} style={[s.preview,{height:490*previewWidth/334}]}><View style={{width:334,height:490,transform:[{scale:previewWidth/334}],transformOrigin:'top left'}}><View accessibilityLabel="Receipt preview frame" style={StyleSheet.absoluteFill}>{uri&&<Image source={{uri}} resizeMode="contain" style={s.receipt} accessibilityLabel="Your selected receipt"/>}</View><View pointerEvents="none" style={s.scanOverlay}><Scan/></View></View></View>
    <View style={s.scanActions}>
      <Pressable accessibilityRole="button" accessibilityLabel="Choose receipt photo" disabled={running} onPress={()=>void choosePhoto()} style={s.scanControl}><View style={s.controlCircle}><Photos/></View><Text style={s.controlLabel}>Photos</Text></Pressable>
      <Pressable accessibilityRole="button" accessibilityLabel={uri?'Recognize Receipt':'Take receipt photo'} accessibilityState={{disabled:running,busy:running}} disabled={running} onPress={()=>uri?void scan():void takePhoto()} style={s.scanControl}><View style={[s.shutter,running&&{opacity:.5}]}><View style={s.shutterInside}><Shutter/></View></View><Text style={s.controlLabel}>{running?'Reading…':uri?'Tap to Scan':'Take Photo'}</Text></Pressable>
      <View accessibilityLabel="Flash controlled by your device camera" style={s.scanControl}><View style={s.controlCircle}><AutoFlash/></View><Text style={s.controlLabel}>Auto</Text></View>
    </View>
    <View style={s.controls}><Text accessibilityLiveRegion="polite" style={s.demo}>{running?`Loading/recognizing… ${Math.round(progress*100)}%`:uri?'First use downloads the OCR model. The image stays in this browser; only the confirmed bill is saved.':'Choose Photos or take a photo to recognize your receipt. The frame is a preview.'}</Text>
      {running?<SplitAction label="Cancel recognition" secondary onPress={()=>{controller.current?.abort();setRunning(false);setMessage('Recognition cancelled. Your existing bill was kept.')}}/>:<Pressable accessibilityRole="button" onPress={()=>void takePhoto()} style={s.camera}><Text style={s.cameraText}>Take another photo</Text></Pressable>}
      <SplitAction label="Create Bill Manually" disabled={running} secondary onPress={enterManually}/>{account.preview&&!running&&<SplitAction label="Use labelled sample (Demo only)" onPress={()=>accept(cloneReceipt(sampleReceipt))}/>}</View>
    <Modal visible={!!replacement} transparent animationType="fade" onRequestClose={()=>setReplacement(null)}><View style={{flex:1,backgroundColor:'#0006',justifyContent:'center',padding:24}}><View accessibilityViewIsModal style={{backgroundColor:'white',padding:24,borderRadius:24,gap:16}}><Text style={s.tipTitle}>Replace current bill draft?</Text><Text style={s.tipText}>Unsaved edits will be replaced. Saved history will remain.</Text><SplitAction label="Keep current draft" onPress={()=>setReplacement(null)}/><SplitAction label="Replace draft" secondary onPress={()=>{if(!replacement)return;const next=replacement;setReplacement(null);setDraft(next);setPhotoUri(next.source==='ocr'?uri:undefined);next.items.length?navigation.replace('SplitReceipt',{returnTo:'Split'}):navigation.replace('SplitManualSetup')}}/></View></View></Modal>
  </SplitFrame>
}
const s=StyleSheet.create({title:{marginTop:1,fontFamily:theme.fonts.extrabold,fontSize:24,lineHeight:36,letterSpacing:-.7,color:theme.colors.ink},tip:{marginTop:19,backgroundColor:'white',borderRadius:12,padding:12,flexDirection:'row',alignItems:'flex-start',gap:8,minHeight:82,boxShadow:'0px 1px 1px rgba(0,0,0,0.05)'},tipIcon:{width:32,height:32,borderRadius:16,backgroundColor:'#f9eaba',alignItems:'center',justifyContent:'center',marginTop:2},tipHeader:{flexDirection:'row',alignItems:'center',justifyContent:'space-between',gap:4,flexWrap:'wrap'},tipTitle:{fontFamily:theme.fonts.bold,fontSize:16,lineHeight:22,color:theme.colors.ink},badge:{fontFamily:theme.fonts.semibold,fontSize:11,lineHeight:14,color:'#725b00',backgroundColor:'#f9eaba',paddingHorizontal:4,paddingVertical:2,borderRadius:999},tipText:{fontFamily:theme.fonts.regular,fontSize:12,lineHeight:16,color:theme.colors.ink,marginTop:2},preview:{alignSelf:'center',width:334,maxWidth:'100%',height:490,marginTop:25},receipt:{position:'absolute',left:14,top:7,width:305,height:476},scanOverlay:{position:'absolute',left:-2,top:-2},scanActions:{flexDirection:'row',alignItems:'flex-end',justifyContent:'space-between',paddingHorizontal:24,marginTop:16},scanControl:{alignItems:'center',justifyContent:'center',gap:4,minWidth:56,minHeight:72},controlCircle:{width:48,height:48,borderRadius:999,backgroundColor:'white',alignItems:'center',justifyContent:'center',boxShadow:'0px 1px 1px rgba(0,0,0,.1)'},controlLabel:{fontFamily:theme.fonts.bold,fontSize:11,lineHeight:14,color:theme.colors.ink},shutter:{width:72,height:72,padding:4,borderRadius:999,backgroundColor:theme.colors.primary,boxShadow:'0px 4px 8px rgba(0,0,0,.1)'},shutterInside:{flex:1,borderRadius:999,backgroundColor:'white',alignItems:'center',justifyContent:'center'},controls:{marginTop:16,gap:12},demo:{fontFamily:theme.fonts.regular,fontSize:12,lineHeight:18,color:theme.colors.muted,textAlign:'center'},camera:{alignSelf:'center',padding:8},cameraText:{fontFamily:theme.fonts.bold,fontSize:14,color:theme.colors.secondary},error:{fontFamily:theme.fonts.regular,fontSize:12,lineHeight:18,color:theme.colors.secondary}})
