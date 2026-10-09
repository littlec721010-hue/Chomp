import React, { useEffect, useRef, useState } from 'react';
import { ActivityIndicator, BackHandler, Platform, Pressable, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { useFonts, PlusJakartaSans_400Regular, PlusJakartaSans_500Medium, PlusJakartaSans_600SemiBold, PlusJakartaSans_700Bold, PlusJakartaSans_800ExtraBold } from '@expo-google-fonts/plus-jakarta-sans';
import { Inter_400Regular } from '@expo-google-fonts/inter';
import { AccountProvider, useAccount, errorMessage } from './src/state/AccountProvider';
import { Button, DeviceFrame, Dialog, Message, ScreenLayout, T } from './src/components/ui';
import { SignScreen, AuthScreen, RecoveryScreen } from './src/screens/AuthScreens';
import { PreferencesScreen } from './src/screens/PreferencesScreen';
import { ProfileScreen } from './src/screens/ProfileScreen';
import type { Screen } from './src/types/models';
import { colors as c, fonts } from './src/theme/tokens';

function AppContent() {
  const account = useAccount();
  const [screen, setScreen] = useState<Screen>('Sign'), [previewPicker, setPreviewPicker] = useState(false), [previewError, setPreviewError] = useState<string | null>(null);
  const previewTarget = useRef<Screen | null>(null);
  const identity = account.preview ? 'preview' : account.session?.user.id;
  useEffect(() => { if (account.loading || account.loadError) return; if (!identity) setScreen('Sign'); else { setScreen(previewTarget.current ?? (account.onboarded ? 'Profile' : 'SetPreference')); previewTarget.current = null; } }, [identity, account.loading, account.loadError]);
  const navigate = (next: Screen) => setScreen(next);
  useEffect(() => { const sub = BackHandler.addEventListener('hardwareBackPress', () => {
    // Preference screens use an explicit discard dialog; prevent accidental data loss.
    if (screen === 'Profile1' || screen === 'SetPreference') return true;
    if (screen === 'Sign') return false;
    setScreen(identity ? 'Profile' : screen === 'SignUp' ? 'SignIn' : 'Sign'); return true;
  }); return () => sub.remove(); }, [screen, identity]);
  let content: React.ReactNode;
  if (account.loading) content = <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', gap: 16 }}><ActivityIndicator color={c.yellowText} /><T>Loading your profile…</T></View>;
  else if (account.loadError) content = <ScreenLayout contentStyle={{ padding: 28, gap: 16 }}><T style={{ fontSize: 24, fontFamily: fonts.bold }}>Unable to load your profile</T><Message text={account.loadError} /><Button title="Try again" onPress={() => void account.reload()} /><Button title="Sign out" onPress={() => void account.signOut().catch(e => setPreviewError(errorMessage(e)))} /></ScreenLayout>;
  else if (account.recovery) content = <RecoveryScreen />;
  else if (screen === 'Sign') content = <SignScreen navigate={navigate} />;
  else if (screen === 'SignIn' || screen === 'SignUp') content = <AuthScreen key={screen} mode={screen === 'SignIn' ? 'signin' : 'signup'} navigate={navigate} />;
  else if (screen === 'SetPreference' || screen === 'Profile1') content = <PreferencesScreen key={screen} edit={screen === 'Profile1'} navigate={navigate} />;
  else if (screen === 'Profile') content = <ProfileScreen navigate={navigate} />;
  else content = <ScreenLayout contentStyle={{ padding: 28, justifyContent: 'center', gap: 20 }}><T style={{ fontSize: 28, fontFamily: fonts.extra }}>{screen}</T><T>{screen === 'Decide' ? 'Your preferences are saved. This is the handoff point for the team’s restaurant recommendation flow.' : 'This is the handoff point for the team’s bill-splitting flow.'}</T><Button title="View my profile" onPress={() => navigate('Profile')} /></ScreenLayout>;
  return <View style={{ flex: 1, alignItems: 'center', backgroundColor: Platform.OS === 'web' ? '#EFE8E0' : c.background }}><DeviceFrame>{content}</DeviceFrame>
    {__DEV__ && <Pressable accessibilityRole="button" accessibilityLabel="Open local preview" onPress={() => setPreviewPicker(true)} style={{ width: '100%', maxWidth: 430, backgroundColor: '#FFF2C4', padding: 5 }}><T style={{ textAlign: 'center', fontSize: 11, lineHeight: 16 }}>{account.preview ? 'Local preview · Sample data only · Switch screen' : 'Development · Open local preview'}</T></Pressable>}
    <Dialog visible={previewPicker} title="Local design preview" onClose={() => setPreviewPicker(false)}><T style={{ marginBottom: 14 }}>Sample data stays on this device. These controls do not create or sign in to a real account.</T>{(['Sign', 'SignIn', 'SignUp', 'SetPreference', 'Profile', 'Profile1'] as Screen[]).map(name => <Button key={name} title={name} small style={{ marginBottom: 8 }} onPress={async () => { try { if (!account.preview) { previewTarget.current = name; await account.startPreview(); } setPreviewPicker(false); navigate(name); } catch (e) { setPreviewError(errorMessage(e)); } }} />)}<Message text={previewError} /></Dialog>
  </View>;
}
export default function App() {
  const [loaded, error] = useFonts({ Jakarta: PlusJakartaSans_400Regular, JakartaMedium: PlusJakartaSans_500Medium, JakartaSemiBold: PlusJakartaSans_600SemiBold, JakartaBold: PlusJakartaSans_700Bold, JakartaExtraBold: PlusJakartaSans_800ExtraBold, Inter: Inter_400Regular });
  if (!loaded && !error) return <View style={{ flex: 1, backgroundColor: c.background, justifyContent: 'center' }}><ActivityIndicator color={c.yellowText} /></View>;
  return <SafeAreaProvider><StatusBar style="dark" /><AccountProvider><AppContent /></AccountProvider></SafeAreaProvider>;
}
