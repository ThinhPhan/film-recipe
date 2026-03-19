# Quickstart: Explore Grid and Recipe Detail Screens

## Setup Dependencies
Install the required libraries:
```bash
npm install @shopify/flash-list react-native-reanimated-carousel react-native-reanimated react-native-fast-image react-native-mmkv
```

## Running the App
1.  Ensure you have `react-native-reanimated` Babel plugin configured.
2.  Start the Metro bundler: `npm start`.
3.  Run the app: `npm run ios` or `npm run android`.

## Testing
- **Unit Tests**: `npm test -- tests/unit/explore/` and `npm test -- tests/unit/recipe/`
- **Integration Tests**: `npm test -- tests/integration/discovery-flow/`

## Gating Logic
The app uses a `isPremium` boolean in the recipe data. Gating is enforced on the `RecipeDetailScreen` component. If `isPremium` is true and the user has no active subscription, a paywall overlay is shown.
