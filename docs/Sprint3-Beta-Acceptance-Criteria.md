# Sprint 3 Beta — Technical Acceptance Criteria and Definition of Done

Status: Draft for team agreement; no acceptance item is marked passed.
Prepared for: Tongrong / Chomp team
Date: October 21, 2026
Inputs: Team-provided Sprint 3 requirements and Alpha retrospective summary; local Alpha source review at main 2500792; Alpha release v0.1.0 at c47969b.

Gate structure follows the team's supplied roadmap screenshot: Gate A — Trustworthy Foundation (B01–B03); Gate B — Connected Experience (B04–B06); Gate C — Beta Candidate (B07). Detailed checks below operationalize that roadmap. Original course documents and numbered citations have not been independently verified.

## Draft Sprint 3 Goal

Turn the integrated Alpha into a Beta candidate with trustworthy account isolation, connected two-device dining decisions, persistent account-owned data, and usable receipt-to-equal-split flows through both real OCR and independent manual entry. Validate the candidate in at least three documented user/stakeholder sessions, triage findings, and use evidence to prioritize experience and accessibility revisions across Gates A, B and C.

## Scope

Mandatory live integrations: real authentication and account isolation, shared multi-client rooms and voting, and persistent account-owned data. Demo mode and simulated votes cannot count as evidence for these requirements.

Confirmed Split scope: real receipt OCR and independent manual entry are both required. OCR results must be editable before confirmation. Bill allocation is equal splitting with exact integer-cent reconciliation; item ownership allocation is outside the confirmed scope. OCR is required for Beta acceptance, but an individual receipt can always be entered manually without using OCR.

Primary Split flow: photograph/upload receipt → OCR populates a draft → user reviews recognized items, edits errors, adds missing items and removes incorrect items → user explicitly confirms the corrected bill → calculate equal shares → save. Manual correction and missing-item entry are normal steps after successful OCR, not only failure recovery. Independent manual entry remains a secondary path into the same editable bill and calculation model.

Real restaurant search, reservations and payments are not established as mandatory by the supplied summary. Proposed scope: retain labeled restaurant fixtures; confirm this remaining boundary with the team before final sign-off.

## Gate A — Trustworthy Foundation (B01–B03)

- B01: Standardize PR code review and CI checks. Proposed acceptance: changes reach the delivery branch through a PR, an identified teammate reviews them, and required automated tests, typecheck and Web build pass. Retain PR/review/check links; branch-protection enforcement must be recorded as configured or not configured.
- B02: Connect real Supabase authentication and account isolation; acceptance IDs AUTH-01, AUTH-02 and SEC-01 apply.
- B03: Standardize allergy and dietary-restriction safety labels; proposed acceptance: distinguish recorded restrictions, fixture compatibility and unverified restaurant information; unsupported restrictions/no-match outcomes are explicit and cannot silently become a selectable compatible result. Retain input-to-result examples and label screenshots. Fixture data must not be presented as verified real-world safety information.

## Gate B — Connected Experience (B04–B06)

- B04: Two devices truly join the same room and synchronize votes; GROUP-01 through GROUP-04 apply.
- B05: Persist account history and receipt records; DATA-01 through DATA-03 apply.
- B06: Support the full OCR → review/edit/add missing items → confirm → equal split → save flow, plus independent manual entry. SPLIT-01 through SPLIT-05 apply. A predefined sample receipt does not count as OCR evidence.

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
| GROUP-04 | Refresh/reconnect restores membership, submitted preferences and votes without duplicates. Result is unavailable until the agreed completion rule is met. Tie handling and leaving/closing behavior are defined and tested. | Reconnect and lifecycle cases with expected/actual outcomes. |
| DATA-01 | Profile and default preferences survive refresh, App restart and subsequent sign-in on another device. Data loads for the correct authenticated account. | A/B read-back sequence from a second client. |
| DATA-02 | Dining history and saved Split receipt history survive refresh/restart and load for the same account on another device. A cannot read or modify B's history. | Persisted history IDs, read-back and isolation checks. |
| DATA-03 | Failed writes show failure and offer retry without falsely reporting success. Failed reads do not overwrite existing account data with sample/default values. Retried operations do not duplicate history or votes. | Controlled failed-read/write and retry cases. |
| DECIDE-01 | Saved/custom preferences lead to recommendations and a selected result; supported constraints apply before ranking. No-match/unsupported restrictions are clearly explained and do not silently select an incompatible fixture. Group results use the real room's submitted data. | Personal and group walkthroughs, including no-match inputs. |
| SPLIT-01 | Users can start a blank bill and manually enter/edit items, quantities, prices, tax, tip and participant count without a photo or OCR request. Valid bills can be saved and restored under DATA-02. Invalid values are rejected with actionable feedback. | Complete manual-entry, validation and save/reload walkthrough. |
| SPLIT-02 | A real receipt photo selected through camera or upload is processed by an actual OCR implementation. Recognized item names, quantities/prices, and available tax/tip/total fields populate an editable draft. Missing, ambiguous or inconsistent values are flagged for review; users can add, remove and correct fields before confirming. Predefined sample data is never substituted as a successful recognition result. | Original redacted receipt, actual recognition output, populated draft and corrected/confirmed bill for several distinct receipts. Record supported receipt formats and observed failures; agree on a representative fixture set and accuracy target before sign-off. |
| SPLIT-03 | Manual entry remains available when camera permission is denied, photo selection is canceled, OCR times out/fails or a receipt is unreadable. Show the error/review state without claiming success; preserve existing manual edits during failure/retry and ask before replacing them with a new recognition result. | Permission/cancel/failure/unreadable-receipt cases and a completed manual fallback bill. |
| SPLIT-04 | For both OCR-reviewed and manually entered bills, quantity/price edits, tax, tip and participant count produce correct subtotal/total and equal shares in integer cents. Allocate any remainder cents explicitly so shares differ by at most one cent and sum exactly to the total. Do not double-count tax/tip from OCR; flag differences between the printed total and computed total for correction before confirmation. | Calculation tests and manual cases covering divisible/non-divisible totals, changed guest counts, invalid inputs and printed-total mismatch. |
| SPLIT-05 | Successful OCR opens the editable review draft rather than automatically finalizing a bill. Users can correct recognized item names, quantities and prices, add omitted items and remove incorrect items. All edits feed the same bill model; the confirmed equal shares and saved/reloaded receipt use the corrected values, never stale OCR output. Changes after confirmation require confirmation again before final save. | End-to-end record with an OCR error and an omitted item: original receipt → recognized draft → corrected/added items → confirmation → exact-cent split → saved/reloaded corrected bill. Also verify removal and editing after confirmation. |
| NAV-01 | Core Decide, group, Split and Profile flows support entry, return/back and protected navigation without a dead end, stale account data or a crash. | Manual flow checklist on the declared Beta platforms. |

Proposed synchronization acceptance target: remote membership, preference-submission and vote changes appear within 5 seconds on a stable connection without manual refresh. Record observed delays; this target requires team agreement and is not a supplied course threshold. Define tie/completion/leave/close rules before executing GROUP-04.

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
- Split specifically demonstrates successful real OCR followed by review, correction and missing-item addition, explicit confirmation, exact-cent equal splitting and persistence of the corrected bill (SPLIT-02/04/05). Independent manual entry and OCR failure recovery must also pass; OCR success alone does not complete B06.
- Applicable happy-path, invalid-input, unauthorized-access, refresh/reconnect and failure/retry cases have expected and actual results.
- Changes are reviewed and integrated into the designated Beta branch; relevant tests, TypeScript checks and production Web export pass for that candidate.
- Required manual device and accessibility checks have evidence; limitations identify untested platforms rather than implying coverage.
- Findings and fixes link back to test sessions, and targeted fixes include before/after evidence and retest outcomes.

Proposed release rule: mandatory Gate A and Gate B criteria pass, at least three sessions and the Gate C evidence are complete, no Critical finding remains open, and every remaining Important finding has a documented team disposition. Required acceptance failures cannot be waived merely by labeling them Deferred. Team sign-off must identify the exact deployed commit and acknowledged limitations.

For overall Beta completion, run the ten core integration scenarios and full applicable detailed regression in the [functional test plan](Sprint3-Decide-Split-Functional-Test-Cases.md), retaining component outcomes and platform evidence. The ten scenarios organize the 36 detailed cases; they do not replace accessibility review or the three user/stakeholder sessions. Both real OCR followed by correction/missing-item addition and independent no-photo manual entry require passing evidence, including persistence of the confirmed bill. Relevant checks must pass under the agreed Node 24/pnpm 11.25.0/Expo ~57 toolchain; historical Alpha Node 23 results do not establish this. Final evidence identifies candidate/deployment, backend migration version, coverage, residual issues and team sign-off; merging this draft alone does not approve release.

## Evidence record format

For each acceptance check: ID | build/URL | environment/devices | preconditions | steps | expected | actual | Pass/Fail/Not run | redacted evidence | tester/date | linked defect/retest.

For each session: session ID | pseudonym/role | date | build | tasks | observed outcomes | feedback | linked findings.

For each finding: finding ID | session/evidence | affected flow | category | rationale | owner | action/status | PR | before/after | retest | deferral reason/revisit point.

## Team decisions required before final approval

1. Confirm detailed acceptance checks under the supplied Gate A/B/C roadmap and record the iOS/Android/Web test environments.
2. Confirm fixture restaurant scope; choose representative receipt formats/test images and an OCR accuracy target. OCR plus independent manual entry and equal splitting are confirmed requirements.
3. Approve the synchronization target and group completion/tie/leave/close rules.
4. Assign backend configuration, room/persistence implementation and evidence owners; record the three testing sessions and gate dates.

This document defines proposed acceptance, not achieved results. No backend schema changes, live user tests or implementation fixes are claimed by this deliverable.
