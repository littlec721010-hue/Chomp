import { useEffect, useRef, useState } from 'react'
import { useIsFocused } from '@react-navigation/native'
import { ReceiptCamera, type ReceiptCameraHandle } from './ReceiptCamera'
import { Image, Modal, Platform, Pressable, StyleSheet, Text, View } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import type { RootStackParamList } from '../../navigation/types'
import { SplitFrame, SplitAction } from './components'
import { emptyReceipt } from './model'
import { useSplit } from './store'
import { recognizeReceipt } from './ocr'
import { sameScan } from './scan-duplicate'
import { findScannedReceipt } from './repository'
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
  const {setDraft,setPhotoUri,draft,recent,setForms}=useSplit(),account=useAccount(),[uri,setUri]=useState(route.params?.imageUri),[phase,setPhase]=useState(0),[previewWidth,setPreviewWidth]=useState(334),[running,setRunning]=useState(false),[message,setMessage]=useState(''),[failed,setFailed]=useState(false),[progress,setProgress]=useState(0),[duplicate,setDuplicate]=useState<{receipt:SplitReceipt;previous:SplitReceipt}|null>(null)
  const [imageSource,setImageSource]=useState<'camera'|'upload'>('upload')
  const focused=useIsFocused(),camera=useRef<ReceiptCameraHandle>(null),[cameraActive,setCameraActive]=useState(false),[cameraReady,setCameraReady]=useState(false)
  useEffect(()=>{if(!focused){setCameraActive(false);setCameraReady(false)}},[focused])
  useEffect(()=>{if(Platform.OS!=='web')return;const hide=()=>{if(document.hidden){setCameraActive(false);setCameraReady(false)}};document.addEventListener('visibilitychange',hide);return()=>document.removeEventListener('visibilitychange',hide)},[])
  const controller=useRef<AbortController|null>(null),mounted=useRef(true)
  useEffect(()=>{mounted.current=true;return()=>{mounted.current=false;controller.current?.abort()}},[])
  function accept(receipt:SplitReceipt){setForms({});setDraft(receipt);setPhotoUri(receipt.source==='ocr'?uri:undefined);navigation.replace('SplitReceipt',{returnTo:'Split'})}
  async function checkDuplicate(receipt:SplitReceipt,signal:AbortSignal){
    let previous=[draft,...recent].find(value=>sameScan(value,receipt));
    if(!previous&&!account.preview&&account.session)previous=await findScannedReceipt(account.session.user.id,receipt)??undefined;
    if(!mounted.current||signal.aborted)return;
    if(previous)setDuplicate({receipt,previous});else accept(receipt);
  }
  async function scan(){
    if(!uri||running)return
    const request=new AbortController();controller.current=request;setRunning(true);setMessage('');setFailed(false);setProgress(0)
    try{const receipt=await recognizeReceipt(uri,request.signal,p=>{if(mounted.current&&!request.signal.aborted){setProgress(p);setPhase(Math.min(2,Math.floor(p*3)))}});if(mounted.current&&!request.signal.aborted)await checkDuplicate(receipt,request.signal)}
    catch(e){if(mounted.current&&!request.signal.aborted){setFailed(true);setMessage(e instanceof Error?e.message:'Unable to recognize this receipt. Retry or enter it manually.')}}
    finally{if(mounted.current&&controller.current===request){setRunning(false);controller.current=null}}
  }
  async function takePhoto(){setMessage('');setFailed(false);if(Platform.OS==='web'){if(cameraActive){const photo=camera.current?.capture();if(photo){setImageSource('camera');setUri(photo);setCameraActive(false);setCameraReady(false);setPhase(0)}else setMessage('Camera is preparing. Please wait a moment and try again.')}else{setCameraReady(false);setCameraActive(true)}return}try{const p=await ImagePicker.requestCameraPermissionsAsync();if(!p.granted){setMessage('Camera permission was denied. Choose a receipt using Photos.');return}const result=await ImagePicker.launchCameraAsync({mediaTypes:['images'],quality:1});if(!result.canceled){setImageSource('camera');setUri(result.assets[0].uri);setPhase(0)}}catch{setMessage('Camera is unavailable here. Choose a receipt using Photos.')}}
  async function choosePhoto(){setCameraActive(false);setCameraReady(false);try{const r=await ImagePicker.launchImageLibraryAsync({mediaTypes:['images'],quality:1});if(!r.canceled){setImageSource('upload');setUri(r.assets[0].uri);setMessage('');setFailed(false);setPhase(0)}}catch{setMessage('Unable to open photo library. Please retry.')}}
  async function retakePhoto(){setUri(undefined);setPhase(0);setMessage('');setFailed(false);await takePhoto()}
  const Scan=[ScanStart,ScanMiddle,ScanEnd][phase]
  function enterManually(){const receipt=emptyReceipt();setDraft(receipt);navigation.replace('SplitManualSetup')}
  return <SplitFrame onBack={()=>navigation.canGoBack()?navigation.goBack():navigation.navigate('Main',{screen:'Split'})}>
    <Text style={s.title}>Scan Paper Receipt</Text><View style={s.tip}><View style={s.tipIcon}><OCR/></View><View style={{flex:1}}><View style={s.tipHeader}><Text style={s.tipTitle}>Position receipt in frame</Text><Text style={s.badge}>English · USD</Text></View><Text style={s.tipText}>Use a clear printed receipt. Recognition runs on this browser; review every amount before saving.</Text></View></View>
    {!!message&&<View style={{marginTop:12,padding:12,borderRadius:12,backgroundColor:'#fff0ec',gap:8}}><Text accessibilityRole="alert" style={s.error}>{message}</Text>{failed&&<View style={{flexDirection:"row",flexWrap:"wrap",gap:12}}><Pressable accessibilityRole="button" disabled={running} onPress={enterManually}><Text style={s.cameraText}>Enter manually</Text></Pressable><Pressable accessibilityRole="button" disabled={running} onPress={()=>imageSource==="camera"?void retakePhoto():void choosePhoto()}><Text style={s.cameraText}>{imageSource==="camera"?"Retake photo":"Upload another photo"}</Text></Pressable></View>}</View>}
    {running&&<Text accessibilityLiveRegion="polite" style={[s.demo,{marginTop:12}]}>{progress===0?'Preparing recognition. The first model download may take longer…':'Reading receipt… '+Math.round(progress*100)+'%'}</Text>}
    <View onLayout={event=>setPreviewWidth(event.nativeEvent.layout.width)} style={[s.preview,{height:490*previewWidth/334}]}><View style={{width:334,height:490,transform:[{scale:previewWidth/334}],transformOrigin:'top left'}}><View accessibilityLabel="Receipt preview frame" style={StyleSheet.absoluteFill}>{uri&&<Image source={{uri}} resizeMode="contain" style={s.receipt} accessibilityLabel="Your selected receipt"/>}{cameraActive&&focused&&<ReceiptCamera ref={camera} onReady={()=>setCameraReady(true)} onError={value=>{setCameraActive(false);setCameraReady(false);setMessage(value)}}/>}</View><View pointerEvents="none" style={s.scanOverlay}><Scan/></View></View></View>
    <View style={s.scanActions}>
      <Pressable accessibilityRole="button" accessibilityLabel="Choose receipt photo" disabled={running} onPress={()=>void choosePhoto()} style={s.scanControl}><View style={s.controlCircle}><Photos/></View><Text style={s.controlLabel}>Photos</Text></Pressable>
      <Pressable accessibilityRole="button" accessibilityLabel={cameraActive?'Capture receipt photo':uri?'Recognize Receipt':'Take receipt photo'} accessibilityState={{disabled:running,busy:running}} disabled={running} onPress={()=>cameraActive?void takePhoto():uri?void scan():void takePhoto()} style={s.scanControl}><View style={[s.shutter,running&&{opacity:.5}]}><View style={s.shutterInside}><Shutter/></View></View><Text style={s.controlLabel}>{running?'Reading…':cameraActive?(cameraReady?'Capture Photo':'Opening…'):uri?'Tap to Scan':'Take Photo'}</Text></Pressable>
      <View accessibilityLabel="Flash controlled by your device camera" style={s.scanControl}><View style={s.controlCircle}><AutoFlash/></View><Text style={s.controlLabel}>Auto</Text></View>
    </View>
    {uri&&imageSource==="camera"&&!cameraActive&&!running&&!failed&&<Pressable accessibilityRole="button" onPress={()=>void retakePhoto()} style={s.camera}><Text style={s.cameraText}>Retake photo</Text></Pressable>}
    {running&&<View style={s.controls}><SplitAction label="Cancel recognition" secondary onPress={()=>{controller.current?.abort();setRunning(false);setFailed(false);setMessage('Recognition cancelled. Your existing bill was kept.')}}/></View>}
    <Modal visible={!!duplicate} transparent animationType="fade" onRequestClose={()=>setDuplicate(null)}><View style={{flex:1,backgroundColor:'#0006',justifyContent:'center',alignItems:'center',padding:24}}><View accessibilityViewIsModal style={{width:'100%',maxWidth:342,backgroundColor:theme.colors.background,padding:24,borderRadius:24,gap:16}}><Text style={s.tipTitle}>Receipt already scanned</Text><Text style={s.tipText}>Replace the previous scan with this result? Review it before saving. Cancel keeps the previous bill unchanged.</Text><SplitAction label="Overwrite Previous Scan" onPress={()=>{if(!duplicate)return;const next={...duplicate.receipt,id:duplicate.previous.id};setDuplicate(null);accept(next)}}/><SplitAction label="Cancel" secondary onPress={()=>setDuplicate(null)}/></View></View></Modal>
  </SplitFrame>
}
const s=StyleSheet.create({title:{marginTop:1,fontFamily:theme.fonts.extrabold,fontSize:24,lineHeight:36,letterSpacing:-.7,color:theme.colors.ink},tip:{marginTop:19,backgroundColor:'white',borderRadius:12,padding:12,flexDirection:'row',alignItems:'flex-start',gap:8,minHeight:82,boxShadow:'0px 1px 1px rgba(0,0,0,0.05)'},tipIcon:{width:32,height:32,borderRadius:16,backgroundColor:'#f9eaba',alignItems:'center',justifyContent:'center',marginTop:2},tipHeader:{flexDirection:'row',alignItems:'center',justifyContent:'space-between',gap:4,flexWrap:'wrap'},tipTitle:{fontFamily:theme.fonts.bold,fontSize:16,lineHeight:22,color:theme.colors.ink},badge:{fontFamily:theme.fonts.semibold,fontSize:11,lineHeight:14,color:'#725b00',backgroundColor:'#f9eaba',paddingHorizontal:4,paddingVertical:2,borderRadius:999},tipText:{fontFamily:theme.fonts.regular,fontSize:12,lineHeight:16,color:theme.colors.ink,marginTop:2},preview:{alignSelf:'center',width:334,maxWidth:'100%',height:490,marginTop:25},receipt:{position:'absolute',left:14,top:7,width:305,height:476},scanOverlay:{position:'absolute',left:-2,top:-2},scanActions:{flexDirection:'row',alignItems:'flex-end',justifyContent:'space-between',paddingHorizontal:24,marginTop:16},scanControl:{alignItems:'center',justifyContent:'center',gap:4,minWidth:56,minHeight:72},controlCircle:{width:48,height:48,borderRadius:999,backgroundColor:'white',alignItems:'center',justifyContent:'center',boxShadow:'0px 1px 1px rgba(0,0,0,.1)'},controlLabel:{fontFamily:theme.fonts.bold,fontSize:11,lineHeight:14,color:theme.colors.ink},shutter:{width:72,height:72,padding:4,borderRadius:999,backgroundColor:theme.colors.primary,boxShadow:'0px 4px 8px rgba(0,0,0,.1)'},shutterInside:{flex:1,borderRadius:999,backgroundColor:'white',alignItems:'center',justifyContent:'center'},controls:{marginTop:16,gap:12},demo:{fontFamily:theme.fonts.regular,fontSize:12,lineHeight:18,color:theme.colors.muted,textAlign:'center'},camera:{alignSelf:'center',padding:8},cameraText:{fontFamily:theme.fonts.bold,fontSize:14,color:theme.colors.secondary},error:{fontFamily:theme.fonts.regular,fontSize:12,lineHeight:18,color:theme.colors.secondary}})


