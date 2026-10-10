import { SplitProvider } from './features/split/store'
import { ActivityIndicator, Platform, StyleSheet, Text, View } from 'react-native'
import { SafeAreaProvider, initialWindowMetrics } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { useFonts } from 'expo-font'
import { PlusJakartaSans_400Regular } from '@expo-google-fonts/plus-jakarta-sans/400Regular'
import { PlusJakartaSans_500Medium } from '@expo-google-fonts/plus-jakarta-sans/500Medium'
import { PlusJakartaSans_600SemiBold } from '@expo-google-fonts/plus-jakarta-sans/600SemiBold'
import { PlusJakartaSans_700Bold } from '@expo-google-fonts/plus-jakarta-sans/700Bold'
import { PlusJakartaSans_800ExtraBold } from '@expo-google-fonts/plus-jakarta-sans/800ExtraBold'
import { AppNavigator } from './navigation/AppNavigator'
import { theme } from './styles/theme'
export default function App() {
  const [loaded, error] = useFonts({ PlusJakartaSans_400Regular, PlusJakartaSans_500Medium, PlusJakartaSans_600SemiBold, PlusJakartaSans_700Bold, PlusJakartaSans_800ExtraBold })
  if (error) return <View style={styles.loading}><Text accessibilityRole="alert">Unable to load fonts. Please restart Chomp.</Text></View>
  if (!loaded) return <View style={styles.loading}><ActivityIndicator accessibilityLabel="Loading Chomp" color={theme.colors.secondary} /></View>
  return <SafeAreaProvider initialMetrics={initialWindowMetrics}>
    <StatusBar style="dark" />
    <View style={styles.outer}><View style={styles.app}><SplitProvider><AppNavigator /></SplitProvider></View></View>
  </SafeAreaProvider>
}
const styles = StyleSheet.create({
  loading: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: theme.colors.background },
  outer: { flex: 1, alignItems: 'center', backgroundColor: '#eee6df' },
  app: { flex: 1, width: '100%', maxWidth: Platform.OS === 'web' ? 390 : undefined, backgroundColor: theme.colors.background },
})
