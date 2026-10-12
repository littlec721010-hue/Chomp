import type { LinkingOptions } from '@react-navigation/native';
import type { RootStackParamList } from './types';
import { paths } from './paths';
const segment = (path: string) => path.slice(1);
const parseGroup = (value: string) => value === 'true';
export const linkConfig: NonNullable<LinkingOptions<RootStackParamList>['config']> = {
  screens: {
    Welcome: '', SignIn: segment(paths.signIn), SignUp: segment(paths.signUp),
    Main: { screens: { Decide: segment(paths.decide), Split: segment(paths.split), Profile: segment(paths.profile) } },
    Preferences: segment(paths.preferences), ProfilePreferences: segment(paths.profilePreferences),
    DecidePreferences: { path: segment(paths.decidePreferences), parse: { group: parseGroup, customized: parseGroup } },
    DecideEditPreferences: { path: 'decide/preferences/edit', parse: { group: parseGroup, surprise: parseGroup } },
    Recommendations: { path: segment(paths.recommendations), parse: { group: parseGroup } },
    Restaurant: { path: 'restaurants/:id', parse: { group: parseGroup } },
    Group: segment(paths.group), GroupRoom: { path: 'group/room', parse: { joined: parseGroup } }, GroupConsensus: 'group/consensus',
    GroupVote: { path: 'group/vote/:method', parse: { method: value => value === 'random' ? 'random' : 'free' } },
    History: 'history', SplitScan: segment(paths.splitScan), SplitReceipt: segment(paths.splitReceipt), NotFound: '*',
  },
};
// Only navigate to screens registered for the current account state.
export function linkFallback(name: string, signedIn: boolean, ready: boolean, preview: boolean): 'Welcome' | 'Preferences' | 'Main' | undefined {
  const auth = ['Welcome', 'SignIn', 'SignUp'].includes(name);
  if (!signedIn) return auth ? undefined : 'Welcome';
  if (!ready) return name === 'Preferences' ? undefined : 'Preferences';
  return auth && !preview ? 'Main' : undefined;
}
