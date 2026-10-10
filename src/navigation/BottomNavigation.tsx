import { useState } from 'react'
import type { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import { Platform, Pressable, StyleSheet, useWindowDimensions, View } from 'react-native'
import { theme } from '../styles/theme'
import type { MainTabParamList } from './types'
import Decide from '../../public/assets/navigation/decide.svg'
import DecideActive from '../../public/assets/navigation/decide-active.svg'
import Split from '../../public/assets/navigation/split.svg'
import SplitActive from '../../public/assets/navigation/split-active.svg'
import Profile from '../../public/assets/navigation/profile.svg'
import ProfileActive from '../../public/assets/navigation/profile-active.svg'
import SplitDecide from '../../public/assets/navigation/split-decide.svg'
import SplitProfile from '../../public/assets/navigation/split-profile.svg'
import ActiveBackground from '../../public/assets/navigation/active-background.svg'
import SplitBackground from '../../public/assets/navigation/split-background.svg'

// Original Figma Navbar component set 389:873, 390 × 130.
// Preserve each variant's coordinates rather than distributing icons evenly.
const variants = {
  Decide: {
    node: '389:872', backgroundX: 16, Background: ActiveBackground,
    icons: { Decide: { Icon: DecideActive, x: 60, y: 36, width: 33.588, height: 30 }, Split: { Icon: Split, x: 182, y: 68, width: 26, height: 28 }, Profile: { Icon: Profile, x: 299, y: 67, width: 31, height: 31 } },
  },
  Split: {
    node: '389:955', backgroundX: 134, Background: SplitBackground,
    icons: { Decide: { Icon: SplitDecide, x: 60, y: 67, width: 33.588, height: 30 }, Split: { Icon: SplitActive, x: 182, y: 37, width: 26, height: 28 }, Profile: { Icon: SplitProfile, x: 301, y: 67, width: 31, height: 31 } },
  },
  Profile: {
    node: '389:905', backgroundX: 251, Background: ActiveBackground,
    icons: { Decide: { Icon: Decide, x: 60, y: 68, width: 33.588, height: 30 }, Split: { Icon: Split, x: 182, y: 69, width: 26, height: 28 }, Profile: { Icon: ProfileActive, x: 296, y: 35, width: 31, height: 31 } },
  },
} as const

export function BottomNavigation({ state, descriptors, navigation, insets }: BottomTabBarProps) {
  const [width, setWidth] = useState(390)
  const { height: viewportHeight } = useWindowDimensions()
  const scale = width / 390
  const active = state.routes[state.index].name as keyof MainTabParamList
  const variant = variants[active]
  const Background = variant.Background
  return <View testID={`navbar-${active.toLowerCase()}`} onLayout={event => {
    const nextWidth = event.nativeEvent.layout.width
    if (nextWidth > 0) setWidth(nextWidth)
  }} style={[styles.bar, { height: 130 * scale + insets.bottom }]}>
    <View pointerEvents="none" style={[styles.safeArea, { height: insets.bottom }]} />
    <View style={[styles.component, { transform: [{ scale }] }]}>
      <View pointerEvents="none" style={styles.surface} />
      <View testID="navbar-ellpises" accessibilityElementsHidden importantForAccessibility="no-hide-descendants" pointerEvents="none" style={[styles.background, { left: variant.backgroundX }]}>
        <Background width={127} height={94} />
      </View>
      {state.routes.map((route, index) => {
        const selected = state.index === index
        const options = descriptors[route.key].options
        const { Icon, x, y, width: iconWidth, height } = variant.icons[route.name as keyof MainTabParamList]
        return <Pressable key={route.key} accessibilityRole={Platform.OS === 'web' ? 'link' : 'tab'} accessibilityLabel={options.tabBarAccessibilityLabel ?? route.name}
          accessibilityState={{ selected }} hitSlop={12}
          onPress={() => {
            const event = navigation.emit({ type: 'tabPress', target: route.key, canPreventDefault: true })
            if (!selected && !event.defaultPrevented) navigation.navigate(route.name, route.params)
          }} onLongPress={() => navigation.emit({ type: 'tabLongPress', target: route.key })}
          style={[styles.icon, { left: x, top: y, width: iconWidth, height }]}>
          <Icon width={iconWidth} height={height} />
        </Pressable>
      })}
    </View>

  </View>
}
const styles = StyleSheet.create({
  bar: { width: '100%', flexShrink: 0, overflow: 'visible' },
  component: { position: 'absolute', top: 0, left: 0, width: 390, height: 130, overflow: 'visible', transformOrigin: 'top left' },
  surface: { position: 'absolute', top: 47, left: 0, width: 390, height: 83, zIndex: 0, backgroundColor: theme.colors.surface, borderTopLeftRadius: 12, borderTopRightRadius: 12 },
  background: { position: 'absolute', top: 0, width: 127, height: 94, overflow: 'visible', zIndex: 1 },
  icon: { position: 'absolute', zIndex: 2 },
  safeArea: { position: 'absolute', bottom: 0, left: 0, right: 0, backgroundColor: theme.colors.surface },
})

