import React from 'react';
import { render, waitFor } from '@testing-library/react-native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { NavigationContainer } from '@react-navigation/native';
import { ExploreScreen } from '../../../src/screens/ExploreScreen';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

const AppWrapper = () => (
  <QueryClientProvider client={queryClient}>
    <NavigationContainer>
      <ExploreScreen navigation={{ setOptions: jest.fn() } as any} />
    </NavigationContainer>
  </QueryClientProvider>
);

describe('Discovery Flow - Explore Screen', () => {
  it('renders explored recipes', async () => {
    const { findByText } = render(<AppWrapper />);
    const recipeItem = await findByText(/Portra 400 Warm/i, {}, { timeout: 5000 });
    expect(recipeItem).toBeTruthy();
  });
});
