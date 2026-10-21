# Draft Sprint 3 Goal and Overall Beta Definition of Done

Status: newly prepared planning draft for team agreement; no gate completion or release approval is claimed.
Date: October 21, 2026.
Inputs: team-provided Gate A/B/C roadmap, Sprint 2 summary and confirmed Split scope.

## Sprint 3 Goal

Turn the integrated Alpha into a Beta candidate with trustworthy account isolation, connected two-device dining decisions, persistent account-owned data, and usable receipt-to-equal-split flows through both real OCR and independent manual input. Validate the candidate with real users/stakeholders and use documented findings to drive prioritized experience and accessibility revisions.

## Required outcomes by gate

| Gate | Required outcome | Evidence |
| --- | --- | --- |
| A — Trustworthy Foundation | Reviewed small PRs and repeatable CI/CLI checks; agreed contracts/units; two real verified accounts; enforced owner/member isolation; preview/live separation; standardized restriction labels and no silent relaxation. | PR/check links, migrations, real account walkthroughs, direct-client isolation tests and safety/no-match examples. |
| B — Connected Experience | Two devices share a real room and preference/vote lifecycle; reconnect/concurrent updates reconcile; Profile/preferences and dining/receipt history persist under the correct account; both receipt input paths work. | Two-device room/submission/vote recordings, persisted read-back and access tests, OCR/manual bill walkthroughs. |
| C — Beta Candidate | iOS/Android/Web adaptation and regression checks; accessibility/inclusive-experience review; at least three documented sessions; triaged findings, prioritized revisions and final-candidate retests. | Platform matrix, session records, findings matrix, before/after fix evidence and tested deployment commit. |

Gate grouping follows the supplied roadmap. Detailed lifecycle/latency/OCR targets still require agreement; proposed thresholds must not be presented as course requirements.

## Confirmed Split scope

Both paths are required and need separate evidence:

1. Real photo/upload → actual OCR → review editable draft → correct item names/quantities/prices, add missing items and remove wrong items → explicitly confirm corrected bill → exact-cent equal split → save and restore corrected values.
2. Start a blank bill without photo/OCR → manually enter/edit items, tax, tip and guest count → confirm → the same equal-split and persistence flow.

Manual editing/adding missing items is part of normal successful OCR use, not only a failure fallback. Camera/OCR failures also allow manual continuation. Late OCR responses must not erase manual edits. Re-editing a confirmed bill requires confirmation again before final save.

Use integer cents, avoid double-counting tax/tip, and resolve printed/computed total discrepancies before confirmation. Remainder allocation must keep shares within one cent of each other and sum exactly to the total. Example: $10.00 / 3 = $3.34 + $3.33 + $3.33. Current allocation scope is equal sharing, not item ownership splitting. Sample animation does not count as real OCR.

## Overall Beta Definition of Done

The Beta candidate is done only when:

- Mandatory Gate A/B capabilities pass their agreed acceptance checks using real accounts/backend records and two devices; demo simulations do not substitute for required live evidence.
- Both OCR-review/correction and independent manual entry pass, including corrected bill persistence, invalid-input and failure/retry checks.
- The ten core integration scenarios and full applicable detailed regression are completed for the release candidate, with actual outcomes and any blocked checks visible. Related changes trigger affected retests; prior-build results are not silently reused as current evidence.
- Relevant tests, typecheck and production Web export pass under the agreed Node 24/pnpm 11.25.0/Expo ~57 toolchain. Toolchain changes remain separate implementation work; earlier local Node 23 results are historical evidence only.
- Code and schema changes are reviewed/integrated, and evidence identifies the exact candidate commit, deployed URL, migration version and test environments. A successful deployment alone does not prove functional acceptance.
- Gate C platform/accessibility checks and at least three recorded user/stakeholder sessions are complete. Findings are classified as Critical, Important, Deferred or Out of Scope with rationale, owner and disposition.
- Prioritized experience/accessibility fixes link to PRs and comparable before/after evidence with retest outcomes. Proposed release rule: no Critical finding remains open; remaining Important findings have an explicit team disposition. A required acceptance failure cannot be waived by calling it Deferred.
- Limitations, remaining tasks and platform coverage are documented, and the team signs off on the exact tested candidate. Merging planning documents does not itself approve the Beta or satisfy these conditions.

## Scope still requiring agreement

Real restaurant search, reservations and payments have not been confirmed as mandatory; retaining clearly labeled fictional restaurant data is a proposal pending team agreement. Confirm group completion/tie/leave/close policies, synchronization target, OCR receipt coverage/accuracy target, named owners and gate dates. The Sprint 2 D01–D07 log must be reconciled against its original entries before claiming individual defects closed.

## Linked execution documents

- [Technical acceptance criteria and feature Definition of Done](Sprint3-Beta-Acceptance-Criteria.md)
- [Sprint 2 backlog, known defects and remaining tasks](Sprint2-Backlog-Defects-and-Remaining-Tasks.md)
- [Technical risks and integration dependencies](Sprint3-Technical-Risks-and-Dependencies.md)
- [Ten core scenarios and 36 detailed functional cases](Sprint3-Decide-Split-Functional-Test-Cases.md)

This document states the proposed sprint outcome and overall release conditions; linked acceptance checks and evidence records establish whether they are achieved. All outcomes remain unverified until execution evidence is recorded.
