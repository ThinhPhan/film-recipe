# Research: Premium Subscription for Contents

## Decision: Authentication Provider
- **Choice**: `firebase-auth`
- **Rationale**: Firebase Auth provides out-of-the-box support for Email/Password and popular Social SSO (Google, Apple) which are critical for cross-platform subscription sync. It integrates well with React Native via `@react-native-firebase/auth`.
- **Alternatives Considered**: 
    - **Supabase Auth**: Strong contender, but Firebase has more mature tooling for iOS/Android IAP receipt validation via Firebase Extensions (e.g., RevenueCat integration).
    - **Custom JWT Auth**: Rejected due to high maintenance overhead for security and SSO integrations.

## Decision: Subscription Management & Receipt Validation
- **Choice**: `react-native-iap` + RevenueCat (Backend Validation)
- **Rationale**: While `react-native-iap` provides the client-side interaction, RevenueCat simplifies the complex backend validation, cross-platform entitlement logic, and webhooks for subscription status changes. This significantly reduces implementation risk and complexity.
- **Alternatives Considered**: 
    - **Self-Hosted Backend Validation**: Rejected for MVP due to high complexity in handling App Store/Play Store receipt validation, edge cases (refunds, trial periods), and platform-specific logic.

## Decision: Database Strategy
- **Choice**: `firebase-firestore` (via Firebase)
- **Rationale**: Fits naturally with `firebase-auth`. Firestore will store the user's local metadata (favorite premium recipes) while RevenueCat remains the source of truth for subscription status.
- **Alternatives Considered**: 
    - **PostgreSQL**: Better for complex relations, but Firestore is faster for initial MVP development with Firebase.

## Decision: Backend Stack
- **Choice**: Firebase Cloud Functions (Node.js)
- **Rationale**: Serverless architecture minimizes infrastructure management and scales automatically. Used for handling webhooks from RevenueCat and syncing status to Firestore.

## Decision: Testing Strategy
- **Choice**: Sandbox/StoreKit Configuration
- **Rationale**: Use StoreKit configuration files for iOS testing without needing real connections initially. For Android, use Play Store license testing. Unit tests will mock the IAP and Auth providers.
