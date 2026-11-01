# Live receipt RLS check — November 1, 2026

The user supplied the complete SQL Editor CSV from the corrected `supabase/checks/receipt-isolation.sql`. Independently checked: 24 rows, all PASS, zero FAIL.

Both selected accounts pass own-row SELECT/INSERT/UPDATE/DELETE/UPSERT controls and cannot perform those operations on the other's fixture. Anonymous SELECT/INSERT/UPDATE/DELETE are denied. The same fixture receipt ID is used for both owners, exercising account-scoped composite keys. Each attempt and the entire run roll back.

Account selection uses the earliest two confirmed users with saved Profile/preferences; numbered labels do not establish which emails were selected. These are live database-role/request-claim policy checks, not authenticated HTTP tests or UI save/read-back evidence. The supplied CSV contains only generic actor labels, operations, PASS results, row counts and permission codes; no personal receipt data or account identifiers.

The migration has a user-supplied successful SQL Editor result. Deployed manual/OCR save, reload, cross-device history, write/read failure recovery and real-photo browser recognition remain pending. Do not mark the whole receipt feature or Gate B passed from this report.
