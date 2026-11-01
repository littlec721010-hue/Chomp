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

Cross-device history, write/read failure recovery and real-photo browser recognition remain pending. Do not mark the whole receipt feature or Gate B passed from these results.
