# US-002 Recipe Detail And Local Notes

## Status

in_progress

## Lane

normal

## Product Contract

Users can open a recipe detail screen, inspect images/settings/compatibility/tags, and keep local notes up to 5,000 characters.

## Relevant Product Docs

- `docs/product/overview.md`
- `docs/product/discovery.md`

## Acceptance Criteria

- Given a recipe id, detail loads the matching recipe.
- Given detail renders, the image carousel, settings list, compatibility, and tags are visible.
- Given a user edits notes, the note is limited to 5,000 characters.
- Given the note field loses focus, the note is saved locally for that recipe id.

## Design Notes

- UI surface: `src/screens/RecipeDetailScreen.tsx`.
- Carousel: `src/components/recipe/ImageCarousel.tsx`.
- Settings: `src/components/recipe/SettingsList.tsx`.
- Notes store: `src/store/useRecipeNotesStore.ts`.
- Current gap: the original spec mentions a favorite icon on detail, but no favorite toggle was found during migration.

## Validation

| Layer | Expected proof |
| --- | --- |
| Unit | `npm test -- tests/unit/recipe/ImageCarousel.test.tsx --runInBand` |
| Integration | `npm test -- tests/integration/discovery-flow/Detail.test.tsx --runInBand` |
| E2E | Future navigation smoke proof through the active app navigator |
| Platform | Future simulator proof for keyboard and carousel gestures |

## Evidence

2026-07-01: `tests/unit/recipe/ImageCarousel.test.tsx` passed during the full Jest run. `tests/integration/discovery-flow/Detail.test.tsx` failed on React Native `ActivityIndicator` mock setup. See `docs/validation/2026-07-01-harness-migration.md`.

2026-07-01 restored baseline: `npm run compile` passed; `npm test -- --runInBand --watchman=false --forceExit` passed 9 suites / 16 tests; XcodeBuildMCP `build_sim` passed for iPhone 17. Favorite toggle from the original spec and runtime detail smoke remain unproven.
