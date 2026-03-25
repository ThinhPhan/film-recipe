# Contracts: Recipe List Screen

## Interface Contracts (UI Hooks)

### `useRecipes(params: { page: number, pageSize: number, filters: FilterCriteria, sort: SortOption })`
Fetches a paginated list of recipes for the Home screen.
- **Response**: `Recipe[]`
- **Error**: Network or Parse error

### `useRecipeListStore()`
Zustand store for global list state.
- **State**:
    - `query`: string
    - `filters`: FilterCriteria
    - `sortOrder`: SortOption
- **Actions**:
    - `setQuery(query: string): void`
    - `setFilters(filters: FilterCriteria): void`
    - `setSortOrder(sort: SortOption): void`

## UI Components Props

### `RecipeList`
- `data`: `Recipe[]`
- `onEndReached`: () => void (Infinite Scroll)
- `onRefresh`: () => void (Pull to Refresh)

### `RecipeCard`
- `recipe`: `Recipe`
- `onPress`: (recipeId: string) => void

### `FilterModal`
- `isOpen`: boolean
- `initialFilters`: FilterCriteria
- `onApply`: (filters: FilterCriteria) => void
- `onClose`: () => void
