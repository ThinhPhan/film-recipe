# Quickstart: Premium Subscription Environment

## Prerequisites
- Apple Developer Account (for TestFlight/Sandbox IAP)
- Google Play Console Account (for Licensing Test)
- Firebase Project (Authentication & Functions)
- RevenueCat Project (API Keys)

## Environment Setup

### 1. Firebase Config
- Add `google-services.json` (Android) and `GoogleService-Info.plist` (iOS).
- Enable Email/Password, Google, and Apple login in Firebase Console.
- Deploy Cloud Functions for RevenueCat webhooks:
  ```bash
  cd functions
  npm install
  firebase deploy --only functions
  ```

### 2. RevenueCat Config
- Create Entitlement: `premium`.
- Create Offerings: `Monthly` and `Yearly`.
- Add Platform Keys (iOS Shared Secret, Android Service Account JSON).
- Set Webhook URL to your Firebase Function endpoint.

### 3. App Configuration
- Add API Keys to `.env`:
  ```text
  REVENUECAT_API_KEY_IOS=...
  REVENUECAT_API_KEY_ANDROID=...
  FIREBASE_API_KEY=...
  ```

## Development Workflow
1. **Testing IAP (iOS)**: Use `StoreKit Configuration` for local mocks.
2. **Testing Auth**: Use Firebase Emulator for local authentication testing.
3. **Simulating Webhooks**: Use the RevenueCat Dashboard to "Test Webhook" to your Firebase endpoint.

## Testing
- **Unit**: Mock `@react-native-firebase/auth` and `react-native-purchases`.
- **Integration**: Perform a full "Upgrade" flow on a physical device in Sandbox/License Test mode.
