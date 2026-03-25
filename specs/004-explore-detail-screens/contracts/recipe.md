# Recipe Detail API Contracts

## Hooks

### `useRecipeDetail(id: string)`
Fetches the full details of a specific recipe.
- **Response**: `Recipe`
- **Error**: Not Found, Network error

### `useRecipeNote(recipeId: string)`
Fetches the local note associated with a recipe.
- **Response**: `UserRecipeNote | null`

## Actions

### `updateRecipeNote(recipeId: string, content: string)`
Updates or creates a local note for a recipe.
- **Input**: `recipeId`, `content`
- **Validation**: MUST check for 5,000 character limit.

## UI Components Props

### `ImageCarousel`
- `images`: string[]
- `onImagePress`: (index: number) => void

### `RecipeSettingsList`
- `settings`: Record<string, string>

### `NoteInput`
- `value`: string
- `onChange`: (text: string) => void
- `maxLength`: 5,000
