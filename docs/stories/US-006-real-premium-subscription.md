# US-006 Real Premium Subscription

## Status

planned

## Lane

high-risk

## Product Contract

Users can purchase, restore, and manage premium subscriptions, and valid subscribers receive premium access across supported platforms.

## Relevant Product Docs

- `docs/product/premium-access.md`

## Acceptance Criteria

- Given a non-premium user chooses upgrade on iOS, the native purchase sheet opens.
- Given a successful purchase, premium content unlocks immediately.
- Given a valid returning subscriber taps restore, entitlement is restored.
- Given a subscription expires or is invalid, premium access is revoked at the correct boundary.
- Given cross-platform sync is required, entitlement is linked to an account and validated by backend receipt checks.

## Design Notes

- Original source: `specs/002-premium-subscription/spec.md`.
- Current observed state: no IAP or backend entitlement dependencies are installed in `package.json`.
- This story is high-risk because it touches external systems, authorization, user identity, and platform compliance.

## Validation

| Layer | Expected proof |
| --- | --- |
| Unit | Entitlement state and receipt status mapping |
| Integration | Backend receipt validation and restore flow |
| E2E | Purchase/restore happy path in sandbox |
| Platform | iOS first, then Android purchase sandbox proof |
| Release | Store compliance checklist before release |

## Harness Delta

Create a decision record before implementation to choose provider, account boundary, receipt validation owner, and failure behavior.

