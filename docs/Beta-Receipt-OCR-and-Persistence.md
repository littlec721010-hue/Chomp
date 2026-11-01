# Web Beta: real receipt OCR and account-owned bill history

## Implementation

Photo/gallery selection → explicit Recognize Receipt → Tesseract.js 7 English text recognition → conservative USD item parsing → editable review → explicit confirmation → integer-cent equal split → Supabase save. Independent manual creation uses the same bill model and store. OCR never substitutes a fixture when recognition fails. A labelled sample remains available only through Demo preview.

Recognition runs in the browser, with a first-use download of worker/core/language resources from Tesseract's default CDN endpoints. No paid OCR key is needed. The image is not uploaded to an OCR service or stored in Supabase; only the confirmed structured bill is saved. The original photo remains in memory for comparison in review. Native platforms currently show a manual-entry fallback. English printed USD image receipts under 10 MB are the initial scope; PDFs, handwritten receipts, complex discounts and non-USD formats are not accepted as validated support.

The parser separates item totals from printed tax/tip/total, flags ambiguous/missing lines and subtotal differences, and treats a trailing item price as a line total. It does not guess fractional-cent unit prices. The date defaults to today and diners default to four, both editable. Printed tax/tip amounts are preserved until item/rate edits require recalculation; inferred rates are shown in the editor. Users must inspect all values and explicitly acknowledge review, including total differences, before saving. Any draft edit resets that acknowledgement.

Recognition has cancellation and a 90-second timeout, retry/reselection, manual fallback, and confirmation before replacing an existing nonempty draft. Camera/library cancellation does not replace a bill. OCR accuracy is not guaranteed by parsing tests.

## Storage and security

Run `supabase/migrations/202611010001_split_receipts.sql` once in Supabase SQL Editor, after the existing account migration. This adds `split_receipts`, payload validation, the account/date index and owner-only RLS. It is additive and does not replace Profile/preferences tables.

The composite `(user_id, receipt_id)` key makes retries/upserts idempotent per account. Saving awaits a returned ID before changing history or navigating; errors preserve the draft and permit retry. Duplicate clicks are guarded. Loads keep the existing list on failure and offer retry; invalid stored payloads are reported rather than replaced with samples. Real accounts start with no sample history. Up to 100 most recently updated bills are loaded. The existing account-keyed provider boundary separates in-memory state during account changes. Drafts are not persisted before confirmation.

Only a public Supabase URL/publishable key is used; no service-role key is introduced. Do not treat the previous Profile/preferences isolation evidence as proof for this new table.

## Validation and pending live acceptance

- 41 existing/new application tests passed, including OCR parsing, quantity/amount ambiguity, no-double-counted tax/tip, edited items, exact-cent shares and invalid saved payloads.
- The real Tesseract engine recognized `tests/fixtures/receipt-english-usd.png`, an explicitly synthetic image, as two items with the expected quantities/unit prices and $29.04 total. Run `pnpm exec tsx scripts/check-ocr-engine.ts` to repeat. This is a Node engine smoke test, not browser or real-photo acceptance.
- `pnpm test` also runs PGlite, a local PostgreSQL-compatible test environment with minimal auth-role stubs: the two migrations execute, 48 existing account-policy checks and 24 new receipt-policy checks pass, eight payload checks pass, and rollback leaves no receipt fixtures. This does not reproduce the full Supabase HTTP/auth stack.
- Local typecheck and Web production export are required for this change. Tesseract's donation-only postinstall script is intentionally disabled; it is not required for OCR.

The user subsequently supplied a successful SQL Editor result for the live receipt migration. Live receipt-policy checks remain pending: the first attempt stopped on the original exact-two-account precondition, before checking policies. The corrected `supabase/checks/receipt-isolation.sql` selects the earliest two confirmed accounts with saved Profile/preferences, allowing additional project users. Its selection is deterministic; do not assume its numbered accounts map to a particular email without checking privately. Run the complete corrected query: expect 24 PASS and no permanent fixture rows. Then verify A/B account-owned save/read-back, cross-device history, repeated save without duplication, failed save/retry and failed history load/retry on the deployed preview. Test several redacted real receipts on desktop and iPhone Safari, including correction/addition/removal and cancelled/failed recognition. Record the exact deployed commit and actual outcomes. These checks remain pending, as does visual/interactive acceptance; no Gate is marked complete here.
