import type { ReactNode } from 'react'
import { Platform, ScrollView, StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { theme } from '../styles/theme'
export function AppLayout({ children }: { children: ReactNode }) {
  return <SafeAreaView style={styles.safe} edges={['top', 'left', 'right']}>
    <ScrollView contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled">
      <View style={styles.page}>{children}</View>
    </ScrollView>
  </SafeAreaView>
}
const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: theme.colors.background },
  content: { flexGrow: 1, paddingHorizontal: 20, paddingTop: Platform.OS === 'web' ? 24 : 5, paddingBottom: 24 },
  page: { width: '100%', gap: 16 },
})
