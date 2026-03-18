# Data Model: Premium Subscription

## Entities

### User (Firebase Auth & Firestore)
Represents a registered user with cross-platform identity.
- `uid`: string (Firebase UID)
- `email`: string
- `displayName`: string
- `photoURL`: string
- `createdAt`: Timestamp
- `isPremium`: boolean (Denormalized for fast access)
- `subscriptionTier`: "Monthly" | "Yearly" | null

### Subscription (RevenueCat)
The source of truth for billing status.
- `originalAppUserId`: string (Matches Firebase UID)
- `entitlements`: object
  - `premium`: object
    - `isActive`: boolean
    - `willRenew`: boolean
    - `expirationDate`: ISO8601 string
    - `unsubscribeDetectedAt`: ISO8601 string | null
- `activeSubscriptions`: string[] (Identifiers from App Store / Play Store)

### PremiumRecipe (Denormalized in Firestore)
Metadata for gating content.
- `id`: string (Matches static JSON recipe ID)
- `isLocked`: boolean
- `requiredTier`: "Monthly" | "Yearly"

## Relationships
- **User 1:1 Subscription**: A user has one active subscription state managed via RevenueCat.
- **User 1:N FavoriteRecipes**: Users store their favorite recipes in Firestore (synced across platforms).

## Validation Rules
- `isPremium` in User document MUST only be updated via Cloud Functions triggered by RevenueCat webhooks.
- Access to `RecipeDetail` for locked recipes MUST check the user's `isActive` status in their subscription entitlement.
