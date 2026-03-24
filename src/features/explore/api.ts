import { Recipe } from '../../types';
import recipesData from '../../assets/data/recipes.json';

export const fetchExploreRecipes = async (page: number, pageSize: number): Promise<Recipe[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const start = (page - 1) * pageSize;
      const end = start + pageSize;
      resolve(recipesData.slice(start, end) as Recipe[]);
    }, 500);
  });
};
