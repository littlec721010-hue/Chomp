import React, { useRef, useState } from 'react';
import { ActivityIndicator, Platform, Pressable, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { useFonts, PlusJakartaSans_400Regular, PlusJakartaSans_500Medium, PlusJakartaSans_600SemiBold, PlusJakartaSans_700Bold, PlusJakartaSans_800ExtraBold } from '@expo-google-fonts/plus-jakarta-sans';
import { Inter_400Regular } from '@expo-google-fonts/inter';
import { AccountProvider, useAccount, errorMessage } from './src/state/AccountProvider';
import { Button, DeviceFrame, Dialog, Message, ScreenLayout, T } from './src/components/ui';
import { RecoveryScreen } from './src/screens/AuthScreens';
import { SplitProvider } from './src/features/split/store';
import { DiningProvider } from './src/features/DiningProvider';
import { AppNavigator, navigatePreview } from './src/navigation/AppNavigator';
import type { Screen } from './src/types/models';
import { colors as c } from './src/theme/tokens';
function AppContent() {
  const account = useAccount(), [picker, setPicker] = useState(false), [error, setError] = useState<string | null>(null), target = useRef<Screen | null>(null);
  const identity = account.preview ? 'preview' : account.session?.user.id ?? 'guest';
  let content: React.ReactNode;
  if (account.loading) content = <ActivityIndicator style={{ flex: 1 }} color={c.yellowText} />;
  else if (account.loadError) content = <ScreenLayout contentStyle={{ padding: 28, gap: 16 }}><T>Unable to load your profile</T><Message text={account.loadError} /><Button title="Try again" onPress={() => void account.reload()} /><Button title="Sign out" onPress={() => void account.signOut().catch(e => setError(errorMessage(e)))} /></ScreenLayout>;
  else if (account.recovery) content = <RecoveryScreen />;
  else content = <DiningProvider key={identity}><SplitProvider><AppNavigator initialPreview={target.current} onReady={() => { target.current = null; }} /></SplitProvider></DiningProvider>;
  return <View style={{ flex: 1, alignItems: 'center', backgroundColor: Platform.OS === 'web' ? '#EFE8E0' : c.background }}><DeviceFrame>{content}</DeviceFrame>{__DEV__ && <Pressable accessibilityRole="button" accessibilityLabel="Open local preview" onPress={() => setPicker(true)} style={{ width: '100%', maxWidth: 390, backgroundColor: '#FFF2C4', padding: 5 }}><T style={{ textAlign: 'center', fontSize: 11 }}>{account.preview ? 'Local preview · Sample data only · Switch screen' : 'Development · Open local preview'}</T></Pressable>}<Dialog visible={picker} title="Local design preview" onClose={() => setPicker(false)}><T style={{ marginBottom: 14 }}>Sample data stays on this device. No real account or online room is created.</T>{(['Sign', 'SignIn', 'SignUp', 'SetPreference', 'Decide', 'Split', 'Profile', 'Profile1'] as Screen[]).map(name => <Button key={name} title={name} small style={{ marginBottom: 8 }} onPress={async () => { try { if (!account.preview) { target.current = name; await account.startPreview(); } else navigatePreview(name); setPicker(false); } catch (e) { setError(errorMessage(e)); } }} />)}<Message text={error} /></Dialog></View>;
}
export default function App() {
  const [loaded, error] = useFonts({ Jakarta: PlusJakartaSans_400Regular, JakartaMedium: PlusJakartaSans_500Medium, JakartaSemiBold: PlusJakartaSans_600SemiBold, JakartaBold: PlusJakartaSans_700Bold, JakartaExtraBold: PlusJakartaSans_800ExtraBold, Inter: Inter_400Regular, PlusJakartaSans_400Regular, PlusJakartaSans_500Medium, PlusJakartaSans_600SemiBold, PlusJakartaSans_700Bold, PlusJakartaSans_800ExtraBold });
  if (error) return <View style={{ flex: 1, padding: 24 }}><T>Unable to load fonts. Please restart Chomp.</T></View>;
  if (!loaded) return <View style={{ flex: 1, backgroundColor: c.background, justifyContent: 'center' }}><ActivityIndicator color={c.yellowText} /></View>;
  return <SafeAreaProvider><StatusBar style="dark" /><AccountProvider><AppContent /></AccountProvider></SafeAreaProvider>;
}
