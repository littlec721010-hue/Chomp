import React, { useEffect, useMemo, useRef } from 'react';
import { NavigationContainer, DefaultTheme, getStateFromPath, createNavigationContainerRef } from '@react-navigation/native';
import { createNativeStackNavigator, type NativeStackScreenProps, type NativeStackNavigationProp } from '@react-navigation/native-stack';
import { createBottomTabNavigator, type BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import type { CompositeScreenProps } from '@react-navigation/native';
import * as Linking from 'expo-linking';
import type { LinkingOptions } from '@react-navigation/native';
import { linkConfig, linkFallback } from './linking';
import { BottomNavigation } from './BottomNavigation';
import type { MainTabParamList, RootStackParamList } from './types';
import type { Screen } from '../types/models';
import { theme } from '../styles/theme';
import { SignScreen, AuthScreen } from '../screens/AuthScreens';
import { PreferencesScreen } from '../screens/PreferencesScreen';
import { ProfileScreen } from '../screens/ProfileScreen';
import { DecideScreen } from '../pages/DecideScreen';
import { SplitHome } from '../features/split/SplitHome';
import { SplitScanScreen } from '../features/split/SplitScanScreen';
import { SplitReceiptScreen } from '../features/split/SplitReceiptScreen';
import { ManualBillSetup, ManualBillItems } from '../features/split/ManualBillScreens';
import { LuckyDinerScreen } from '../features/group/LuckyDinerScreens';
import { RecommendationsScreen, RestaurantScreen, GroupScreen, GroupRoomScreen, ConsensusScreen, GroupVoteScreen, HistoryScreen } from '../features/yuhan/Screens';
import { PreferenceChoice } from '../features/decide/PreferenceChoice';
import { useAccount } from '../state/AccountProvider';
import { useDining } from '../features/DiningProvider';
import { Button, ScreenLayout, T, useFrameGlow } from '../components/ui';
const Stack = createNativeStackNavigator<RootStackParamList>();
const Tabs = createBottomTabNavigator<MainTabParamList>();
export const navigationRef = createNavigationContainerRef<RootStackParamList>();
export function navigatePreview(screen: Screen) {
  if (!navigationRef.isReady()) return;
  if (screen === 'Decide' || screen === 'Split' || screen === 'Profile') navigationRef.navigate('Main', { screen });
  else { const names = { Sign: 'Welcome', SignIn: 'SignIn', SignUp: 'SignUp', SetPreference: 'Preferences', Profile1: 'ProfilePreferences' } as const; navigationRef.navigate(names[screen]); }
}
function adapter(navigation: Pick<NativeStackNavigationProp<RootStackParamList>, 'navigate'>) { return (screen: Screen) => {
  if (screen === 'Decide' || screen === 'Split' || screen === 'Profile') navigation.navigate('Main', { screen });
  else { const names = { Sign: 'Welcome', SignIn: 'SignIn', SignUp: 'SignUp', SetPreference: 'Preferences', Profile1: 'ProfilePreferences' } as const; navigation.navigate(names[screen]); }
}; }
type Props<K extends keyof RootStackParamList> = NativeStackScreenProps<RootStackParamList, K>;
type TabProps<K extends keyof MainTabParamList> = CompositeScreenProps<BottomTabScreenProps<MainTabParamList, K>, NativeStackScreenProps<RootStackParamList>>;
function Welcome({ navigation }: Props<'Welcome'>) { return <SignScreen navigate={adapter(navigation)} />; }
function SignIn({ navigation }: Props<'SignIn'>) { return <AuthScreen mode="signin" navigate={adapter(navigation)} />; }
function SignUp({ navigation }: Props<'SignUp'>) { return <AuthScreen mode="signup" navigate={adapter(navigation)} />; }
function Preferences({ navigation }: Props<'Preferences'>) { return <PreferencesScreen navigate={adapter(navigation)} />; }
function ProfilePreferences({ navigation }: Props<'ProfilePreferences'>) { return <PreferencesScreen edit navigate={adapter(navigation)} />; }
function MealPreferences({ route, navigation }: Props<'DecideEditPreferences'>) {
  const d = useDining(), group = route.params?.group ?? false;
  return <PreferencesScreen edit navigate={adapter(navigation)} occasion={{ initial: d.meal, onBack: () => navigation.goBack(), onSave: value => {
    d.saveMeal(value, group);
    navigation.navigate('DecidePreferences', { group, customized: true });
  } }} />;
}
function DecideTab({ navigation }: TabProps<'Decide'>) { const a = useAccount(), d = useDining(); return <DecideScreen onSolo={() => { d.setMeal(a.preferences); navigation.navigate('DecidePreferences'); }} onGroup={() => navigation.navigate('Group')} onHistory={() => navigation.navigate('History')} onRestaurant={id => navigation.navigate('Restaurant', { id: id === 'oishii-ramen' ? 'oishii' : id })} />; }
function SplitTab({ navigation }: TabProps<'Split'>) { return <SplitHome onManual={() => navigation.navigate('SplitManualSetup')} onScan={imageUri => navigation.navigate('SplitScan', imageUri ? { imageUri } : undefined)} onReceipt={receiptId => navigation.navigate('SplitReceipt', { returnTo: 'Split', receiptId })} />; }
function ProfileTab({ navigation }: TabProps<'Profile'>) { return <ProfileScreen navigate={adapter(navigation)} />; }
function MainTabs() { return <Tabs.Navigator initialRouteName="Decide" tabBar={props => <BottomNavigation {...props} insets={{ ...props.insets, bottom: 0 }} />} screenOptions={{ headerShown: false, sceneStyle: { backgroundColor: theme.colors.background } }}><Tabs.Screen name="Decide" component={DecideTab} /><Tabs.Screen name="Split" component={SplitTab} /><Tabs.Screen name="Profile" component={ProfileTab} /></Tabs.Navigator>; }
function NotFound({ navigation }: Props<'NotFound'>) { return <ScreenLayout contentStyle={{ padding: 24, gap: 20 }}><T>Page not found.</T><Button title="Back to Decide" onPress={() => navigation.navigate('Main', { screen: 'Decide' })} /></ScreenLayout>; }
export function AppNavigator({ initialPreview, onReady }: { initialPreview?: Screen | null; onReady?: () => void }) {
  const setFrameGlow=useFrameGlow();
  const syncFrameBackground=()=>{const name=navigationRef.getCurrentRoute()?.name;setFrameGlow(name==='Restaurant'||name==='GroupVote');};
  const a = useAccount(), signedIn = !!a.session || a.preview, ready = a.onboarded || a.preview;
  const linking = useMemo<LinkingOptions<RootStackParamList>>(() => ({
    prefixes: ['chomp://', Linking.createURL('/')], config: linkConfig,
    getStateFromPath: (path, options) => {
      // Supabase owns email confirmation, recovery and OAuth callbacks.
      if (path.split(/[?#]/)[0].replace(/^\//, '') === 'auth/callback') return undefined;
      const state = getStateFromPath(path, options);
      if (!state) return state;
      const root = state.routes[state.index ?? state.routes.length - 1];
      const fallback = linkFallback(root.name, signedIn, ready, a.preview);
      return fallback ? { routes: [{ name: fallback }] } : state;
    },
  }), [signedIn, ready, a.preview]);
  const wasOnboarded = useRef(a.onboarded);
  useEffect(()=>{
    if(initialPreview && signedIn && ready && navigationRef.isReady()) {
      navigatePreview(initialPreview); onReady?.();
    }
  },[initialPreview,signedIn,ready,onReady]);
  useEffect(() => { if (!a.preview && !wasOnboarded.current && a.onboarded && navigationRef.isReady()) navigationRef.resetRoot({ index: 0, routes: [{ name: 'Main' }] }); wasOnboarded.current = a.onboarded; }, [a.onboarded, a.preview]);
  return <NavigationContainer linking={linking} ref={navigationRef} onStateChange={syncFrameBackground} onReady={() => { syncFrameBackground(); if (initialPreview) navigatePreview(initialPreview); onReady?.(); }} theme={{ ...DefaultTheme, colors: { ...DefaultTheme.colors, background: 'transparent', card: 'transparent', text: theme.colors.ink, primary: theme.colors.primary } }}>
    <Stack.Navigator screenOptions={{ headerShown: false, contentStyle: { backgroundColor: theme.colors.background } }}>
      {signedIn ? <Stack.Group navigationKey={a.preview ? 'preview' : 'account'}>{ready ? <Stack.Screen name="Main" component={MainTabs} /> : null}<Stack.Screen name="Preferences" component={Preferences} options={{ gestureEnabled: false }} />{ready && <><Stack.Screen name="ProfilePreferences" component={ProfilePreferences} options={{ gestureEnabled: false }} /><Stack.Screen name="DecidePreferences" component={PreferenceChoice} options={{ gestureEnabled: false }} /><Stack.Screen name="DecideEditPreferences" component={MealPreferences} options={{ gestureEnabled: false }} /><Stack.Screen name="Recommendations" component={RecommendationsScreen} /><Stack.Screen name="Restaurant" component={RestaurantScreen} options={{contentStyle:{backgroundColor:'transparent'}}} /><Stack.Screen name="Group" component={GroupScreen} /><Stack.Screen name="GroupRoom" component={GroupRoomScreen} /><Stack.Screen name="GroupConsensus" component={ConsensusScreen} /><Stack.Screen name="GroupVote" component={GroupVoteScreen} options={{contentStyle:{backgroundColor:'transparent'}}} /><Stack.Screen name="History" component={HistoryScreen} /><Stack.Screen name="SplitScan" component={SplitScanScreen} /><Stack.Screen name="SplitReceipt" component={SplitReceiptScreen} /><Stack.Screen name="SplitManualSetup" component={ManualBillSetup} /><Stack.Screen name="SplitManualItems" component={ManualBillItems} /><Stack.Screen name="GroupTie" component={LuckyDinerScreen} /><Stack.Screen name="GroupTieSpin" component={LuckyDinerScreen} /><Stack.Screen name="GroupTieReveal" component={LuckyDinerScreen} /><Stack.Screen name="NotFound" component={NotFound} /></>}{a.preview && <><Stack.Screen name="Welcome" component={Welcome} /><Stack.Screen name="SignIn" component={SignIn} /><Stack.Screen name="SignUp" component={SignUp} /></>}</Stack.Group> : <Stack.Group navigationKey="guest"><Stack.Screen name="Welcome" component={Welcome} /><Stack.Screen name="SignIn" component={SignIn} /><Stack.Screen name="SignUp" component={SignUp} /></Stack.Group>}
    </Stack.Navigator>
  </NavigationContainer>;
}
