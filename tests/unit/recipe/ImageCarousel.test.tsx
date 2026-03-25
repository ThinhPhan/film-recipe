import React from 'react';
import { render } from '@testing-library/react-native';
import { ImageCarousel } from '../../../src/components/recipe/ImageCarousel';

describe('ImageCarousel', () => {
  it('renders images', () => {
    const images = ['https://test.com/1.jpg', 'https://test.com/2.jpg'];
    const { getByTestId } = render(<ImageCarousel images={images} />);
    // The container has testID="image-carousel", the mock has testID="carousel-container"
    expect(getByTestId('image-carousel')).toBeTruthy();
  });
});
