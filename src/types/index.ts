export interface Recipe {
  id: string;
  title: string;
  filmStockName: string;
  thumbnailUrl: string;
  isPremium: boolean;
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
