# API Contracts: Film Recipe Mobile App

## Overview
As this is an MVP using local static data, "API" calls are simulated via TanStack Query fetching from bundled JSON assets.

## Data Fetching (TanStack Query Hooks)

### Recipes API
- **`useRecipes(filters?: RecipeFilters)`**
    - `GET /recipes` (simulated)
    - Response: `Recipe[]`
    - Caching: 24h (staleTime: infinity)

- **`useRecipe(id: string)`**
    - `GET /recipes/:id` (simulated)
    - Response: `Recipe`

### Film Stocks API
- **`useFilmStocks()`**
    - `GET /film-stocks` (simulated)
    - Response: `FilmStock[]`

## State Management (Zustand Stores)

### Favorite Store (`useFavoriteStore`)
- **State**:
    - `favoriteIds: string[]`
- **Actions**:
    - `addFavorite(id: string): void`
    - `removeFavorite(id: string): void`
    - `isFavorite(id: string): boolean`
- **Persistence**: MMKV Middleware

### Auth Store (`useAuthStore`)
- **State**:
    - `userId: string | null` (Guest ID)
- **Actions**:
    - `createGuestSession(): void`
- **Persistence**: MMKV Middleware

## Schemas (Zod)
- `RecipeSchema`: Matches `Recipe` entity from `data-model.md`.
- `FilmStockSchema`: Matches `FilmStock` entity from `data-model.md`.
- `RecipeFiltersSchema`:
    ```typescript
    {
      query?: string;
      filmStockId?: string;
      tags?: string[];
    }
    ```
