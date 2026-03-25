import React from 'react';
import { render } from '@testing-library/react-native';
import { MasonryGrid } from '../../../src/components/grid/MasonryGrid';

const mockData = [
  { id: '1', title: 'A', filmStock: 'K', images: [''], settings: {}, cameraCompatibility: [], tags: [], isPremium: false },
  { id: '2', title: 'B', filmStock: 'I', images: [''], settings: {}, cameraCompatibility: [], tags: [], isPremium: false },
];

describe('MasonryGrid', () => {
  it('renders items correctly', () => {
    const { getByText } = render(
      <MasonryGrid 
        data={mockData} 
        onPressRecipe={() => {}} 
      />
    );
    expect(getByText('A')).toBeTruthy();
    expect(getByText('B')).toBeTruthy();
  });
});
