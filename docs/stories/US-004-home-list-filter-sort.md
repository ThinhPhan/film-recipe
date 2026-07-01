# US-004 Home List, Filter, And Sort

## Status

planned

## Lane

normal

## Product Contract

Users can browse a vertical recipe list on Home, filter by recipe attributes, sort results, and see loading/empty/error states.

## Relevant Product Docs

- `docs/product/overview.md`
- `docs/product/discovery.md`

## Acceptance Criteria

- Given the app launches to Home, a vertical recipe list is displayed.
- Given the user opens filters, available filter options are displayed.
- Given the user applies a filter, the list updates to matching recipes.
- Given the user changes sort, the list order updates.
- Given loading, empty, or error states occur, the user sees clear feedback.

## Design Notes

- Original source: `specs/003-recipe-list-screen/spec.md`.
- Current observed state: `src/screens/HomeScreen.tsx` is a placeholder.

## Validation

| Layer | Expected proof |
| --- | --- |
| Unit | List, filter, and sort behavior tests |
| Integration | Home screen state tests |
| E2E | App launch to Home and recipe navigation |
| Platform | Mobile scroll/performance smoke when implemented |

