# US-005 Favorites And Film Stock Database

## Status

planned

## Lane

normal

## Product Contract

Users can save favorite recipes locally and browse film stock metadata such as brand, ISO, type, and format.

## Relevant Product Docs

- `docs/product/overview.md`
- `docs/product/discovery.md`

## Acceptance Criteria

- Given a user saves a recipe, it appears in Favorites.
- Given a user removes a favorite, it disappears from Favorites.
- Given the user opens the film stock database, film stocks can be browsed and filtered.
- Given the user selects a film stock, details such as ISO, brand, type, format, and examples are shown.

## Design Notes

- Original source: `specs/001-film-recipe-mobile-app/spec.md`.
- Current observed state: no implemented Favorites screen or film stock database surface found.

## Validation

| Layer | Expected proof |
| --- | --- |
| Unit | Favorites store and film-stock filtering tests |
| Integration | Favorites screen and film-stock screen tests |
| E2E | Save/remove favorite visible across navigation |
| Platform | Local persistence smoke on simulator/device |

