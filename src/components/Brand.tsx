import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Asset, T } from './ui';
import { fonts } from '../theme/tokens';
export function Logo() { return <View style={s.plate}><Asset name="95f50.png" width={124} height={124} /><View style={s.crumb} /><View style={[s.crumb, { width: 6, height: 6, right: -12, top: 8, backgroundColor: '#FF9478' }]} /></View>; }
export function Wordmark() { return <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}><T style={{ fontSize: 32, lineHeight: 40, fontFamily: fonts.extra, letterSpacing: -0.8 }}>Chomp</T><View style={{ width: 10, height: 10, borderRadius: 10, backgroundColor: '#FF795E' }} /></View>; }
export function Doodles({ welcome = false }: { welcome?: boolean }) { return <View style={[StyleSheet.absoluteFill, { pointerEvents: 'none' }]}>
  <View style={{ position: 'absolute', left: 8, opacity: 0.4, top: welcome ? 19 : 5 }}><Asset name="f963f.svg" /></View>
  <View style={{ position: 'absolute', right: 10, opacity: 0.35, top: welcome ? 69 : 56, transform: [{ rotate: '12deg' }] }}><Asset name="913b4.svg" /></View>
  <View style={{ position: 'absolute', left: 24, opacity: 0.45, top: welcome ? 245 : 228, transform: [{ rotate: '6deg' }] }}><Asset name="538e9.svg" /></View>
  {welcome && <><View style={{ position: 'absolute', right: 43, top: 407, opacity: 0.35, transform: [{ rotate: '-12deg' }] }}><View style={{ width: 56, height: 28, borderRadius: 20, backgroundColor: '#EEE0D4' }} /><View style={{ position: 'absolute', top: -4, left: 4, width: 48, height: 16, borderRadius: 12, backgroundColor: '#FE7D5E' }} /><View style={{ position: 'absolute', left: 22, top: -2, width: 12, height: 34, backgroundColor: '#372F27', borderRadius: 2 }} /></View><View style={{ position: 'absolute', top: 493, left: 36, opacity: 0.4 }}><Asset name="fe8bf.svg" /></View></>}
</View>; }
const s = StyleSheet.create({ plate: { width: 144, height: 144, borderRadius: 80, alignItems: 'center', justifyContent: 'center', backgroundColor: '#FFFFFF', boxShadow: '0px 15px 38px rgba(213,169,38,0.38)' }, crumb: { width: 10, height: 10, backgroundColor: '#FFD43B', borderRadius: 8, position: 'absolute', right: -4, top: -4 } });
