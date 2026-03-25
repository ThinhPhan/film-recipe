# Tasks: Explore Grid and Recipe Detail Screens

**Input**: Design documents from `/specs/004-explore-detail-screens/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

**Tests**: Unit and integration tests are included as per the project implementation plan.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [x] T001 Install dependencies: `@shopify/flash-list`, `react-native-reanimated-carousel`, `react-native-reanimated`, `react-native-fast-image`, `react-native-mmkv`
- [x] T002 Configure `react-native-reanimated` Babel plugin in `babel.config.js`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

- [x] T003 Update `Recipe` interface in `src/types/index.ts` to include `images`, `settings`, `cameraCompatibility`, and `tags`
- [x] T004 Define `UserRecipeNote` type in `src/types/index.ts`
- [x] T005 [P] Implement `useRecipeNotesStore` in `src/store/useRecipeNotesStore.ts` (Zustand + MMKV)
- [x] T006 [P] Implement Explore API fetcher in `src/features/explore/api.ts`
- [x] T007 [P] Implement Recipe Detail API fetcher in `src/features/recipe/api.ts`
- [x] T008 Implement `useExploreRecipes` query hook in `src/features/explore/hooks.ts`
- [x] T009 Implement `useRecipeDetail` query hook in `src/features/recipe/hooks.ts`

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - Discover Recipes via Explore Grid (Priority: P1) 🎯 MVP

**Goal**: Visual recipe discovery with masonry/standard grid and infinite scroll.

**Independent Test**: Navigate to Explore tab, see masonry grid, toggle layout, scroll to load more.

### Tests for User Story 1

- [x] T010 [P] [US1] Add unit tests for `MasonryGrid` in `tests/unit/explore/MasonryGrid.test.tsx`
- [x] T011 [US1] Add integration test for discovery flow in `tests/integration/discovery-flow/Explore.test.tsx`

### Implementation for User Story 1

- [x] T012 [P] [US1] Create `MasonryGrid` component in `src/components/grid/MasonryGrid.tsx` (using MasonryFlashList)
- [x] T013 [P] [US1] Create `ExploreCard` component in `src/components/common/Card.tsx` (with overlay text)
- [x] T014 [US1] Implement `ExploreScreen` in `src/screens/ExploreScreen.tsx` with layout toggle
- [x] T015 [US1] Configure navigation to `ExploreScreen` in `src/app/navigation/TabNavigator.tsx`

**Checkpoint**: At this point, User Story 1 should be fully functional and testable independently

---

## Phase 4: User Story 2 - View Recipe Details (Priority: P1)

**Goal**: Detailed recipe view with image carousel and local notes.

**Independent Test**: Tap card from Explore, see detail screen, swipe carousel, save a local note.

### Tests for User Story 2

- [x] T016 [P] [US2] Add unit tests for `ImageCarousel` in `tests/unit/recipe/ImageCarousel.test.tsx`
- [x] T017 [US2] Add integration test for detail view flow in `tests/integration/discovery-flow/Detail.test.tsx`

### Implementation for User Story 2

- [x] T018 [P] [US2] Create `ImageCarousel` component in `src/components/recipe/ImageCarousel.tsx` (using react-native-reanimated-carousel)
- [x] T019 [P] [US2] Create `SettingsList` component in `src/components/recipe/SettingsList.tsx` (dynamic key-value pairs)
- [x] T020 [US2] Implement `RecipeDetailScreen` in `src/screens/RecipeDetailScreen.tsx`
- [x] T021 [US2] Implement local notes input with 5,000 char limit in `src/screens/RecipeDetailScreen.tsx`
- [x] T022 [US2] Configure stack navigation from `Explore` to `RecipeDetail` in `src/app/navigation/RootNavigator.tsx`

**Checkpoint**: At this point, User Stories 1 AND 2 should both work independently

---

## Phase 5: User Story 3 - Access Restricted Content (Priority: P2)

**Goal**: Gating premium content with paywall and badges.

**Independent Test**: Attempt to open premium recipe as non-subscriber, see paywall.

### Tests for User Story 3

- [x] T023 [P] [US3] Add unit tests for gating logic in `tests/unit/recipe/Gating.test.tsx`

### Implementation for User Story 3

- [x] T024 [US3] Add "Locked" badge to `ExploreCard` in `src/components/common/Card.tsx`
- [x] T025 [US3] Implement `PaywallOverlay` component in `src/components/recipe/PaywallOverlay.tsx`
- [x] T026 [US3] Integrate `PaywallOverlay` into `RecipeDetailScreen.tsx` for gated recipes

**Checkpoint**: All user stories should now be independently functional

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories

- [x] T027 [P] Optimize image priority for carousel vs grid in `src/components/recipe/ImageCarousel.tsx`
- [x] T028 [P] Add haptic feedback for favorite toggle and layout switch
- [x] T029 Code cleanup and final performance profiling for 60fps target
- [x] T030 Run `quickstart.md` validation and final UI walkthrough

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies.
- **Foundational (Phase 2)**: Depends on T001 and T002. BLOCKS all user stories.
- **User Stories (Phase 3+)**: All depend on Phase 2 completion.
  - US1 and US2 can proceed in parallel once foundation is ready.
  - US3 depends on US1/US2 screens being present.
- **Polish (Final Phase)**: Depends on all user stories being complete.

### User Story Dependencies

- **User Story 1 (P1)**: Core discovery. No dependencies on other stories.
- **User Story 2 (P1)**: Core detail view. Depends on data fetching from US1 context but can be developed in parallel.
- **User Story 3 (P2)**: Extends US1/US2 with gating logic.

### Parallel Opportunities

- T005, T006, T007 in Foundational phase.
- T010, T012, T013 in US1 phase.
- T016, T018, T019 in US2 phase.
- Different user stories (US1, US2) can be worked on in parallel once Phase 2 is complete.

---

## Implementation Strategy

### MVP First (User Stories 1 & 2 Only)

1. Complete Phase 1 & 2.
2. Complete Phase 3 (Explore Grid).
3. Complete Phase 4 (Recipe Detail).
4. **STOP and VALIDATE**: Verify end-to-end discovery flow works.

### Incremental Delivery

1. Foundation ready.
2. Add Explore Grid (US1).
3. Add Recipe Detail (US2).
4. Add Gating (US3).
5. Polish.
