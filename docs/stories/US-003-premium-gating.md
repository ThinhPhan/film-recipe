# US-003 Premium Gating

## Status

in_progress

## Lane

normal

## Product Contract

Premium recipes are visible in discovery, marked as locked for non-premium users, and blocked by a paywall overlay on detail until the user is premium.

## Relevant Product Docs

- `docs/product/premium-access.md`
- `docs/product/discovery.md`

## Acceptance Criteria

- Given a non-premium user sees a premium recipe card, the card indicates locked status.
- Given a non-premium user opens a premium recipe, a paywall overlay is shown.
- Given a premium user opens a premium recipe, full detail is visible without the overlay.
- Given premium state changes locally in tests, gating logic responds to the state.

## Design Notes

- Store: `src/store/usePremiumStore.ts`.
- Overlay: `src/components/recipe/PaywallOverlay.tsx`.
- Detail gate: `src/screens/RecipeDetailScreen.tsx`.
- Current boundary: local UI gating only, not real subscription entitlement.

## Validation

| Layer | Expected proof |
| --- | --- |
| Unit | `npm test -- tests/unit/recipe/Gating.test.tsx --runInBand` |
| Integration | Add screen-level proof for locked and unlocked recipe detail states |
| E2E | Future end-to-end premium/non-premium navigation proof |
| Platform | Future store subscription work requires iOS/Android platform proof |

## Harness Delta

Real subscription work should create a high-risk story and decision before implementation.

## Evidence

2026-07-01: `tests/unit/recipe/Gating.test.tsx` passed during the full Jest run. Screen-level locked/unlocked proof is still missing. See `docs/validation/2026-07-01-harness-migration.md`.

2026-07-01 restored baseline: `npm run compile` passed; `npm test -- --runInBand --watchman=false --forceExit` passed 9 suites / 16 tests; XcodeBuildMCP `build_sim` passed for iPhone 17. Real entitlement/IAP validation remains out of scope.
