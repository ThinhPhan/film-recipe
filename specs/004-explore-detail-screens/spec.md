# Feature Specification: Explore Grid and Recipe Detail Screens

**Feature Branch**: `004-explore-detail-screens`  
**Created**: 2026-03-18  
**Status**: Draft  
**Input**: User description: "Breakdown for 2 screeens, screens/recipe-detail.md Purpose: View full recipe Sections: Image carousel (samples) Recipe settings list Camera compatibility Tags Notes input Interactions: Tap favorite icon Scroll Edge Cases: Locked (premium) screens/explore-grid.md Purpose: Discover recipes visually UI Elements: Masonry/grid layout Image cards with overlay text Interactions: Tap card → RecipeDetail"

## Clarifications

### Session 2026-03-18
- Q: What is the preferred loading pattern for the Explore Grid discovery? → A: Infinite Scroll (Auto-load as user scrolls)
- Q: Should there be a character limit for the local recipe notes? → A: Hard Character Limit (5,000 characters)
- Q: How should premium content be visually treated in the Explore Grid for non-subscribers? → A: Standard Card with Lock Badge (Full visual access)
- Q: Should the Explore Grid layout be fixed or toggleable between styles? → A: Toggleable (Allow user to switch between Masonry and Standard Grid)
- Q: What is the primary interaction for the Recipe Detail image carousel? → A: Swipe Gesture (Standard mobile gallery pattern)

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Discover Recipes via Explore Grid (Priority: P1)

As a photographer, I want to browse a visually rich grid of recipes so that I can quickly find a look that inspires me.

**Why this priority**: Essential for the discovery experience and visual appeal of the app.

**Independent Test**: Navigate to the Explore screen and verify that a masonry or grid layout of images is displayed correctly.

**Acceptance Scenarios**:

1. **Given** I am on the Explore screen, **When** the page loads, **Then** I see a grid of recipe images with overlay text (recipe name).
2. **Given** I have scrolled to the bottom of the Explore screen, **When** more content is available, **Then** new recipes are automatically loaded and appended to the grid.
3. **Given** the explore grid, **When** I tap on an image card, **Then** I am navigated to the Recipe Detail screen for that specific recipe.

---

### User Story 2 - View Recipe Details (Priority: P1)

As a photographer, I want to view the full details of a recipe so that I can apply the settings to my camera.

**Why this priority**: Core utility of the application; provides the "how-to" for the users.

**Independent Test**: Open a recipe from the explore grid and verify all settings (Exposure, WB, DR) and sample images are visible.

**Acceptance Scenarios**:

1. **Given** I am viewing a Recipe Detail screen, **When** I scroll, **Then** I can see the image carousel, settings list, camera compatibility, and tags.
2. **Given** a recipe detail view, **When** I tap the favorite icon, **Then** the recipe is added/removed from my favorites list.

---

### User Story 3 - Access Restricted Content (Priority: P2)

As a premium subscriber, I want to access locked recipes so that I can use exclusive photographic styles.

**Why this priority**: Direct link to the premium subscription value proposition.

**Independent Test**: Attempt to open a locked recipe as a guest and verify a paywall appears; then verify access as a premium user.

**Acceptance Scenarios**:

1. **Given** a recipe is marked as "Premium", **When** a non-subscribed user taps it, **Then** a "Locked" or "Upgrade" screen is displayed.
2. **Given** a premium user, **When** they tap a "Premium" recipe, **Then** the full detail view is shown without interruption.

### Edge Cases

- **Empty Image Carousel**: How does the detail view look if a recipe has no sample images? (Should show a high-quality placeholder image).
- **Long Notes**: How does the "Notes" section handle extremely long text input? (Should be expandable or scrollable within its section).
- **Network Failure**: What happens if the high-res images in the carousel fail to load? (Show error placeholder with a reload option).

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: System MUST provide a masonry or grid-based "Explore" layout for visual recipe discovery using an Infinite Scroll loading pattern. The user MUST be able to toggle between a Masonry and Standard Grid view.
- **FR-002**: Explore cards MUST display the recipe image with an overlay containing the recipe name.
- **FR-003**: System MUST provide a "Recipe Detail" screen containing: Image Carousel (supporting Swipe Gestures), Settings List, Camera Compatibility, Tags, and a Notes input field.
- **FR-004**: System MUST allow users to toggle the "Favorite" status of a recipe from the detail view.
- **FR-005**: Recipe settings list MUST support a dynamic set of attributes (key-value pairs) defined by the recipe data (e.g., Exposure, WB, Grain, Sharpness).
- **FR-006**: Notes input MUST persist only on the local device and will not be synced or shared. The system MUST enforce a 5,000-character limit per note.
- **FR-007**: System MUST enforce access control for "Premium" recipes, redirecting non-subscribers to a paywall. Premium content in the Explore Grid MUST be clearly identified with a Lock Badge or similar visual indicator.

### Key Entities *(include if feature involves data)*

- **Recipe**: Data object containing all settings, images, and metadata.
- **User Preference (Notes)**: Locally stored text associated with a specific Recipe ID.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Explore grid renders 20+ items in under 1 second on a standard 4G connection.
- **SC-002**: Image carousel in Recipe Detail allows smooth swiping at 60fps.
- **SC-003**: Users report that the layout is "visually appealing" and "easy to read" in UX testing (80%+ positive feedback).
- **SC-004**: 100% of "Premium" content is correctly gated according to the user's subscription status.
