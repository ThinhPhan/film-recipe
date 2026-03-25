# Research: Explore Grid and Recipe Detail Screens

## Decision: Masonry Grid Component
- **Choice**: `@shopify/flash-list` (specifically `MasonryFlashList`)
- **Rationale**: `FlashList` is the current industry standard for high-performance lists in React Native. It recycler components and minimizes memory usage, ensuring 60fps scrolling even with complex images. It includes a `MasonryFlashList` for the required discovery layout.
- **Alternatives Considered**: 
    - `react-native-masonry-list`: Rejected due to being older and less performant for large datasets.
    - `FlatList` with custom logic: Rejected for being overly complex to implement masonry layout manually.

## Decision: Image Carousel for Detail View
- **Choice**: `react-native-reanimated-carousel`
- **Rationale**: Highly customizable, performance-optimized, and built on `react-native-reanimated`. It easily supports swipe gestures and circular behavior.
- **Alternatives Considered**: 
    - `react-native-snap-carousel`: Rejected as it is no longer maintained and has performance issues with Reanimated 2+.
    - Custom `ScrollView` implementation: Rejected to save time on gesture handling and edge case management.

## Decision: Local Notes Persistence
- **Choice**: `react-native-mmkv`
- **Rationale**: Extremely fast and synchronous key-value storage. Perfect for storing user-specific notes associated with recipe IDs.
- **Implementation Strategy**: A Zustand store `useRecipeNotesStore` will persist data to MMKV using the `persist` middleware.

## Decision: Premium Gating UI
- **Choice**: Overlay on the detail screen + "Locked" badge on the grid.
- **Rationale**: As specified in the clarifications, we will show full visual access in the grid but gate the detail view. The `RecipeDetail` component will check `isPremium` and `hasSubscription` before rendering full details.
