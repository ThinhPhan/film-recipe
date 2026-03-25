# Tasks: Recipe List Screen Implementation

**Input**: Design documents from `/specs/003-recipe-list-screen/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/list.md

**Tests**: Unit and integration tests are included as per the project constitution and implementation plan.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [x] T001 Install dependencies `@shopify/flash-list` and `react-native-fast-image`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

- [x] T002 Define `Recipe`, `FilterCriteria`, and `SortOption` types in `src/types/index.ts`
- [ ] T003 [P] Implement `useRecipeListStore` in `src/features/recipes/store.ts` (Zustand)
- [ ] T004 [P] Implement static data fetcher `fetchRecipes` in `src/features/recipes/api.ts`
- [ ] T005 Implement `useRecipes` query hook in `src/features/recipes/hooks.ts` (TanStack Query)

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - Browse Recipe List (Priority: P1) 🎯 MVP

**Goal**: Browse recipes in a vertical list and navigate to details.

**Independent Test**: Launch app, see list, scroll, tap recipe to navigate.

### Tests for User Story 1

- [ ] T006 [P] [US1] Add unit tests for `RecipeCard` in `tests/unit/recipe/RecipeCard.test.tsx`
- [ ] T007 [US1] Add integration test for browse flow in `tests/integration/home-flow/Browse.test.tsx`

### Implementation for User Story 1

- [ ] T008 [P] [US1] Create `RecipeCard` component in `src/components/recipe/RecipeCard.tsx`
- [ ] T009 [P] [US1] Create `RecipeList` component in `src/components/recipe/RecipeList.tsx` (using FlashList)
- [ ] T010 [US1] Implement `HomeScreen` in `src/screens/HomeScreen.tsx` to display list
- [ ] T011 [US1] Configure navigation from card tap to `RecipeDetail` in `src/app/navigation/TabNavigator.tsx`

**Checkpoint**: At this point, User Story 1 should be fully functional and testable independently

---

## Phase 4: User Story 2 - Filter and Sort Recipes (Priority: P2)

**Goal**: Allow users to refine the recipe list via modal and menu.

**Independent Test**: Open filter/sort UI, apply changes, verify list updates.

### Tests for User Story 2

- [ ] T012 [P] [US2] Add unit tests for filtering and sorting logic in `tests/unit/recipe/ListLogic.test.tsx`

### Implementation for User Story 2

- [ ] T013 [P] [US2] Implement `FilterModal` component in `src/components/recipe/FilterModal.tsx`
- [ ] T014 [P] [US2] Implement `SortMenu` component in `src/components/recipe/SortMenu.tsx`
- [ ] T015 [US2] Add Filter and Sort action buttons to `HomeScreen` header in `src/screens/HomeScreen.tsx`
- [ ] T016 [US2] Update `useRecipes` to respond to filter/sort state changes in `src/features/recipes/hooks.ts`

**Checkpoint**: At this point, User Stories 1 AND 2 should both work independently

---

## Phase 5: User Story 3 - Handle Loading and Error States (Priority: P3)

**Goal**: Provide feedback during data fetch and handle failures.

**Independent Test**: Mock slow/failed fetch and verify skeleton/error UI.

### Tests for User Story 3

- [ ] T017 [P] [US3] Add unit tests for state UI transitions in `tests/unit/recipe/StateUI.test.tsx`

### Implementation for User Story 3

- [ ] T018 [P] [US3] Create `RecipeSkeleton` component in `src/components/recipe/RecipeSkeleton.tsx`
- [ ] T019 [P] [US3] Create `EmptyState` component in `src/components/common/EmptyState.tsx`
- [ ] T020 [P] [US3] Create `ErrorState` component in `src/components/common/ErrorState.tsx`
- [ ] T021 [US3] Integrate loading, error, and empty states into `RecipeList.tsx`
- [ ] T022 [US3] Implement infinite scroll loading/error footer in `RecipeList.tsx` (Edge Case: Network drop during scroll)
- [ ] T023 [US3] Implement retry logic in `ErrorState.tsx` and scroll footer

**Checkpoint**: All user stories should now be independently functional

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories

- [ ] T024 [P] Optimize image priority and caching in `src/components/recipe/RecipeCard.tsx`
- [ ] T025 [P] Verify SC-003: Measure navigation delay to `RecipeDetail` (target < 200ms)
- [ ] T026 Run `quickstart.md` validation and final UI walkthrough

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies.
- **Foundational (Phase 2)**: Depends on T001. BLOCKS all user stories.
- **User Stories (Phase 3+)**: All depend on Phase 2 completion.
  - US1, US2, and US3 are largely independent and can proceed in parallel once foundation is ready.
- **Polish (Final Phase)**: Depends on all user stories being complete.

### User Story Dependencies

- **User Story 1 (P1)**: Core browse functionality. No dependencies on other stories.
- **User Story 2 (P2)**: Extends US1 with filtering. Depends on US1 list structure but can be developed in parallel.
- **User Story 3 (P3)**: Adds states to US1. Depends on US1 list structure but can be developed in parallel.

### Parallel Opportunities

- T003 and T004 in Foundational phase.
- T006, T008, T009 in US1 phase.
- T012, T013, T014 in US2 phase.
- T017, T018, T019, T020 in US3 phase.
- Different user stories can be worked on in parallel once Phase 2 is complete.

---

## Parallel Example: User Story 1

```bash
# Implement UI components for US1 in parallel:
Task: "Create RecipeCard component in src/components/recipe/RecipeCard.tsx"
Task: "Create RecipeList component in src/components/recipe/RecipeList.tsx"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational (CRITICAL)
3. Complete Phase 3: User Story 1
4. **STOP and VALIDATE**: Verify core browsing and navigation works.

### Incremental Delivery

1. Foundation ready.
2. Add User Story 1 (MVP).
3. Add User Story 2 (Filters).
4. Add User Story 3 (States).
5. Polish.
