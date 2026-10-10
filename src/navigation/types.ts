import type { NavigatorScreenParams } from '@react-navigation/native'
export type MainTabParamList = { Decide: undefined; Split: undefined; Profile: undefined }
export type RootStackParamList = {
  Main: NavigatorScreenParams<MainTabParamList> | undefined
  Welcome: undefined
  SignIn: undefined
  SignUp: undefined
  Preferences: undefined
  DecidePreferences: undefined
  ProfilePreferences: undefined
  Recommendations: undefined
  Restaurant: { id: string }
  Group: undefined
  SplitScan: { imageUri?: string } | undefined
  SplitReceipt: undefined
  NotFound: undefined
}
