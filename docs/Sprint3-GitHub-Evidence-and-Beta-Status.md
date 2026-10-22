# GitHub Evidence and Beta Technical Status

Prepared: October 21, 2026 (America/New_York).
Observed main: 7903996. GitHub PR states below were read during preparation; they are a snapshot, not ongoing monitoring. This is the Task 9 status-document deliverable, not proof that Beta implementation/testing is complete.

## Current technical conclusion

Planning/review documents for Tasks 1–6 are merged. Priority Beta implementation (Task 7) has not started in this workflow and remains deferred at the user's direction. Current main application code is unchanged from the Alpha review baseline 2500792; technical gates are not accepted. Current-candidate runtime validation (Task 8) has not been executed.

Confirmed receipt scope: real OCR → editable review/corrections/add missing items → explicit confirmation → integer-cent equal split → save corrected bill. Independent blank-bill/manual entry without OCR is Deferred until usability feedback supports it. This is a scope decision, not implemented functionality or a test pass.

## GitHub evidence index

| PR | State at review | Contribution / boundary |
| --- | --- | --- |
| [#4](https://github.com/littlec721010-hue/Chomp/pull/4) | Merged | Alpha source/branch review. |
| [#5](https://github.com/littlec721010-hue/Chomp/pull/5) | Merged | Initial Beta acceptance criteria and DoD; later scope refinements apply. |
| [#6](https://github.com/littlec721010-hue/Chomp/pull/6) | Merged | Risks, trigger/recovery/prevention, dependency order and partial original D cross-reference. |
| [#7](https://github.com/littlec721010-hue/Chomp/pull/7) | Merged | OCR review/edit/missing-item flow in acceptance criteria. |
| [#8](https://github.com/littlec721010-hue/Chomp/pull/8) | Merged | Ten core scenarios/36 detailed cases, plus sprint goal/overall DoD and backlog carryover consolidated into original documents. Test specifications, not passed runs. |
| [#9](https://github.com/littlec721010-hue/Chomp/pull/9) | Merged | Navigation/state/data-flow review and requested restaurant recovery/mismatch investigation. No application fixes. |
| [#10](https://github.com/littlec721010-hue/Chomp/pull/10) | Closed, not merged | Experimental restaurant code fix; excluded from current main and Beta acceptance evidence. Preserved branch only. |
| [#11](https://github.com/littlec721010-hue/Chomp/pull/11) | Merged | Defect reporting/reproduction format and consistent scope revision deferring standalone manual entry while retaining OCR correction/addition. |

Use current main document contents, not an earlier PR snapshot, to determine current acceptance scope. In particular, earlier mandatory standalone-manual-entry wording is superseded by #11.

## Task and deliverable status

| Original task | Status / evidence |
| --- | --- |
| 1 — Review Alpha code, branches and incomplete features | Documented and merged in #4. Source/build review only; original Alpha milestone interpretation confirmed by the user. |
| 2 — Define Beta acceptance criteria and DoD | Draft criteria documented/merged through #5/#7/#8/#11. Proposed thresholds and team decisions remain explicit; document merge is not gate sign-off. |
| 3 — Identify technical risks/dependencies | Documented and merged in #6; later scope updates in #11. Risks remain open/unverified until closure evidence exists. |
| 4 — Create Decide/Split functional test cases | Documented in #8, scope-updated in #11. Ten core scenarios; 35 active detailed entries and one Deferred. Not executed as current-candidate acceptance. |
| 5 — Review navigation/state/data flow | Documented and merged in #9; scope-updated in #11. Findings are not fixes. |
| 6 — Establish defect reporting/reproduction | Documented and merged in #11. No actual GitHub defect issues filed by that document. |
| 7 — Continue integrating priority Beta features | Not started in this workflow; user requested documentation only. Backend/OCR functionality not added. |
| 8 — Verify core flows and document limitations | [Record/limitations prepared](Sprint3-Core-Flow-Validation-and-Build-Limitations.md); runtime validation pending. Task is not fully complete. |
| 9 — Update GitHub evidence and Beta status | This evidence snapshot prepared; its own branch/PR delivery state should be read on GitHub. It does not imply Tasks 7/8 are complete. |

## Gate snapshot

| Gate | Status and missing acceptance evidence |
| --- | --- |
| A — Trustworthy Foundation | Not accepted: live email/auth/account isolation and deployed RLS tests remain unverified; required PR/CI enforcement, standard-toolchain checks, contracts and safety labels need evidence. Documentation PRs alone do not establish B01–03 completion. |
| B — Connected Experience | Not accepted: real multi-device room/vote backend, persistent histories and real OCR-review-confirm flow remain source gaps. Equal-share model evidence exists but does not pass the full integration gate. |
| C — Beta Candidate | Not accepted: no current-candidate iOS/Android/Web regression/accessibility evidence set, three documented user sessions, linked triage and before/after revision/retest set in this work. |

## Evidence ledger and next checkpoint

- Historical Alpha: 24 automated tests, typecheck and Web export passed; local Node 23.10.0, pnpm 11.25.0. Local Node 24 alignment is deferred at the user's request. Do not rewrite historical environment evidence as Node 24.
- Historical Vercel inspection: main preview 57beeab reported Node 24.x and build log pnpm 11.25.0. Expo declaration is ~57.0.27; exact installed patch was not established from that log. Current deployment of 7903996 remains unverified.
- Experimental #10: 27 tests and limited browser demo observations apply only to 9036f4a. They are excluded from current-main acceptance and do not close the restaurant findings.
- Current documentation pass: source/PR inspection and Markdown diff checks only; no application checks or live services were run/changed.

Next checkpoint when development is authorized: identify/configure the actual backend and two test accounts; verify Gate A identities/isolation; implement Gate B dependencies; record candidate/deployment parity and execute the core/extended verification with Gate C evidence. Until then, continue documenting agreed scope and pending decisions without claiming implemented outcomes.
