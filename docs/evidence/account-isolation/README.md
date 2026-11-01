# Account isolation evidence — November 1, 2026

## Observed results

- `database-results-2026-11-01.csv`: user-exported SQL Editor results, independently counted: 48 PASS, zero FAIL. Covers both directions and own-record controls for profiles/preferences SELECT, INSERT, UPDATE, DELETE and UPSERT, plus anonymous checks. Database role/claims simulation with rollback, not HTTP DELETE.
- `api-results-2026-11-01.json`: locally executed real authenticated API check: 35 PASS, zero FAIL, no recorded error. Includes two confirmed-account logins, distinct identities, own reads, denied cross-account reads/updates/inserts/upserts, unchanged target records, anonymous read denial, and successful closure of both test-created sessions. No HTTP DELETE was attempted.
- User-reported app walkthrough: email verification returned to the App; preferences survived refresh and sign-out/sign-in; account switching displayed separate A/B preferences. This is user-operated evidence, not an independently recorded automated UI run.
- User-operated protected-route check: after signing out, directly opening `/profile` on the stated preview displayed Welcome instead of account details (screenshot supplied in chat). The user then confirmed browser Back did not restore private account content. This observed sequence passed; it is not a claim about every protected route or browser cache scenario.
- Cross-device read-back: the user signed into account A on an iPhone in Safari using the same preview and confirmed successful restoration of the saved profile/preferences. No email, dietary information, budget values or source screenshot is included in this record. This verifies A's observed Web-to-mobile-Web read-back, not native App restart or the same sequence for B.
- Account B mobile read-back: following the requested sign-out/account-switch/refresh sequence on the same iPhone Safari preview, the user reported success and supplied a screenshot of B's restored Profile. A and B therefore both have user-operated desktop-to-mobile-Web restoration evidence. No emails, preference values or source screenshots are retained here. Refresh/session continuity is user-reported; a static screenshot alone does not independently show the full sequence.
- Offline preference save/retry: the user followed the mobile-Web disconnect/save/reconnect/retry/refresh checklist and reported a pass. The offline screenshot shows `TypeError: Load failed` while retaining the editor and selected draft; the online screenshot shows the saved result in Profile. No personal values/screenshots are retained in Git. This supports this particular failed-write/retry case, not failed-read behavior or all DATA-03 histories/votes requirements.

## Follow-up finding

The offline error exposes technical wording (`TypeError: Load failed`). Improve it to explain that saving failed and offer retry after reconnecting. Functional recovery passed in this run; clearer error wording remains an open experience improvement, not a completed fix. This internal technical verification is not automatically one of the three required user/stakeholder usability sessions.

The app preview used for the reported walkthrough was `https://chomp-kg6vjzd5u-chomp4.vercel.app`, redeployed from the Version 3 branch after adding public Supabase configuration. Its displayed source before redeploy was 985023d. The API report records local HEAD 4e77b37; password masking and login-diagnostic improvements were uncommitted during execution and are committed with this evidence. API tests target the database directly and do not prove deployed UI source identity.

## Acceptance interpretation

These results support real email authentication, observed Web session/preference restoration, and account isolation for the two existing tables. SEC-01 is supported by direct authenticated API checks plus separate rollback-only database DELETE checks; do not describe DELETE as HTTP-tested. The database migration was run manually by the user, outside a tracked migration CLI.

This does not establish all Gate A/B/C criteria. Other protected-route/deep-link scenarios, complete failure/retry coverage, real rooms/voting, persistent dining/receipt histories, OCR and release/device/user-study evidence remain separate pending work. No claim is made that all AUTH-02, DATA-01, SEC-02 or B02 subconditions are fully accepted merely from these reports.

Reports contain no emails, passwords, user IDs, session tokens or personal preference values. Public project hostname is retained for traceability. Keep local credentials and `.env.local` outside Git.
