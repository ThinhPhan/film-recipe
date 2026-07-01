# Harness

The app is what users touch. The harness is what agents touch.

Film Recipe now uses a repository-level harness to make future agent work easier to inspect:

```text
human intent
  -> feature intake
  -> product contract or story packet
  -> implementation
  -> validation proof
  -> harness update
```

Every task has two possible outputs:

1. Product delta: app code, tests, data, UI, or product contract.
2. Harness delta: updated stories, matrix rows, decisions, validation notes, or backlog items.

## Source Hierarchy

```text
User prompt or accepted product direction
  -> docs/product/*
  -> docs/stories/*
  -> docs/TEST_MATRIX.md
  -> docs/decisions/*
  -> implementation and executable proof
```

`specs/` is historical input from Specify. Use it to understand original intent, but do not keep extending it as the living plan.

## Durable Layer

The upstream Harness uses a Rust CLI at `scripts/bin/harness-cli` and a local `harness.db`.

This migration initially installed the markdown harness manually because executing a freshly downloaded `curl | bash` installer was blocked for safety. The verified `scripts/bin/harness-cli` binary is now installed, and the durable database was initialized and imported on 2026-07-01.

Use the CLI as the operational surface:

```bash
scripts/bin/harness-cli init
scripts/bin/harness-cli import brownfield
scripts/bin/harness-cli query matrix
```

## Task Loop

For every task:

1. Classify the request with `docs/FEATURE_INTAKE.md`.
2. Locate affected product docs and story packets.
3. Check `docs/TEST_MATRIX.md` or `scripts/bin/harness-cli query matrix`.
4. Work inside the selected lane: tiny, normal, or high-risk.
5. Run the expected proof for the touched story.
6. Update product docs, story status, matrix evidence, decisions, or backlog when truth changes.
7. In the final response, say what changed, what was verified, and what remains unverified.

## Done Definition

A task is done only when:

- The requested change is completed or the blocker is documented.
- Relevant product docs, stories, and matrix rows are current.
- Validation commands were run when available, or the reason they were not run is recorded.
- Any harness friction is fixed or added to `docs/HARNESS_BACKLOG.md`.
