import { Recipe } from '../../types';
import recipesData from '../../assets/data/recipes.json';

const recipes = recipesData as unknown as Recipe[];

export const fetchExploreRecipes = async (page: number, pageSize: number): Promise<Recipe[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const start = (page - 1) * pageSize;
      const end = start + pageSize;
      resolve(recipes.slice(start, end));
    }, 500);
  });
};
