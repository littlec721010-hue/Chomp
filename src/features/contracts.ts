/** Integration contract owned by Yuhan's recommendation/group modules. */
export interface Preferences {
  dislikedFoods?: string[];
  cuisines: string[];
  restrictions: string[];
  budget: [number, number];
  distanceMiles: number;
}
export interface User { id: string; name: string; preferences: Preferences; ready?: boolean }
export interface Restaurant {
  isMock?: boolean; ingredients?: string[];
  id: string; name: string; cuisine: string; category: string;
  price: [number, number]; distanceMiles: number; rating: number; reviews: string;
  cardImage: string; resultImage: string; voteImage: string;
  supports: string[]; perks: string[]; menu: { name: string; price: number }[];
}
export interface Vote { userId: string; restaurantId: string; method: 'free' | 'random' }
export interface DiningRoom {
  id: string; code: string; name: string; dateTime: string; scope: string;
  members: User[]; votes: Vote[]; invited: string[];
  remote?: boolean; hostId?: string; status?: 'lobby' | 'voting' | 'tie' | 'complete';
  optionIds?: string[]; winnerId?: string | null; revision?: number;
  /** Live rooms obtain this persisted outcome exclusively from the server. */
  luckyDiner?: { userId: string; restaurantId: string; voteSignature: string };
}
export interface Receipt { id: string; restaurantId: string; roomId?: string }
export interface ChompModuleProps {
  user: User;
  room?: DiningRoom;
  onRoomChange?: (room: DiningRoom) => void;
  onHome?: () => void;
  onPreferences?: (room: DiningRoom, submit: (preferences: Preferences) => void) => void;
  onRestaurantSelected?: (restaurant: Restaurant, room?: DiningRoom) => void;
}
