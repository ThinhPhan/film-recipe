# Quickstart: Recipe List Screen Implementation

## Setup Dependencies
Ensure the following libraries are installed:
```bash
npm install @shopify/flash-list react-native-fast-image
```

## Running the App
1.  Ensure you have `react-native-reanimated` Babel plugin configured if needed.
2.  Start the Metro bundler: `npm start`.
3.  Run the app: `npm run ios` or `npm run android`.

## Testing
- **Unit Tests**: `npm test -- tests/unit/recipe/`
- **Integration Tests**: `npm test -- tests/integration/home-flow/`

## Fetching Data
The list is populated using `useRecipes` in `src/features/recipes/hooks.ts`. To simulate network delay, you can wrap the static JSON fetch in a `setTimeout` within the API service.
