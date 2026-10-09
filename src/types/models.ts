export type Preferences = {
  cuisines: string[];
  dislikedFoods: string[];
  dietaryHabits: string[];
  allergens: string[];
  budgetMin: number;
  budgetMax: number;
  travelMiles: number | null;
};
export type Profile = { displayName: string; notifications: boolean; sharePreferences: boolean };
export type Screen = 'Sign' | 'SignIn' | 'SignUp' | 'SetPreference' | 'Profile' | 'Profile1' | 'Decide' | 'Split';
export const emptyPreferences: Preferences = { cuisines: [], dislikedFoods: [], dietaryHabits: [], allergens: [], budgetMin: 15, budgetMax: 30, travelMiles: 5 };
// Figma sample data is ONLY used in the explicit local preview.
export const samplePreferences: Preferences = { cuisines: ['Italian', 'Japanese', 'Korean'], dislikedFoods: ['Cilantro', 'Olives'], dietaryHabits: ['Gluten-free'], allergens: ['Peanuts', 'Shellfish'], budgetMin: 15, budgetMax: 30, travelMiles: 5 };
export const cuisineOptions = ['Italian', 'Japanese', 'Korean', 'Chinese', 'Mexican', 'American', 'Thai', 'Indian', 'Mediterranean'];
export const dietaryOptions = ['Gluten-free', 'Vegetarian', 'Vegan', 'Halal', 'Kosher', 'Dairy-free'];
export const allergenOptions = ['Tree nuts', 'Fish', 'Dairy', 'Eggs', 'Soy', 'Wheat', 'Sesame', 'Peanuts', 'Shellfish'];
