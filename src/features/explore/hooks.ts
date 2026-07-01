import { InfiniteData, useInfiniteQuery } from '@tanstack/react-query';
import { fetchExploreRecipes } from './api';
import { Recipe } from '../../types';

export const useExploreRecipes = (pageSize: number = 10) => {
  return useInfiniteQuery<Recipe[], Error, InfiniteData<Recipe[]>, string[], number>({
    queryKey: ['explore-recipes'],
    initialPageParam: 1,
    queryFn: ({ pageParam }) => fetchExploreRecipes(pageParam, pageSize),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length === pageSize ? allPages.length + 1 : undefined;
    },
  });
};
