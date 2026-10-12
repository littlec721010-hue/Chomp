# Chomp

**Stop overthinking it. Let’s eat.**

Chomp is a student dining prototype built with **React Native, Expo, and TypeScript**, based on the [Figma Version 3 HiFi design](https://www.figma.com/design/dFW4Nr54OfzHFRKWPkJwWV/Prototype?node-id=171-15254).

It combines Shan’s account and preference screens, Tongrong’s navigation and bill-splitting screens, and Yuhan’s recommendation and group dining flows in one Expo application.

The stage-one delivery is available as [v0.1.0](https://github.com/littlec721010-hue/Chomp/releases/tag/v0.1.0). Its code has been merged into `develop` and `main`. The online demonstration currently deploys from `integration/chomp-flows`.

## Getting started

Use a Node.js version compatible with the dependencies in `package.json`, and pnpm 11.25.0.

```bash
npm install -g pnpm@11.25.0
pnpm install
pnpm start
```

Press `w` in the Expo terminal to open the browser, or start the Web preview directly:

```bash
pnpm web --port 8082
```

For mobile development, use an Expo Go version compatible with Expo SDK 57 or a compatible development build. Physical-device behavior still requires testing.

## Demo preview

The Web version, including production deployments, provides a **Demo preview · Explore the app** entry at the bottom of the screen. Open it to select a screen and explore the prototype without a Supabase account. Use **Switch screen** to reopen the selector.

The demonstration uses a fictional Sarah Jordan profile and sample data. It does not create a real account, verify a password, send email, or synchronize rooms with other users. Demo profile edits and default preferences are saved locally through AsyncStorage. Real sign-in and sign-up require Supabase configuration; signed-in users must sign out before entering the demo.

## Features and walkthrough

- **Account:** welcome, sign-in, sign-up, initial preference setup, profile, and profile editing.
- **Solo dining:** Decide → Start Solo Pick → saved or custom occasion preferences → recommendations or a surprise selection → restaurant result.
- **Group dining:** create a room or join using sample code `EAT-404` → occasion preferences → group consensus → recommendations → free-choice or random voting → group result.
- **Voting demonstration:** select **Simulate sample members’ votes** to complete the other members’ local votes. Results become available when everyone has voted. Members can change their vote.
- **Split:** open the sample receipt scan flow, edit the bill, review each person’s share, and save it to receipt history. Uploaded photos require manual item entry; OCR is not connected.
- **Recent Chomps:** the homepage carousel and **See all** share one deduplicated history list. The Web carousel supports horizontal scrolling and mouse dragging.

Custom occasion preferences update the dining session without changing default profile preferences.

## Mock data and limitations

The catalog contains three fictional restaurants: **Kumo Ramen Studio**, **Seoul Taco Kitchen**, and **Mila Pasta House**. Their prices, distances, ingredients, dietary support, ratings, and menus exist only for prototype testing. Photos are reused design assets rather than evidence about real venues.

Recommendations filter mock data by recorded dietary restrictions, disliked ingredients, budget, and travel radius, then rank it by cuisine preference and rating. Unsupported restrictions are retained. If nothing matches, cards remain visible as a labeled preview with selection disabled.

Group codes, invitations, votes, bookmarks, dining history, and receipts are local session demonstrations and reset on reload. Demo profile data and default preferences persist locally. Live restaurant searches, verified dietary information, reservations, cross-user room synchronization, OCR, and payments are not connected.

## Supabase setup

1. Create a Supabase project.
2. Apply `supabase/migrations/202610090001_accounts_and_preferences.sql` through the SQL Editor or Supabase CLI.
3. Copy `.env.example` to `.env` and provide the project URL and **publishable / anon public key**. Never use a `service_role` key in the client application.
4. Add the actual callback URLs under **Authentication → URL Configuration**. For a Web preview on port 8082, use `http://localhost:8082/auth/callback`; for a native build, use `chomp://auth/callback`. Expo Go generates its callback through `Linking.createURL('auth/callback')`.
5. Configure email confirmation and the required Google, Facebook, or Twitter OAuth providers, then restart Expo. Hosted Web builds also need their deployed callback URL and public environment variables configured before rebuilding.

Authentication supports email verification, password recovery, and persisted sessions. Real new accounts start without sample allergies. Account-loading failures display a retry screen rather than overwriting profile data.

The `profiles` and `dining_preferences` tables use row-level security for user-owned records. Passwords are handled by Supabase Auth. Real email, OAuth, database access, and account isolation require testing against a configured Supabase project.

## Project structure

| Location | Purpose |
| --- | --- |
| `App.tsx` | Expo entry point, providers, and demo selector |
| `src/navigation/` | Account-aware routes, URL linking, and shared navigation |
| `src/state/AccountProvider.tsx` | Authentication, default preferences, and demo profile |
| `src/features/DiningProvider.tsx` | Occasion preferences, rooms, votes, bookmarks, and history |
| `src/screens/` | Shared account, profile, and preference screens |
| `src/features/decide/` | Preference selection and reusable Decide UI |
| `src/features/yuhan/` | Integrated native recommendation, group, voting, and result views |
| `src/features/group/model.ts` | Filtering, consensus, voting, and result calculations |
| `src/features/preferencesAdapter.ts` | Saved-to-session preference conversion |
| `src/features/split/` | Receipt editing, history, and integer-cent bill calculations |
| `assets/figma/`, `assets/yuhan/figma/`, `public/assets/` | Local design assets |
| `design/` | Design references and prototype connection notes |
| `tests/`, `scripts/split-model.test.cjs` | Automated regression tests |

Fonts are loaded from local packages. SVG assets use the shared Metro transformer. Legacy Web design references are retained for comparison, not as a separate Vite application.

## Validation

```bash
pnpm typecheck
pnpm test
pnpm export:web
```

Stage-one verification passed **24 automated tests**: 18 functional tests and 6 bill-calculation tests. Coverage includes input validation, preference conversion, filtering, routes, history consistency, consensus, voting, random selection, and exact-cent bill allocation. TypeScript checks and production Web export also passed.

Automated checks do not establish visual fidelity or physical-device compatibility. The team reviewed screens and reported visual issues during development. Layouts, camera access, and real authentication require appropriate manual testing; an exported bundle is not a tested mobile installation.

## Web deployment

Vercel builds with `pnpm exec expo export --platform web` and serves `dist`. The root `vercel.json` serves existing static assets first and sends other paths to `index.html`, allowing application routes to refresh directly.

Deploy the branch containing the desired delivery version. Before sharing a classroom preview, test its URL in an unauthenticated browser and confirm the **Demo preview** entry appears. Vercel access protection is separate from application sign-in.

## Branch workflow

Develop on individual feature branches, review integrated changes on `integration/chomp-flows`, merge them into `develop`, and merge an accepted stage delivery into `main`. Create a release tag to preserve each confirmed delivery version.
