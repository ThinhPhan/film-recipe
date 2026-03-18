# Quickstart: Film Recipe Mobile App

## Prerequisites
- Node.js (v18+)
- React Native CLI (global or npx)
- Xcode (for iOS development)
- Android Studio (for Android development)

## Setup
1. Clone the repository and install dependencies:
   ```bash
   npm install
   ```
2. (iOS Only) Install CocoaPods:
   ```bash
   npx pod-install
   ```

## Running the App
- **iOS**: 
  ```bash
  npm run ios
  ```
- **Android**: 
  ```bash
  npm run android
  ```

## Development Workflow
1. **Adding New Recipes**: Update the static JSON seed in `src/assets/data/recipes.json`.
2. **State Management**: Uses Zustand with MMKV persistence. See `src/store/useFavoriteStore.ts`.
3. **Fetching Data**: Uses TanStack Query hooks in `src/features/recipes/hooks.ts`.

## Testing
- Run all tests:
  ```bash
  npm test
  ```
- Run tests in watch mode:
  ```bash
  npm test -- --watch
  ```
- Tests are located in the `tests/` directory at the project root.
