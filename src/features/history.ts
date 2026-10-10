import type { Restaurant } from './contracts';
export function recentChomps(history: Restaurant[], samples: Restaurant[] = []): Restaurant[] {
  const seen = new Set<string>();
  return [...history, ...samples].filter(restaurant => {
    if (seen.has(restaurant.id)) return false;
    seen.add(restaurant.id); return true;
  });
}
