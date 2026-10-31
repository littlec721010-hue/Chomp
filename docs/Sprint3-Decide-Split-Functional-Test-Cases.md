# Sprint 3 — Decide and Split Functional Test Cases

Prepared: October 21, 2026. Planning baseline: main @ 8108dd4.
Task 4 deliverable: executable manual test specifications, not completed test results.
References: [acceptance criteria](Sprint3-Beta-Acceptance-Criteria.md) and [risks/dependencies](Sprint3-Technical-Risks-and-Dependencies.md).

## Practical execution plan — 10 core scenarios plus 36 detailed cases

The ten scenarios below organize the existing 36 detailed cases; they are not ten additional test cases or a replacement for the full coverage. Start each integration check with this core set, run affected extended cases after relevant changes, and complete the full applicable regression before Beta release. Reuse evidence from the same candidate/environment where appropriate. Registration can use fresh disposable accounts or linked same-candidate evidence; always recheck login/logout and account switching. Missing required integrations are Blocked, not an exemption from the core set.

**Version 3 revision — October 31, 2026:** OCR correction/addition and independent manual creation are both required; SP-04 is active Not run. GC-06 now checks Pick Lucky Diner → shared spin → original-vote restaurant reveal. All 36 detailed entries are active, organized into ten core scenarios. See [Version 3 alignment](Sprint3-Version3-Design-Alignment.md); no execution pass is claimed.

| Core ID | Scenario and minimum expected outcome | Detailed cases to use |
| --- | --- | --- |
| CORE-01 | Real authentication: A/B register and verify, then login/logout; protected access follows authentication state. | AC-01 |
| CORE-02 | Account isolation: direct requests cannot read or modify the other account's private records; verify unchanged target data. | AC-03; account-bound history/receipt checks in DC-09 and SP-11 |
| CORE-03 | Solo Decide: saved preferences affect recommendations; occasion edits preserve defaults; valid selection reaches the matching result. | DC-01, DC-02 |
| CORE-04 | Restrictions: enforce supported constraints before ranking; no-match/unsupported restrictions do not silently relax into selectable results. | DC-03, DC-04 |
| CORE-05 | Real group: A creates, B joins on another device, both submit preferences and see actual shared state. | GC-01, GC-03 |
| CORE-06 | Complete all votes; for a 2–2 tie, show diner pool, pick/spin/reveal one server-stored lucky diner and their original-vote restaurant; both devices/reloads show the same tuple. | GC-05, GC-06, GC-08 |
| CORE-07 | OCR primary path: process a real image, review recognized output, correct errors, add missing items, confirm and split. | SP-01, SP-02; include a real recognition run, not only a stub |
| CORE-08 | Independent manual creation: setup restaurant/date/settings, add/edit/remove items, review/confirm, equal split and save without photo/OCR. Also verify manual recovery from OCR failure in affected runs. | SP-04, SP-05, SP-06 |
| CORE-09 | Exact-cent equal splitting reconciles confirmed OCR-corrected and manually created totals, including indivisible remainders. | SP-07, SP-08 |
| CORE-10 | Restore correct-account Profile/preferences, dining history and OCR/manual bills after refresh/restart and on another device. | AC-02, DC-09, SP-11 |

All core scenarios are **Not run** until evidence is recorded. A scenario passes only when its required component checks pass; bundling multiple checks does not make the work optional. Record component failures and blocked dependencies individually.

Extended checks cover invalid inputs/codes, ingredient aliases, stale routes, outsider/impersonation attacks, concurrent votes/ties, camera denial/OCR failure, late recognition responses, total mismatches, save retry, navigation and accessibility. Select affected cases during development; complete all applicable cases and input/platform variants for final regression. Resolve undefined acceptance policies before judging their dependent cases.

Accessibility checks (UX-02) and at least three documented usability/stakeholder sessions (UX-03) remain required Gate C work, even though they are not separate rows in the ten-scenario integration checklist. Thirty-six detailed cases do not mean thirty-six user sessions; developers execute technical checks, while each user session uses a manageable selection of core tasks and records observations.

## Execution rules and setup

Every case starts Not run; SP-04 has been restored to active scope. Record actual candidate/environment results; missing services are Blocked, failures are Fail, and original D identifiers must not be guessed.

Use two verified real accounts A and B on devices D1/D2 connected to the same backend. Add account C as a room outsider; use anonymous requests for access checks. Do not use admin/service-role credentials to demonstrate normal-client isolation. For Web development, separate browser profiles are supplementary; final two-device evidence must use actual devices. Record iOS/Android/Web coverage separately. Demo-mode checks must be labeled and cannot establish live behavior.

Before each case, restore the stated data, empty or create a uniquely identified test room/bill, record account and backend IDs without tokens, and capture the candidate commit/URL. Delete only disposable test records the team has authorized for cleanup. A/B private histories must contain distinct identifiable records before isolation checks.

Test inputs:

- P1: saved defaults with recorded supported restrictions, a budget/radius covering fixture options, and a favorite cuisine. Record exact values and candidate catalog IDs before testing; fixture restaurants are not real dietary safety evidence.
- P2: a different occasion preference set; record P1 before editing so default preservation can be checked.
- P3: an unsupported restriction (e.g. a unique test restriction absent from all catalog support tags) and a supported restriction/no-match catalog case.
- ALIAS: reviewed canonical/alias fixture pair, such as scallion/green onion if approved in the adapter contract. Define expected excluded ingredients explicitly; do not infer clinical equivalence from an unreviewed alias list.
- R1: clear receipt with two items, Soup 1 × $6.00 and Tea 2 × $2.00; subtotal $10.00, tax $0.90, tip $1.80, total $12.70. Normalized rates: 9% and 18%. Three guests receive $4.24, $4.23, $4.23 under current first-guests remainder policy.
- R2: a distinct real receipt that produces a recognition error or omitted item; retain the redacted original and raw output. If unavailable, use a separately labeled controlled OCR-response fixture to exercise correction, and retain a separate live real-image OCR run. A stub does not prove recognition works.
- R3: blurred/unreadable receipt; R4: receipt whose printed total conflicts with computed line items/tax/tip. Document the exact expected correct bill from each original image.
- V3 manual variants: enter multiple items via Split 6–10, revisit setup/review without losing entries, and compare known totals in both input paths. Split 6 shows 8.875% tax: record this precision variant as specification pending until the rate contract is agreed; never silently truncate it. Quantity 0 may be an empty-form placeholder but cannot be submitted as a valid item.

## Account and data prerequisites (Gate A; supports Decide/Split)

| ID / acceptance | Preconditions and steps | Expected result |
| --- | --- | --- |
| AC-01 / AUTH-01 | Use two real email inboxes; register A/B, attempt access before verification, complete each email verification, sign in, sign out and sign in again. | Verification policy enforced; distinct authenticated user IDs; both accounts can use protected flows after verification and cannot after sign-out. |
| AC-02 / AUTH-02, DATA-01 | A saves Profile/P1 on D1; refresh/relaunch; sign into A on D2. Then sign out and sign into B on D1. | A's Profile/P1 restore on both devices; B sees only B's state; no sample allergies or A history leak into B. |
| AC-03 / SEC-01/02 | With A's ordinary client credentials, directly select/update/delete B's profile/preferences and try insert/upsert with B's owner ID. Repeat B→A and anonymous reads/writes. | No unauthorized data returned or changed. Check target records after attempts; zero-row writes alone are not sufficient proof. Own-account valid reads/writes still succeed. |
| AC-04 / DATA-03 | Simulate failed profile/preference read and save separately; retry after recovery, including switching account during a pending load. | Clear error/retry; failed save is not reported successful; no default overwrite; a late A response cannot replace B's active state. |

## Decide — personal flow and safety

| ID / acceptance | Preconditions and steps | Expected result |
| --- | --- | --- |
| DC-01 / DECIDE-01 | A has P1. Decide → solo pick → use saved preferences → recommendations → select a valid restaurant → result → history. | Recommendations reflect P1; selected ID/details are consistent across card/result/history; fixture labels remain explicit. |
| DC-02 / DECIDE-01, DATA-01 | Record P1; customize occasion to P2, obtain recommendations, then inspect defaults/Profile and reload. | Session uses P2; saved defaults remain P1 unless explicitly edited through the default-preference flow. |
| DC-03 / DECIDE-01, B03 | Prepare a fixture unsupported by a recorded restriction but strongly preferred by cuisine; request recommendations. | Restriction excludes the fixture before ranking; cuisine preference does not override it. Record fixture supports and inputs. |
| DC-04 / DECIDE-01, B03 | Test P3 and then a supported restriction with no matching catalog item; try selecting previews and proceeding. | Unsupported restriction is retained; clear no-match/unsupported state; no silent relaxation or selectable incompatible preview. |
| DC-05 / DECIDE-01, B03; R14 | Use approved ALIAS canonical and alias variants with the same ingredient fixture; repeat for dislikes and any supported allergen alias contract. | Equivalent approved inputs normalize consistently and enforce the declared exclusion; unknown labels remain explicit. Keep category-specific expectations rather than assuming every dislike is an allergy. |
| DC-06 / DECIDE-01 | Set budgets/radii at and just outside a controlled fixture boundary; submit blank, negative and reversed budgets. | Valid boundary filtering follows the declared overlap/radius rule; invalid values are rejected without changing saved defaults. |
| DC-07 / DECIDE-01 | With matches available use surprise/random selection repeatedly; repeat with zero matches. | Every successful selection belongs to eligible matches; zero matches cannot produce a result. No requirement that a small random sample is evenly distributed. |
| DC-08 / NAV-01; R14 | Open a valid restaurant link, then an unknown ID and a stale history ID. Use recovery navigation. | Valid ID displays the correct restaurant. Unknown/stale IDs show unavailable/not-found and a working recovery path; never substitute the first fixture or add it to history. |
| DC-09 / DATA-02, SEC-02 | A selects a restaurant twice, then another. Reload and read A's history on D2; inspect B's history and attempt direct cross-account history reads/writes. | History preserves the agreed deduplicated ordering across reload/devices; B's records remain independent; unauthorized requests expose/change nothing. |

## Decide — real group lifecycle (Gate B)

After all required valid votes, a unique leader wins directly. In a completed 2–2 tie, Decide 18 shows the diner pool and Pick Lucky Diner; Decide 19 spins the nominees; Decide 20 reveals one lucky diner and uses their recorded original vote, then View Today’s Restaurant opens the result. Do not ask for a new deciding vote or directly randomize restaurants. The server stores one diner/original-vote/restaurant outcome per round; concurrent requests, two devices, reload and reconnect read it without rerolling. Explain whose original vote broke the tie. Mixed counts (e.g. 2–2–1), generalized nominee eligibility and post-finalization lifecycle still require agreement; do not infer these from the illustrated 2–2 flow. The proposed 5-second sync target is still pending.

| ID / acceptance | Preconditions and steps | Expected result |
| --- | --- | --- |
| GC-01 / GROUP-01 | A creates a real room on D1; B enters its actual code on D2; compare backend room/membership IDs. | Same room and actual members on both devices without simulated-member actions. |
| GC-02 / GROUP-01 | Attempt malformed, nonexistent and closed-room codes; repeat a join for an existing member. | Recoverable errors for invalid/closed codes; no duplicate membership after retry/rejoin. |
| GC-03 / GROUP-02 | A/B submit different occasion preferences; observe each device; inspect each account's defaults. | Submission status synchronizes; consensus uses the real submitted restrictions/budget/radius; defaults remain unchanged. |
| GC-04 / GROUP-02, DECIDE-01 | Submit incompatible budgets or combined restrictions leaving no group match; attempt to start voting/select a result. | Explain no-match state, preserve constraints and block incompatible result selection. |
| GC-05 / GROUP-03/04 | With at least three required voters, A votes and changes their own vote before the last member submits; inspect counts and stored rows, then complete the round. | Vote replacement is not duplicated; incomplete rounds show no final result; both clients converge. Post-finalization vote changes require a separate agreed rule. |
| GC-06 / GROUP-03/04 | Run the V3 variants below; compare round/candidate-diner/chosen-diner/original-vote/final-restaurant IDs, tie message and both devices through spin/reveal and reconnect. | One server-stored outcome, chosen from the agreed diner pool; final restaurant equals that diner’s original vote. No independent client/restaurant draw or extra deciding vote. |
| GC-07 / GROUP-03, SEC-02 | C and an anonymous client directly read room private state/submit votes. A attempts a write attributed to B. | Unauthorized reads/writes denied and rows unchanged; A cannot vote as B; valid member operations remain available. |
| GC-08 / GROUP-04, DATA-03 | Disconnect D2, change votes/submissions on D1, reconnect/reload D2; repeat around leave/close transitions and any queued action. | Reconcile to server membership/preferences/votes; prevent duplicate/stale writes; closed/non-member state cannot continue voting; honest reconnect/error state. |

### GC-06 V3 lucky-diner variants (one case, multiple inputs)

Use four real authorized members for the illustrated 2–2 flow and two observing devices. Controlled model/backend fixtures supplement but cannot replace live-device evidence.

| Variant | Steps / input | Expected |
| --- | --- | --- |
| V3 2–2 tie | Four voters split X/X/Y/Y; enter Decide 18. | Candidate pool lists the four valid voters; no final restaurant before completion. |
| Pick/spin/reveal | Pick Lucky Diner → Decide 19 → Decide 20; inspect server record. | Exactly one diner chosen; revealed restaurant equals their original X/Y vote; explain whose vote broke the tie. |
| Restaurant detail | Use View Today’s Restaurant after reveal. | Name/image/rating/menu all match the same stored restaurant. |
| Concurrent picks | Both devices pick/request outcome together; retry and reconnect during spin/reveal. | Same chosen diner, original vote, restaurant and explanation; no reroll. Animations do not independently select outcomes. |
| No tie | Completed 3–1 vote. | Unique leader wins directly; no lucky-diner claim. |
| Incomplete/invalid | A required vote missing, invalid member/vote, or no eligible choice. | No final draw; honest waiting/validation recovery, no default venue. |
| Mixed-count/multiway | E.g. 2–2–1, 1–1–1, membership change or post-finalization edit. | Specification pending until candidate-pool/lifecycle rules are agreed. Do not silently retain old highest-restaurant-only draw or invent lower-vote eligibility. |

Focused randomness tests check the diner pool and that each eligible diner can be selected under controlled inputs; final restaurant must equal the persisted original vote. Do not require small live samples to have even distribution or different winners. Randomizing diners and restaurants are distinct contracts.

## Split — OCR correction and independent manual creation (Gate B)

Both flows are required: OCR → correction/addition → review/confirm, and manual setup → item entry → review/confirm; both continue to exact-cent equal split and persisted bill. Neither path is evidence that the other works.

| ID / acceptance | Preconditions and steps | Expected result |
| --- | --- | --- |
| SP-01 / SPLIT-02/05 | With R1, test a camera capture on a supported physical device and a gallery upload as separate runs; inspect raw OCR output and editable draft before confirmation. | Real image processed; fields populate from recognition, not sample data. Supported fields/uncertainties clearly shown; draft not silently finalized. Record actual OCR accuracy separately from corrected accuracy. |
| SP-02 / SPLIT-02/05 | OCR R2; compare against original, correct an item name/quantity/price, add a missing item and remove a wrong item; confirm, split, save and reload on D2. | Editing and addition are available after successful OCR; totals/shares and persisted items match the corrected bill. Evidence shows original → draft → corrections → confirmation → saved result. |
| SP-03 / SPLIT-05 | After confirming, edit a line or add a missing item; attempt final save. | Bill returns to an unconfirmed/review-required state; updated values require confirmation before final save and drive recalculation. |
| SP-04 / SPLIT-01 | Follow Split 6–10 without photo/OCR: enter restaurant/date/settings; add R1 items; edit/remove/add items; back to setup and return; review/confirm; split/save/reload. | Input survives navigation; multiple items, tax/tip, guests and corrected values reconcile; saved bill is manual, account-owned and restores. Active Not run. |
| SP-05 / SPLIT-03 | Deny camera, cancel selection, process unreadable R3 or fail OCR; try retry/reselect/cancel, then switch to manual creation. | Honest error/cancel state; no sample substitution; edits retained or explicit replacement confirmation; complete a valid manual bill. |
| SP-06 / SPLIT-03/05 | Start OCR for image A, then edit manually or switch to bill/image B before A completes; allow A's delayed response and retry. | Late output cannot overwrite the active/newer draft or silently erase manual edits; replacement requires explicit user choice; no duplicate items from retry. |
| SP-07 / SPLIT-04 | Enter normalized R1 with 3 guests; compare subtotal, tax, tip, total and each share. | $10.00 + $0.90 + $1.80 = $12.70; shares $4.24/$4.23/$4.23 under current first-guests remainder rule; sum exactly $12.70. |
| SP-08 / SPLIT-04 | Use $10.00 total, no tax/tip, 3 guests; then $0.02 total and 4 guests. Change guest count to 1 and 100. | $3.34/$3.33/$3.33; then $0.01/$0.01/$0.00/$0.00. Every variant reconciles; shares differ by at most one cent. |
| SP-09 / SPLIT-01/04/05 | In both manual and OCR editors, test guests 0/-1/1.5/101, quantity 0/negative/fractional, negative/blank/fractional-cent prices, invalid dates/rates and empty bills. | Reject invalid persistence/calculation; actionable errors; valid 1–100 guests, cents and supported precision work. A zero-quantity design placeholder is not a valid submitted item. |
| SP-10 / SPLIT-02/04 | Use OCR data containing printed tax/tip amounts and total; compare to computed total. Test R4, then correct values and reconfirm. | No double-counted tax/tip; amount/rate precedence is explicit; mismatch flagged for correction before confirmation; corrected bill reconciles. |
| SP-11 / DATA-02, SPLIT-01/05 | A saves a corrected OCR bill and an independent manual bill; refresh/restart and reopen on D2; switch to B and attempt cross-account reads/writes. | Both retain exact items/settings/guest count and totals for A only; unauthorized access denied; sample receipts not seeded into live empty history. |
| SP-12 / DATA-03 | Interrupt save, retry twice after reconnect, then reopen from a fresh client. | Failure not reported as success; draft retained; one logical receipt rather than duplicate records; confirmed saved values restore. |

## Navigation, accessibility and evidence (Gate C)

| ID / acceptance | Preconditions and steps | Expected result |
| --- | --- | --- |
| UX-01 / NAV-01, RELEASE-01 | On iOS/Android/Web walk solo/group Decide including lucky-diner ties, OCR correction and manual creation; test back/cancel, direct links, refresh and sign-out. | No dead ends, wrong-account state or crashes; recoverable errors; unsupported coverage explicit. |
| UX-02 / A11Y-01 | Check narrow-screen layout and large text; keyboard-only Web navigation/focus; screen-reader names, validation errors, OCR progress and vote updates on declared assistive technology. | Controls and corrections are reachable/named; focus stays meaningful; errors/status are perceivable without color alone; record issues and targeted retests rather than claiming full conformance. |
| UX-03 / USER-01, TRIAGE-01, FIX-01 | Use relevant tasks from these cases in at least three documented user/stakeholder sessions. Log observations, triage, fix priorities and retest. | Session/build/task evidence links to Critical/Important/Deferred/Out of Scope findings; selected experience/accessibility fixes retain comparable before/after evidence and outcomes. |

## Result and evidence template

Copy one record per case/variant/platform. Avoid putting passwords, tokens, unredacted personal receipts or real participant identities into GitHub.

| Field | Value to record |
| --- | --- |
| Run / case / variant | Unique run ID, test ID, input variant, actual execution date and tester |
| Candidate | Commit, deployment URL, backend/migration version and live/demo mode |
| Environment | Devices, OS/browser versions, app build, network conditions; account aliases and redacted IDs |
| Preconditions and data | Exact preferences, room/receipt/catalog IDs, expected amounts and agreed policies |
| Actual behavior | Observed steps, values, synchronization latency, raw vs corrected OCR result |
| Outcome | Not run / Blocked / Pass / Fail; blocker or mismatch explanation |
| Evidence | Redacted screenshots/clips, relevant client request results and persisted read-back |
| Follow-up | Finding/defect ID, original D association if confirmed, risk ID, PR, retest run ID |

## Existing automation and execution boundary

`tests/dining.test.ts` covers local filtering, preference conversion, consensus and vote models; `tests/integration-links.test.ts` covers link mapping/history helpers; `tests/recommendation-presentation.test.ts` covers fixture presentation; `tests/validation.test.ts` covers input/default preference validation; `scripts/split-model.test.cjs` covers six calculation/input cases. These support selected assertions but do not replace live-client, OCR, persistence or device execution.

The earlier Alpha run passed 24 automated tests using Node 23.10.0. No new application tests were run for this documentation-only deliverable, and no functional case above is marked passed. Cases requiring missing integrations remain planned until executed and recorded. Team decisions still pending in the acceptance draft must be resolved before dependent cases can be judged.
