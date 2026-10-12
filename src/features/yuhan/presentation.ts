import type { Restaurant } from '../contracts';

/** Keep the HiFi recommendation screen present without treating samples as matches. */
export function recommendationPresentation(matches: Restaurant[], samples: Restaurant[]) {
  return { cards: matches.length ? matches : samples, previewOnly: matches.length === 0 };
}
