# 0001 Brownfield Harness Adoption

Date: 2026-07-01

## Status

Accepted

## Context

The repo had Specify-generated artifacts under `specs/`, current React Native/Expo code under `src/`, and no Harness operating surface. The user wanted the repo migrated to the `hoangnb24/repository-harness` style used in other projects.

## Decision

Adopt Harness as the living agent-facing surface:

- Keep `specs/` as historical intake material.
- Add `AGENTS.md`, `docs/product/*`, `docs/stories/*`, `docs/TEST_MATRIX.md`, and decision records.
- Do not overwrite the app `README.md` with the upstream Harness README.
- Track the missing `scripts/bin/harness-cli` as a backlog item until a verified binary can be installed safely.

## Alternatives Considered

1. Run the upstream `curl | bash` installer. Rejected for this session because direct execution of a freshly downloaded public script was blocked for safety.
2. Replace existing docs wholesale. Rejected because this is a brownfield app and the app README remains useful.

## Consequences

Positive:

- Future agents have a clear reading order and story/matrix surface.
- Product truth moves away from stale monolithic specs.

Tradeoffs:

- Durable CLI records are not available until `scripts/bin/harness-cli` is installed.
- The initial matrix is markdown-backed and must be imported later.

## Follow-Up

- Install a verified Harness CLI release binary.
- Run `scripts/bin/harness-cli init` and `scripts/bin/harness-cli import brownfield`.

