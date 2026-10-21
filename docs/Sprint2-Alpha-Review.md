# Chomp — Sprint 2 Alpha Code and Branch Review

Reviewed by: Tongrong (review prepared with Codex)
Review date: October 21, 2026
Repository: https://github.com/littlec721010-hue/Chomp
Reviewed baseline: main @ 2500792

## Scope and conclusion

This review covers the current repository as the available Alpha handoff baseline. README calls this the stage-one delivery; the team should confirm that v0.1.0 is the intended Sprint 2 Alpha milestone. This is a source, branch, automated-test and Web-build review, not a completed manual acceptance test.

The integrated prototype contains implemented Decide, group dining and Split flows. It is suitable as a baseline for Beta planning. Remote collaboration, live restaurant data and OCR remain unconnected. A successful build does not establish production readiness or device compatibility.

## GitHub branches

| Branch | Head | Observation |
| --- | --- | --- |
| main | 2500792 | Reviewed baseline; includes stage-one integration |
| develop | 6c634f5 | Same file tree as main; different commit history |
| integration/chomp-flows | 823fcc3 | Same file tree as main; README identifies it as the demo deployment branch; deployment itself was not verified |
| feature-shan-preferences | 946adaa | Account and preferences feature work retained |
| feature-tongrong-navigation | da24d4d | Expo, navigation, Decide and Split foundation retained |
| feature-yuhan-recommendations | a00c65b | Native recommendation and group feature work retained |

`git diff --stat origin/main origin/develop` and the equivalent integration comparison returned no file differences. Commit divergence counts (main-only / other-only) are 2/1 for develop and 3/1 for integration. Different head hashes therefore do not indicate missing feature files in this comparison. Individual feature branches were inventoried; this review does not certify every feature-branch commit as independently merged.

Release tag v0.1.0 points to c47969b, the develop merge. README translation is the subsequent main commit.

## Implementation inventory

| Area | Evidence | Current status / remaining work |
| --- | --- | --- |
| Navigation | src/navigation/AppNavigator.tsx; linking.ts; tests/integration-links.test.ts | Decide, Split, Profile and nested routes are registered. Link-model tests pass; interactive back-navigation and device behavior remain untested in this review. |
| Solo Decide | PreferenceChoice.tsx; preferencesAdapter.ts; group/model.ts; yuhan/Screens.tsx | Saved/custom occasion preferences, filtering, ranking and result routes implemented. Restaurants are fictional fixtures, not live search results. |
| Group Decide | DiningProvider.tsx; group/model.ts; yuhan/ChompModule.tsx | Local room, consensus and voting demonstration implemented. EAT-404 and sample members do not establish cross-device room joining or synchronization. |
| Split | split/model.ts; SplitScanScreen.tsx; store.tsx | Sample scan, manual entry, calculation and in-session history implemented. Uploaded photos require manual entry; OCR is unconnected. Allocation is equal-share calculation, not evidence of item ownership or payments. |
| Persistence | DiningProvider.tsx; split/store.tsx; AccountProvider.tsx | Rooms, votes, dining history, bookmarks and receipts use in-memory state and reset on reload. Demo profile/default preferences use AsyncStorage. |
| Accounts | src/lib/supabase.ts; auth.ts; repository.ts; AccountProvider.tsx | Supabase integration code exists. Real email/OAuth/recovery, database permissions and account isolation were not exercised against a configured backend. |

## Unfinished features and verification gaps

1. Cross-user room synchronization, invitations and remote votes are unconnected.
2. Restaurant search and verified venue/dietary data are unconnected; current catalog has three fictional restaurants.
3. Receipt OCR is unconnected; sample scan loads a predefined receipt after an animation.
4. Dining and receipt data do not persist across reloads.
5. Reservations and payments are unconnected, as documented in README. Whether they belong in Beta must be agreed by the team.
6. Real authentication, account isolation, physical-device layout and camera permissions require manual integration testing.

These are baseline limitations or verification gaps, not automatically Beta blockers. Their required scope belongs in the next task: Beta acceptance criteria and Definition of Done.

## Verification performed

| Command | Result |
| --- | --- |
| pnpm install --frozen-lockfile | Passed; lockfile unchanged |
| pnpm typecheck | Passed |
| pnpm test | Passed: 18 functional/model tests + 6 Split calculation tests; 0 failures |
| pnpm export:web | Passed; dist generated |

Environment: Windows, Node v23.10.0, pnpm 11.25.0. Initial test execution in the restricted environment failed in tsx while reading Windows user information (uv_os_get_passwd); the authorized rerun outside that restriction passed all 24 tests. No application source changes were required.

Existing tests cover preference validation/conversion, restriction filtering, consensus/voting, random selection, URL mapping, history deduplication, exact-cent allocation and invalid bill inputs. They do not prove interactive end-to-end UI behavior, visual fidelity, real authentication or physical-device compatibility.

## Task 1 handoff

Code and branch baseline review is documented. Use this inventory for Task 2, defining which prototype limitations must be resolved for Beta and which may remain explicitly disclosed. This report is submitted as repository documentation for team review.
