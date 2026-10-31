# Sprint 3 — Updated Hi-Fi Version 3 Design Alignment

Reviewed: October 31, 2026 (America/New_York).
Repository planning baseline: main @ 7374116 (PR #13 merged).
Source: [Hi-Fi Version 3](https://www.figma.com/design/dFW4Nr54OfzHFRKWPkJwWV/Prototype?node-id=171-15254).
Method: Figma metadata/text inspection of the supplied page and screenshot exports of Decide 18 and Split 6. This is not a full visual/prototype-interaction audit or historical Figma version diff. The user approved synchronizing the two identified scope changes; no code/design edits or runtime passes are claimed.

## Confirmed changes and source frames

| Area / reference | Observed design | Sprint change |
| --- | --- | --- |
| [Decide 18](https://www.figma.com/design/dFW4Nr54OfzHFRKWPkJwWV/Prototype?node-id=472-1786) | Tie screen; Candidate Pool lists Alex, Sarah, Jamie, Taylor; Pick Lucky Diner. | Replace a direct random restaurant draw with a diner-selection flow after all votes complete. |
| [Decide 19](https://www.figma.com/design/dFW4Nr54OfzHFRKWPkJwWV/Prototype?node-id=478-1838) | Four diner nominees, spinning state and mixing-the-squad copy. | A shared server outcome drives pick/spin/reveal; animations do not generate independent results. |
| [Decide 20](https://www.figma.com/design/dFW4Nr54OfzHFRKWPkJwWV/Prototype?node-id=491-2421) | Lucky diner reveal states Alex's original vote broke the 2–2 tie; restaurant details and View Today's Restaurant. | Persist lucky diner, their recorded original vote and restaurant once per round; both devices show the same identity/details after refresh/reconnect. No extra deciding vote. |
| [Split 6](https://www.figma.com/design/dFW4Nr54OfzHFRKWPkJwWV/Prototype?node-id=512-1304) | Create Bill Manually; restaurant/date setup, tax/tip note; Next: Add Items. | Restore independent no-photo/no-OCR setup as required. |
| [Split 7](https://www.figma.com/design/dFW4Nr54OfzHFRKWPkJwWV/Prototype?node-id=514-2005), [Split 8](https://www.figma.com/design/dFW4Nr54OfzHFRKWPkJwWV/Prototype?node-id=514-2540), [Split 9](https://www.figma.com/design/dFW4Nr54OfzHFRKWPkJwWV/Prototype?node-id=514-3323) | Item name, price, quantity, Add Item to Bill, accumulating list/count and Done & Review. | Test repeated additions, correction/removal, draft retention on back navigation and validation before review. |
| [Split 10](https://www.figma.com/design/dFW4Nr54OfzHFRKWPkJwWV/Prototype?node-id=514-3059) | Review receipt/items, bill breakdown, estimated per-guest amount and Done & Back to Split. | Shared confirmation/calculation/persistence contract for manual and OCR-corrected receipts. Displayed estimates do not waive exact-cent reconciliation. |

## Current scope and traceability

- GROUP-04 / GC-06 / R04 / NS-08: complete votes → diner pool → pick/spin → lucky diner/original-vote restaurant reveal → restaurant result. In the illustrated four-member 2–2 case, all four valid voters are candidates. A single non-tied leader still wins directly.
- SPLIT-01 / SP-04 / R08 / NS-06: manual setup → add/edit/remove items → review/confirm → equal split → save/read-back is active again. The October 21 Deferred decision is superseded; it was not an implementation or test result.
- SPLIT-02/03/04/05: real OCR, correcting recognition errors, adding missing items, honest failure recovery, confirmation, precise equal splitting and persistence remain required. Manual creation must work independently and can support OCR failure recovery.
- Ten core scenarios remain; CORE-08 covers manual creation with failure recovery in extended checks. All 36 detailed entries are active Not run. Variant-level policy gaps can still be Blocked pending specification.
- Backend authentication/RLS, group synchronization, persistence, accessibility and three documented sessions remain required. This design change does not pass Gates A/B/C.

## Edge decisions and numerical details to confirm

1. **Mixed-count and multiway ties:** Decide 18–20 illustrate 2–2 only. Before accepting 2–2–1, determine whether nominees include all valid voters or only voters supporting tied leaders, and what should happen if a chosen member originally supported a lower-vote option. Define 1–1–1 and other group sizes explicitly. Do not silently reuse direct restaurant randomization or infer nominee eligibility.
2. **Finalized rounds:** agree required-member snapshot, leave/close and edit/reopen behavior. Concurrent pick requests must finalize once; ordinary reload/reconnect cannot reroll. A reopened round needs an explicit agreed identity/policy.
3. **Manual tax precision:** Split 6 includes 8.875%. Current rate editor validates at most two decimal places and needs a future contract decision/implementation to accept this value or change design copy. Record a 3-decimal acceptance variant as specification pending until agreed. Do not silently truncate/round tax rates to two decimals. Monetary totals/shares still round and reconcile to integer cents.
4. **Quantity placeholder:** some item forms show quantity 0. Treat that as an incomplete input state, not permission to add a zero-quantity item. Submit requires a valid positive integer quantity.
5. **Per-person estimate:** a display such as $31.89/person is an estimate; exact shares may differ by a cent. Preserve explicit remainder allocation and a breakdown summing to the total for both input paths.

## Document delivery boundary

Updated acceptance/overall DoD, functional test plan, risks/dependencies, navigation/state review, defect reporting, validation/limitations and Beta status together. Older PR snapshots remain historical; this revision governs the two scope changes once merged. No application files or backend configuration were changed. Test/evidence rows remain unexecuted until recorded against a candidate build.
