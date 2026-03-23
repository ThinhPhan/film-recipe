# Feature Specification: Recipe List Screen Implementation

**Feature Branch**: `003-recipe-list-screen`  
**Created**: 2026-03-18  
**Status**: Draft  
**Input**: User description: "Implement Home screen (HomeScreen.tsx) to browse all recipes via a vertical list (RecipeList.tsx). UI Elements: Header (title + actions), Filter button, Sort menu. Interactions: Tap recipe → RecipeDetail, Tap filter → FilterModal, Tap sort → SortMenu. States: Loading, Empty, Error."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Browse Recipe List (Priority: P1)

As a user, I want to see a vertical list of all available recipes so that I can browse through different film looks.

**Why this priority**: Core functionality of the Home screen.

**Independent Test**: Launch the app and verify the Home screen loads a list of recipe cards with key details (Name, Film Stock, Sample Image).

**Acceptance Scenarios**:

1. **Given** the app is launched, **When** the Home screen loads, **Then** a vertical list of recipes is displayed with a header containing the title.
2. **Given** the list is displayed, **When** I scroll down, **Then** more recipes are loaded (infinite scroll) or the list scrolls smoothly.
3. **Given** a recipe card, **When** I tap it, **Then** the app navigates to the `RecipeDetail` screen for that item.

---

### User Story 2 - Filter and Sort Recipes (Priority: P2)

As a user, I want to filter and sort the recipe list so that I can find specific styles or the newest additions.

**Why this priority**: Enhances discovery and usability of the list.

**Independent Test**: Open the Filter modal, select a criterion, apply, and verify the list updates. Open the Sort menu, select "Oldest First", and verify the order changes.

**Acceptance Scenarios**:

1. **Given** the Home screen, **When** I tap the "Filter" button in the header, **Then** a modal opens displaying filter options (e.g., ISO, Lighting, Film Type).
2. **Given** the Home screen, **When** I tap the "Sort" button in the header, **Then** a menu opens with sort options (e.g., Newest, Name, Popularity).
3. **Given** a filter or sort is applied, **When** the list refreshes, **Then** the results match the selected criteria.

---

### User Story 3 - Handle Loading and Error States (Priority: P3)

As a user, I want to see clear feedback when the list is loading, empty, or fails to load so that I understand the app's status.

**Why this priority**: Essential for a polished user experience and handling edge cases.

**Independent Test**: Simulate a network error and verify the Error state appears with a retry button. Simulate an empty database and verify the Empty state message.

**Acceptance Scenarios**:

1. **Given** the list is fetching data, **When** the screen first loads, **Then** a skeleton loader or spinner is displayed.
2. **Given** the fetch fails, **When** the error occurs, **Then** an error message is shown with a "Retry" button.
3. **Given** there are no recipes to display, **When** the list loads, **Then** a friendly "No recipes found" message is shown.

### Edge Cases

- **Network drops during scroll**: How does the infinite scroll handle a mid-list load failure? (Should show a retry footer).
- **No results after filter**: What happens if a filter combination yields no matches? (Show specific empty state: "No recipes match your filters").

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: System MUST display a vertical list of recipes on the Home screen.
- **FR-002**: System MUST include a Header with a title and action buttons for Filter and Sort.
- **FR-003**: System MUST navigate to `RecipeDetail` screen upon tapping a recipe card.
- **FR-004**: System MUST display a Filter modal with options for Film Stock, ISO, and Lighting.
- **FR-005**: System MUST display a Sort menu with options for "Newest", "Oldest", "Name", and "Popularity".
- **FR-006**: System MUST show a skeleton loading state while data is being fetched.
- **FR-007**: System MUST show an Empty state illustration/message when the list is empty.
- **FR-008**: System MUST show an Error state with a "Retry" action when data fetch fails.

### Key Entities *(include if feature involves data)*

- **Recipe**: Displayed item (ID, Title, Thumbnail URL, Film Stock Name).
- **FilterCriteria**: Object containing selected filter values.
- **SortOption**: Enumeration of available sort orders.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Recipe list renders initial items in under 1.5 seconds on standard 4G.
- **SC-002**: Scroll performance maintains 60fps on supported devices.
- **SC-003**: Navigating to `RecipeDetail` occurs with < 200ms delay after tap.
- **SC-004**: Filter and Sort actions update the list view within 1 second of application.
