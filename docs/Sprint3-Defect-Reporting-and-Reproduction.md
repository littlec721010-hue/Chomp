# Establish Technical Defect Reporting and Reproduction Steps

Date: October 21, 2026. Planning baseline: main @ 19acbda.
Task 6 deliverable: reporting format, reproduction procedure and illustrative records. This document does not implement fixes, create GitHub issues or claim new runtime reproduction.
References: [functional tests](Sprint3-Decide-Split-Functional-Test-Cases.md), [risk register](Sprint3-Technical-Risks-and-Dependencies.md), [navigation/state review](Sprint3-Navigation-State-and-Data-Flow-Review.md).

## Reporting rules

- Report one underlying problem per issue. Link related records rather than mixing unrelated account, room and receipt failures.
- Keep original Sprint 2 D01–D07 identifiers. Their exact original mapping remains incomplete; do not guess or reuse one. Use the GitHub issue number as the primary ID for new reports, with test/run, risk and review IDs as links. Example records below are not allocated defect IDs.
- Distinguish **user-reported**, **source-observed**, **runtime-reproduced**, and **unverified** evidence. A source finding can be actionable without pretending it was reproduced on a device.
- A missing mandatory integration is a Service Gap; a behavior that differs from the expected contract is a Defect; absent evidence is a Verification Gap; a new optional request is an Enhancement. Record type separately from priority and status.
- Use Critical / Important / Deferred / Out of Scope to stay aligned with the findings matrix. Critical and Important express impact; Deferred and Out of Scope express disposition. Preserve original impact when deferring and explain the scope decision. Required Gate A/B failures cannot be waived simply by labeling them Deferred.
- Never put passwords, session tokens, service keys, email verification URLs or unredacted personal receipts in a public issue. Use participant/account aliases and redacted evidence. Record environment variable names/configured status rather than values.

## Copyable GitHub issue body

Title format: `[Module] Trigger → observed failure`, for example `[Decide result] Unknown restaurant ID → unrelated default restaurant displayed`.

```markdown
## Summary
One sentence: what happens, under what trigger, and why it matters.

## Tracking
- Type: Defect / Service Gap / Verification Gap / Enhancement
- Evidence: User-reported / Source-observed / Runtime-reproduced / Unverified
- Gate and acceptance ID:
- Test case / run ID:
- Related risk / review finding / original D ID (only if confirmed):
- Findings category: Critical / Important / Deferred / Out of Scope
- Impact and rationale:
- Owner: Unassigned, or named person who accepted the work
- Status: Reported

## Environment and preconditions
- Observed build commit and deployment URL (or Unknown):
- OS/device/browser/app version:
- Actual observation date and tester alias:
- Live or demo; backend/migration revision if relevant:
- Account aliases, room/restaurant/receipt IDs:
- Saved vs occasion preferences; room lifecycle/vote state:
- Network/permissions; input image or bill data, redacted:

## Steps to reproduce
1. Start from a named screen/account/data state.
2. Perform one concrete action.
3. Record the action that triggers the failure.

## Expected result
Observable outcome and the acceptance requirement it follows.

## Actual result
Exact observed text/data/error. If not reproduced, state that explicitly.

## Frequency and scope
- Occurrences / attempts: Unknown, or x/y on this environment
- Known affected / unaffected platforms:
- Last known working build: Unknown, or verified commit

## Evidence
Redacted screenshot/clip/log links and relevant source locations.
For intermittent issues include a continuous action sequence and timestamps.

## Trigger, recovery and prevention
- Trigger / preconditions:
- Safe recovery or workaround (or None known):
- Proposed Beta prevention (hypothesis until verified):

## Acceptance of the fix
- [ ] Original trigger meets the expected result.
- [ ] Related valid/error paths still work.
- [ ] Cross-account or cross-device checks pass where applicable.
- [ ] Retest records identify the fixed commit, environment and evidence.

## Retest / disposition
Fix PR + commit; retest run, tester/date, result; residual limitations.
If Deferred / Out of Scope: reason, retained impact, approver and revisit point.
```

## Reproduction procedure

1. **Capture the observed build first.** Distinguish a fixed historical Vercel deployment URL from a changing branch alias. Record the actual deployed source commit; do not assume it equals current main.
2. **Restore explicit preconditions.** Identify live/demo mode, account alias, saved/occasion preferences, active room/vote state or receipt draft. Use disposable team-authorized data. A fresh login and a resumed session are separate variants.
3. **Follow the shortest known sequence.** Record each navigation/action and input. For permissions, network loss or delayed requests, say when the condition changed. Do not silently add actions to make an intermittent issue appear deterministic.
4. **Compare expected and actual values.** For restaurant mismatch, capture restaurant IDs and image source/label; for money, preserve item quantities/unit prices, tax/tip amounts or rates and cent totals; for isolation, inspect target records after the denied write.
5. **Repeat proportionately.** Record attempts and occurrences, including non-reproductions. Keep a continuous clip for intermittent navigation/image problems. No fixed attempt count proves absence; escalate missing context rather than inventing frequency.
6. **Separate cause from hypothesis.** A wrong image is an observation; stale image reuse or a winner/selection mix-up is a hypothesis until supported. A failed check does not establish every platform is affected.
7. **Retest the exact trigger and adjacent flows after a reviewed fix.** Link before/after evidence, relevant automated results and candidate commit. Close only after the required acceptance is verified; reopen if it recurs.

## Status and triage workflow

Reported → Triaged → In progress → Ready for retest → Verified / Closed.

Use Needs information when preconditions/evidence are missing, Blocked when a dependency prevents execution, and Reopened when a supposedly fixed issue recurs. Deferred/Out of Scope require a reason and approval; they are not successful test outcomes. An owner accepts assignment before being recorded as responsible.

Critical examples: cross-account access, corrupted saved bills, unsafe restriction relaxation or a core task with no accessible path. Important examples: a wrong restaurant identity, a recoverable navigation failure or a blocked primary flow with a reliable alternative. Apply the actual scope/impact; do not classify solely from these examples. Security or money correctness issues remain open until their acceptance checks pass.

## Example A — unknown restaurant ID

**Type/evidence:** Defect; source-observed under NS-01 / R14. Runtime reproduction is not claimed here. Proposed category: Important, subject to team triage. Related test DC-08 / NAV-01.

**Source evidence:** `src/features/yuhan/ChompModule.tsx` resolves an unknown ID with `restaurants.find(...) ?? restaurants[0]` on the reviewed baseline.

**Proposed reproduction:** (1) Enter an authenticated or explicit demo session; (2) navigate to the result route with an ID confirmed absent from the catalog, using an appropriate route test harness or a link that retains/restores the intended session; (3) compare displayed identity to the requested ID. A fresh guest opening a protected link may reach Welcome first; that alone does not reproduce this defect. Record actual deployed commit and result when executed.

**Expected:** Show “This restaurant no longer exists or is currently unavailable”, provide Back to recommendations and preference review while preserving group/personal context. Suggest widening budget/distance/cuisine if useful; preserve allergy/dietary constraints. Do not substitute a venue or add the default to history.

**Actual:** Source fallback exists; browser reproduction against the review baseline is pending. **Recovery:** return to recommendations and select a known valid restaurant. **Prevention:** validate resource IDs and add unavailable-state regression coverage.

**Closure:** DC-08 passes for unknown/stale IDs, valid IDs still work, and no wrong default history is created. Unmerged experimental PR #10 was closed at the user's direction; it is not a released fix.

## Example B — intermittent restaurant name/image mismatch

**Type/evidence:** Defect report; user-reported, not independently reproduced. Target: Decide 17 group result. Proposed category: Important pending impact triage. Related NS result-page follow-up, DC-08 / GC-05 / UX-01.

**Observed build/device/frequency:** Unknown; request these when turning this example into a real issue. The supplied screenshot identifies the target screen but does not prove a specific mismatched pair by itself.

**Reproduction investigation:** (1) Create/join a demo room or real room, explicitly recording mode; (2) select a known restaurant and record current-member vote; (3) complete votes, including a run where the winner differs from that vote; (4) open the final result, recording winner ID, displayed name, hero image/label, rating and menu; (5) repeat back/forward and different restaurant selections. These are investigation steps, not a confirmed deterministic reproducer. Never use simulated votes as proof of live collaboration.

**Expected:** Name, photo, rating, perks and actions describe the same actual winner; restaurant name is clearly visible. Pending votes do not appear as a final winner. **Actual:** user reports intermittent mismatch; exact pair/sequence pending. **Recovery:** return to recommendations and reselect; this is a proposed workaround, not verified. **Prevention hypotheses:** shared result identity and correct image refresh behavior; investigate before naming a root cause.

**Closure:** record a reproducible pair/sequence or agreed coverage for the intermittent case; retest all fixture identities, changed votes and navigation with comparable before/after evidence. Do not mark resolved solely because one sample result looks correct.

## Example C — OCR and independent manual-creation service gaps

**Type/evidence:** Service Gap; source-observed R06/R08 and NS-06. Gate B B06; tests SP-01–06. Proposed priority: blocks affected mandatory acceptance, not a runtime crash claim.

**Current source behavior:** sample scan loads predefined data; uploaded photos require manual entry. Real OCR is unconnected and Split home lacks a direct blank-bill entry. Individual original D01/D03/D05 mapping is not confirmed.

**Expected:** V3 requires real OCR with correction/missing-item addition and independent manual setup/item/review, each followed by confirmation, exact-cent equal splitting and persisted values. October 31 restores the previously deferred manual feature.

**Recovery:** OCR retry/reselect/cancel or independent manual creation, preserving edits or explicitly confirming replacement. Existing photo-led prototype behavior is not a complete manual setup flow or real OCR evidence.

**Closure:** separate real OCR and independent manual runs pass, including review/confirmation, error recovery, exact totals and account-owned read-back. Documents/sample animation cannot close these gaps.

## Evidence and handoff

For V3 tie reports record room/round and candidate diner IDs, valid votes, selected diner, their stored original vote and final restaurant, plus both devices’ spin/reveal/name/image/notice. Complete all votes first; test one shared 2–2 diner draw, concurrent picks and reload without reroll. Direct restaurant randomization is superseded; current rating fallback is still a source gap. Mixed-count/multiway nominee eligibility remains pending; link GROUP-04/GC-06/R04 without inventing D IDs.

Link the actual report/issue to its test run, findings matrix, original D ID if verified, related risk and fix PR. Keep before/after evidence tied to a specific build and repeatable task. Gate C still requires at least three documented sessions and targeted accessibility/experience revisions; defect reports alone are not usability-session evidence.

This format is ready for team use. Example records remain illustrative/unverified as stated; no new GitHub issues have been filed or findings marked fixed by this deliverable.

## Observed defect: dinner time wheel alignment and flickering notice

- Status: open; user explicitly deferred further fixes. Triage: Important usability issue, deferred for now.
- Context: group room → Date, Time picker; latest attempted fix `ab7c84d`. User's deployed SHA was not independently verified.
- Reproduction: scroll the hour/minute/AM–PM wheels, stop between adjacent entries, and select past and future times.
- Actual: wheel can remain between two entries although an entry can be selected; the past-time notice still flashes and disappears. Past time cannot be confirmed; future time can be selected and confirmed, per user report.
- Expected: wheel settles with the selected value centered; past-time notice remains readable until a valid future time is selected.
- Workaround: explicitly select an entry and use a future date/time. Future-time selection and confirmation passed; wheel interaction is not accepted as fixed.
- Closure: verify centered selection, agreement between displayed and submitted time, stable past-time feedback, and successful future-time confirmation. No further code change requested at this stage.

## Observed defect: OCR Order Total classified as a bill item

- Status: open, documented only; no code change in this update. Triage: Critical for accepting OCR-derived amounts, because it duplicates charges. Manual bill creation remains an available tested path.
- Reproduction/evidence: recognize the [Beachwood Cafe receipt](evidence/ocr-receipt-samples/README.md); compare the source and resulting item list.
- Actual: Order Total $29.46 becomes a fourth item in addition to $26.90 of products. Subtotal becomes $56.36 and total $58.92 after $2.56 tax. The mismatch notice appears.
- Expected: summary/payment rows are excluded from products; subtotal $26.90, tax $2.56, total $29.46, no tip inferred from suggested tips.
- Recovery to verify: remove the incorrect item and review against the original before saving. This particular correction/save was not confirmed in this run.
- Closure: repeat this image and varied summary labels without duplicated totals; retain the COSITAS RICAS $30.45 sample as a regression check. One sample passing does not close general OCR accuracy defects.

## P02 live session findings recorded November 1 2026

Context: moderator Tongrong, participant P02; live deployment https://chomp-pk3oe3k96-chomp4.vercel.app/; room QEA-994. Moderator used iOS Safari; participant used Windows Chrome. Findings below are observed or reported during this session. Status: open, recorded for development follow-up; fixes and retests pending.

### P02 DEV 01 Match bars disagree with displayed percentages

- Triage: Important.
- Reproduction: two members submit preferences and open the group cuisine consensus summary.
- Actual: Chinese and Thai both show 2/2 matched and 100%, but their yellow bars have different lengths. No selection shows 0/2 and 0% with a partially filled bar.
- Expected: bars reflect the displayed percentage consistently: 100% full and 0% empty. Any separate ranking indicator must be clearly explained.
- Impact: participant could not understand the relationship between match scores, bar lengths and restaurant recommendations. This observation does not establish that the underlying match calculation is incorrect.
- Evidence: user-provided consensus screenshot; 3.txt closing interview.
- Retest: compare 0%, partial and 100% labels with bar fill on both clients.

### P02 DEV 02 Group members receive different restaurant candidate lists

- Triage: Critical for the shared restaurant voting task.
- Reproduction: both accounts join QEA-994, submit preferences and open restaurant voting choices.
- Actual: user reports the two clients displayed different restaurant lists with no restaurant in common; both members could not choose the same restaurant. The vote-confirmation screenshot shows votes were received but does not independently establish list contents on both clients.
- Expected: members voting in the same room and round receive the same shared candidate set and can select the same restaurant.
- Impact: T5 could not be completed as intended. T6 was separately confirmed successful; that result does not close this candidate-list defect.
- Evidence: moderator clarification during P02 session; user-provided vote-confirmation screenshot.
- Retest: compare restaurant IDs and names across both clients before voting, after reload and after reconnect; confirm both can vote for the same candidate.

### P02 DEV 03 Active room page is not restored after leaving and returning

- Triage: Important; raise to Critical if rejoining the existing room is impossible.
- Reproduction: create a room, switch to another webpage, then return to the app link.
- Actual: user reports the page automatically refreshes and loses the previous room page; supplied screenshot shows No active room and Create or join a room.
- Expected: restore the signed-in user's active room and appropriate workflow step after the page reloads, or provide a clear resume option.
- Impact: interrupts the group flow and requires recovery. Server-side room or vote deletion has not been established.
- Evidence: user report and No active room screenshot.
- Retest: repeat page switching and reload on iOS Safari and Windows Chrome; confirm room membership, submitted preferences and votes remain recoverable.

### P02 findings and triage matrix

Classification recorded November 2, 2026. These are findings from one real moderated session, not three independent sessions. No fix or successful retest is implied.

| Finding | Classification | Release treatment | Closure evidence |
| --- | --- | --- | --- |
| P02 DEV 01: match bar fill disagrees with displayed percentages | Important | Open; may be deferred for a controlled test candidate with the limitation disclosed | Verify 0%, partial and 100% fill against numeric labels on both clients |
| P02 DEV 02: different restaurant candidate lists in the same room/round | Critical | Blocks acceptance of shared candidate voting; fix before declaring that flow complete | Both accounts receive identical candidate IDs and can choose the same restaurant, including after reload/reconnect |
| P02 DEV 03: active room page lost after switching webpages and returning | Important | Open; controlled testing requires a verified recovery path; escalate to Critical if the room cannot be resumed | Recover the existing room and workflow step without losing submitted preferences or votes |

Deferred is a scheduling decision, not evidence that a defect is resolved. No P02 finding above is Out of Scope. The previously deferred time-wheel usability issue and failed/deferred general real-photo OCR accuracy remain recorded separately.

### Version 3 integration recommendation

The current branch can be reviewed for integration as a Beta test candidate with known defects. This is not final Beta acceptance. P02 DEV 02 remains Critical; P02 DEV 01 and 03 remain Important. Keep source-branch acceptance results distinct from acceptance of the integrated deployment. Record the merge commit and deployment URL, check CI, and verify the shared candidate list and room recovery before announcing these flows as accepted. A main-branch merge may deploy to Production depending on Vercel configuration, which must be checked before merging. No merge, tag or deployment was performed by this documentation update.
