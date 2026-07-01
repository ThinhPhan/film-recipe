# Harness Backlog

Use this file when an agent discovers a missing harness capability or recurring friction.

## Items

### HB-001 Install Verified Harness CLI

Discovered while: initial Harness migration on 2026-07-01.

Current pain: the upstream installer uses `curl | bash`, which was blocked for safety. Without `scripts/bin/harness-cli`, the repo cannot record durable intakes, traces, or matrix rows in `harness.db`.

Suggested improvement: download a tagged release asset, verify its `.sha256`, install it at `scripts/bin/harness-cli`, then run `init` and `import brownfield`.

Risk: normal.

Status: implemented.

Update 2026-07-01: `scripts/bin/harness-cli 0.1.10` is installed, `harness.db` was initialized, and `import brownfield` imported 7 stories plus 9 decisions.

### HB-002 Reconcile README, GEMINI, Package Manager, And Expo Stack

Discovered while: brownfield orientation.

Current pain: README, GEMINI, `package.json`, and lockfiles describe different stack assumptions.

Suggested improvement: create a maintenance story to choose the canonical package manager and update setup commands.

Risk: normal.

Status: proposed.

Update 2026-07-01: recorded in durable backlog as `Backlog #1`.

### HB-003 Add A Navigation Smoke Proof

Discovered while: mapping implemented screens to product stories.

Current pain: Explore/Detail code exists, but the active navigator path is unclear from the scaffold.

Suggested improvement: add a smoke/integration proof that the app boots to the intended Film Recipe navigation path.

Risk: normal.

Status: proposed.

Update 2026-07-01: recorded in durable backlog as `Backlog #2`.

### HB-004 Restore Validation Baseline

Discovered while: initial Harness migration validation.

Current pain: `npm run compile` fails with 37 TypeScript errors, and Jest fails 7 of 9 suites after Watchman is disabled. Product stories cannot honestly move to `implemented` while the baseline is red.

Suggested improvement: create a maintenance story to fix module aliases, stale scaffold imports, TanStack Query v5 typing, FlashList prop drift, MMKV mocks, React Native Jest mocks, and duplicated/stale i18n tests.

Risk: normal.

Status: proposed.

Update 2026-07-01: recorded in durable backlog as `Backlog #3`.

Update 2026-07-01: implemented in durable backlog. `npm run compile`, `npm test -- --runInBand --watchman=false --forceExit`, `bundle exec pod install --project-directory=ios`, and XcodeBuildMCP `build_sim` now pass. Remaining lint debt is tracked separately.

### HB-006 Separate Lint Debt Cleanup

Discovered while: restoring validation baseline on 2026-07-01.

Current pain: `npm run lint:check` still reports 572 problems after compile, Jest, Pods, and iOS simulator build were restored. Most failures are legacy Prettier/style/no-restricted-imports drift and copied scaffold files.

Suggested improvement: create a dedicated lint cleanup slice that decides whether to format broadly, remove or archive copied scaffold files, and update lint rules before enabling lint as a required baseline.

Risk: normal.

Status: proposed.

Update 2026-07-01: recorded in durable backlog as `Backlog #4`.

### HB-005 Align Local Node Version

Discovered while: running `npm test`.

Current pain: `.tool-versions` pins Node 22.11.0, but the local asdf install only has 22.19.0, 24.8.0, and 26.2.0. `package.json` allows `>=22.11.0`, so the pin is stricter than the project engine.

Suggested improvement: either install Node 22.11.0 or update `.tool-versions` to the agreed project Node version.

Risk: tiny.

Status: implemented.

Update 2026-07-01: implemented by user. `.tool-versions` now selects Node 26.2.0, and `node --version` returns `v26.2.0`.
