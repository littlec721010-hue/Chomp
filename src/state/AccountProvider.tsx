import React, { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import type { Session } from '@supabase/supabase-js';
import * as Linking from 'expo-linking';
import { Platform } from 'react-native';
import { supabase } from '../lib/supabase';
import * as repository from '../lib/repository';
import { canReuseAccount } from '../lib/account-session';
import { emptyPreferences, samplePreferences, type Preferences, type Profile } from '../types/models';

const previewKey = 'chomp:preview:v1';
type Account = {
  session: Session | null; preview: boolean; loading: boolean; loadError: string | null; recovery: boolean;
  profile: Profile; preferences: Preferences; onboarded: boolean; email: string;
  startPreview: () => Promise<void>; signOut: () => Promise<void>; reload: () => Promise<void>;
  savePreferences: (p: Preferences) => Promise<void>; saveProfile: (p: Profile) => Promise<void>; finishRecovery: () => void;
};
const Context = createContext<Account | null>(null);
export const errorMessage = (error: unknown) => error instanceof Error ? error.message : typeof error === 'object' && error && 'message' in error ? String(error.message) : 'Something went wrong. Please try again.';
export function AccountProvider({ children }: React.PropsWithChildren) {
  const [session, setSession] = useState<Session | null>(null);
  const [preview, setPreview] = useState(false);
  const [loading, setLoading] = useState(Boolean(supabase));
  const [loadError, setLoadError] = useState<string | null>(null);
  const [recovery, setRecovery] = useState(false);
  const [profile, setProfile] = useState<Profile>({ displayName: '', notifications: true, sharePreferences: false });
  const [preferences, setPreferences] = useState<Preferences>(emptyPreferences);
  const [onboarded, setOnboarded] = useState(false);
  const generation = useRef(0);
  const loadedUser = useRef<string|null>(null);
  const load = useCallback(async (next: Session | null) => {
    const request = ++generation.current;
    if(next?.user.id!==loadedUser.current)loadedUser.current=null;
    setSession(next); setLoadError(null);
    if (!next) { loadedUser.current=null; setLoading(false); setProfile({ displayName: '', notifications: true, sharePreferences: false }); setPreferences(emptyPreferences); setOnboarded(false); return; }
    setLoading(true);
    try {
      const account = await repository.loadAccount(next.user.id);
      if (request !== generation.current) return;
      setProfile(account.profile ?? { displayName: next.user.user_metadata.display_name ?? '', notifications: true, sharePreferences: false });
      setPreferences(account.preferences ?? emptyPreferences); setOnboarded(Boolean(account.preferences)); loadedUser.current=next.user.id;
    } catch (e) { if (request === generation.current) setLoadError(errorMessage(e)); }
    finally { if (request === generation.current) setLoading(false); }
  }, []);
  useEffect(() => {
    if (!supabase) return;
    let alive = true;
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, next) => {
      if (event === 'PASSWORD_RECOVERY') setRecovery(true);
      // Supabase may emit SIGNED_IN again when the browser regains focus.
      // Refresh credentials without unmounting the current editing flow.
      if (canReuseAccount(event,next?.user.id,loadedUser.current)) { setSession(next); return; }
      setTimeout(() => { if (alive) void load(next); }, 0);
    });
    // INITIAL_SESSION from onAuthStateChange restores persisted sessions.
    return () => { alive = false; generation.current++; subscription.unsubscribe(); };
  }, [load]);
  useEffect(() => {
    if (!supabase || Platform.OS === 'web') return;
    const client = supabase;
    const handle = async (url: string) => {
      if (!url.startsWith(Linking.createURL('auth/callback').split('?')[0]) && !url.startsWith('chomp://auth/callback')) return;
      const params = new URLSearchParams(url.split('#')[1] || url.split('?')[1]);
      const access_token = params.get('access_token'), refresh_token = params.get('refresh_token');
      if (params.get('error_description')) { setLoadError(params.get('error_description')); return; }
      if (access_token && refresh_token) {
        if (params.get('type') === 'recovery') setRecovery(true);
        const { error } = await client.auth.setSession({ access_token, refresh_token });
        if (error) setLoadError(error.message);
      }
    };
    void Linking.getInitialURL().then(url => { if (url) void handle(url); });
    const sub = Linking.addEventListener('url', ({ url }) => { void handle(url); });
    return () => sub.remove();
  }, []);
  async function startPreview() {
    if (!__DEV__ && Platform.OS !== 'web') throw new Error('Demo preview is available on the web or in development.');
    if (session) throw new Error('Sign out of your real account before entering local preview.');
    const saved = await AsyncStorage.getItem(previewKey);
    let data: { profile: Profile; preferences: Preferences; onboarded: boolean } | null = null;
    try { data = saved ? JSON.parse(saved) : null; } catch { /* Reset only corrupt preview data. */ }
    setPreview(true); setLoading(false); setLoadError(null);
    setProfile(data?.profile ?? { displayName: 'Sarah Jordan', notifications: true, sharePreferences: false });
    setPreferences(data?.preferences ?? samplePreferences); setOnboarded(data?.onboarded ?? false);
  }
  async function persist(p: Preferences, pr: Profile) { await AsyncStorage.setItem(previewKey, JSON.stringify({ preferences: p, profile: pr, onboarded: true })); }
  return <Context.Provider value={{ session, preview, loading, loadError, recovery, profile, preferences, onboarded,
    email: preview ? 'sarah.jordan@email.com' : session?.user.email ?? '', startPreview,
    reload: () => load(session), finishRecovery: () => setRecovery(false),
    signOut: async () => { if (!preview && supabase) { const { error } = await supabase.auth.signOut(); if (error) throw error; } setPreview(false); setRecovery(false); await load(null); },
    savePreferences: async p => { if (preview) await persist(p, profile); else { if (!session) throw new Error('Please sign in again.'); await repository.savePreferences(session.user.id, p); } setPreferences(p); setOnboarded(true); },
    saveProfile: async p => { if (preview) await persist(preferences, p); else { if (!session) throw new Error('Please sign in again.'); await repository.saveProfile(session.user.id, p); } setProfile(p); },
  }}>{children}</Context.Provider>;
}
export function useAccount() { const context = useContext(Context); if (!context) throw new Error('AccountProvider is required'); return context; }
