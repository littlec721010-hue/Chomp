import type { Preferences as SavedPreferences } from '../types/models';
import type { Preferences } from './contracts';
/** Preserve unsupported restrictions so the demo never silently drops an allergy. */
export function diningPreferences(p: SavedPreferences): Preferences {
  const names: Record<string, string> = { 'gluten-free': 'Gluten-Free', vegetarian: 'Vegetarian (Strict)', peanuts: 'Peanut Allergy', peanut: 'Peanut Allergy' };
  return { cuisines: [...p.cuisines], restrictions: [...new Set([...p.dietaryHabits, ...p.allergens].map(x => names[x.toLowerCase()] ?? x))], budget: [p.budgetMin, p.budgetMax], distanceMiles: p.travelMiles ?? Infinity, dislikedFoods: [...p.dislikedFoods] };
}
