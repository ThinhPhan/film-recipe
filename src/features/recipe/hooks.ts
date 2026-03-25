import { useQuery } from '@tanstack/react-query';
import { fetchRecipeDetail } from './api';

export const useRecipeDetail = (id: string) => {
  return useQuery({
    queryKey: ['recipe-detail', id],
    queryFn: () => fetchRecipeDetail(id),
    enabled: !!id,
  });
};
