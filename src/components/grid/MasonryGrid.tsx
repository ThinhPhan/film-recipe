import React from 'react';
import { MasonryFlashList } from '@shopify/flash-list';
import { ExploreCard } from '../common/Card';
import { Recipe } from '../../types';

interface MasonryGridProps {
  data: Recipe[];
  onPressRecipe: (id: string) => void;
  onEndReached?: () => void;
  onRefresh?: () => void;
  refreshing?: boolean;
  isPremiumUser?: boolean;
}

export const MasonryGrid: React.FC<MasonryGridProps> = ({ 
  data, 
  onPressRecipe,
  onEndReached,
  onRefresh,
  refreshing,
  isPremiumUser
}) => {
  return (
    <MasonryFlashList
      data={data}
      keyExtractor={(item) => item.id}
      numColumns={2}
      renderItem={({ item }) => (
        <ExploreCard 
          recipe={item} 
          onPress={onPressRecipe} 
          isPremiumLocked={item.isPremium && !isPremiumUser}
        />
      )}
      onEndReached={onEndReached}
      onEndReachedThreshold={0.5}
      onRefresh={onRefresh}
      refreshing={refreshing}
      estimatedItemSize={200}
    />
  );
};
