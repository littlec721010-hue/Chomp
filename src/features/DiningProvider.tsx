import React, { createContext, useContext, useState } from 'react';
import type { Preferences } from '../types/models';
import { useAccount } from '../state/AccountProvider';
import type { DiningRoom, Restaurant, User } from './contracts';
import { diningPreferences } from './preferencesAdapter';
import { recentChomps } from './history';
import { demoMembers, restaurants } from './recommendations/data';
import { demoRestaurants } from './recommendations/demo';
import { useLiveRoom } from './group/useLiveRoom';
import { wirePreferences } from './group/remote';
import { pickLuckyDiner, rankRestaurants, submitPreferences } from './group/model';
const Context = createContext<ReturnType<typeof useDiningState> | null>(null);
function useDiningState() {
  const account = useAccount();
  const live = useLiveRoom(!account.preview && Boolean(account.session));
  const user: User = { id: account.session?.user.id ?? 'sarah', name: account.profile.displayName || 'You', preferences: diningPreferences(account.preferences) };
  const [meal, setMeal] = useState(account.preferences);
  const [room, setRoom] = useState<DiningRoom | null>(null);
  const [history, setHistory] = useState<Restaurant[]>([]);
  const [bookmarks, setBookmarks] = useState<string[]>([]);
  const groupRestaurants=demoRestaurants((account.preview?room:live.room)?.members??[]);
  function startRoom(join: boolean) {
    const currentUser = { ...user, preferences: diningPreferences(account.profile.sharePreferences ? account.preferences : { ...account.preferences, cuisines: [], dislikedFoods: [], dietaryHabits: [], allergens: [] }) };
    // Sample members are explicit; no invitations or remote votes are sent.
    setRoom({ id: `local-${Date.now()}`, code: 'EAT-404', name: join ? 'Friday Dinner Squad' : 'My Dinner Squad', dateTime: 'Today, 7:30 PM', scope: 'Downtown · 5 mi', members: [currentUser, ...demoMembers.filter(m => m.id !== 'sarah')], invited: [], votes: [] });
    setMeal(account.preferences);
  }
  async function saveMeal(p: Preferences, group = false) { if(group&&!account.preview) await live.act('preferences',{preferences:wirePreferences(diningPreferences(p))}); setMeal(p); if (group && account.preview) setRoom(r => r ? { ...submitPreferences(r, user.id, diningPreferences(p)), votes: [], luckyDiner:undefined } : r); }
  async function pickLocalLuckyDiner() { if(!account.preview){await live.act('draw');return;} setRoom(r=>r?pickLuckyDiner(r,rankRestaurants(groupRestaurants,r.members)):r); }
  function select(r: Restaurant) { setHistory(h => [r, ...h.filter(x => x.id !== r.id)]); }
  function bookmark(id: string) { setBookmarks(b => b.includes(id) ? b.filter(x => x !== id) : [...b, id]); }
  const recent = recentChomps(history, account.preview ? [restaurants[0], restaurants[2], restaurants[1]] : []);
  return { groupRestaurants, recent, user, meal, setMeal, room: account.preview ? room : live.room, setRoom, live, startRoom, saveMeal, history, select, bookmarks, bookmark, pickLocalLuckyDiner };
}
function DiningStateProvider({ children }: React.PropsWithChildren) { const value = useDiningState(); return <Context.Provider value={value}>{children}</Context.Provider>; }
export function DiningProvider({children}:React.PropsWithChildren) { const account=useAccount(); return <DiningStateProvider key={account.preview?'preview':account.session?.user.id??'signed-out'}>{children}</DiningStateProvider>; }
export function useDining() { const value = useContext(Context); if (!value) throw new Error('DiningProvider is required'); return value; }
