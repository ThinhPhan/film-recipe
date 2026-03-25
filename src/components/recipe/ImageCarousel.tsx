import React from 'react';
import { View, Dimensions, StyleSheet } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import FastImage from 'react-native-fast-image';

const { width } = Dimensions.get('window');

interface ImageCarouselProps {
  images: string[];
}

export const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  return (
    <View style={styles.container} testID="image-carousel">
      <Carousel
        loop
        width={width}
        height={width * 1.2}
        autoPlay={false}
        data={images}
        scrollAnimationDuration={1000}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <FastImage
              style={styles.image}
              source={{ 
                uri: item,
                priority: FastImage.priority.high,
                cache: FastImage.cacheControl.immutable,
              }}
              resizeMode={FastImage.resizeMode.cover}
            />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
