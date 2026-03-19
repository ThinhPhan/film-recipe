# Data Model: Explore Grid and Recipe Detail Screens

## Entities

### Recipe (Extended from Core)
Represents a film recipe.
- `id`: string (UUID)
- `title`: string
- `filmStock`: string
- `images`: string[] (Sample image URIs)
- `settings`: Record<string, string> (Dynamic settings list)
- `cameraCompatibility`: string[]
- `tags`: string[]
- `isPremium`: boolean

### UserRecipeNote
Locally stored notes for a recipe.
- `recipeId`: string (FK -> Recipe)
- `content`: string (Max 5,000 characters)
- `updatedAt`: number (Timestamp)

## Relationships
- **Recipe (1) : (0..1) UserRecipeNote**: Each recipe can have at most one local note on the device.

## Validation Rules
- `UserRecipeNote.content` MUST NOT exceed 5,000 characters.
- `Recipe.images` MUST contain at least one image URI or a placeholder will be shown.
