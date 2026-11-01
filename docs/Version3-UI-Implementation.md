# Version 3 UI implementation

Updated November 1, 2026. Design source: [Hi-Fi Version 3](https://www.figma.com/design/dFW4Nr54OfzHFRKWPkJwWV/Prototype?node-id=171-15254).

## Screen coverage

The Version 3 page was inspected using frame-level design context and screenshots. Existing matching implementations are reused; this update replaces differing layouts and keeps live data bound to their screens. Blank template frames are not additional user destinations. Selected/unselected preferences, scan progress and different item counts are states of working screens.

| App area | Version 3 reference frames | Implementation / update |
| --- | --- | --- |
| Welcome / sign in / sign up | 202:17860 / 202:17973 / 202:18017 | Existing Version 3 forms and real email authentication retained; shared brand wordmark and decorative geometry corrected. Terms remain clear of the Home indicator. |
| Onboarding defaults / edit defaults | 226:18411 / 338:28682 | Existing editable cards retained; selected chip contrast and footer clearance updated. |
| Profile | 202:17624 | Account-owned values retained; footer clearance and Beta / Version 3 identification updated. |
| Decide home | 202:17522 | Version 3 choice-card corners and bottom clearance updated; history remains dynamic. |
| Solo preference choice | 242:19778 / 258:20672 / 258:20990 | One screen renders none/saved/custom states; selected card treatment updated. |
| Occasion preference editor | 258:21149 / 281:23871 | Shared editor uses Version 3 heading size; occasion edits remain separate from defaults. |
| Solo recommendations / result | 258:21705 / 258:22394 | Existing generated Version 3 layouts and dynamic restaurant/photo bindings retained; scroll clearance updated. |
| Create/join / room form | 258:22725 / 281:23049 / 281:23405 | Existing Version 3 layouts retained; create and joined-room states reuse the form with dynamic text. |
| Group preference choice | 281:23556 / 281:23712 / 281:24168 | Shared none/saved/custom states, including updated selection treatment. |
| Consensus / recommendations | 281:24327 / 281:24768 | Existing Version 3 layouts and dynamic member/restaurant bindings retained; scroll clearance updated. |
| Free / random vote confirmations | 312:26427 / 298:25879 | Existing Version 3 layouts retained; current vote and member statuses remain dynamic. |
| Group result | 312:26834 | Restaurant name/description use latest Figma identity nodes 478:1975 and 478:1978, typography and price range; photo and identity use the same result. |
| Tie / spin / reveal | 472:1786 / 478:1838 / 491:2421 | Existing Version 3 flow retained; orbit scales on narrow screens and bottom clearance increased. |
| Split home | 202:17583 | Replaced separate scan/upload cards with Scan/Upload Receipt and Add Manually cards; original Figma icons imported locally. |
| Scan / recognition progress | 512:1216 / 312:27525 / 312:27692 / 312:27763 | Photos, circular shutter and Auto camera indicator replace stacked primary scan controls. Actual OCR progress, cancel and visible failure recovery retained. An empty frame never implies a sample was scanned. |
| OCR review | 312:27822 | OCR source / review-required bar added. Original image comparison, editing/removal, missing items and explicit confirmation retained. |
| Manual setup | 512:1304 | Version 3 circular section icons and bottom action clearance updated. |
| Manual item states | 514:2005 / 514:2540 / 514:3323 | Add New Item form now precedes Items on This Bill; editing a listed item scrolls back to the form. |
| Manual review | 514:3059 | Shared review preserves editing and exact shares; Save & Back to Split waits for successful saving. |
| Bottom navigation | 389:873 variants | Existing three Version 3 variants retained; scrollable page endings reserve clearance for the raised active tab. |

Generated Decide 5–16 views were checked against current frame node identities. Their layouts already represent Version 3, so they were reused rather than duplicated. Group result's newer identity nodes were synchronized explicitly. This structural comparison does not constitute pixel or interactive acceptance.

## Working behavior retained

- Real Supabase email authentication, protected navigation, account-owned profiles/preferences and receipt history.
- Browser OCR, original-image comparison, editable drafts, missing items, manual creation and visible failure/retry paths. Printed date/time are recognized; missing dates and diner counts require explicit completion rather than defaulting to today/four guests.
- Integer-cent arithmetic, three-decimal percentages and explicit equal-share remainders. Quantity must be positive even where Figma uses a zero placeholder.
- Saved bills navigate back only after a successful save; failed requests keep the draft. Fresh manual creation confirms replacement when an existing draft has items.
- Restaurant/photo identity remains data-driven. Sample menus/perks and local group behavior remain honestly labelled.
- Camera flash is delegated to the device camera; the Auto indicator is not an implemented custom flash-toggle control. Recognition starts explicitly on the selected image.

## Verification and limits

- Type checking and production Web export pass.
- 50 application tests pass; local database checks report 48 account isolation, 24 receipt isolation and 8 receipt validation passes. These are automated/local checks, not new live deployment evidence.
- Browser preview automation still fails with a browser connection error. Full screenshot comparison, touch/keyboard interactions, camera permissions and small-screen visual acceptance remain pending; no pixel-perfect or device acceptance is claimed.
- Existing live authentication/receipt evidence is recorded in the account and receipt evidence documents. Real-photo OCR accuracy still has known failures; this visual update does not resolve them.
- Real group lifecycle/synchronization, server-side tie finalization and dining-history persistence remain unfinished. No Gate A/B/C completion is implied.
- Validate the updated Preview before merging PR #15. This work does not change main or the deployed 1.0 baseline.

## Receipt back-navigation correction

A user-operated history check found that opening a saved manual bill and using its Back arrow incorrectly entered the new manual-item form. The receipt source was being mistaken for its navigation entry point. History and OCR entries now explicitly return to Split; only a new manual draft's review entry returns to the manual-item editor. A receipt opened directly without entry parameters also returns to Split. Returning to Split uses stack pop-to rather than adding another home route. This fix passes type checking and the existing regression suite; deployed back-navigation acceptance remains pending.
