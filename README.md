# Film Recipe

A React Native mobile application built with a modern tech stack, featuring high-performance lists, state-of-the-art data fetching, and fluid animations.

## Technologies

This project uses the following technologies and libraries:
- **React Native** (v0.72)
- **TypeScript**
- **React Navigation** (v6) - For routing and navigation (Native Stack & Bottom Tabs)
- **Zustand** - For lightweight global state management
- **TanStack Query** (React Query v4) - For powerful asynchronous state management and data fetching
- **@shopify/flash-list** - For rendering high-performance grid and list views
- **react-native-fast-image** - For efficient and performant image caching and rendering
- **react-native-reanimated** - For creating smooth, fluid, and complex animations
- **react-native-mmkv** - For extremely fast, synchronous local storage

## Prerequisites

Before you begin, ensure you have the following installed on your machine:
- Node.js (v18 or newer recommended)
- Watchman
- React Native CLI environments set up components depending on your OS (Xcode for iOS, Android Studio for Android). 

For detailed setup instructions, follow the official [React Native Environment Setup Guide](https://reactnative.dev/docs/environment-setup) (select React Native CLI Quickstart).

## Getting Started

1. **Clone the repository** (if you haven't already):
   ```bash
   git clone <repository-url>
   cd film-recipe
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Install iOS Pods** (macOS only):
   ```bash
   cd ios && pod install && cd ..
   ```

## Running the App

### Start the Metro Bundler
First, you will need to start Metro, the JavaScript bundler that ships with React Native:

```bash
npm start
```

### Run on iOS
In a new terminal window, run the following command to build and launch the app in the iOS Simulator:

```bash
npm run ios
```

### Run on Android
Make sure you have an Android emulator running or a device connected, then run:

```bash
npm run android
```

## Running Tests

This project uses Jest along with React Native Testing Library for writing and running unit tests.

To run the test suite:

```bash
npm test
```

To run tests in watch mode during development:
```bash
npm test -- --watch
```

## Code Quality and Development

To run the linter and ensure code meets style guidelines:

```bash
npm run lint
```

For continuous development, you can chain test and lint commands together to ensure tests pass and code is formatted correctly:
```bash
npm test && npm run lint
```

## Project Structure

```text
src/       # Source code including components, screens, hooks, stores, navigation, etc.
tests/     # Unit and integration tests
```
