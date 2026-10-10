import type { NavigatorScreenParams } from '@react-navigation/native';
export type MainTabParamList = { Decide: undefined; Split: undefined; Profile: undefined };
export type RootStackParamList = {
  Main: NavigatorScreenParams<MainTabParamList> | undefined;
  Welcome: undefined; SignIn: undefined; SignUp: undefined; Preferences: undefined;
  DecidePreferences: { group?: boolean } | undefined; ProfilePreferences: undefined;
  Recommendations: { group?: boolean } | undefined;
  Restaurant: { id: string; group?: boolean };
  Group: undefined; GroupRoom: undefined; GroupConsensus: undefined; GroupVote: { method: 'free' | 'random' };
  History: undefined;
  SplitScan: { imageUri?: string } | undefined; SplitReceipt: undefined; NotFound: undefined;
};
