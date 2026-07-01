# Film Recipe Product Overview

## Product Goal

Film Recipe helps photographers discover analog-inspired camera recipes, inspect the settings behind each look, and keep personal shooting notes.

## Current Brownfield State

Implemented or partially implemented:

- Static recipe seed in `src/assets/data/recipes.json`.
- Explore grid screen backed by paged static data.
- Recipe detail screen with images, settings, compatibility, tags, and local notes.
- Local premium flag and paywall overlay for locked recipes.
- Unit and integration tests for parts of discovery/detail behavior.

Not yet implemented or not proven:

- App boot path into the Film Recipe tab navigator.
- Home recipe list with filter/sort states.
- Favorites list.
- Film stock database.
- Real account system, IAP purchase, restore purchase, or backend receipt validation.
- Platform smoke proof on iOS or Android.

## Source Material

Original Specify specs:

- `specs/001-film-recipe-mobile-app/spec.md`
- `specs/002-premium-subscription/spec.md`
- `specs/003-recipe-list-screen/spec.md`
- `specs/004-explore-detail-screens/spec.md`

Use those specs for intent, but update this product contract and story packets for ongoing work.

