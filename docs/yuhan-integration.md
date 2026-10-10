> 整合更新：本文记录原分支交接。当前应用结构、运行方式和限制以根目录 README.md 为准。

# Yuhan: recommendations and group decisions

Implemented on `feature-yuhan-recommendations`, using React, TypeScript, Vite, and ordinary CSS. The demo harness is temporary integration scaffolding because `develop` had only a README when work began.

## Scope and Figma references

File: `dFW4Nr54OfzHFRKWPkJwWV`, page `171:15254` (Hi-Fi Version 3).

| Screen | Node | Route |
|---|---|---|
| Decide 5 | 258:21705 | /recommendations |
| Decide 6 | 258:22394 | /recommendations/result |
| Decide 7 | 258:22725 | /group |
| Decide 8 | 281:23049 | /group/create |
| Decide 9 | 281:23405 | /group/join |
| Decide 13 | 281:24327 | /group/consensus |
| Decide 14 | 281:24768 | /group/recommendations |
| Decide 15 | 312:26427 | /group/vote |
| Decide 16 | 298:25879 | /group/random-vote |
| Decide 17 | 312:26834 | /group/result |

The full design contexts and screenshots were read for all ten screens; click reactions were inspected through the Figma Plugin API. `Decide 8/9` share one view with a title variant; voting is handled by the same group state for `15/16`. Data-node IDs retain traceability to the original design. Nested cards use the Figma flex/grid layouts. The surrounding 390 px mobile artboard keeps its designed coordinates and scales down below 390 px; long pages scroll inside the preview.

Static images and SVGs are the original downloaded Figma assets in `public/assets/figma`. Local font files provide Plus Jakarta Sans and Inter. `design.css` is compiled ordinary CSS from the supplied Figma style values; no Tailwind dependency is required. Figma screenshots are references only, never UI assets.

## Team integration

`ChompModule` in `src/features/ChompModule.tsx` accepts `ChompModuleProps` from `contracts.ts`:

```tsx
<ChompModule
  user={currentUser}
  room={room}
  onRoomChange={setRoom}
  onHome={() => navigateToDecideHome()}
  onPreferences={(room, resume) => {
    // Open Shan's preferences view, then pass its submitted preferences to resume.
    openPreferences(room, resume);
  }}
  onRestaurantSelected={(restaurant, room) => {
    // Tongrong's app can retain this selection for the Split flow.
    setDiningSelection({ restaurant, room });
  }}
/>
```

For controlled room state, pass both `room` and `onRoomChange`. The active user's ID must appear in `room.members`. This initial module uses hash routes; adapt the route boundary to the team's router during integration. The `User`, `Preferences`, `Restaurant`, `DiningRoom`, `Receipt`, and `Vote` contracts are defined locally for review by the team.

`ChompDemo.tsx` provides a desktop screen selector and explicit integration dialogs for the missing home/preferences pages. These dialogs are demo scaffolding and are not replacements for Tongrong or Shan's screens. No auth, preference editing, Split, or profile screens were implemented here.

## Demo behavior and limits

- Creating a room opens the design's sample Friday Dinner Squad. Joining accepts the sample code `EAT-404`; malformed and unknown codes show feedback.
- Group name, dinner time, scope, bookmarks, invitation status, and votes are interactive. Copy Code uses the clipboard, with a manual-copy fallback.
- Sample members' votes are seeded to allow the full result flow. Free and random votes replace the user's previous vote. Results wait for all members; vote-count ties prefer the higher-rated restaurant.
- Local state is stored under `chomp.yuhan.v1`; Reset demo clears it. There is no backend, live multi-user synchronization, external invitation, real restaurant verification, map integration, or phone call.
- Menu, directions, and call actions open local HiFi feedback. Restaurant data, compatibility percentages, restrictions, and friend names reproduce the Figma fixtures; they are not live claims. The Figma consensus and squad pulse use different example member names, retained for fidelity.
- `group/model.ts` includes preference consensus, hard-filtered restaurant ranking, vote replacement, random choice, and winner selection helpers for later integration. The displayed demo cards retain Figma's fixed order and match percentages.

## Run and verify

```sh
pnpm install
pnpm dev
pnpm test
pnpm build
```

Seven model tests cover malformed codes, budget intersections, hard restriction filtering, non-overlapping budgets, replacing votes, incomplete/tied votes, and random choice boundaries. Browser QA covers the solo and group workflows, data persistence, and mobile viewport rendering. Production build and TypeScript checks must pass before merging.
