# Version3 prototype connection audit

Read directly from Figma node reactions on page `171:15254` (2026-10-10). No Figma nodes were changed.

| Source | Click target | Figma destination | App destination |
| --- | --- | --- | --- |
| Decide | Start Solo Pick | Decide 2 `242:19778` | DecidePreferences |
| Decide 2 | Saved profile | Decide 3 `258:20672` | Saved selection state |
| Decide 2 | Customize | Set Preference 1 `258:21149` | DecideEditPreferences |
| Set Preference 1 | Confirm | Decide 4 `258:20990` | DecidePreferences, customized |
| Decide 3 / 4 | Show Me Options | Decide 5 `258:21705` | Recommendations, solo |
| Decide 3 / 4 | Surprise Me | Decide 6 `258:22394` | Restaurant, solo |
| Decide 5 | Back | Decide 2 `242:19778` | DecidePreferences |
| Decide 5 | Chomp | Decide 6 | Restaurant, selected id |
| Decide 6 | Back to Home | Decide | Main / Decide |
| Decide | With Friends | Decide 7 `258:22725` | Group |
| Decide 7 | Create / Join | Decide 8 / 9 | GroupRoom, joined flag |
| Decide 8 / 9 | Set Dining Preferences | Decide 10 | DecidePreferences, group |
| Decide 10 | Saved / Customize | Decide 11 / Set Preference 2 | Saved state / DecideEditPreferences, group |
| Set Preference 2 | Confirm | Decide 12 | DecidePreferences, group, customized |
| Decide 11 / 12 | Submit | Decide 13 | GroupConsensus |
| Decide 13 | Recommended Restaurants | Decide 14 | Recommendations, group |
| Decide 14 | Chomp / Random | Decide 15 / 16 | GroupVote, free / random |
| Decide 15 / 16 | Change Vote | Decide 14 | Recommendations, group |
| Decide 15 / 16 | Result | Decide 17 | Restaurant, group, winner id |
| Decide 17 | Home | Decide | Main / Decide |

Selection variants (2/3/4 and 10/11/12) share an interactive screen. Saving customized preferences must return to the selected preview before submission; it must not bypass it. Current dietary filtering can produce an explicit no-matches state rather than showing incompatible sample restaurants. Voting requires all local demo votes before showing a winner. Figma wires its static demo controls without these data-validation guards.
