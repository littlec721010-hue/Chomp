# Sprint 3 Beta — Technical Acceptance Criteria and Definition of Done

Status: Draft for team agreement; no acceptance item is marked passed.
Prepared for: Tongrong / Chomp team
Date: October 21, 2026
Inputs: Team-provided Sprint 3 requirements and Alpha retrospective summary; local Alpha source review at main 2500792; Alpha release v0.1.0 at c47969b.

Gate structure follows the team's supplied roadmap screenshot: Gate A — Trustworthy Foundation (B01–B03); Gate B — Connected Experience (B04–B06); Gate C — Beta Candidate (B07). Detailed checks below operationalize that roadmap. Original course documents and numbered citations have not been independently verified.

## Version 3 scope revision — October 31, 2026

The user confirmed synchronization to updated Hi-Fi Version 3. Independent manual creation (Split 6–10) is required again; SPLIT-01/SP-04 return to active Not run. Lucky-diner selection (Decide 18–20) replaces direct restaurant-random ties. This supersedes the October 21 deferral and PR #13’s previous tie policy. See [Version 3 alignment](Sprint3-Version3-Design-Alignment.md). This is a documentation update, not implementation or a test pass.

## Draft Sprint 3 Goal

Turn the integrated Alpha into a Beta candidate with trustworthy account isolation, connected two-device dining decisions including V3 lucky-diner ties, persistent account-owned data, and both real OCR correction and independent manual bill creation. Validate in at least three documented sessions and prioritize evidence-backed experience/accessibility revisions across Gates A/B/C.

## Scope

Mandatory live integrations: real authentication and account isolation, shared multi-client rooms and voting, and persistent account-owned data. Demo mode and simulated votes cannot count as evidence for these requirements.

Confirmed Split scope: real OCR with editable results/missing-item addition and independent no-OCR manual creation are both required. Manual setup → add/edit/remove items → review/confirm → exact-cent equal split → save. Both paths use the same bill model and account-owned storage; item ownership splitting is outside scope.

OCR flow: photograph/upload → recognized draft → correct errors/add missing items/remove incorrect items → confirm → equal split → save. Post-OCR correction is distinct from independent manual creation; neither substitutes for the other.

Real restaurant search, reservations and payments are not established as mandatory by the supplied summary. Proposed scope: retain labeled restaurant fixtures; confirm this remaining boundary with the team before final sign-off.

## Gate A — Trustworthy Foundation (B01–B03)

- B01: Standardize PR code review and CI checks. Proposed acceptance: changes reach the delivery branch through a PR, an identified teammate reviews them, and required automated tests, typecheck and Web build pass. Retain PR/review/check links; branch-protection enforcement must be recorded as configured or not configured.
- B02: Connect real Supabase authentication and account isolation; acceptance IDs AUTH-01, AUTH-02 and SEC-01 apply.
- B03: Standardize allergy and dietary-restriction safety labels; proposed acceptance: distinguish recorded restrictions, fixture compatibility and unverified restaurant information; unsupported restrictions/no-match outcomes are explicit and cannot silently become a selectable compatible result. Retain input-to-result examples and label screenshots. Fixture data must not be presented as verified real-world safety information.

## Gate B — Connected Experience (B04–B06)

- B04: Real two-device room/vote synchronization and V3 lucky-diner tie handling; GROUP-01 through GROUP-04 apply.

### Version 3 group completion and lucky-diner tie policy

After all required valid votes, a unique leader wins directly. In a completed 2–2 tie, Decide 18 shows the diner pool and Pick Lucky Diner; Decide 19 spins the nominees; Decide 20 reveals one lucky diner and uses their recorded original vote, then View Today’s Restaurant opens the result. Do not ask for a new deciding vote or directly randomize restaurants. The server stores one diner/original-vote/restaurant outcome per round; concurrent requests, two devices, reload and reconnect read it without rerolling. Explain whose original vote broke the tie. Mixed counts (e.g. 2–2–1), generalized nominee eligibility and post-finalization lifecycle still require agreement; do not infer these from the illustrated 2–2 flow.

Persist round ID, candidate diner IDs, chosen diner ID, their original restaurant vote and resulting restaurant ID/tie metadata. Both devices display the same name/image and explanation. Rating/list order and client-local wheel animations cannot choose an independent outcome. Incomplete/no-valid-vote rounds cannot finalize. Implementation/live verification are pending.

- B05: Persist account history and receipt records; DATA-01 through DATA-03 apply.
- B06: OCR → correction/addition → confirm → equal split → save, plus independent manual setup → item entry → review/confirm → equal split → save. SPLIT-01 through SPLIT-05 are active; a sample scan is not real OCR evidence.

## Detailed technical acceptance checks for Gates A and B

Use two independently authenticated accounts, A and B, on two physical devices for cross-device acceptance. Separate browser profiles may support development checks but do not replace the final multi-device run. Use a third account or unauthenticated client for non-member access checks where needed. Record the exact build commit, deployment URL, platform, date and test case ID with every result.

| ID | Acceptance condition | Required evidence |
| --- | --- | --- |
| AUTH-01 | A and B each register with distinct real email addresses, receive and complete email verification, and sign in/out successfully against the configured Supabase backend. Attempts to use an unverified email behave according to the agreed verification policy. | Redacted session record, two distinct user IDs, verification and login outcomes; no passwords or tokens. |
| AUTH-02 | Refresh/relaunch restores a valid session; signing out prevents access to protected screens. Switching A to B clears A's visible account state. | Recorded refresh, sign-out and account-switch sequence. |
| SEC-01 | Using A's normal authenticated client credentials, direct API attempts to read B's profile/preferences return no B data; insert/upsert/update/delete attempts cannot change or remove B's records. Repeat B to A and check unauthenticated access. Enforce this in database policies, not just UI filters. | Request descriptions, redacted results and before/after target records showing no unauthorized change. Zero-row updates count as denied only after checking the target is unchanged. |
| SEC-02 | Apply and version backend schema/RLS migrations. Client builds use public client keys, never a service-role key. Private history remains owner-scoped; room data is restricted to authorized members and only intentionally shared fields are exposed. | Migration revision, access-policy test results and configuration check without secret values. |
| GROUP-01 | A creates a real room; B joins the same backend room using its code. Both devices display the actual membership. Invalid/closed codes produce a recoverable error. No fixture members are required to complete the real flow. | Two-device recording and backend room/membership IDs. |
| GROUP-02 | Both members submit occasion preferences. Shared submission status and the agreed consensus/result update on both devices; saved default preferences are unchanged by occasion-only edits. | Two-device before/after sequence and persisted records. |
| GROUP-03 | A and B cast real votes. Each member can change only their own vote; changing a vote replaces it. Both clients show matching counts and the same outcome. An outsider cannot read private room state or write votes. | Concurrent-client run, changed-vote check, non-member API checks and resulting rows. |
| GROUP-04 | After all votes, the V3 2–2 tie follows Pick Lucky Diner → shared spin → reveal original-vote restaurant → final result. Persist one authoritative diner/vote/restaurant tuple per round; two devices and refresh/reconnect keep the same tuple and notice. No new deciding vote, direct restaurant draw or rating fallback. | 2–2 flow, no-tie/pending controls, concurrent picks, reload/reconnect; generalized pools and lifecycle variants require agreement. |
| DATA-01 | Profile and default preferences survive refresh, App restart and subsequent sign-in on another device. Data loads for the correct authenticated account. | A/B read-back sequence from a second client. |
| DATA-02 | Dining history and saved Split receipt history survive refresh/restart and load for the same account on another device. A cannot read or modify B's history. | Persisted history IDs, read-back and isolation checks. |
| DATA-03 | Failed writes show failure and offer retry without falsely reporting success. Failed reads do not overwrite existing account data with sample/default values. Retried operations do not duplicate history or votes. | Controlled failed-read/write and retry cases. |
| DECIDE-01 | Saved/custom preferences lead to recommendations and a selected result; supported constraints apply before ranking. No-match/unsupported restrictions are clearly explained and do not silently select an incompatible fixture. Group results use the real room's submitted data. | Personal and group walkthroughs, including no-match inputs. |
| SPLIT-01 | Without photo/OCR, enter restaurant/date and valid bill settings, add/edit/remove items with unit prices and quantities, review/confirm, equal split, save and restore. Keep entries through setup/item/review back navigation. | Split 6–10 walkthrough, multiple items, validation and saved read-back; active Not run. |
| SPLIT-02 | A real receipt photo selected through camera or upload is processed by an actual OCR implementation. Recognized item names, quantities/prices, and available tax/tip/total fields populate an editable draft. Missing, ambiguous or inconsistent values are flagged for review; users can add, remove and correct fields before confirming. Predefined sample data is never substituted as a successful recognition result. | Original redacted receipt, actual recognition output, populated draft and corrected/confirmed bill for several distinct receipts. Record supported receipt formats and observed failures; agree on a representative fixture set and accuracy target before sign-off. |
| SPLIT-03 | Handle denied permission, cancellation, OCR failure/timeouts/unreadable receipts honestly. Offer retry/reselect/cancel and manual creation; preserve corrections and confirm before replacing an existing draft. | Permission/cancel/failure cases, completed manual fallback and preserved-edit evidence. |
| SPLIT-04 | OCR-corrected and independently manual bills use integer cents for quantities/prices, tax/tip and equal shares. Allocate remainder so shares differ by at most one cent and sum to total; avoid double-counted tax/tip and flag printed-total mismatches before confirmation. | Both input paths, valid/invalid amounts, changed guest count, remainder and mismatch tests. |
| SPLIT-05 | Successful OCR opens the editable review draft rather than automatically finalizing a bill. Users can correct recognized item names, quantities and prices, add omitted items and remove incorrect items. All edits feed the same bill model; the confirmed equal shares and saved/reloaded receipt use the corrected values, never stale OCR output. Changes after confirmation require confirmation again before final save. | End-to-end record with an OCR error and an omitted item: original receipt → recognized draft → corrected/added items → confirmation → exact-cent split → saved/reloaded corrected bill. Also verify removal and editing after confirmation. |
| NAV-01 | Core Decide, group, Split and Profile flows support entry, return/back and protected navigation without a dead end, stale account data or a crash. | Manual flow checklist on the declared Beta platforms. |

Proposed synchronization target remains 5 seconds, pending team agreement. V3 2–2 lucky-diner flow is confirmed; member snapshots, mixed-count nominee pools, leave/close and post-finalization edits/new rounds remain pending.

Current evidence baseline: account repository and profile/preferences RLS migration exist, but live verification has not been performed in this review. DiningProvider and Split store currently use in-memory state for rooms, votes and histories; these do not satisfy the live/persistence criteria. Existing 24 tests, typecheck and Web export passed on the Alpha review baseline; they do not establish Gate A or Gate B completion for a future Beta build.

## Gate C — Beta Candidate (B07): validation and release

The team roadmap specifies real-device/platform adaptation and regression testing for iOS/Android/Web, accessibility and inclusive-experience review, and user usability testing with defect classification. The supplied Sprint 3 summary additionally requires at least three documented sessions and before/after evidence of prioritized fixes.

| ID | Acceptance condition | Required evidence |
| --- | --- | --- |
| USER-01 | Complete at least 3 documented user/stakeholder testing sessions with the Beta build. Record participant role/pseudonym, date, build, tasks, observed outcomes, difficulties and feedback. | At least three session records. Three sessions are required; the supplied summary does not establish that all participants must be distinct. |
| TRIAGE-01 | Log findings in one matrix using Critical, Important, Deferred and Out of Scope. Each finding links to its source session, affected flow, priority rationale, owner and disposition. Deferred findings include a reason and revisit point. | Findings and Triage Matrix with evidence links. |
| FIX-01 | Fix the highest-priority experience and accessibility findings selected through triage. Each fix links to a commit/PR and has comparable before/after evidence plus retest results. | Before/after screenshots or clips, PRs and verification records. |
| A11Y-01 | Review the tested core flows for labels, keyboard access/focus on Web, readable text/contrast, non-color-only feedback and announced errors/status. Record issues and targeted retests on the declared platform/assistive technology. | Accessibility checklist and linked findings/fixes; do not claim full conformance from a spot check. |
| RELEASE-01 | Final Beta evidence identifies one tested commit/deployment and lists remaining limitations. Run adaptation/regression checks for iOS, Android and Web as specified by B07, re-run affected checks after fixes, and verify the deployed candidate. Any platform scope change requires explicit team agreement. | Device/OS/browser matrix, release checklist, test results and deployment smoke-test evidence. |

Proposed triage meanings: Critical blocks a core task, violates account isolation, corrupts data or prevents access to a core flow; Important materially impairs a task with a workaround; Deferred is acknowledged work postponed with a reason; Out of Scope falls outside the agreed MVP boundary. Category changes require a written rationale, not just removal from the blocker list.

## Definition of Done

A Beta feature is done when:

- Its acceptance IDs and expected behavior are agreed, implemented and linked to reviewable commits/PRs.
- Required live behavior is verified with real accounts/backend data; mock/demo output is not substituted.
- Split demonstrates real OCR correction/missing-item addition and independent manual creation, each with review/confirmation, integer-cent equal splitting and persisted corrected values. OCR failure recovery must pass; one path cannot substitute for the other.
- Applicable happy-path, invalid-input, unauthorized-access, refresh/reconnect and failure/retry cases have expected and actual results.
- Changes are reviewed and integrated into the designated Beta branch; relevant tests, TypeScript checks and production Web export pass for that candidate.
- Required manual device and accessibility checks have evidence; limitations identify untested platforms rather than implying coverage.
- Findings and fixes link back to test sessions, and targeted fixes include before/after evidence and retest outcomes.

Proposed release rule: mandatory Gate A and Gate B criteria pass, at least three sessions and the Gate C evidence are complete, no Critical finding remains open, and every remaining Important finding has a documented team disposition. Required acceptance failures cannot be waived merely by labeling them Deferred. Team sign-off must identify the exact deployed commit and acknowledged limitations.

For overall Beta completion, execute ten core scenarios and all applicable detailed regression: all 36 entries are active Not run again. Verify both bill input paths and the shared lucky-diner/original-vote/restaurant result. Undefined edge variants are specification-blocked, not passed. Accessibility review and three sessions remain required. Checks must pass under Node 24/pnpm 11.25.0/Expo ~57, with candidate/deployment/migration/environment evidence and team sign-off; document merge alone does not accept release.

## Evidence record format

For each acceptance check: ID | build/URL | environment/devices | preconditions | steps | expected | actual | Pass/Fail/Not run | redacted evidence | tester/date | linked defect/retest.

For each session: session ID | pseudonym/role | date | build | tasks | observed outcomes | feedback | linked findings.

For each finding: finding ID | session/evidence | affected flow | category | rationale | owner | action/status | PR | before/after | retest | deferral reason/revisit point.

## Team decisions required before final approval

1. Confirm detailed acceptance checks under the supplied Gate A/B/C roadmap and record the iOS/Android/Web test environments.
2. Confirm fixture restaurant scope, OCR formats/accuracy target and supported manual form precision. Both OCR correction and independent manual creation are required.
3. Approve sync target, member snapshot, mixed-count/multiway nominee eligibility, leave/close and post-finalization/new-round rules. V3 2–2 lucky-diner/original-vote handling is confirmed; prior direct restaurant randomization is superseded.
4. Assign backend configuration, room/persistence implementation and evidence owners; record the three testing sessions and gate dates.

This document defines proposed acceptance, not achieved results. No backend schema changes, live user tests or implementation fixes are claimed by this deliverable.
