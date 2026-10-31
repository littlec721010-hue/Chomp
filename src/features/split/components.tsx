import type { ReactNode } from 'react'
import { KeyboardAvoidingView, Platform, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { theme } from '../../styles/theme'
import Back from '../../assets/split/1f61f.svg'
import Battery from '../../../public/assets/navigation/battery.svg'
import Wifi from '../../../public/assets/navigation/wifi.svg'
import Cellular from '../../../public/assets/navigation/cellular.svg'
export function SplitFrame({children,onBack,bottomPadding=44,footer}:{children:ReactNode;onBack?:()=>void;bottomPadding?:number;footer?:ReactNode}) {
  return <View style={s.safe}><KeyboardAvoidingView style={s.safe} behavior={Platform.OS==='ios'?'padding':undefined}>
    <ScrollView keyboardShouldPersistTaps="handled" showsVerticalScrollIndicator={false} contentContainerStyle={[s.content,{paddingBottom:bottomPadding}]}>

      <View style={{ paddingTop: Platform.OS === 'web' ? 5 : 0 }}>
      {onBack&&<Pressable accessibilityRole="button" accessibilityLabel="Back to Split" hitSlop={10} style={s.back} onPress={onBack}><Back/></Pressable>}{children}
      </View>
    </ScrollView>{footer&&<View style={{paddingHorizontal:20,paddingTop:12,paddingBottom:20,backgroundColor:theme.colors.background}}>{footer}</View>}
  </KeyboardAvoidingView></View>
}
export function SplitAction({label,onPress,children,trailing,secondary=false,disabled=false,height=48}:{label:string;onPress:()=>void;children?:ReactNode;trailing?:ReactNode;secondary?:boolean;disabled?:boolean;height?:number}) {return <Pressable accessibilityRole="button" disabled={disabled} onPress={onPress} style={({pressed})=>[s.action,{height},secondary&&{backgroundColor:'#a53b22'},(pressed||disabled)&&{opacity:.6}]}>{children}<Text style={[s.actionText,secondary&&{color:'white'}]}>{label}</Text>{trailing}</Pressable>}
const s=StyleSheet.create({safe:{flex:1,backgroundColor:theme.colors.background},status:{height:47,marginHorizontal:-20,marginTop:-5},time:{position:'absolute',left:50,top:12,fontSize:17,lineHeight:22,fontWeight:'600',color:'#181818'},icons:{position:'absolute',right:32,top:17,flexDirection:'row',alignItems:'center',gap:5},content:{paddingHorizontal:20,paddingTop:5,paddingBottom:44,flexGrow:1},back:{height:24,width:24,marginTop:0,marginBottom:0,flexShrink:0},action:{height:48,borderRadius:999,backgroundColor:theme.colors.primary,flexDirection:'row',gap:8,justifyContent:'center',alignItems:'center'},actionText:{fontSize:15,lineHeight:20,fontFamily:theme.fonts.bold,color:theme.colors.onPrimary}})
