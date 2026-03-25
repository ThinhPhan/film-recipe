# Research: Recipe List Screen Implementation

## Decision: List Implementation
- **Choice**: `@shopify/flash-list`
- **Rationale**: FlashList is significantly more performant than React Native's standard `FlatList` because it recycles components instead of creating new ones as you scroll. This is critical for maintaining 60fps on both iOS and Android with complex recipe cards.
- **Alternatives Considered**: 
    - `FlatList`: Rejected for performance reasons with large datasets.
    - `ScrollView` with manual mapping: Rejected as it doesn't recycle views.

## Decision: Data Fetching & Caching
- **Choice**: TanStack Query (React Query)
- **Rationale**: Provides robust mechanisms for handling loading/error states, pagination (infinite scroll), and caching. This abstracts the complexity of manual state management for list data.
- **Implementation Strategy**: Model the local JSON fetch as an asynchronous `queryFn`.

## Decision: Image Performance
- **Choice**: `react-native-fast-image`
- **Rationale**: The default `Image` component in React Native lacks advanced features like aggressive caching and priority-based loading. `FastImage` ensures that recipe thumbnails load smoothly without layout shift.
- **Strategy**: Use `Priority.normal` for list thumbnails.

## Decision: Filter/Sort State Management
- **Choice**: Zustand
- **Rationale**: Simple, lightweight state management for the current filter/sort criteria that need to be shared between the header actions and the list query.
- **Implementation Strategy**: A single store `useRecipeListStore` containing `{ query, filters, sortOrder }`.
