import React, { createContext, useContext, useState } from 'react';
import type { Preferences } from '../types/models';
import { useAccount } from '../state/AccountProvider';
import type { DiningRoom, Restaurant, User } from './contracts';
import { diningPreferences } from './preferencesAdapter';
import { recentChomps } from './history';
import { demoMembers, restaurants } from './recommendations/data';
import { submitPreferences } from './group/model';
const Context = createContext<ReturnType<typeof useDiningState> | null>(null);
function useDiningState() {
  const account = useAccount();
  const user: User = { id: account.session?.user.id ?? 'sarah', name: account.profile.displayName || 'You', preferences: diningPreferences(account.preferences) };
  const [meal, setMeal] = useState(account.preferences);
  const [room, setRoom] = useState<DiningRoom | null>(null);
  const [history, setHistory] = useState<Restaurant[]>([]);
  const [bookmarks, setBookmarks] = useState<string[]>([]);
  function startRoom(join: boolean) {
    const currentUser = { ...user, preferences: diningPreferences(account.profile.sharePreferences ? account.preferences : { ...account.preferences, cuisines: [], dislikedFoods: [], dietaryHabits: [], allergens: [] }) };
    // Sample members are explicit; no invitations or remote votes are sent.
    setRoom({ id: `local-${Date.now()}`, code: 'EAT-404', name: join ? 'Friday Dinner Squad' : 'My Dinner Squad', dateTime: 'Today, 7:30 PM', scope: 'Downtown · 5 mi', members: [currentUser, ...demoMembers.filter(m => m.id !== 'sarah')], invited: [], votes: [] });
    setMeal(account.preferences);
  }
  function saveMeal(p: Preferences, group = false) { setMeal(p); if (group) setRoom(r => r ? { ...submitPreferences(r, user.id, diningPreferences(p)), votes: [] } : r); }
  function select(r: Restaurant) { setHistory(h => [r, ...h.filter(x => x.id !== r.id)]); }
  function bookmark(id: string) { setBookmarks(b => b.includes(id) ? b.filter(x => x !== id) : [...b, id]); }
  const recent = recentChomps(history, account.preview ? [restaurants[0], restaurants[2], restaurants[1]] : []);
  return { recent, user, meal, setMeal, room, setRoom, startRoom, saveMeal, history, select, bookmarks, bookmark };
}
export function DiningProvider({ children }: React.PropsWithChildren) { const value = useDiningState(); return <Context.Provider value={value}>{children}</Context.Provider>; }
export function useDining() { const value = useContext(Context); if (!value) throw new Error('DiningProvider is required'); return value; }
