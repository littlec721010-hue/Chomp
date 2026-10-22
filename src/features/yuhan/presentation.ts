import type { Restaurant } from '../contracts';

/** A result ID must resolve explicitly; never substitute an unrelated venue. */
export function restaurantResult(catalog: Restaurant[], id: string | undefined) {
  const restaurant = catalog.find(item => item.id === id);
  return restaurant ? { restaurant, name: restaurant.name, image: restaurant.resultImage } : undefined;
}

/** Keep the HiFi recommendation screen present without treating samples as matches. */
export function recommendationPresentation(matches: Restaurant[], samples: Restaurant[]) {
  return { cards: matches.length ? matches : samples, previewOnly: matches.length === 0 };
}
