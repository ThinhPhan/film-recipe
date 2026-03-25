import { Recipe } from '../../types';
import recipesData from '../../assets/data/recipes.json';

export const fetchRecipeDetail = async (id: string): Promise<Recipe | null> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const recipe = recipesData.find((r) => r.id === id);
      resolve((recipe as Recipe) || null);
    }, 300);
  });
};
