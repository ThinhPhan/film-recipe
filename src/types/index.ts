export interface Recipe {
  id: string;
  title: string;
  filmStock: string;
  images: string[];
  settings: Record<string, string>;
  cameraCompatibility: string[];
  tags: string[];
  isPremium: boolean;
  thumbnailUrl?: string; // For backward compatibility if needed
  filmStockName?: string; // For backward compatibility if needed
}

export interface UserRecipeNote {
  recipeId: string;
  content: string;
  updatedAt: number;
}

export interface FilterCriteria {
  filmStockIds: string[];
  isoRange: { min: number; max: number } | null;
  lighting: string[];
}

export enum SortOption {
  Newest = 'Newest',
  Oldest = 'Oldest',
  NameAZ = 'NameAZ',
  NameZA = 'NameZA',
  Popularity = 'Popularity',
}
