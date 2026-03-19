# Implementation Plan: Explore Grid and Recipe Detail Screens

**Branch**: `004-explore-detail-screens` | **Date**: 2026-03-18 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `/specs/004-explore-detail-screens/spec.md`

## Summary

Implement a visually-driven Explore Grid and a comprehensive Recipe Detail screen. The Explore Grid will provide discovery through a masonry or standard grid layout (toggleable) with infinite scroll. The Recipe Detail screen will offer full recipe settings, an interactive image carousel, and a local-only notes feature. Access to premium recipes will be strictly gated based on subscription status.

## Technical Context

**Language/Version**: TypeScript (Latest)
**Primary Dependencies**: React Native, React Navigation, Zustand, TanStack Query, react-native-fast-image, `@shopify/flash-list` (for high-performance grid), `react-native-reanimated`
**Storage**: `react-native-mmkv` (for persisting local notes)
**Testing**: Jest + React Native Testing Library
**Target Platform**: iOS, Android
**Project Type**: mobile-app
**Performance Goals**: 60fps scrolling performance, < 1s initial grid render, < 200ms detail navigation
**Constraints**: 5,000 character limit for notes, local-only storage for notes, premium gating enforced

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- [x] **GATE: SPEC_VALIDATED**: Is the `spec.md` ratified with prioritized user stories and measurable success criteria?
- [x] **GATE: PLAN_RATIFIED**: Is this `plan.md` complete with tech stack, data models, and structure before task generation?
- [x] **GATE: STORY_INDEPENDENCE**: Are implementation phases organized by user story? Is each story independently testable?
- [x] **GATE: TASKS_ORDERED**: Will `tasks.md` have IDs, story labels, file paths, and dependency ordering?
- [x] **GATE: ANALYZE_PASSED**: Is a `/speckit.analyze` run planned before implementation begins?

## Project Structure

### Documentation (this feature)

```text
specs/004-explore-detail-screens/
├── plan.md              # This file
├── research.md          # Phase 0 output
├── data-model.md        # Phase 1 output
├── quickstart.md        # Phase 1 output
├── contracts/           # Phase 1 output (explore.md, recipe.md)
└── tasks.md             # Phase 2 output
```

### Source Code (repository root)

```text
src/
├── app/
│   └── navigation/
│       ├── RootNavigator.tsx
│       └── TabNavigator.tsx
├── screens/
│   ├── ExploreScreen.tsx
│   └── RecipeDetailScreen.tsx
├── components/
│   ├── common/
│   │   ├── Button.tsx
│   │   └── Card.tsx
│   ├── recipe/
│   │   ├── ImageCarousel.tsx
│   │   └── SettingsList.tsx
│   └── grid/
│       └── MasonryGrid.tsx
├── features/
│   ├── explore/
│   │   ├── api.ts
│   │   └── hooks.ts
│   └── recipe/
│       ├── api.ts
│       └── hooks.ts
├── store/
│   └── useRecipeNotesStore.ts
├── types/
│   └── index.ts
└── utils/
    └── format.ts

tests/
├── unit/
│   ├── explore/
│   └── recipe/
└── integration/
    └── discovery-flow/
```

**Structure Decision**: The feature is integrated into the existing React Native mobile application structure. Screen-specific logic is placed in `features/` (API and hooks), and reusable UI components are organized by domain in `components/`. Local notes are managed via a dedicated Zustand store.


## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| None      | N/A        | N/A                                 |
