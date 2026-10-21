# Review Core Navigation, State Handling, and Data Flow

Date: October 21, 2026. Source baseline: main @ e4a67cf.
Task 5 deliverable: source review and verification handoff. No application changes, live-backend/device tests or defect closure are claimed.
References: [acceptance](Sprint3-Beta-Acceptance-Criteria.md), [risk register](Sprint3-Technical-Risks-and-Dependencies.md), [functional tests](Sprint3-Decide-Split-Functional-Test-Cases.md).

## Core navigation review

| Entry / transition | Current implementation | Assessment |
| --- | --- | --- |
| Guest → welcome/sign-in/sign-up | `AppNavigator.tsx` registers guest-only screens; `linkFallback` redirects protected links. | Guards exist in source; link-model tests are historical supporting evidence, not an interactive login/device pass. |
| Signed-in → onboarding → main tabs | Account `onboarded` controls main route availability; onboarding completion resets root. | Explicit transition exists. Verify email callbacks, refresh and auth timing on actual deployment. |
| Main tabs | Decide, Split and Profile use one NavigationContainer with detail screens in the root stack. | Shared structure is clear; manual back/keyboard/safe-area validation remains required. |
| Solo Decide → saved/custom → recommendations/surprise → result | `PreferenceChoice` selects saved/default vs occasion state; custom editor writes to DiningProvider; selected restaurant enters session history. | Model/UI wiring exists; actual restaurant data remains fixtures. |
| Group → room → preferences → consensus → vote → result | `Screens.tsx`/`ChompModule.tsx` share DiningProvider room state; missing room returns a recovery view. | Connected locally only. An absent-room recovery view exists, but remote lifecycle is not implemented. |
| Split → scan/upload → receipt editor → save | Scan replaces route with receipt editor; editor saves to SplitProvider and navigates to Split tab. | Sample/manual prototype path only; real OCR and independent blank-bill entry are pending. |
| Invalid paths / restaurant IDs | Wildcard route shows NotFound, but result component resolves unknown restaurant IDs to first fixture. | General unknown path and invalid resource ID are different; current resource-ID fallback needs correction (NS-01). |

## State ownership and data paths

| State | Owner / path | Persistence and lifetime |
| --- | --- | --- |
| Session | Supabase auth → AccountProvider → route guards | Configured auth client uses AsyncStorage session persistence; real restoration/isolation unverified. |
| Profile/default preferences | AccountProvider → repository → profiles/dining_preferences; demo branch uses preview AsyncStorage key | Backend code exists for real mode; preview is local. Read generation guard prevents old account-load responses committing after a newer load. |
| Occasion preferences | Defaults → `setMeal`/occasion editor → `saveMeal` → filtering or room-member preference update | Local session state, separate from default repository writes. Group submit also clears local votes. |
| Room/votes | DiningProvider ↔ ChompModule; group pure models calculate consensus/results | Local arrays and sample members; no backend room repository or authoritative multi-client updates. |
| Restaurant selection/history | Result callbacks → `d.select` → history/recentChomps | Session-only deduplicated history; not account-backed. |
| Bill draft/history | Scan/manual draft → SplitProvider → editor → integer-cent model → `save()` | Local state initialized from sample receipts; no backend save/restore. |

`App.tsx` keys DiningProvider by preview/account identity; its nested SplitProvider is consequently reset when identity changes. Loading/error/recovery branches also replace the provider subtree. This is useful for clearing account-scoped local state, but does not provide persistence; a reload of account data can discard unsaved drafts and session history. Verify and define draft recovery before introducing asynchronous backend/OCR flows.

## Findings and follow-up

NS identifiers are review-local findings, not replacements for original D01–D07. P0 means blocking the affected mandatory acceptance; P1 means resolve or explicitly disposition before release.

| ID / priority / status | Source evidence and trigger | Effect / required action | Verification link |
| --- | --- | --- | --- |
| NS-01 / P0 / confirmed source behavior | `src/features/yuhan/ChompModule.tsx:59` resolves `restaurants.find(...) ?? restaurants[0]`; unknown/stale result ID. | Wrong restaurant may be shown. Render unavailable/not-found and recover to recommendations; do not substitute/add default history. | DC-08; R14 |
| NS-02 / P0 / integration gap | `src/features/DiningProvider.tsx:14` onward and `src/features/split/store.tsx` use local state. | Real rooms/votes/history do not survive across clients/reload. Add authorized backend repositories and account/member-scoped hydration, error/retry and reconnect behavior. | GC-01/03/05/08, DC-09, SP-11/12; R02–05 |
| NS-03 / P1 / async risk, not reproduced | `src/state/AccountProvider.tsx:85–86` awaits a write then calls setPreferences/setProfile without comparing current identity/generation. `load()` has a generation guard, writes do not. | If A's save completes after a newer B load, local B UI state could be overwritten by A's old values. Backend write is still addressed to the captured A ID; this observation does not prove a cross-account database write. Guard post-await state commits by current account/session request identity; handle pending operations on sign-out. | AC-04; add delayed-save/account-switch variant |
| NS-04 / P1 / state-lifetime risk | `App.tsx:18–21` swaps provider subtree during loading/error/recovery; nested stores reset on identity change. | Account reload can reset session rooms/history/unsaved bills. Agree persisted vs draft state and recovery/discard UX; rehydrate account-owned records before declaring restoration complete. Do not retain another account's draft to avoid reset. | AC-02/04, GC-08, SP-11/12 |
| NS-05 / P1 / routing context risk, not reproduced | `src/features/yuhan/Screens.tsx:54` always routes Back to preferences with `group:false`; the shared module binds a Back to preferences action. | Check whether the action is reachable from group recommendations/no-match states; if reachable, group context can be lost. Preserve current group context where intended; do not call this an observed UI defect until reproduced. | DC-04, GC-04, UX-01 |
| NS-06 / P0 / confirmed integration gap | `SplitHome.tsx` has camera/gallery entries; `SplitScanScreen.tsx:16–19` loads predefined sample or starts manual draft from a selected image; no actual OCR. | Implement both independent manual entry and real OCR → editable review → missing-item addition → explicit confirmation → equal split → save. Keep stale OCR responses from replacing current edits. | SP-01–06; R06–08 |
| NS-07 / P1 / confirmed labeling and state gap | `SplitReceiptScreen.tsx` labels sample as OCR Receipt/Auto-matched; draft has no explicit user-confirmation state. Editor is already capable of editing/adding/removing line items. | Distinguish sample/manual/real OCR review state; require reconfirmation after edits and persist corrected values. Existing edit capability alone is not evidence of a real OCR pipeline. | SP-02/03/10/11; SPLIT-05 |
| NS-08 / P0 / future backend boundary requirement | `group/model.ts` validates local membership on castVote but does not enforce database identity, eligibility or server lifecycle; all current users operate on client-owned objects. | Do not reuse local checks as authorization. Enforce room membership, own-vote identity, valid choices and completion rules on the backend; test outsider/impersonation/concurrent writes. | GC-05–08; R02/R04 |

## Existing safeguards to preserve

- Account load requests use a generation counter; loading failures offer retry instead of writing defaults over backend data.
- `linkFallback` follows guest/onboarding/account states and auth callback paths are excluded from ordinary route parsing.
- Occasion editing uses a separate flow; do not replace saved defaults to simplify group submissions.
- No-match recommendations disable normal selection; random selection rejects an empty list.
- Split input validation and integer-cent remainder allocation exist. Carry units and validation through OCR/backend adapters, rather than replacing them with floating-point dollar storage.

## Verification handoff and recommended order

1. Guard account save completions and validate unavailable resource routes; reproduce group Back to preferences context before changing behavior.
2. Agree repository/state boundaries: Profile/defaults vs occasion; room/member/vote state; history; editable/confirmed receipt draft. Preserve preview/live separation.
3. Add authorized persistent data flow and reconnect handling; make expected loading, failure, confirmation and retry states explicit.
4. Connect actual OCR and independent manual entry to the same bill editor/model; confirm corrections precede final allocation/save.
5. Execute the ten core integration scenarios plus affected expanded cases; include delayed-save account switching, provider reload/draft behavior and group-back context. Gate C still needs device/accessibility and user evidence.

No runtime pass is inferred from source inspection. The prior Alpha test/build results remain historical; no application tests were rerun for this documentation-only review. This task identifies wiring and follow-up work; implementation fixes belong in separately reviewable changes.
