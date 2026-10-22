# Core Flow Validation Record and Current Build Limitations

Prepared: October 21, 2026 (America/New_York).
Source baseline: main @ 7903996, after PR #11. This document prepares the Task 8 record; it does not claim that execution of Task 8 is complete.
References: [acceptance and DoD](Sprint3-Beta-Acceptance-Criteria.md), [functional cases](Sprint3-Decide-Split-Functional-Test-Cases.md), [defect reporting](Sprint3-Defect-Reporting-and-Reproduction.md).

## Evidence boundaries

- This pass inspects source and GitHub delivery status only. No new runtime/device/user test was executed against main @ 7903996.
- The original Alpha review at 2500792 passed 24 automated tests, typecheck and Web export with local Node 23.10.0/pnpm 11.25.0. Application source, tests, package/lockfile and migrations show no differences from that baseline to 7903996. This supports continuity of source evidence, not a newly executed candidate pass.
- Experimental code PR #10 at 9036f4a passed 27 tests and browser demo spot checks, but it was closed **without merging** at the user's direction. Those tests, changed screens and screenshots are not evidence of fixes in current main. The local dist output may also contain that experimental build; do not use it as a current-main validation artifact without rebuilding from the intended commit.
- No actual Supabase project was verified in this work. Local checkout has only an empty .env.example; deployed configuration may differ and is unverified. Absence of local configuration does not prove the deployed backend is absent.
- The user confirmed historical Vercel Alpha deployment c47969b/v0.1.0. A later Vercel main-preview inspection identified 57beeab with Node 24.x and pnpm 11.25.0. Neither identifies the current deployment of 7903996; source/deployment parity must be recorded during execution.

## Ten core scenarios — current-main execution record

All ten scenarios are **Not run on the current candidate**. Source prerequisites and missing integrations explain readiness; they are not fabricated runtime outcomes. If execution cannot proceed, record an actual Blocked run with its dependency and evidence.

| Scenario | Source evidence / limitation | Current candidate result | Evidence needed |
| --- | --- | --- | --- |
| CORE-01 — real authentication | Auth/repository code exists; no live two-account registration/verification/login run. | Not run | Redacted A/B registration, verification and login/logout outcomes; build/backend IDs. |
| CORE-02 — account isolation | Profile/preferences owner RLS exists in migration; no live direct-client denial evidence; room/history tables not implemented. | Not run | A/B/anonymous API denial and unchanged target rows; own-account positive controls. |
| CORE-03 — solo Decide | Defaults/occasion state and fixture filtering/result routes are wired. | Not run | Candidate walkthrough showing actual selected ID/result and unchanged defaults. |
| CORE-04 — restrictions | Adapter and no-match logic exist; alias coverage and safety labels still require review. | Not run | Supported/unsupported/no-match cases, preserved restrictions and blocked incompatible selection. |
| CORE-05 — real group | Fixed sample code/members and local room state do not satisfy shared-device lifecycle. | Not run; live prerequisite missing in source | Real room/membership IDs on two devices and submitted-preference synchronization. |
| CORE-06 — voting/reconnect | Local vote models exist, not remote coordination or persistence. | Not run; live prerequisite missing in source | Concurrent votes, replacement, completion and reconnect evidence against authoritative state. |
| CORE-07 — OCR + corrections | Scan animation loads sampleReceipt; actual OCR pipeline is unconnected. Line-item editing exists but does not establish OCR. | Not run; real OCR prerequisite missing in source | Real image/output, correction and missing-item addition, confirmation, equal split and saved corrected bill. |
| CORE-08 — OCR recovery | Camera/gallery paths and messages exist; real OCR retry/reselect/cancel and stale-output behavior cannot yet be accepted. | Not run | Permission/cancel/timeout/unreadable-image runs with draft preservation and honest feedback. |
| CORE-09 — exact-cent splitting | Integer-cent calculation and six model tests exist; current-candidate UI/OCR-to-save path not executed. | Not run | Known totals/remainders, corrected inputs and reconciled saved/read-back amounts. |
| CORE-10 — persistence | Profile/preferences repository exists; dining/receipt histories remain useState stores. | Not run; history persistence missing in source | Same-account refresh/restart/second-device restoration and cross-account denial. |

SP-04 / SPLIT-01 (independent blank-bill/no-OCR entry) is **Deferred pending usability feedback**, not an active failed test. OCR review/edit/add missing items remains required. There are ten active core scenarios and 36 detailed entries: 35 active, one Deferred.

## Current build limitations and user impact

| Limitation | User impact / current boundary | Tracking |
| --- | --- | --- |
| Fixture restaurant catalog | Recommendation data is fictional; not live search or verified dietary information. Never claim fixture tags are real venue guarantees. | R09; B03 |
| Unknown restaurant ID fallback | Source still defaults to the first restaurant instead of an unavailable state. Requested recovery copy/actions remain unimplemented. | NS-01, R14; DC-08 |
| Intermittent name/photo mismatch | User-reported on Decide 17; exact pair, build and reproducible sequence still needed. The screenshot identifies the target screen, not a proven pair/root cause. | Result-page follow-up in navigation review |
| Account async state risk | Account reads have generation guards; post-save state commits do not. An account-switch/save race remains unverified. | NS-03; AC-04 delayed-save variant |
| Provider lifetime | Account loading/recovery/identity changes can reset nested local state; unsaved draft recovery needs definition and validation. | NS-04 |
| Local-only rooms, votes and history | No cross-device collaboration or persistent dining/receipt history; refreshing cannot be represented as durable save. | R03–05; NS-02/08 |
| Sample scan and no explicit confirmation state | Sample animation is not OCR; existing editor does not implement the full real OCR-review-confirm pipeline. | R06–08; NS-06/07 |
| Device/accessibility/user evidence gaps | Automated models and Web builds do not establish native camera permissions, accessible flows or usable experiences. No three-session evidence set exists in this work. | R12; Gate C |

Existing prototype behavior is not removed by the scope decision to defer new standalone manual entry. Reservations/payments/live restaurant search remain unconfirmed MVP boundaries, not newly connected services.

## Execution and closure record

Use the report/run format from the linked documents. Each actual run must name commit + deployed URL, device/OS/browser, live/demo mode, backend revision, exact input/preconditions, expected/actual values, tester/date and redacted evidence. Keep source observations separate from runtime results.

Before using local or hosted previews, ensure they match the target commit rather than closed PR #10. After approved implementation resumes, execute core checks, affected expanded cases and full applicable release regression; retain Gate C accessibility and at least three documented sessions with triage and before/after fixes.

**Task 8 status:** record and limitations prepared; current-candidate runtime verification not executed. No new issue is marked fixed, no gate passed and no release accepted by this document.
