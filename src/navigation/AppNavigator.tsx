import { SplitHome } from '../features/split/SplitHome'
import { SplitScanScreen } from '../features/split/SplitScanScreen'
import { SplitReceiptScreen } from '../features/split/SplitReceiptScreen'
import { DecideScreen } from '../pages/DecideScreen'
import { WelcomeScreen, SignInScreen, SignUpScreen } from '../pages/auth/AuthScreens'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import type { LinkingOptions, CompositeScreenProps } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import { ModulePlaceholder } from '../pages/ModulePlaceholder'
import { BottomNavigation } from './BottomNavigation'
import type { MainTabParamList, RootStackParamList } from './types'
import { theme } from '../styles/theme'
import { paths } from './paths'
const Stack = createNativeStackNavigator<RootStackParamList>()
const Tabs = createBottomTabNavigator<MainTabParamList>()
type TabProps<T extends keyof MainTabParamList> = CompositeScreenProps<BottomTabScreenProps<MainTabParamList, T>, NativeStackScreenProps<RootStackParamList>>
function DecideTab({ navigation }: TabProps<'Decide'>) {
  return <DecideScreen onSolo={() => navigation.navigate('DecidePreferences')} onGroup={() => navigation.navigate('Group')} onHistory={() => navigation.navigate('Recommendations')} onRestaurant={id => navigation.navigate('Restaurant', { id })} />
}
function SplitTab({ navigation }: TabProps<'Split'>) { return <SplitHome onScan={imageUri => navigation.navigate('SplitScan', imageUri ? { imageUri } : undefined)} onReceipt={() => navigation.navigate('SplitReceipt')} /> }
function ProfileScreen({ navigation }: TabProps<'Profile'>) { return <ModulePlaceholder title="My Profile" description="Your dining preferences, all in one place." actions={[{ label: 'Edit Preferences', onPress: () => navigation.navigate('ProfilePreferences') }]} /> }
function MainTabs() {
  return <Tabs.Navigator initialRouteName="Decide" tabBar={props => <BottomNavigation {...props} />} screenOptions={{ headerShown: false, sceneStyle: { backgroundColor: theme.colors.background } }}>
    <Tabs.Screen name="Decide" component={DecideTab} />
    <Tabs.Screen name="Split" component={SplitTab} />
    <Tabs.Screen name="Profile" component={ProfileScreen} />
  </Tabs.Navigator>
}
const titles = {
  Preferences: 'Let Chomp get to know your taste',
  DecidePreferences: 'How would you like to set your preferences?', ProfilePreferences: 'Edit preferences',
  Recommendations: 'Curated for you', Restaurant: 'Your next Chomp', Group: 'Eating with the squad?',
  NotFound: 'Page not found',
} as const
function PlaceholderScreen({ route, navigation }: NativeStackScreenProps<RootStackParamList, keyof typeof titles>) {
  return <ModulePlaceholder title={titles[route.name]} onBack={() => navigation.canGoBack() ? navigation.goBack() : navigation.navigate('Main', { screen: 'Decide' })}
    actions={route.name === 'Preferences' ? [{ label: 'Continue to Decide', onPress: () => navigation.replace('Main', { screen: 'Decide' }) }] : []} />
}
const segment = (path: string) => path.slice(1)
const linking: LinkingOptions<RootStackParamList> = {
  prefixes: ['chomp://'],
  config: { screens: {
    Main: { screens: { Decide: segment(paths.decide), Split: segment(paths.split), Profile: segment(paths.profile) } },
    Welcome: '', SignIn: segment(paths.signIn), SignUp: segment(paths.signUp), Preferences: segment(paths.preferences),
    DecidePreferences: segment(paths.decidePreferences), ProfilePreferences: segment(paths.profilePreferences),
    Recommendations: segment(paths.recommendations), Restaurant: 'restaurants/:id', Group: segment(paths.group),
    SplitScan: segment(paths.splitScan), SplitReceipt: segment(paths.splitReceipt), NotFound: '*',
  } },
}
export function AppNavigator() {
  return <NavigationContainer linking={linking} theme={{ ...DefaultTheme, colors: { ...DefaultTheme.colors, background: theme.colors.background, card: theme.colors.surface, text: theme.colors.ink, primary: theme.colors.primary } }}>
    <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false, contentStyle: { backgroundColor: theme.colors.background } }}>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="Main" component={MainTabs} />
      <Stack.Screen name="SplitScan" component={SplitScanScreen} />
      <Stack.Screen name="SplitReceipt" component={SplitReceiptScreen} />
      {Object.keys(titles).map(name => <Stack.Screen key={name} name={name as keyof typeof titles} component={PlaceholderScreen} />)}
    </Stack.Navigator>
  </NavigationContainer>
}
