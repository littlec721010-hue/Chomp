import React, { useState } from 'react';
import { Platform, Pressable, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Asset, Back, Button, Dialog, Field, Message, ScreenLayout, T } from '../components/ui';
import { Doodles, Logo, Wordmark } from '../components/Brand';
import { colors as c, fonts } from '../theme/tokens';
import type { Screen } from '../types/models';
import { requireSupabase } from '../lib/supabase';
import { validateAuth } from '../lib/validation';
import { authRedirect, socialSignIn } from '../lib/auth';
import { errorMessage, useAccount } from '../state/AccountProvider';
type Props = { navigate: (screen: Screen) => void };
export function SignScreen({ navigate }: Props) { return <ScreenLayout contentStyle={{ minHeight: 749 }}><Doodles welcome /><View style={{ marginTop: 135, alignItems: 'center' }}><Logo /><View style={{ marginTop: 24 }}><Wordmark /></View><T style={{ fontSize: 18, lineHeight: 29, textAlign: 'center', marginTop: 6 }}>Stop overthinking it.{ '\n' }Let's eat.</T></View><View style={{ marginHorizontal: 28, marginTop: 127 }}><Button title="Get Started" icon="1fbe0.svg" onPress={() => navigate('SignIn')} /></View></ScreenLayout>; }
export function AuthScreen({ mode, navigate }: Props & { mode: 'signin' | 'signup' }) {
  const signup = mode === 'signup';
  const insets = useSafeAreaInsets();
  const account = useAccount();
  const [name, setName] = useState(''), [email, setEmail] = useState(''), [password, setPassword] = useState(''), [confirm, setConfirm] = useState('');
  const [accepted, setAccepted] = useState(false), [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null), [notice, setNotice] = useState<string | null>(null);
  const [dialog, setDialog] = useState<'terms' | 'reset' | null>(null);
  async function submit() {
    setError(null); setNotice(null);
    const invalid = validateAuth(email, password, signup ? { name, confirm, accepted } : undefined);
    if (invalid) { setError(invalid); return; }
    setBusy(true);
    try {
      if (account.preview) { navigate('SetPreference'); return; }
      const client = requireSupabase();
      if (signup) {
        const { data, error } = await client.auth.signUp({ email: email.trim(), password, options: { data: { display_name: name.trim() }, emailRedirectTo: authRedirect() } });
        if (error) throw error;
        if (!data.session) { setPassword(''); setConfirm(''); setNotice('Check your email to confirm your account, then return here to sign in.'); }
      } else {
        const { error } = await client.auth.signInWithPassword({ email: email.trim(), password });
        if (error) throw error;
      }
    } catch (e) { setError(errorMessage(e)); } finally { setBusy(false); }
  }
  async function social(provider: 'google' | 'facebook' | 'twitter') {
    if (account.preview) { setNotice('Social sign-in is unavailable in local preview. No account will be created.'); return; }
    setBusy(true); setError(null);
    try { await socialSignIn(provider); } catch (e) { setError(errorMessage(e)); } finally { setBusy(false); }
  }
  // DeviceFrame already reserves native insets. Web also overlays a demo Home bar.
  return <ScreenLayout contentStyle={{ minHeight: 749, paddingBottom: 48 + (Platform.OS === 'web' ? insets.bottom : 0) }}>
    {!signup && <Doodles />}
    {signup ? <View style={{ marginLeft: 52, marginTop: 26 }}><Back onPress={() => navigate('SignIn')} /><T style={{ fontFamily: fonts.bold, fontSize: 24, lineHeight: 32, marginTop: 20 }}>Create your account</T></View> : <View style={{ alignItems: 'center', marginTop: 67 }}><Logo /><View style={{ marginTop: 16 }}><Wordmark /></View></View>}
    <View style={{ marginHorizontal: 52, marginTop: signup ? 30 : 30 }}>
      {account.preview && <T style={{ fontSize: 11, color: c.muted, marginBottom: 8 }}>Local preview — use sample details, no account is created.</T>}
      <View style={{ gap: 39 }}>
        {signup && <Field icon="11129.svg" accessibilityLabel="Username" placeholder="Username" value={name} onChangeText={setName} autoComplete="username-new" maxLength={80} />}
        <Field icon={signup ? '631ba.svg' : '11129.svg'} accessibilityLabel="Email" placeholder="Email" keyboardType="email-address" autoComplete="email" value={email} onChangeText={setEmail} />
        <Field icon="afe8d.svg" accessibilityLabel="Password" placeholder="Password" secureTextEntry autoComplete={signup ? 'new-password' : 'current-password'} value={password} onChangeText={setPassword} onSubmitEditing={signup ? undefined : submit} />
        {signup && <Field icon="afe8d.svg" accessibilityLabel="Confirm Password" placeholder="Confirm Password" secureTextEntry value={confirm} onChangeText={setConfirm} onSubmitEditing={submit} />}
      </View>
      {signup ? <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20, gap: 10 }}><Pressable accessibilityRole="checkbox" accessibilityLabel="Accept terms and privacy policy" accessibilityState={{ checked: accepted }} aria-checked={accepted} onPress={() => setAccepted(!accepted)} hitSlop={8} style={{ paddingVertical: 5 }}><View style={{ width: 14, height: 14, borderWidth: 1, borderColor: c.yellow, backgroundColor: accepted ? c.yellow : 'transparent', alignItems: 'center', justifyContent: 'center' }}>{accepted && <Asset name="39b6c.svg" />}</View></Pressable><T style={{ fontSize: 11 }}>I understood the <T onPress={() => setDialog('terms')} accessibilityRole="link" style={{ fontSize: 11, color: c.yellowText }}>terms & policy.</T></T></View> : <Pressable accessibilityRole="button" onPress={() => { setDialog('reset'); setError(null); setNotice(null); }} style={{ alignSelf: 'flex-end', paddingVertical: 6 }}><T style={{ fontSize: 12 }}>Forget your password?</T></Pressable>}
      <Message text={error} /><Message text={notice} success />
      <View style={{ marginTop: signup ? 12 : 24 }}><Button title={signup ? 'Sign up' : 'Sign in'} busy={busy} style={{ minHeight: 42 }} onPress={submit} /></View>
      <T style={{ textAlign: 'center', marginTop: 28, fontSize: 16 }}>or {signup ? 'sign up' : 'sign in'} with</T>
      <View style={{ width: 153, height: 44, alignSelf: 'center', marginTop: 16, justifyContent: 'center', alignItems: 'center' }}><Asset name="f7bd5.svg" /><View style={{ position: 'absolute', inset: 0, flexDirection: 'row', justifyContent: 'space-between' }}>{(['google', 'facebook', 'twitter'] as const).map(provider => <Pressable key={provider} accessibilityRole="button" accessibilityLabel={`Continue with ${provider}`} disabled={busy} onPress={() => social(provider)} style={{ width: 44, height: 44 }} />)}</View></View>
    </View>
    <View style={{ flexDirection: 'row', alignSelf: 'center', alignItems: 'center', marginTop: signup ? 15 : 24, gap: 5 }}><T style={{ fontSize: 15 }}>{signup ? 'Have an account?' : 'Don’t have an account?'}</T><Pressable accessibilityRole="button" onPress={() => navigate(signup ? 'SignIn' : 'SignUp')} style={{ paddingVertical: 10 }}><T style={{ color: c.yellowText, fontSize: 15 }}>{signup ? 'SIGN IN' : 'SIGN UP'}</T></Pressable></View>
    {!signup && <Pressable accessibilityRole="button" onPress={() => setDialog('terms')} style={{ marginTop: 24, alignSelf: 'center' }}><T style={{ textAlign: 'center', color: '#888', fontSize: 9, lineHeight: 12 }}>By signing up, you agree to the{ '\n' }User Agreement & Privacy Policy</T></Pressable>}
    <Dialog visible={dialog !== null} title={dialog === 'reset' ? 'Reset your password' : 'Terms & privacy'} onClose={() => setDialog(null)}>
      {dialog === 'reset' ? <><T style={{ marginBottom: 16 }}>Enter your account email. We’ll send a link to choose a new password.</T><Field icon="631ba.svg" accessibilityLabel="Reset email" placeholder="Email" value={email} onChangeText={setEmail} keyboardType="email-address" /><Message text={error} /><Message text={notice} success /><Button title="Send reset link" busy={busy} style={{ marginTop: 16 }} onPress={async () => { setError(null); setNotice(null); if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) { setError('Enter a valid email address.'); return; } setBusy(true); try { const { error } = await requireSupabase().auth.resetPasswordForEmail(email.trim(), { redirectTo: authRedirect() }); if (error) throw error; setNotice('If an account exists, a reset link will arrive shortly.'); } catch (e) { setError(errorMessage(e)); } finally { setBusy(false); } }} /></> : <T>This is a student prototype. Your account details and dining preferences are used to personalize the app. Local preview stores sample preferences only on this device. Connected accounts store data in your team’s Supabase project. A final user agreement and privacy policy must be supplied before public release.</T>}
    </Dialog>
  </ScreenLayout>;
}
export function RecoveryScreen() {
  const account = useAccount(); const [password, setPassword] = useState(''), [confirm, setConfirm] = useState(''), [error, setError] = useState<string | null>(null), [busy, setBusy] = useState(false);
  return <ScreenLayout contentStyle={{ padding: 28, gap: 24 }}><T style={{ fontSize: 24, fontFamily: fonts.bold }}>Choose a new password</T><Field icon="afe8d.svg" placeholder="New password" accessibilityLabel="New password" value={password} onChangeText={setPassword} secureTextEntry /><Field icon="afe8d.svg" placeholder="Confirm password" accessibilityLabel="Confirm new password" value={confirm} onChangeText={setConfirm} secureTextEntry /><Message text={error} /><Button title="Save new password" busy={busy} onPress={async () => { if (password.length < 8 || password !== confirm) { setError('Use at least 8 characters and match both passwords.'); return; } setBusy(true); try { const { error } = await requireSupabase().auth.updateUser({ password }); if (error) throw error; account.finishRecovery(); } catch (e) { setError(errorMessage(e)); } finally { setBusy(false); } }} /></ScreenLayout>;
}
