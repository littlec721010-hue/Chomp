# Live receipt RLS check — November 1, 2026

The user supplied the complete SQL Editor CSV from the corrected `supabase/checks/receipt-isolation.sql`. Independently checked: 24 rows, all PASS, zero FAIL.

Both selected accounts pass own-row SELECT/INSERT/UPDATE/DELETE/UPSERT controls and cannot perform those operations on the other's fixture. Anonymous SELECT/INSERT/UPDATE/DELETE are denied. The same fixture receipt ID is used for both owners, exercising account-scoped composite keys. Each attempt and the entire run roll back.

Account selection uses the earliest two confirmed users with saved Profile/preferences; numbered labels do not establish which emails were selected. These are live database-role/request-claim policy checks, not authenticated HTTP tests or UI save/read-back evidence. The supplied CSV contains only generic actor labels, operations, PASS results, row counts and permission codes; no personal receipt data or account identifiers.

The migration has a user-supplied successful SQL Editor result.

## User-operated manual bill check

The user followed the synthetic manual-bill checklist and supplied screenshots of the review, exact-share dialog and saved-history row. The total was $10.01 for three diners with zero tax/tip, allocated as $3.34, $3.34 and $3.33. One saved record appeared in Recent Splits. The user explicitly confirmed the page had been refreshed and the record remained. This supports the observed manual creation/equal-share/save/reload flow. The figures are prescribed synthetic test inputs, not personal expense data; original screenshots are not committed. The exact new preview URL/source commit was not captured with these screenshots, so candidate identity still needs confirmation before release sign-off.

## User-operated browser OCR fixture check

The supplied synthetic English/USD PNG was selected through the deployed browser upload flow and processed by Recognize Receipt. The resulting screenshot shows two recognized items with the expected quantities/unit prices, printed tax/tip, and $29.04 total. This is real OCR on a synthetic image, not evidence of representative real-photo accuracy.

Following the prescribed editing test, the user renamed the tea line and added a synthetic $2.00 soup line. This intentionally added item was not an OCR omission. The subtotal became $25.00; recalculated tax/tip produced a $31.57 total and the printed-total difference warning was visible. After confirmation/save, the history contained both the manual and OCR bills. The next supplied screenshot, following the requested refresh/reopen sequence, showed all three edited lines and the $31.57 total retained. This supports the observed recognition/edit/add/confirm/save/read-back flow. It does not establish removal, failed recognition, post-confirmation editing or every precision case.

Only prescribed synthetic test inputs and conclusions are recorded; original screenshots are not uploaded. The exact candidate URL/commit still needs to be attached before final release sign-off.

## User-operated mobile history and account switch

Following the requested A-to-B sequence on iPhone Safari, the user supplied one screenshot with the two prescribed synthetic bills restored and another showing an empty history after account switching. This supports the observed desktop-to-mobile history read-back and the UI-level isolation sequence. The screenshots themselves do not independently show login identities; account attribution follows the requested user-operated sequence. Original screenshots and personal account information are not uploaded. The mobile address bar shows the deployment hostname `chomp-mtnihzytt-chomp4.vercel.app`; its exact source commit has not yet been independently mapped.

## Repeat-save check

Following the instruction to reopen the existing synthetic manual bill, save it without changes and refresh, the user supplied a history screenshot still containing exactly two records. The re-saved bill moved to the top, consistent with updated-time sorting. This supports the observed sequential repeat-save/idempotent update case; simultaneous requests and a lost-response retry remain separate scenarios.

## Failed receipt save and retry

Following the requested mobile offline-save/reconnect/retry sequence, the supplied first screenshot shows the synthetic bill renamed in its restaurant/title field (not its item field), with `Unable to save. Please retry.` and the edited draft still displayed. The second screenshot shows the updated synthetic title in history after recovery, with the record count still two. This supports failure disclosure, draft retention and successful retry without a duplicate in the observed sequence. The screenshot alone does not independently prove the requested final refresh occurred. Neither real personal expenses nor screenshots are committed.

Receipt history failed-read recovery is recorded below; direct authenticated receipt API tests remain pending. Real-photo observations are recorded separately below; representative accuracy remains pending. Do not mark the whole receipt feature or Gate B passed from these results.

## Non-synthetic annotated receipt finding

The user supplied screenshots of an annotated photographed receipt and its browser recognition output. Recognition omitted item lines and classified a payment/footer as an item. This attempt is a FAIL for accurate automatic draft population, not evidence that real-photo OCR acceptance passed. The image also contains non-USD format hints, outside the currently validated English/USD template. No merchant details, real amounts or images are retained here.

Parser changes filter EFTPOS/payment labels and included-tax metadata, reject ambiguous zero-value OCR lines, keep unclassified post-subtotal footer lines out of items, improve heading selection, and flag recognized item-count differences/non-USD hints. Regression fixtures use synthetic text only. These are targeted parser fixes, not proof that the omitted source text can now be recognized; the photo needs a fresh deployed retest, and supported-format real-photo accuracy remains pending.

## Scan-page feedback finding

The user reported remaining on the scan page with another photo; the screenshot showed the idle Recognize Receipt button rather than an active progress state. The exact cause was not established from the screenshot alone. Source inspection found recognition errors below the controls, potentially outside the viewport, and zero-value candidate lines were excluded by the parser.

The error panel/manual fallback and progress status are now above the preview, errors label the action Retry recognition, and a newly selected image clears stale messages. Explicitly quantified zero-price item lines are allowed; ambiguous zero-only text produces a specific manual-entry/retry error. Synthetic regression checks pass, but no successful deployed retest of the user's image is claimed. No receipt details or images are committed.

## User-operated real-photo metadata and persistence retest

After the metadata fix was pushed in commit 239a959, the user supplied a browser review screenshot showing the printed receipt date/time recognized and item rows populated. The user explicitly confirmed that the diner count was manually entered, then confirmed that the saved bill remained after refresh. This supports the user-operated real-photo recognition → manual diner completion → save → refresh/read-back sequence for this one receipt. Original images, merchant details, printed date/time, prices and account information are not committed.

The screenshot's exact deployment URL/source commit was not independently captured. It does not independently establish that every item, tax/tip and total was accurate, or that an empty diner count was blocked before completion. Treat this as one successful observed workflow, not an overall OCR accuracy pass. Earlier real-photo failures remain open. The subsequent missing-diner validation check is recorded below. The cancellation and non-receipt fallback checks below add scoped interactive evidence; camera permissions and representative real-photo recognition failures remain separate checks.

## User-operated missing/invalid diner validation and recovery

Following the missing-diner save checklist, the user supplied a screenshot of the information editor with an empty Guests field and a visible completion error after attempting to save the bill. A second screenshot shows a zero guest count rejected with a 1–100 validation message. These support the observed empty/zero diner-count save prevention; they do not establish every invalid-input boundary or independently show the earlier per-person estimate state.

The user then supplied a saved-history screenshot after entering a valid count and confirming the bill, and explicitly confirmed that date, time, diner count and amount remained after refresh/reopening. This supports recovery from validation errors → valid metadata completion → confirmation/save → refresh/read-back for this receipt. No original screenshots, merchant information, personal receipt amounts or account identifiers are committed. Exact candidate mapping remains unverified. No full-feature or Gate completion is claimed.

## User-operated photo cancellation and non-receipt fallback

After opening Photos and cancelling selection, the user reported that no bill was added. This confirms the observed no-new-history-entry outcome; preservation of every existing field was not separately demonstrated.

The user then supplied a scan-page screenshot of a non-receipt image with the visible no-clear-item-prices error and manual-entry action, followed by the manual setup screen. This supports honest recognition failure and navigation into independent manual creation; it is not a successful receipt recognition case or a blank-image/no-text test.

Using the prescribed synthetic fallback test, the user entered one item totaling $10.01, two diners and zero tax/tip. The exact-share dialog showed $5.01 and $5.00, summing to $10.01. A subsequent screenshot showed the saved history entry. In response to the requested refresh/reopen sequence, the final screenshot again showed the item, diner count and exact shares. This supports the user-operated recognition failure → manual creation → cent-exact split → save → refresh/read-back sequence. Reload attribution follows the requested sequence; the screenshot alone cannot prove the browser refresh action. Only prescribed synthetic arithmetic and generic conclusions are recorded, not source images, personal receipt values or identities. Candidate mapping remains unverified.

## User-operated receipt-history failed-load recovery

Following the receipt-table request-blocking checklist, the first supplied screenshot shows the receipt REST rule enabled, blocked requests, a visible saved-bills load error and Retry loading bills. The initial displayed history count is zero after the requested refresh; this reflects an unloaded client list, not evidence that server records were deleted or that a previously loaded list was retained.

The second supplied screenshot shows request blocking disabled, the error no longer displayed and four saved records counted with history rows restored. In the requested unblock/retry sequence, this supports receipt-history failed-read disclosure and recovery. The screenshots alone do not independently distinguish clicking Retry from another successful reload. No source images, merchant details, personal receipt values or account identifiers are committed. Exact deployment/source mapping remains unverified.

## User-operated item removal and recalculation

Following the synthetic saved-bill checklist, screenshots show adding a $2.00 item increases the zero-tax/zero-tip total from $10.01 to $12.01, then removing it restores the $10.01 total and $5.01/$5.00 two-person allocation. The user reported the save/refresh/reopen checklist passed, and the history screenshot still counts four records. This supports the reported item-removal persistence and update-without-new-history-entry sequence. Screenshots alone do not establish every intermediate browser action. Only prescribed synthetic figures and generic results are recorded.
