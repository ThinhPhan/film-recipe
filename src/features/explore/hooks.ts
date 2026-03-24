import { useInfiniteQuery } from '@tanstack/react-query';
import { fetchExploreRecipes } from './api';

export const useExploreRecipes = (pageSize: number = 10) => {
  return useInfiniteQuery({
    queryKey: ['explore-recipes'],
    queryFn: ({ pageParam = 1 }) => fetchExploreRecipes(pageParam, pageSize),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length === pageSize ? allPages.length + 1 : undefined;
    },
  });
};
