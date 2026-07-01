# US-007 Harness Migration

## Status

implemented

## Lane

normal

## Product Contract

The repository exposes enough product, architecture, story, validation, and decision context for future agents to continue work without relying on chat history or stale Specify docs.

## Relevant Product Docs

- `docs/HARNESS.md`
- `docs/FEATURE_INTAKE.md`
- `docs/ARCHITECTURE.md`
- `docs/TEST_MATRIX.md`
- `docs/product/overview.md`

## Acceptance Criteria

- `AGENTS.md` tells agents where to start.
- `docs/product/*` captures current living product contract.
- `docs/stories/*` decomposes existing and planned work.
- `docs/TEST_MATRIX.md` maps stories to proof and gaps.
- `docs/decisions/*` records brownfield harness decisions.
- Remaining harness gaps are visible in `docs/HARNESS_BACKLOG.md` and `scripts/bin/harness-cli query backlog --open`.

## Validation

| Layer | Expected proof |
| --- | --- |
| Unit | Not applicable |
| Integration | `scripts/bin/harness-cli init`, `scripts/bin/harness-cli import brownfield`, `scripts/bin/harness-cli query matrix`, `scripts/bin/harness-cli query stats`, `scripts/bin/harness-cli tool check` |
| E2E | Not applicable |
| Platform | Not applicable |

## Evidence

Manual migration created the markdown harness. The CLI durable layer is now active: `scripts/bin/harness-cli 0.1.10` is installed, `harness.db` was initialized, and `import brownfield` imported 7 stories plus 9 decisions.

Validation baseline was attempted and recorded in `docs/validation/2026-07-01-harness-migration.md`.

2026-07-01 follow-up: the blocked validation baseline was restored and recorded in Harness Intake #3. Compile, Jest, CocoaPods, and XcodeBuildMCP simulator build now pass; runtime navigation smoke and lint cleanup remain backlog items.
