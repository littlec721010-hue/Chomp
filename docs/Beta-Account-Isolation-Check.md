# Account isolation check

Run `supabase/checks/account-isolation.sql` as one complete query in the project's Supabase SQL Editor using the postgres role. It requires exactly two confirmed accounts that each have saved Profile and preference records. Account 1/2 are assigned by creation time; they are not identified by email in the output.

The script follows Supabase's [database-role testing approach](https://supabase.com/docs/guides/database/postgres/testing-row-level-security): switch to authenticated/anon and supply request claims. It checks both directions, own-record positive controls, cross-account SELECT/UPDATE/DELETE/INSERT/UPSERT, and anonymous access. Each mutation rolls back in an exception subtransaction, and the enclosing transaction ends with ROLLBACK. Do not run a selected fragment or replace ROLLBACK with COMMIT.

Expected output: 48 PASS rows and no FAIL rows. A missing setup record stops the run rather than producing a false pass. Only expected permission-denied errors count as blocked access; unrelated errors fail. This file has not yet been executed against the live project. Save the returned results and test date/build as evidence before marking database checks passed.

This is a database policy check, not an HTTP/JWT integration test. It does not independently establish SEC-01's requirement for direct API attempts using each account's normal credentials. Keep that acceptance evidence pending until a real authenticated API run is recorded; never copy passwords or session tokens into the evidence report.

## Real authenticated HTTP check

From the repository directory, run `node scripts/check-account-api.mjs` in your own interactive terminal. It reads `.env.local` for the public project URL/key and prompts for both test accounts. Password entry is hidden. Credentials/tokens are not saved; the report omits emails, user IDs and account records. The script signs out its own test sessions only. It requires confirmed accounts with saved rows in both tables.

The check covers real password authentication, own reads, cross-account reads/updates/inserts/upserts in both directions, target-row read-back and anonymous reads. Attempts use the target's existing values to avoid changing profile/preference values if a policy is broken. Any unexpected result stops the run. A denied update must return zero rows or an explicit permission error, and target data including updated_at must remain unchanged. A uniqueness error is not accepted as an RLS pass.

`test-results/account-api.json` contains the timestamp, code commit, project hostname and redacted results, and is ignored by Git. Share that report for review. This script has only been syntax checked so far; live success must be established from the returned report. HTTP DELETE is deliberately excluded to avoid deleting live rows if policies fail; the separate rollback-only SQL check covers DELETE. Do not describe the combined evidence as a live HTTP DELETE test. The existing app's refresh/account-switch UI tests remain separate evidence.
