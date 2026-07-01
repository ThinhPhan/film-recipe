# Premium Access Contract

## Current Contract

Premium recipes may appear in discovery for every user. Non-premium users should see premium recipes as locked and should be blocked by a paywall overlay on detail.

Current implementation uses:

- `src/store/usePremiumStore.ts` for a local `isPremium` boolean.
- `src/components/recipe/PaywallOverlay.tsx` for the locked detail overlay.
- `recipe.isPremium` from static recipe seed data.

## Current Boundary

This is not real subscription security. It is local UI gating only.

Do not treat `usePremiumStore` as an entitlement source for production subscriptions.

## Future Subscription Scope

The original subscription spec accepts:

- iOS first purchase flow.
- Monthly and yearly recurring plans.
- Restore purchases.
- Account system for cross-platform sync.
- Backend receipt validation.
- Premium badges and locked content enforcement.

Any real purchase, receipt, account, entitlement, or backend work is high-risk because it touches external providers, authorization, user identity, and platform compliance.

