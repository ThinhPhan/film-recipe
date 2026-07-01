# Discovery And Recipe Detail Contract

## Explore Discovery

Users should be able to browse recipe cards visually, open a recipe detail, and continue loading additional recipes when more data exists.

Accepted behavior:

- Explore cards show recipe image and title overlay.
- Premium recipes show a locked indicator for non-premium users.
- The Explore screen can request more recipes as the list approaches the end.
- The layout toggle is part of the accepted contract, but current implementation needs verification because the selected layout is not passed into `MasonryGrid`.

## Recipe Detail

Users should be able to inspect a recipe before shooting.

Accepted behavior:

- Detail includes image carousel.
- Detail includes dynamic settings list.
- Detail includes camera compatibility.
- Detail includes tags.
- Detail includes a local notes field with a 5,000 character limit.
- Notes persist locally only and are not synced.

## Favorites

Favorites are accepted MVP behavior from the original spec, but no current favorites list implementation was found during migration.

Future work should define whether favorites are:

- The same local-only model as notes.
- A separate persisted collection.
- Integrated with a future account model.

## Data Contract

Recipe seed data currently includes:

- `id`
- `title`
- `filmStock`
- `images`
- `settings`
- `cameraCompatibility`
- `tags`
- `isPremium`

Changes to this shape must update `src/types/index.ts`, seed data, components, tests, and this contract.

