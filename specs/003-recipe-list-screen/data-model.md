# Data Model: Recipe List Screen

## Entities

### RecipeCard (UI Entity)
Represents a recipe displayed in the list.
- `id`: string (UUID)
- `title`: string
- `filmStockName`: string
- `thumbnailUrl`: string
- `isPremium`: boolean

### FilterCriteria
The state of currently applied filters.
- `filmStockIds`: string[]
- `isoRange`: { min: number, max: number } | null
- `lighting`: string[] (e.g., ["Golden Hour", "Interior"])

### SortOption
Enum for sorting orders.
- `Newest` (default)
- `Oldest`
- `NameAZ`
- `NameZA`
- `Popularity`

## Relationships
- **Recipe 1 : 1 RecipeCard**: A recipe is mapped to a single list card UI entity.
- **RecipeListStore 1 : 1 FilterCriteria**: The global list store holds one set of filter criteria.

## Validation Rules
- `isoRange.min` must be <= `isoRange.max`.
- `thumbnailUrl` must be a valid URI.
