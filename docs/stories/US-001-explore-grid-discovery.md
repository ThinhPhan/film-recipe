# US-001 Explore Grid Discovery

## Status

in_progress

## Lane

normal

## Product Contract

Users can browse a visual grid of recipe cards, see recipe names and locked badges, auto-load more recipes, and open recipe detail from a card.

## Relevant Product Docs

- `docs/product/overview.md`
- `docs/product/discovery.md`
- `docs/product/premium-access.md`

## Acceptance Criteria

- Given the Explore screen loads, recipe cards are visible with image/title presentation.
- Given a premium recipe is shown to a non-premium user, a locked indicator is visible.
- Given more recipe data exists, scrolling near the end requests the next page.
- Given the user taps a recipe card, the app navigates to `RecipeDetail`.
- Given the user toggles layout, the grid presentation changes between masonry and standard grid.

## Design Notes

- UI surface: `src/screens/ExploreScreen.tsx`.
- Grid component: `src/components/grid/MasonryGrid.tsx`.
- Card component: `src/components/common/Card.tsx`.
- Data source: `src/features/explore/api.ts`, `src/assets/data/recipes.json`.
- Current gap: `ExploreScreen` stores a `layout` state, but `MasonryGrid` currently renders a fixed two-column `FlashList`.

## Validation

| Layer | Expected proof |
| --- | --- |
| Unit | `npm test -- tests/unit/explore/MasonryGrid.test.tsx --runInBand` |
| Integration | `npm test -- tests/integration/discovery-flow/Explore.test.tsx --runInBand` |
| E2E | Future navigation smoke proof through the active app navigator |
| Platform | Future iOS/Android smoke if layout or list performance changes |

## Evidence

2026-07-01: `ASDF_NODEJS_VERSION=22.19.0 npm test -- --runInBand --watchman=false` failed for this story. `MasonryGrid` unit and Explore integration tests both hit React Native Jest mock errors. See `docs/validation/2026-07-01-harness-migration.md`.

2026-07-01 restored baseline: `npm run compile` passed; `npm test -- --runInBand --watchman=false --forceExit` passed 9 suites / 16 tests; XcodeBuildMCP `build_sim` passed for iPhone 17. Layout toggle and runtime navigation smoke remain unproven.
