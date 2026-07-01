# Architecture

## Current App Shape

Film Recipe is an Expo/React Native mobile app with TypeScript.

Observed runtime stack:

- Expo SDK and React Native from `package.json`.
- React Navigation for stack/tab routing.
- Zustand for local state.
- TanStack Query for async recipe loading.
- MMKV for local persistence, with in-memory fallback in tests.
- Static JSON recipe seed at `src/assets/data/recipes.json`.
- Jest plus React Native Testing Library for unit and integration tests.

## Product Domains

| Domain | Current files | Notes |
| --- | --- | --- |
| Recipe discovery | `src/screens/ExploreScreen.tsx`, `src/components/grid/MasonryGrid.tsx`, `src/features/explore/*` | Static paged data, grid card discovery. |
| Recipe detail | `src/screens/RecipeDetailScreen.tsx`, `src/components/recipe/*`, `src/features/recipe/*` | Carousel, settings, compatibility, tags, local notes. |
| Premium access | `src/store/usePremiumStore.ts`, `src/components/recipe/PaywallOverlay.tsx` | Local boolean only; no real purchase or backend entitlement yet. |
| Local notes | `src/store/useRecipeNotesStore.ts` | Local-only notes keyed by recipe id. |
| App navigation | `src/navigators/*` | Brownfield gap: scaffold navigator and Film Recipe tab navigator are not fully reconciled. |

## Boundary Rules

- Unknown external data must be parsed or typed before it enters UI state.
- Static recipe JSON is currently trusted seed data, but changes to recipe shape must update `src/types/index.ts`, tests, and product docs.
- Premium access is a product contract but not a security boundary until real store receipts and backend validation exist.
- Do not add real payment, account, or entitlement behavior without a high-risk story and decision record.

## Validation Ladder

```text
quick: npm run compile
unit: npm test -- tests/unit/... --runInBand
integration: npm test -- tests/integration/... --runInBand
platform: npm run ios / npm run android / EAS local build when required
release: full test, lint:check, and platform smoke
```

Only claim a layer passes after running the command in this repo.

## Known Brownfield Gaps

- `README.md` says React Native CLI/npm, while `package.json` is Expo-oriented and `bun.lock` exists.
- `GEMINI.md` references dependencies that are not present in `package.json`.
- `src/navigators/TabNavigator.tsx` imports `../../screens/*`, which does not match the current file location.
- `HomeScreen` is a placeholder, so the recipe-list feature from `specs/003` is not implemented.
- Explore layout toggle changes header text, but the grid component does not currently receive or apply the selected layout.

