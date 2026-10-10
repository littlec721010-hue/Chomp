# Yuhan: recommendations and group decisions

Implemented on `feature-yuhan-recommendations`, using React Native, Expo SDK 57, and TypeScript. The demo harness is temporary integration scaffolding because `develop` had only a README when work began.

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

The full design contexts and screenshots were read for all ten screens; click reactions were inspected through the Figma Plugin API. `Decide 8/9` share one view with a title variant; voting is handled by the same group state for `15/16`. Native test IDs retain traceability to the original design. Nested cards use native flex layouts; two-column grids use wrapping native rows. The surrounding 390 px mobile artboard keeps its designed coordinates and scales down below 390 px; long pages scroll inside the preview.

Static images and SVGs are the original downloaded Figma assets in `assets/figma`. Local font files provide Plus Jakarta Sans and Inter. `native/styles.json` retains the supplied Figma style values, consumed through React Native StyleSheet. Native views, Text, Pressable, TextInput, ScrollView, and Modal render the interface; Expo Image bundles the original image/SVG assets. Soft background glows use native SVG gradients because CSS filter blur is not portable. Figma screenshots are references only, never UI assets.

## Team integration

`ChompModule` in `src/features/ChompModule.tsx` accepts `ChompModuleProps` from `contracts.ts`:

```tsx
<ChompModule
  user={currentUser}
  route={activeYuhanRoute}
  onNavigate={setActiveYuhanRoute}
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

For controlled room state, pass both `room` and `onRoomChange`. The active user's ID must appear in `room.members`. Routes are typed module state, with optional controlled `route` and `onNavigate` props. Without them, navigation is internal. There are no browser hash routes or DOM APIs; map these route keys to the team's native navigation during integration. The `User`, `Preferences`, `Restaurant`, `DiningRoom`, `Receipt`, and `Vote` contracts are defined locally for review by the team.

`ChompDemo.tsx` provides a responsive screen selector (sidebar on wide displays; Preview sheet from the demo home dialog on phones) and explicit integration dialogs for the missing home/preferences pages. These dialogs are demo scaffolding and are not replacements for Tongrong or Shan's screens. No auth, preference editing, Split, or profile screens were implemented here.

## Demo behavior and limits

- Creating a room opens the design's sample Friday Dinner Squad. Joining accepts the sample code `EAT-404`; malformed and unknown codes show feedback.
- Group name, dinner time, scope, bookmarks, invitation status, and votes are interactive. Copy Code uses the clipboard, with a manual-copy fallback.
- Sample members' votes are seeded to allow the full result flow. Free and random votes replace the user's previous vote. Results wait for all members; vote-count ties prefer the higher-rated restaurant.
- Local state is stored under `chomp.yuhan.native.v1` via AsyncStorage; Reset demo clears it. There is no backend, live multi-user synchronization, external invitation, real restaurant verification, map integration, or phone call.
- Menu, directions, and call actions open local HiFi feedback. Restaurant data, compatibility percentages, restrictions, and friend names reproduce the Figma fixtures; they are not live claims. The Figma consensus and squad pulse use different example member names, retained for fidelity.
- `group/model.ts` includes preference consensus, hard-filtered restaurant ranking, vote replacement, random choice, and winner selection helpers for later integration. The displayed demo cards retain Figma's fixed order and match percentages.

## Run and verify

```sh
pnpm install
pnpm start
# Expo Go: scan the QR code on your phone
# iOS simulator / Android emulator (requires their local SDKs):
pnpm ios
pnpm android
# Browser preview of the same React Native code:
pnpm web
pnpm typecheck
pnpm test
pnpm build
```

Seven model tests cover malformed codes, budget intersections, hard restriction filtering, non-overlapping budgets, replacing votes, incomplete/tied votes, and random choice boundaries. Expo Web QA covers the solo and group workflows and mobile viewport rendering. `pnpm build` type-checks and exports Web plus iOS/Android Hermes bundles through Metro. These native exports verify bundling, not device execution or signed IPA/APK builds. A simulator/device pass remains required before release.

If Metro reports `EMFILE: too many open files, watch` on macOS, install Watchman from its official distribution and restart Metro. The machine used for this migration hit this limit; static three-platform export and exported Web preview work without file watching. Xcode and Android SDK are not present on this machine.

For a Web preview without Metro watching, run `pnpm build` then `pnpm preview` and open `http://127.0.0.1:8082`. This serves Expo's actual exported React Native Web app. Edits require rebuilding.
