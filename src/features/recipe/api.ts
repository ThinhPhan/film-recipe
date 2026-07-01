import { Recipe } from '../../types';
import recipesData from '../../assets/data/recipes.json';

const recipes = recipesData as unknown as Recipe[];

export const fetchRecipeDetail = async (id: string): Promise<Recipe | null> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const recipe = recipes.find((r) => r.id === id);
      resolve(recipe || null);
    }, 300);
  });
};
