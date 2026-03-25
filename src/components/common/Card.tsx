import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import FastImage from 'react-native-fast-image';
import { Recipe } from '../../types';

interface ExploreCardProps {
  recipe: Recipe;
  onPress: (id: string) => void;
  isPremiumLocked?: boolean;
}

export const ExploreCard: React.FC<ExploreCardProps> = ({ recipe, onPress, isPremiumLocked }) => {
  const imageUrl = recipe.images?.[0] || '';

  return (
    <TouchableOpacity 
      style={styles.container} 
      onPress={() => onPress(recipe.id)}
      activeOpacity={0.9}
    >
      <FastImage
        style={styles.image}
        source={{ uri: imageUrl }}
        resizeMode={FastImage.resizeMode.cover}
      />
      <View style={styles.overlay}>
        <Text style={styles.title} numberOfLines={2}>{recipe.title}</Text>
        {isPremiumLocked && (
          <View style={styles.lockBadge}>
            <Text style={styles.lockIcon}>🔒</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#eee',
    marginBottom: 12,
    marginHorizontal: 6,
  },
  image: {
    width: '100%',
    aspectRatio: 0.75, // Standard vertical aspect ratio
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'flex-end',
    padding: 12,
  },
  title: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0,0,0,0.5)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  lockBadge: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'rgba(0,0,0,0.6)',
    borderRadius: 12,
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lockIcon: {
    fontSize: 12,
  },
});
