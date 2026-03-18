# Feature Specification: Film Recipe Mobile App

**Feature Branch**: `001-film-recipe-mobile-app`  
**Created**: 2026-03-17  
**Status**: Draft  
**Input**: User description: "Build a mobile application that allows film photographers to discover, save, and share shooting \"recipes\" for analog film photography..."

## Clarifications

### Session 2026-03-17
- Q: For the MVP, which authentication method should be prioritized to enable the favorites functionality? → A: Guest Session (locally stored, no cloud sync)
- Q: For the Phase 1 MVP, how should the initial recipe and film database be populated and maintained? → A: Pre-populated JSON/Static Seed
- Q: For the MVP, what is the expected scale of high-resolution images versus optimized thumbnails for the recipe browsing experience? → A: Thumbnails for lists, full-res for detail
- Q: Should search results for recipes be matched strictly or loosely? → A: Loose match (any term)
- Q: For the MVP, should the primary navigation be a bottom tab bar or a sidebar (drawer)? → A: Single Page (Infinite scroll/Header search)

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Discover Film Recipes (Priority: P1)

As a film photographer, I want to browse and search for film recipes so that I can find a specific "look" for my next shoot.

**Why this priority**: Core value proposition. Without discovery, the app provides no utility for finding new styles.

**Independent Test**: Can be tested by searching for a recipe by film stock or tag and verifying the results match the criteria.

**Acceptance Scenarios**:

1. **Given** the user is on the Explore screen, **When** they search for "Kodak Portra 400", **Then** a list of recipes using that film stock is displayed.
2. **Given** the user is on the Explore screen, **When** they filter by "Golden Hour" lighting, **Then** only recipes tagged with that lighting condition are shown.

---

### User Story 2 - Save Favorite Recipes (Priority: P2)

As a hobbyist photographer, I want to save recipes to my favorites list so that I can quickly access them when I'm out shooting.

**Why this priority**: Personalization and utility. Allows users to build a personal library of styles.

**Independent Test**: Can be tested by tapping "Save" on a recipe detail view and verifying it appears in the "Saved" or "Favorites" list.

**Acceptance Scenarios**:

1. **Given** the user is viewing a recipe's details, **When** they tap the "Save" button, **Then** the recipe is added to their personal favorites list.
2. **Given** the user is viewing their favorites list, **When** they remove a recipe, **Then** it no longer appears in the list.

---

### User Story 3 - Browse Film Stock Database (Priority: P3)

As a beginner photographer, I want to browse a database of film stocks to understand their characteristics like ISO and type (color/B&W).

**Why this priority**: Educational value and foundational data for the recipe system.

**Independent Test**: Can be tested by navigating to the film database and filtering by "Black & White" to see only B&W film stocks.

**Acceptance Scenarios**:

1. **Given** the user is in the Film Database, **When** they filter by "120" format, **Then** only medium format film stocks are displayed.
2. **Given** the user selects a specific film stock, **When** they view its details, **Then** they see its ISO, brand, and sample images.

### Edge Cases

- **No Search Results**: How does the system handle a search or filter combination that returns no recipes? (Should show a friendly "No results found" message with suggestions).
- **Offline Access**: What happens when a user tries to view a saved recipe without an internet connection? (Ideally, favorites should be cached locally).
- **Incomplete Metadata**: How are recipes with missing sample images or specific settings displayed?

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: System MUST allow users to search recipes by film name, camera model, or tags using loose matching logic (any term matches).
- **FR-002**: System MUST allow users to filter the recipe list by lighting condition, ISO range, and style.
- **FR-003**: System MUST provide a detailed view for each recipe including exposure settings, notes, and sample images.
- [ ] FR-004: System MUST allow guest users to save recipes to a local favorites list (no cloud sync required for MVP).
- **FR-005**: System MUST provide a database of film stocks with attributes for brand, ISO, type, and format.
- **FR-006**: System MUST use static JSON seeds to populate the initial film and recipe database (Admin UI deferred).
- **FR-007**: System MUST employ a single-page navigation model featuring infinite scroll and header-based search/filtering.

### Key Entities *(include if feature involves data)*

- **User**: Represents a photographer using the app (ID, email, username).
- **Film Stock**: Represents a specific type of analog film (Brand, Name, ISO, Type, Format).
- **Recipe**: A specific combination of film, camera, and settings to achieve a look (Name, Film ID, Camera ID, Settings, Tags, Images).
- **Favorite**: A join entity linking a User to their saved Recipes.

## Non-Functional Requirements *(optional)*

### Performance & Scalability
- **NFR-001**: App MUST load the initial home screen in under 2 seconds (on standard 4G connections).
- **NFR-002**: System MUST serve optimized thumbnails for browsing lists, with high-resolution images reserved for recipe detail views.
- **NFR-003**: System MUST support a CDN for image delivery to ensure global low latency.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Users can find and view a specific recipe detail in under 3 taps from the home screen.
- **SC-002**: 90% of users successfully complete saving a recipe to favorites on their first attempt.
- **SC-003**: Search results for common film stocks (e.g., "Portra") are displayed in under 1 second.
- **SC-004**: System supports a database of at least 500 unique film recipes without performance degradation.
- **SC-005**: Users report a high satisfaction rate with "Discovery" accuracy (measured via in-app feedback).
