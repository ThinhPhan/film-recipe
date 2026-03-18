# Data Model: Film Recipe Mobile App

## Entities

### FilmStock
Represents a physical film product.
- `id`: string (UUID)
- `brand`: string (e.g., "Kodak", "Fujifilm")
- `name`: string (e.g., "Portra 400", "ACROS 100")
- `iso`: number
- `type`: "Color" | "B&W"
- `format`: "35mm" | "120" | "Large Format"
- `description`: string
- `sampleImage`: string (URI)

### Recipe
A specific photography style configuration.
- `id`: string (UUID)
- `name`: string
- `filmStockId`: string (FK -> FilmStock)
- `description`: string
- `exposureSettings`: object
    - `exposureCompensation`: string
    - `whiteBalance`: string
    - `dynamicRange`: string
- `tags`: string[]
- `images`: string[] (URIs)
- `createdAt`: ISO8601 string

### Favorite
Join entity for user-saved recipes (stored locally).
- `id`: string (UUID)
- `recipeId`: string (FK -> Recipe)
- `savedAt`: ISO8601 string

## Relationships
- **FilmStock 1:N Recipe**: One film stock can have multiple recipes created for it.
- **Recipe 1:N Favorite**: One recipe can be favorited by multiple users (modeled locally as a simple list of saved recipe IDs).

## Validation Rules
- `iso` must be a positive integer from a standard list (e.g., 25-3200).
- `Recipe.name` must be non-empty and less than 50 characters.
- `Recipe.tags` should be limited to 10 per recipe.
