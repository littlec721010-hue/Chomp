import { Platform } from 'react-native';
import * as Linking from 'expo-linking';
import * as WebBrowser from 'expo-web-browser';
import { requireSupabase } from './supabase';
WebBrowser.maybeCompleteAuthSession();
export const authRedirect = () => Linking.createURL('auth/callback');
export async function socialSignIn(provider: 'google' | 'facebook' | 'twitter') {
  const client = requireSupabase();
  const redirectTo = authRedirect();
  const { data, error } = await client.auth.signInWithOAuth({ provider, options: { redirectTo, skipBrowserRedirect: true } });
  if (error) throw error;
  if (!data.url) throw new Error('Unable to start sign in.');
  if (Platform.OS === 'web') { window.location.assign(data.url); return; }
  const result = await WebBrowser.openAuthSessionAsync(data.url, redirectTo);
  if (result.type !== 'success') return;
  const params = new URLSearchParams(result.url.split('#')[1] ?? result.url.split('?')[1]);
  if (params.get('error_description')) throw new Error(params.get('error_description')!);
  const access_token = params.get('access_token'), refresh_token = params.get('refresh_token');
  if (!access_token || !refresh_token) throw new Error('Sign in did not return a session. Please try again.');
  const response = await client.auth.setSession({ access_token, refresh_token });
  if (response.error) throw response.error;
}
