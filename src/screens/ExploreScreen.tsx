import React, { useState, useLayoutEffect } from 'react';
import { View, StyleSheet, ActivityIndicator, Text, TouchableOpacity } from 'react-native';
import { MasonryGrid } from '../components/grid/MasonryGrid';
import { useExploreRecipes } from '../features/explore/hooks';
import { usePremiumStore } from '../store/usePremiumStore';

export const ExploreScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [layout, setLayout] = useState<'masonry' | 'standard'>('masonry');
  const { data, isLoading, isError, fetchNextPage, hasNextPage, isFetchingNextPage, refetch } = useExploreRecipes(20);
  const { isPremium } = usePremiumStore();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity 
          onPress={() => setLayout(l => l === 'masonry' ? 'standard' : 'masonry')}
          style={styles.toggleButton}
        >
          <Text style={styles.toggleText}>{layout === 'masonry' ? 'Grid' : 'Masonry'}</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation, layout]);

  const handlePressRecipe = (id: string) => {
    navigation.navigate('RecipeDetail', { id });
  };

  const flattenedData = data?.pages.flat() || [];

  if (isLoading && flattenedData.length === 0) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (isError) {
    return (
      <View style={styles.center}>
        <Text>Error loading exploration recipes</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <MasonryGrid
        data={flattenedData}
        onPressRecipe={handlePressRecipe}
        onEndReached={() => hasNextPage && fetchNextPage()}
        onRefresh={refetch}
        refreshing={isLoading}
        isPremiumUser={isPremium}
      />
      {isFetchingNextPage && (
        <View style={styles.footerLoader}>
          <ActivityIndicator size="small" />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: 6,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  toggleButton: {
    marginRight: 15,
    padding: 5,
  },
  toggleText: {
    fontWeight: 'bold',
    color: '#333',
  },
  footerLoader: {
    paddingVertical: 20,
  }
});
