# Explore Grid API Contracts

## Hooks

### `useExploreRecipes(params: { page: number, pageSize: number, layout: 'masonry' | 'standard' })`
Fetches a paginated list of recipes for the explore grid.
- **Response**: `Recipe[]`
- **Error**: Network or Parse error

## UI Components Props

### `ExploreGrid`
- `layout`: 'masonry' | 'standard'
- `data`: `Recipe[]`
- `onEndReached`: () => void
- `onRefresh`: () => void

### `ExploreCard`
- `recipe`: `Recipe`
- `onPress`: (recipeId: string) => void
- `isPremiumLocked`: boolean
