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
- 55 application tests pass; local database checks report 48 account isolation, 24 receipt isolation and 8 receipt validation passes. These are automated/local checks, not new live deployment evidence.
- Browser preview automation still fails with a browser connection error. Full screenshot comparison, touch/keyboard interactions, camera permissions and small-screen visual acceptance remain pending; no pixel-perfect or device acceptance is claimed.
- Existing live authentication/receipt evidence is recorded in the account and receipt evidence documents. Real-photo OCR accuracy still has known failures; this visual update does not resolve them.
- Real group lifecycle/synchronization, server-side tie finalization and dining-history persistence remain unfinished. No Gate A/B/C completion is implied.
- Validate the updated Preview before merging PR #15. This work does not change main or the deployed 1.0 baseline.

## Receipt back-navigation correction

A user-operated history check found that opening a saved manual bill and using its Back arrow incorrectly entered the new manual-item form. The receipt source was being mistaken for its navigation entry point. History and OCR entries now explicitly return to Split; only a new manual draft's review entry returns to the manual-item editor. A receipt opened directly without entry parameters also returns to Split. Returning to Split uses stack pop-to rather than adding another home route. This fix passes type checking and the existing regression suite. In the subsequent user-operated Preview test, the user confirmed that Back from a saved-history receipt returns to Split. Paired screenshots then showed a new manual draft review returning to its item editor with its added item/quantity/price retained. This supports both requested Back-arrow routes; browser Back, native gestures and hardware-back variants are not independently verified.

## Reopening saved receipt links

A reported revisit/reload defect restored the receipt route while its in-memory draft had reset. Saved-history entry links now carry receiptId and returnTo. On reopening, the detail screen loads that exact ID for the authenticated owner (independent of the 100-entry history limit), validates the returned payload/identity, and shows loading, unavailable or retry states instead of rendering a different/empty bill. Account RLS remains in force. Invalid or another account's IDs do not select a default bill.

Unsaved drafts now have the account/tab-scoped session backup described below. Without an available valid backup or receipt ID, a legacy detail link still explains that the draft is unavailable with Back to Split. It does not pretend that the saved amount has become zero. Existing saved bills are unaffected. Regression: open a saved bill through history, retain the resulting URL, leave/reopen or refresh it, and verify the same items/count/amount; test blocked loading/retry and another-account/unavailable identity separately. Automated URL round-trip coverage, typecheck and Web build pass; deployed UI acceptance of this correction remains pending.

## Focus return and unfinished-edit recovery

Repeated Supabase SIGNED_IN events on browser focus previously called account loading, unmounting the navigation tree and all bill editors. An already-loaded identical account now updates its session credentials without reloading/unmounting; sign-out, a different account and other profile-changing events retain normal account loading. This preserves the current route, editor and position on ordinary tab/site switching.

Web bills additionally back up their structured draft, unfinished item fields, setup fields, open receipt-editor inputs and per-step scroll positions in sessionStorage, keyed by account (Demo uses a separate key). The backup is written on changes and page hide/visibility changes; a valid backup is read before the bill provider's first render. It expires after 24 hours and is local to the same origin/browser tab; it is not cross-browser/device draft synchronization. Closing the tab, clearing/denying storage or using a different Vercel deployment origin can make a backup unavailable. Storage failure is disclosed in the bill UI. Raw photos, passwords and auth tokens are not included. New bill identity resets prior form fields; saving remains an explicit backend action and does not auto-create history entries. Full reload restores structured edits but resets OCR review acknowledgement; the original photo remains memory-only.

Regression coverage verifies account separation, expiry, corrupt/invalid snapshots, unavailable storage, partial input and scroll round trips, and same-account focus events versus account changes. Typecheck and Web build pass. Deployed acceptance remains pending: modify a bill without confirming, leave/return to the same tab, verify the same route and values; refresh the exact URL and verify unfinished form/scroll recovery. Do not claim recovery of data already lost before this fix.
