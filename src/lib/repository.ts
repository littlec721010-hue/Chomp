import type { Preferences, Profile } from '../types/models';
import { requireSupabase } from './supabase';
import { validatePreferences } from './validation';

export async function loadAccount(userId: string) {
  const db = requireSupabase();
  const [profile, preferences] = await Promise.all([
    db.from('profiles').select('display_name, notifications, share_preferences').eq('id', userId).maybeSingle(),
    db.from('dining_preferences').select('*').eq('user_id', userId).maybeSingle(),
  ]);
  if (profile.error) throw profile.error;
  if (preferences.error) throw preferences.error;
  const p = preferences.data;
  return {
    profile: profile.data ? { displayName: profile.data.display_name, notifications: profile.data.notifications, sharePreferences: profile.data.share_preferences } as Profile : null,
    preferences: p ? { cuisines: p.cuisines, dislikedFoods: p.disliked_foods, dietaryHabits: p.dietary_habits, allergens: p.allergens, budgetMin: Number(p.budget_min), budgetMax: Number(p.budget_max), travelMiles: p.travel_miles } as Preferences : null,
  };
}
export async function savePreferences(userId: string, p: Preferences) {
  validatePreferences(p);
  const { error } = await requireSupabase().from('dining_preferences').upsert({
    user_id: userId, cuisines: p.cuisines, disliked_foods: p.dislikedFoods, dietary_habits: p.dietaryHabits,
    allergens: p.allergens, budget_min: p.budgetMin, budget_max: p.budgetMax, travel_miles: p.travelMiles,
  }, { onConflict: 'user_id' });
  if (error) throw error;
}
export async function saveProfile(userId: string, p: Profile) {
  if (!p.displayName.trim() || p.displayName.length > 80) throw new Error('Enter a name of 1–80 characters.');
  const { error } = await requireSupabase().from('profiles').upsert({ id: userId, display_name: p.displayName.trim(), notifications: p.notifications, share_preferences: p.sharePreferences });
  if (error) throw error;
}
