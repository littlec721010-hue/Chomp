import { useCallback, useEffect, useRef, useState } from 'react';
import { AppState } from 'react-native';
import { requireSupabase } from '../../lib/supabase';
import { errorMessage } from '../../state/AccountProvider';
import type { DiningRoom } from '../contracts';
import { newerRoom, snapshotRoom, type GroupAction, type RoomSnapshot } from './remote';

export function useLiveRoom(enabled: boolean) {
 const [room, setRoom] = useState<DiningRoom | null>(null);
 const [busy, setBusy] = useState(false);
 const [loading, setLoading] = useState(enabled);
 const [error, setError] = useState('');
 const alive = useRef(true), changing = useRef(false), epoch = useRef(0);
 useEffect(() => { alive.current = true; return () => { alive.current = false; }; }, []);
 const rpc = useCallback(async (action: GroupAction, id: string | null, payload: Record<string, unknown> = {}) => {
  const { data, error } = await requireSupabase().rpc('chomp_group', { action, room_id: id, payload }).abortSignal(AbortSignal.timeout(15000));
  if (error) throw new Error(error.code === 'PGRST202' ? 'Live rooms are not installed yet. Apply the group voting database migration.' : error.message);
  return data ? snapshotRoom(data as RoomSnapshot) : null;
 }, []);
 const refresh = useCallback(async () => {
  const request = epoch.current;
  try {
   const next = await rpc(room ? 'read' : 'resume', room?.id ?? null);
   if (alive.current && request === epoch.current) { setRoom(old => next ? newerRoom(old, next) : null); setError(''); }
  } catch (e) { if (alive.current && request === epoch.current) setError(errorMessage(e)); }
  finally { if (alive.current) setLoading(false); }
 }, [rpc, room?.id]);
 useEffect(() => {
  if (!enabled) return;
  let cancelled = false;
  let timer: ReturnType<typeof setTimeout>;
  async function poll() {
   if (cancelled) return;
   if (!changing.current && AppState.currentState !== 'background') await refresh();
   if (!cancelled) timer = setTimeout(poll, 2000);
  }
  void poll();
  const sub = AppState.addEventListener('change', state => { if (state === 'active' && !changing.current) void refresh(); });
  return () => { cancelled = true; clearTimeout(timer); sub.remove(); };
 }, [enabled, refresh]);
 const act = async (action: GroupAction, payload: Record<string, unknown> = {}) => {
  if (!enabled) throw new Error('Sign in to use live rooms.');
  if (changing.current) throw new Error('Please wait for the current request.');
  changing.current = true; ++epoch.current; setBusy(true); setError('');
  try {
   const next = await rpc(action, room?.id ?? null, payload);
   if (alive.current && next) setRoom(old => newerRoom(old, next));
   return next;
  } catch (e) { if (alive.current) setError(errorMessage(e)); throw e; }
  finally { changing.current = false; if (alive.current) { setBusy(false); setLoading(false); } }
 };
 return { room, busy, loading, error, refresh, act };
}
