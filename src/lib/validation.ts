import type { Preferences } from '../types/models';
export function addUnique(items: string[], value: string) {
  const clean = value.trim().replace(/\s+/g, ' ');
  if (!clean || clean.length > 60 || items.some(item => item.toLowerCase() === clean.toLowerCase())) return items;
  return [...items, clean];
}
export function validateAuth(email: string, password: string, signup?: { name: string; confirm: string; accepted: boolean }) {
  if (signup && !signup.name.trim()) return 'Please enter your username.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) return 'Please enter a valid email address.';
  if (!password) return 'Please enter your password.';
  if (signup && password.length < 8) return 'Use at least 8 characters for your password.';
  if (signup && password !== signup.confirm) return 'Your passwords do not match.';
  if (signup && !signup.accepted) return 'Please accept the terms and privacy policy.';
  return null;
}
export function validateBudget(min: string, max: string) {
  if (!min.trim() || !max.trim()) return 'Enter both minimum and maximum budgets.';
  if (!/^\d+(\.\d{1,2})?$/.test(min) || !/^\d+(\.\d{1,2})?$/.test(max)) return 'Enter amounts with up to two decimal places.';
  if (!Number.isFinite(Number(min)) || !Number.isFinite(Number(max)) || Number(max) > 100000) return 'Enter a budget between $0 and $100,000.';
  if (Number(min) > Number(max)) return 'Minimum budget cannot exceed maximum budget.';
  return null;
}
export function validatePreferences(p: Preferences) {
  const error = validateBudget(String(p.budgetMin), String(p.budgetMax));
  if (error) throw new Error(error);
  if (p.travelMiles !== null && ![1, 3, 5, 10].includes(p.travelMiles)) throw new Error('Choose a valid travel radius.');
  for (const list of [p.cuisines, p.dislikedFoods, p.dietaryHabits, p.allergens]) {
    if (list.length > 50 || list.some(v => !v.trim() || v.length > 60)) throw new Error('Each list supports up to 50 items of 60 characters.');
  }
}
