# Context Rules

Context rules help agents decide what to read and when to stop reading.

## Intake Phase

| Source | Tiny | Normal | High-Risk |
| --- | --- | --- | --- |
| `AGENTS.md` | must | must | must |
| `docs/FEATURE_INTAKE.md` | must | must | must |
| `docs/TEST_MATRIX.md` | must | must | must |
| `README.md` | should | must | must |
| `docs/HARNESS.md` | should | must | must |
| `docs/ARCHITECTURE.md` | skip | should | must |
| Relevant `docs/product/*` | skip if unrelated | must | must |
| Relevant `docs/stories/*` | skip if unrelated | must if present | must |
| Relevant `docs/decisions/*` | skip | should | must |

## Implementation Phase

Read only the files that directly affect the selected story, plus adjacent files that establish local patterns.

## Validation Phase

Read:

- Story acceptance criteria.
- `docs/TEST_MATRIX.md`.
- Relevant package scripts.
- The output of commands actually run.

## Retrieval Triggers

| Trigger | Action |
| --- | --- |
| Task touches premium access, auth, purchases, restore, or backend entitlements | Treat as high-risk and read relevant stories plus decisions. |
| Task touches routing or navigator shape | Read `src/navigators/*`, target screens, and tests before editing. |
| Task changes recipe data shape | Read `src/types/index.ts`, `src/assets/data/recipes.json`, feature APIs, and affected UI components. |
| Task changes validation expectations | Update `docs/TEST_MATRIX.md` and affected story packet. |
| Task exposes repeated confusion or stale docs | Update docs directly or add an item to `docs/HARNESS_BACKLOG.md`. |

## Final Response Checklist

Before final response:

- Re-read changed-file list.
- Re-read validation evidence.
- Mention any commands not run.
- Mention harness gaps that remain.

