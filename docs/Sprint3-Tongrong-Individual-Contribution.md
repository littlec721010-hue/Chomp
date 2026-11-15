# Sprint 3 Individual Contribution — Tongrong

**Project:** Chomp  
**Role:** Beta Development and Technical Quality  
**Reporting period:** Sprint 3, through November 1, 2026  
**Focus:** Feature integration, functional testing, defect reporting, and evidence-driven Beta refinement

## Contribution overview

During Sprint 3, I helped move Chomp from an Alpha prototype toward a connected Beta candidate. I clarified the technical acceptance requirements, coordinated implementation and integration, carried out hands-on tests using real accounts and devices, and documented both successful outcomes and unresolved defects. I also invited a real user to participate in one testing session.

I used Codex to assist with code changes, technical checks, and documentation. My contributions included specifying expected behavior, making scope decisions, configuring services, operating the application, reviewing results, reporting defects, and confirming fixes. The group synchronization implementation was contributed by teammates on `feat/group-sync`; my contribution was reviewing its evidence, coordinating its integration, and testing the integrated experience.

## 1. Beta planning and technical documentation

- Reviewed the Sprint 2 backlog, known defects, and remaining technical work to identify the priorities for Sprint 3.
- Developed and revised technical Beta acceptance criteria and the Definition of Done, covering real authentication, account isolation, group synchronization, persistence, receipt review, and exact-cent bill splitting.
- Organized technical risks and integration dependencies around the Gate A, Gate B, and Gate C milestones.
- Prepared functional test cases for Decide and Split, navigation/state/data-flow review notes, and a defect reporting and reproduction format.
- Updated the documents as the scope changed, including Version 3 design alignment, OCR correction and missing-item entry, independent manual bill creation, and the Lucky Diner tie-resolution flow.
- Maintained GitHub review and acceptance evidence through the existing pull requests and development branch.

**Supporting documents:** [Acceptance Criteria and DoD](Sprint3-Beta-Acceptance-Criteria.md), [Technical Risks and Dependencies](Sprint3-Technical-Risks-and-Dependencies.md), [Functional Test Cases](Sprint3-Decide-Split-Functional-Test-Cases.md), and [Version 3 Alignment](Sprint3-Version3-Design-Alignment.md).

## 2. Real authentication and account isolation

I set up the Supabase Beta project and configured the application environment and authentication redirect URLs. I then tested registration, email verification, login, logout, and access after logout using two independent accounts.

I verified that the accounts retained different profiles and dining preferences after refresh and login, including checks on a phone. I also ran the supplied database and API isolation checks and reviewed the results: 48 SQL checks for profiles/preferences and 24 SQL checks for receipts, alongside real API checks for profile and preference isolation. These checks supported the requirement that users cannot read or modify another account's private records.

I tested failure recovery by disconnecting the network or blocking backend requests, confirming that errors were shown and that retrying after restoring access recovered the relevant flow.

## 3. Split: bill creation, persistence, and receipt review

I specified, tested, and reviewed the following bill workflows and refinements:

- Manual bill setup, item creation and editing, missing-item entry, review, and explicit saving.
- Integer-cent equal splitting, including $10.01 divided among two or three diners without losing or adding money.
- Clear input units for percentage tax and fixed-dollar custom tips. I verified that a fixed $2 tip remained $2 when the food amount changed.
- Account-owned bill history, refresh persistence, account switching, and cross-device read-back within the tested scenarios.
- Updating an existing bill without creating duplicate history entries, and returning from a saved bill to the Split home screen.
- Recovery from failed saves and failed history loading.
- Draft restoration after refresh or switching tabs, with Continue Draft, Create New Bill, and Cancel options.
- Receipt date/time review and diner-count validation, including leaving an unrecognized diner count blank instead of silently assuming four diners.

For OCR, I defined the review-first workflow: users can correct recognized items and add missing items before confirming the bill. I also tested duplicate-scan handling, cancellation, photo uploads, the embedded camera, retaking photos, source-specific retry options, manual-entry fallback, and camera release when leaving the scanner.

**Acceptance boundary:** The tested interaction and persistence flows passed, but general OCR accuracy did not. I preserved this distinction in the records rather than treating a successful scan as proof that all receipts work.

## 4. Decide: recommendation behavior and consistency

I tested the solo journey from saved or temporary preferences to recommendations, the selected restaurant, and the home screen. I identified and followed up on issues involving temporary preference restoration, recommendation history, and inconsistent prices between restaurant cards and result pages.

The confirmed refinements included:

- Returning from a no-match result with the current temporary preferences preserved.
- Suggesting broader budget, distance, or cuisine choices while keeping allergies and required dietary restrictions unchanged.
- Matching restaurant prices between the recommendation list and result page.
- Restoring local recommendation history after refresh and keeping it separated by account on the same browser.

I also specified an explicit unavailable-restaurant message and a return-to-list action for invalid restaurant IDs. Full coverage of that recovery path remains outside the confirmed tests in this record.

**Acceptance boundary:** Recommendation history was verified locally by account; cross-device synchronization of this history is not implemented. The restaurant information is demonstration data, not verified live restaurant or allergy-safety information.

## 5. Group integration and Lucky Diner validation

I reviewed the contributor's group synchronization report and coordinated the merge of `feat/group-sync` into the Version 3 development branch. I then participated in the integrated two-account test with littlec and Shannon in room `GUK-832`.

The test covered joining the same room, submitting separate preferences, readiness updates, voting, and a completed 1–1 tie. The Lucky Diner flow selected littlec and used their original vote to select Chomp Chinese Demo Kitchen 1. We confirmed that both clients retained the same Lucky Diner and restaurant after refreshing, without drawing again.

I also tested dinner-time validation. Past times could not be confirmed and future times could be confirmed. I reported the remaining wheel alignment and flickering-message issue and chose to record it for later repair rather than continue expanding the regression work before user testing.

**Supporting evidence:** [Contributor Report](evidence/group-sync/Chomp_2026-11-01_Change_and_Test_Record.pdf), [Integrated Tie](evidence/group-sync/integrated-tie.png), and [Lucky Diner Result](evidence/group-sync/integrated-lucky-result.png).

## 6. Real-user testing and evidence-driven refinement

I invited a real user and completed **one testing session**. This is separate from the developer-led functional checks described above.

The session is recorded here based on my confirmation. Participant details, the exact date and duration, task-level observations, and session-specific findings have not yet been added to the repository. The functional screenshots in this contribution record are not automatically attributed to that session.

The course requirement is at least three documented user/stakeholder sessions. One session has been reported as completed; two further sessions and the supporting session records remain to be completed or supplied. No simulated sessions are counted as real-user evidence.

Alongside this session, I repeatedly tested the application myself, supplied screenshots, and confirmed whether changes resolved the reported behavior. This produced concrete refinement evidence for preference recovery, price consistency, bill navigation, input units, draft recovery, and scanner retry options.

## 7. Defect tracking and current limitations

I consolidated the acceptance results and retained failed tests instead of marking the whole Beta complete. The latest receipt checks illustrate this approach:

| Test | Result and follow-up |
| --- | --- |
| Beachwood Cafe receipt | Failed: Order Total $29.46 was added as a product, producing an incorrect $58.92 total. Recorded as a critical defect for accepting OCR-derived amounts. |
| COSITAS RICAS receipt | This sample passed per my feedback; the displayed total and one-person share were $30.45. It does not establish general OCR accuracy. |
| Dinner-time picker | Past/future confirmation rules passed; wheel alignment and transient feedback remain open and deferred. |

Earlier OCR tests also exposed incorrect merchant names, omitted products, misread quantities, and payment/tax summary rows classified as products. These remain part of the accuracy gap. Complete accessibility and cross-platform regression, broader safety-input coverage, and additional integrated group edge cases also remain pending.

**Supporting records:** [Consolidated Feature Acceptance](Beta-Completed-Feature-Acceptance-Record.md), [Defect Reporting](Sprint3-Defect-Reporting-and-Reproduction.md), [Solo Decide Evidence](evidence/solo-decide/README.md), and [Receipt Sample Evidence](evidence/ocr-receipt-samples/README.md).

## Deliverables and ownership

My Sprint 3 contribution produced updated technical planning documents, an integrated development candidate, hands-on functional acceptance results, archived screenshots and receipt samples, and an explicit list of remaining risks. The work supported starting real-user testing on the validated core journeys while keeping OCR accuracy and other unresolved issues visible.

This document describes my individual contribution within a team project. It does not claim sole authorship of the group synchronization work, completion of all three user sessions, a merge into main, or overall Gate A/B/C acceptance.
