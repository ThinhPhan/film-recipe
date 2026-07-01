# 0002 Local Static MVP Boundary

Date: 2026-07-01

## Status

Accepted

## Context

Current implementation uses static recipe JSON and local Zustand/MMKV stores. Original specs include larger ambitions: favorites, film stock database, real subscriptions, account sync, and backend receipt validation.

## Decision

Treat the current implemented app as a local/static MVP boundary:

- Static JSON is the current recipe source.
- Notes are local-only.
- Premium state is local UI state only.
- Real purchases, account sync, backend validation, and cross-platform entitlement are future high-risk work.

## Alternatives Considered

1. Treat the premium store as production entitlement. Rejected because it is a local boolean.
2. Treat the original subscription spec as already implemented. Rejected because no IAP/backend dependencies or provider flows were found.

## Consequences

Positive:

- Current proof expectations stay honest.
- Future subscription work gets the correct risk classification.

Tradeoffs:

- Some accepted product requirements remain planned rather than implemented.
- The app needs explicit decisions before real monetization work starts.

## Follow-Up

- Create a high-risk story before adding real IAP or backend entitlement validation.
- Decide whether favorites remain local-only or become account-backed.

