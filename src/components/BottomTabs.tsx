import React from 'react';
import { Pressable, View } from 'react-native';
import { Asset } from './ui';
import type { Screen } from '../types/models';
export function BottomTabs({ navigate }: { navigate: (screen: Screen) => void }) {
  return <View style={{ height: 110, backgroundColor: 'transparent', marginTop: -24 }}><View style={{ position: 'absolute', top: 47, bottom: 0, left: 0, right: 0, borderTopLeftRadius: 12, borderTopRightRadius: 12, backgroundColor: '#FFFFFF' }} /><View style={{ position: 'absolute', right: 12, top: 0 }}><Asset name="6651f.svg" /></View><Pressable accessibilityLabel="Decide" accessibilityRole="tab" onPress={() => navigate('Decide')} hitSlop={8} style={{ position: 'absolute', left: '15.38%', top: 68 }}><Asset name="b450d.svg" /></Pressable><Pressable accessibilityLabel="Split" accessibilityRole="tab" onPress={() => navigate('Split')} hitSlop={8} style={{ position: 'absolute', left: '46.67%', top: 69 }}><Asset name="17b2a.svg" /></Pressable><Pressable accessibilityLabel="Profile" accessibilityRole="tab" accessibilityState={{ selected: true }} aria-selected={true} onPress={() => navigate('Profile')} hitSlop={8} style={{ position: 'absolute', right: 63, top: 35 }}><Asset name="9ba94.svg" /></Pressable></View>;
}
