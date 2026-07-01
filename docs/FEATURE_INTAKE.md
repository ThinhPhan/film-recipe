# Feature Intake

Every implementation prompt enters the intake gate before code changes.

## Input Types

| Type | Use when | Typical artifact |
| --- | --- | --- |
| New spec | Turning a user-provided spec into harness-ready docs | Product docs, story candidates, decisions |
| Spec slice | Implementing a selected behavior from accepted specs | Story packet |
| Change request | Changing or fixing accepted behavior | Story packet or direct patch |
| New initiative | Adding a larger product area | Initiative notes and story packets |
| Maintenance request | Dependency, architecture, test, or operational work | Story packet, validation report, or decision |
| Harness improvement | Improving collaboration or proof tracking | Docs update or backlog item |

Do not create or extend a monolithic spec by default after intake. Use product docs, stories, decisions, and validation records as the living surface.

## Lanes

### Tiny

Use for low-risk docs, copy, names, or narrow edits.

Requirements:

- Patch directly.
- Keep affected docs current.
- Run available quick checks.

### Normal

Use for story-sized behavior with bounded blast radius.

Requirements:

- Create or update one story file in `docs/stories/`.
- Link relevant product docs.
- Add or update validation expectations.
- Implement the smallest vertical slice when implementation exists.
- Update proof status in `docs/TEST_MATRIX.md`.

### High-Risk

Use when work can affect security, data, scope, contracts, platform behavior, or external systems.

Requirements:

- Create a high-risk story folder or detailed story packet.
- Ask for human confirmation before implementation if direction is ambiguous.
- Record a decision when behavior, architecture, authorization, data ownership, provider behavior, or validation changes meaningfully.

## Risk Checklist

Mark every flag that applies:

| Risk flag | Applies when work touches |
| --- | --- |
| Auth | login, logout, sessions, identity |
| Authorization | roles, permissions, premium entitlements |
| Data model | schema, persistence, migrations, deletion |
| Audit/security | privacy, sensitive data, access logs |
| External systems | payments, provider SDKs, stores, webhooks |
| Public contracts | user-visible behavior, API shape, data contract |
| Cross-platform | iOS, Android, web, native shell, deep links |
| Existing behavior | implemented or test-covered behavior changes |
| Weak proof | missing or unclear tests |
| Multi-domain | more than one product domain changes |

Classification:

```text
0-1 flags: tiny or normal, based on code impact
2-3 flags: normal with stronger validation
4+ flags: high-risk
Any hard gate: high-risk unless the user explicitly narrows scope
```

Hard gates: auth, authorization, data loss or migration, audit/security, external provider behavior, removing or weakening validation.

