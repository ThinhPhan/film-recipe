# Contracts: Auth & Subscription

## Authentication Interface (Firebase)

### Actions
- **`login(email, password): Promise<User>`**
- **`register(email, password): Promise<User>`**
- **`loginWithGoogle(): Promise<User>`**
- **`loginWithApple(): Promise<User>`**
- **`logout(): Promise<void>`**

### State (`useAuthStore`)
- `user: User | null`
- `status: 'loading' | 'authenticated' | 'unauthenticated'`

## Subscription Interface (RevenueCat)

### Actions
- **`getPurchaserInfo(): Promise<CustomerInfo>`**
- **`purchasePackage(packageId: string): Promise<CustomerInfo>`**
- **`restorePurchases(): Promise<CustomerInfo>`**
- **`getOfferings(): Promise<Offerings>`**

### State (`usePremiumStore`)
- `isPremium: boolean`
- `activeEntitlements: string[]`
- `customerInfo: CustomerInfo | null`

## Backend Webhook (RevenueCat -> Firebase Functions)

### Event Schema
```json
{
  "event": {
    "type": "RENEWAL" | "CANCELLATION" | "INITIAL_PURCHASE" | "EXPIRATION",
    "app_user_id": "firebase_uid",
    "entitlement_ids": ["premium"],
    "product_id": "monthly_tier_01",
    "original_transaction_id": "..."
  }
}
```
**Handler Logic**:
1. Verify signature.
2. If `entitlement_ids` contains `premium` and `type` is not `EXPIRATION`, update Firestore User document: `isPremium = true`.
3. If `type` is `EXPIRATION`, update: `isPremium = false`.
