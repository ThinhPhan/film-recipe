# Research: Film Recipe Mobile App

## Decision: Storage Engine
- **Choice**: `react-native-mmkv`
- **Rationale**: MMKV is significantly faster than AsyncStorage as it is a key-value storage written in C++ and uses JSI (JavaScript Interface). It integrates perfectly with Zustand for persisting state.
- **Alternatives Considered**: 
    - **AsyncStorage**: Rejected due to slower performance and being asynchronous by default, which can lead to layout flashes or state sync issues during hydration.
    - **SQLite**: Rejected as it is overkill for simple favorites storage and pre-populated JSON data for the MVP.

## Decision: State Management & Data Fetching
- **Choice**: Zustand + TanStack Query
- **Rationale**: Zustand is lightweight and excellent for local app state (like Favorites and User Preferences). TanStack Query is the industry standard for managing server/external data states, caching, and loading/error states. Even with local JSON, TanStack Query provides a robust abstraction for data access that allows for future API integration.
- **Alternatives Considered**: 
    - **Redux Toolkit**: Rejected as it is too boilerplate-heavy for this scope.
    - **Context API**: Rejected due to potential performance issues with frequent updates in large component trees.

## Decision: Testing Strategy
- **Choice**: Jest + React Native Testing Library + Mock Service Worker (MSW) or TanStack Query Mocks.
- **Rationale**: This stack allows for integration-level testing of components with their data-fetching logic. MSW can intercept internal data requests if we model the JSON seed as a fetch call, or we can use the TanStack Query `QueryClient` provider with mocked data.
- **Testing Tasks**:
    - Mocking `react-native-mmkv` (using provided mock from the library).
    - Wrapping components in a `QueryClientProvider` for tests.

## Decision: Search Logic
- **Choice**: Array filtering with case-insensitive includes for loose matching.
- **Rationale**: For ~500 records, a simple `.filter()` on the static JSON array is extremely fast (well under 100ms) and avoids the overhead of a heavy search library like Fuse.js.
- **Implementation**: 
    ```typescript
    const searchResults = recipes.filter(r => 
        r.name.toLowerCase().includes(query) || 
        r.filmStock.toLowerCase().includes(query) ||
        r.tags.some(t => t.toLowerCase().includes(query))
    );
    ```

## Decision: Image Loading
- **Choice**: `react-native-fast-image`
- **Rationale**: Provides better caching, priority levels, and performance than the default React Native `Image` component. Essential for the infinite scroll experience with thumbnails.
- **Strategy**: Use `Priority.normal` for list thumbnails and `Priority.high` for detail view images.
