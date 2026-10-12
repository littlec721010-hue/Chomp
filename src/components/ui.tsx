import React from 'react';
import { ActivityIndicator, KeyboardAvoidingView, Modal, Platform, Pressable, ScrollView, StyleSheet, Text, TextInput, View, type TextInputProps, type TextProps, type ViewStyle, type StyleProp } from 'react-native';
import { Image } from 'expo-image';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors as c, fonts } from '../theme/tokens';
import { figmaAssets, type FigmaAsset } from '../theme/assets';
import dimensions from '../../assets/figma/dimensions.json';
import Svg, { Defs, RadialGradient, Stop, Rect, Circle } from 'react-native-svg';
const FrameGlowContext=React.createContext<(enabled:boolean)=>void>(()=>{});
export const useFrameGlow=()=>React.useContext(FrameGlowContext);

export function T({ style, ...props }: TextProps) { return <Text {...props} style={[{ fontFamily: fonts.regular, color: c.ink, fontSize: 14, lineHeight: 20 }, style]} />; }
export function Asset({ name, width, height }: { name: FigmaAsset; width?: number; height?: number }) {
  const size = (dimensions as Record<string, { width: number; height: number }>)[name];
  const source = figmaAssets[name] as any;
  if (name.endsWith('.svg')) { const Svg = source.default ?? source; return <Svg width={size?.width ?? width ?? 124} height={size?.height ?? height ?? 124} />; }
  return <Image source={source} contentFit="contain" accessibilityElementsHidden style={{ width: size?.width ?? width ?? 124, height: size?.height ?? height ?? 124 }} />;
}
export function Button({ title, onPress, busy, disabled, style, small, icon }: { title: string; onPress: () => void; busy?: boolean; disabled?: boolean; style?: StyleProp<ViewStyle>; small?: boolean; icon?: FigmaAsset }) {
  return <Pressable accessibilityRole="button" accessibilityLabel={title} accessibilityState={{ disabled: disabled || busy, busy }} disabled={disabled || busy} onPress={onPress} style={({ pressed }) => [styles.button, small && { minHeight: 44, borderRadius: 8 }, style, { opacity: disabled || busy ? 0.55 : pressed ? 0.8 : 1 }]}>
    {busy ? <ActivityIndicator color={c.yellowText} /> : <><T style={{ fontFamily: fonts.bold, color: c.yellowText, fontSize: small ? 14 : 15 }}>{title}</T>{icon && <Asset name={icon} />}</>}
  </Pressable>;
}
export function Back({ onPress, compact = false }: { onPress: () => void; compact?: boolean }) { return <Pressable accessibilityRole="button" accessibilityLabel="Back" onPress={onPress} hitSlop={8} style={{ width: 44, height: compact ? 28 : 44, justifyContent: 'center' }}><Asset name="06964.svg" /></Pressable>; }
export function Field({ icon, ...props }: TextInputProps & { icon: FigmaAsset }) { return <View style={styles.field}><Asset name={icon} /><TextInput placeholderTextColor={c.placeholder} autoCapitalize="none" {...props} style={[styles.input, props.style]} /></View>; }
export function Message({ text, success }: { text?: string | null; success?: boolean }) { return text ? <T accessibilityRole="alert" style={{ color: success ? '#326740' : c.red, fontSize: 12, lineHeight: 18, marginVertical: 8 }}>{text}</T> : null; }
export function ScreenLayout({ children, contentStyle, footer }: React.PropsWithChildren<{ contentStyle?: StyleProp<ViewStyle>; footer?: React.ReactNode }>) {
  return <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}><ScrollView keyboardShouldPersistTaps="handled" contentContainerStyle={[{ flexGrow: 1, paddingBottom: 28 }, contentStyle]}>{children}</ScrollView>{footer}</KeyboardAvoidingView>;
}
export function Card({ children, style }: React.PropsWithChildren<{ style?: StyleProp<ViewStyle> }>) { return <View style={[styles.card, style]}>{children}</View>; }
export function Dialog({ title, visible, onClose, children }: React.PropsWithChildren<{ title: string; visible: boolean; onClose: () => void }>) {
  return <Modal visible={visible} transparent animationType="fade" onRequestClose={onClose}><KeyboardAvoidingView style={styles.overlay} behavior={Platform.OS === 'ios' ? 'padding' : undefined}><View accessibilityViewIsModal style={styles.dialog}><View style={styles.row}><T style={{ fontSize: 21, lineHeight: 28, fontFamily: fonts.bold, flex: 1 }}>{title}</T><Pressable accessibilityRole="button" accessibilityLabel="Close" onPress={onClose} style={{ padding: 12 }}><T style={{ fontSize: 22 }}>×</T></Pressable></View><ScrollView keyboardShouldPersistTaps="handled">{children}</ScrollView></View></KeyboardAvoidingView></Modal>;
}
export function DeviceFrame({ children }: React.PropsWithChildren) {
  const insets = useSafeAreaInsets();
  const [glow,setGlow]=React.useState(false);
  const [frameWidth,setFrameWidth]=React.useState(390);
  return <View onLayout={event=>setFrameWidth(event.nativeEvent.layout.width)} style={{ flex: 1, width: '100%', maxWidth: 390, backgroundColor: c.background, paddingTop: Platform.OS === 'web' ? 0 : insets.top, paddingBottom: Platform.OS === 'web' ? 0 : insets.bottom }}>
    {glow&&Platform.OS==='web'&&<View pointerEvents="none" style={[StyleSheet.absoluteFill,{overflow:'hidden'}]}><View style={{position:'absolute',width:390,height:844,transform:[{scale:frameWidth/390}],transformOrigin:'top left'}}>
      <View style={{position:'absolute',left:36,top:-48,width:320,height:320,borderRadius:160,backgroundColor:'rgba(255,212,59,0.25)',filter:'blur(32px)'}}/>
      <View style={{position:'absolute',left:231,top:192,width:224,height:224,borderRadius:112,backgroundColor:'rgba(254,125,94,0.2)',filter:'blur(20px)'}}/>
      <View style={{position:'absolute',left:-48,top:320,width:192,height:192,borderRadius:96,backgroundColor:'rgba(169,231,169,0.3)',filter:'blur(20px)'}}/>
    </View></View>}
    {glow&&Platform.OS!=='web'&&<Svg pointerEvents="none" width="100%" height="100%" viewBox="0 0 390 844" preserveAspectRatio="xMidYMin slice" style={StyleSheet.absoluteFill}>
      <Defs>{[['frame-yellow','#FFD43B'],['frame-pink','#FE7D5E'],['frame-green','#A9E7A9']].map(([id,color])=><RadialGradient key={id} id={id}><Stop offset="0" stopColor={color} stopOpacity={0.25}/><Stop offset="0.55" stopColor={color} stopOpacity={0.12}/><Stop offset="1" stopColor={color} stopOpacity={0}/></RadialGradient>)}</Defs>
      <Rect width={390} height={844} fill={c.background}/><Circle cx={195} cy={60} r={210} fill="url(#frame-yellow)"/><Circle cx={365} cy={300} r={160} fill="url(#frame-pink)"/><Circle cx={35} cy={520} r={150} fill="url(#frame-green)"/>
    </Svg>}
    {Platform.OS === 'web' && <View style={styles.status}><T style={{ fontFamily: fonts.semibold, fontSize: 17 }}>9:41</T><View style={[styles.row, { gap: 7 }]}><Asset name="83135.svg" /><Asset name="9ed76.svg" /><Asset name="fe7dd.svg" /></View></View>}
    <FrameGlowContext.Provider value={setGlow}>{children}</FrameGlowContext.Provider>
    {Platform.OS === 'web' && <View pointerEvents="none" style={{ position: 'absolute', bottom: 8, left: 0, right: 0, alignItems: 'center', zIndex: 1000 }}><View style={{ backgroundColor: '#181818', height: 5, width: 135, borderRadius: 100 }} /></View>}
  </View>;
}
export const styles = StyleSheet.create({
  button: { backgroundColor: c.yellow, borderRadius: 999, minHeight: 56, paddingHorizontal: 16, paddingVertical: 10, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', gap: 8 },
  field: { backgroundColor: c.white, minHeight: 44, borderRadius: 30, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 12, gap: 7, boxShadow: '2px 4px 5px rgba(0,0,0,0.14)' },
  input: { flex: 1, minWidth: 0, fontFamily: fonts.inter, fontSize: 16, color: c.ink, paddingVertical: 10, outlineWidth: 0 },
  card: { backgroundColor: c.white, padding: 16, borderRadius: 12, gap: 12, boxShadow: '0px 1px 2px rgba(0,0,0,0.05)' },
  row: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  overlay: { flex: 1, backgroundColor: 'rgba(37,30,20,0.38)', justifyContent: 'center', alignItems: 'center', padding: 20 },
  dialog: { backgroundColor: c.background, padding: 22, borderRadius: 24, width: '100%', maxWidth: 390, maxHeight: '85%', gap: 16 },
  status: { height: 47, backgroundColor:'transparent', paddingHorizontal: 32, paddingLeft: 48, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
});
