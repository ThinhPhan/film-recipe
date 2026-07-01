# Test Matrix

This file maps product behavior to proof.

Status values:

| Status | Meaning |
| --- | --- |
| planned | Accepted behavior, not implemented |
| in_progress | Implementation exists or is underway, but proof is incomplete |
| implemented | Implementation and proof both exist |
| changed | Contract changed after earlier implementation |
| retired | No longer part of product contract |

## Matrix

| Story | Contract | Unit | Integration | E2E | Platform | Status | Evidence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| US-001 | Visual Explore grid discovery with cards, infinite loading, and layout toggle | yes | yes | no | yes | in_progress | 2026-07-01 validation restored: `npm run compile` passed; `npm test -- --runInBand --watchman=false --forceExit` passed 9 suites / 16 tests; `bundle exec pod install --project-directory=ios` succeeded; XcodeBuildMCP `build_sim` succeeded for iPhone 17. Layout toggle and runtime navigation smoke remain unproven. |
| US-002 | Recipe detail with carousel, settings, compatibility, tags, and local notes | yes | yes | no | yes | in_progress | 2026-07-01 validation restored: compile/Jest/iOS simulator build passed. Favorite toggle from the original spec and runtime detail smoke remain unproven. |
| US-003 | Premium recipe identification and guest paywall gating | yes | yes | no | yes | in_progress | 2026-07-01 validation restored: compile/Jest/iOS simulator build passed, including premium gating coverage. Real entitlement/IAP validation remains out of scope. |
| US-004 | Home recipe list with filter, sort, loading, empty, and error states | no | no | no | no | planned | `src/screens/HomeScreen.tsx` is a placeholder. |
| US-005 | Favorites list and film stock database from the original MVP spec | no | no | no | no | planned | Present in `specs/001-film-recipe-mobile-app/spec.md`; no current app surface found. |
| US-006 | Real premium subscription purchase, restore, account sync, and backend receipt validation | no | no | no | no | planned | Present in `specs/002-premium-subscription/spec.md`; no IAP/backend dependencies currently installed. |
| US-007 | Harness migration and brownfield operating docs | no | yes | no | no | implemented | `scripts/bin/harness-cli 0.1.10` installed; `init`, `import brownfield`, `query matrix`, `query stats`, and `tool check` succeeded. Validation report: `docs/validation/2026-07-01-harness-migration.md`. |

## Evidence Rules

- Unit proof covers pure components, stores, hooks, or domain rules.
- Integration proof covers screen-level behavior, data loading, persistence, or provider boundaries.
- E2E proof covers user-visible flows across navigation.
- Platform proof covers simulator/device/build behavior that unit or integration tests cannot prove.
- A story can be implemented without every proof column if the story packet explains why.
