# Beta automated checks (B01)

`.github/workflows/beta-ci.yml` runs on every pull request, pushes to main/develop, and manual dispatch. Draft PRs are included. The job installs locked dependencies, runs TypeScript checking, all automated tests and the production Web export. Node comes from `.nvmrc` (24), pnpm from `package.json` (11.25.0), and Expo from the lockfile.

Open a PR's **Checks** tab and select **Beta CI / Typecheck, tests and Web build** to inspect each step. A failed step fails the job. The workflow uses read-only repository permissions and needs no Supabase secrets; it validates the sample/unconfigured build, not live account isolation, OCR or cross-device synchronization.

CI does not merge, deploy or approve changes. Repository branch protection has not been configured by this change. After this check has run, a repository administrator can make it required for main through a branch rule. A teammate's review, device checks and live acceptance evidence remain separate B01/Beta requirements. Workflow configuration alone does not mark B01 passed.
