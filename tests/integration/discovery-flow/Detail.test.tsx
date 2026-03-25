import React from 'react';
import { render, waitFor } from '@testing-library/react-native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { NavigationContainer } from '@react-navigation/native';
import { RecipeDetailScreen } from '../../../src/screens/RecipeDetailScreen';

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
      <RecipeDetailScreen 
        route={{ params: { id: '1' } } as any} 
        navigation={{ setOptions: jest.fn() } as any} 
      />
    </NavigationContainer>
  </QueryClientProvider>
);

describe('Discovery Flow - Recipe Detail', () => {
  it('renders recipe details', async () => {
    const { findByText } = render(<AppWrapper />);
    const title = await findByText(/Portra 400 Warm/i, {}, { timeout: 10000 });
    expect(title).toBeTruthy();
    
    const setting = await findByText(/Exposure/i);
    expect(setting).toBeTruthy();
  }, 15000);
});
