export interface Preferences {
  favoriteCuisines: string[]; dislikedFoods: string[]; dietaryHabits: string[]; allergens: string[]
  budget: { minimumCents: number; maximumCents: number }; travelRadiusMiles: number | null
}
export interface User { id: string; name: string; email: string; preferences: Preferences }
export interface Restaurant {
  id: string; name: string; cuisines: string[]; imageUrl: string
  rating: number; distanceMiles: number; priceRangeCents: [number, number]
}
export interface DiningRoom {
  id: string; name: string; inviteCode: string; hostId: string; memberIds: string[]
  votes: Record<string, string>; status: 'preferences' | 'voting' | 'complete'
}
export interface ReceiptItem { id: string; name: string; quantity: number; unitPriceCents: number }
export interface Receipt {
  id: string; restaurantName: string; date: string; guestCount: number
  items: ReceiptItem[]; taxRate: number; tipRate: number
}
