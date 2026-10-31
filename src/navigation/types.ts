import type { NavigatorScreenParams } from '@react-navigation/native';
export type MainTabParamList = { Decide: undefined; Split: undefined; Profile: undefined };
export type RootStackParamList = {
  Main: NavigatorScreenParams<MainTabParamList> | undefined;
  Welcome: undefined; SignIn: undefined; SignUp: undefined; Preferences: undefined;
  DecidePreferences: { group?: boolean; customized?: boolean } | undefined; ProfilePreferences: undefined;
  DecideEditPreferences: { group?: boolean; surprise?: boolean } | undefined;
  Recommendations: { group?: boolean } | undefined;
  Restaurant: { id: string; group?: boolean };
  Group: undefined; GroupRoom: { joined?: boolean } | undefined; GroupConsensus: undefined; GroupVote: { method: 'free' | 'random' };
  GroupTie: undefined; GroupTieSpin: undefined; GroupTieReveal: undefined;
  History: undefined;
  SplitScan: { imageUri?: string } | undefined; SplitReceipt: undefined; NotFound: undefined;
  SplitManualSetup: undefined; SplitManualItems: undefined;
};
