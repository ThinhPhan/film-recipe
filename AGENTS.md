# Agent Instructions

This is a brownfield Expo/React Native app for Film Recipe. It was initialized with Specify artifacts under `specs/`, then implementation continued in app code. Treat `specs/` as historical intake material, not the living operating plan.

## Before Work

Read these first:

- `README.md`
- `docs/HARNESS.md`
- `docs/FEATURE_INTAKE.md`
- `docs/ARCHITECTURE.md`
- `docs/CONTEXT_RULES.md`
- `docs/TOOL_REGISTRY.md`
- `docs/TEST_MATRIX.md`
- Relevant `docs/product/*`
- Relevant `docs/stories/*`

If `scripts/bin/harness-cli` exists, run:

```bash
scripts/bin/harness-cli query matrix
```

If the CLI is absent, use `docs/TEST_MATRIX.md` as the current matrix and mention the CLI gap in the final response or trace.

## Local Project Notes

- Primary app surface: Expo/React Native mobile app, with web export support.
- Current implementation uses static recipe JSON in `src/assets/data/recipes.json`.
- Local state currently uses Zustand plus MMKV, with in-memory fallback for tests.
- Do not trust the old Specify task checkboxes until code and tests are inspected.
- `src/navigators/AppNavigator.tsx` appears to be the active scaffold navigator, while `src/navigators/TabNavigator.tsx` contains the Film Recipe tab/discovery flow. Verify routing before changing screen behavior.
- `README.md`, `package.json`, `GEMINI.md`, and `specs/*` disagree on parts of the stack. Prefer `package.json` and current source code when describing the runnable app.

## Validation

Prefer the smallest proof that exercises the affected story:

```bash
npm run compile
npm test -- --runInBand
npm run lint:check
```

`npm run lint` fixes files; use `npm run lint:check` for verification unless the user asks for formatting fixes.

