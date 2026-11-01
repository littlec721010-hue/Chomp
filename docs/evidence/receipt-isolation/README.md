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

Receipt history failed-read recovery, direct authenticated receipt API tests and real-photo browser recognition remain pending. Do not mark the whole receipt feature or Gate B passed from these results.

## Non-synthetic annotated receipt finding

The user supplied screenshots of an annotated photographed receipt and its browser recognition output. Recognition omitted item lines and classified a payment/footer as an item. This attempt is a FAIL for accurate automatic draft population, not evidence that real-photo OCR acceptance passed. The image also contains non-USD format hints, outside the currently validated English/USD template. No merchant details, real amounts or images are retained here.

Parser changes filter EFTPOS/payment labels and included-tax metadata, reject ambiguous zero-value OCR lines, keep unclassified post-subtotal footer lines out of items, improve heading selection, and flag recognized item-count differences/non-USD hints. Regression fixtures use synthetic text only. These are targeted parser fixes, not proof that the omitted source text can now be recognized; the photo needs a fresh deployed retest, and supported-format real-photo accuracy remains pending.

## Scan-page feedback finding

The user reported remaining on the scan page with another photo; the screenshot showed the idle Recognize Receipt button rather than an active progress state. The exact cause was not established from the screenshot alone. Source inspection found recognition errors below the controls, potentially outside the viewport, and zero-value candidate lines were excluded by the parser.

The error panel/manual fallback and progress status are now above the preview, errors label the action Retry recognition, and a newly selected image clears stale messages. Explicitly quantified zero-price item lines are allowed; ambiguous zero-only text produces a specific manual-entry/retry error. Synthetic regression checks pass, but no successful deployed retest of the user's image is claimed. No receipt details or images are committed.
