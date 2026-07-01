# Tool Registry

The upstream Harness supports an optional CLI-backed tool registry. This repo now has `scripts/bin/harness-cli` installed and tracks core validation commands in the durable tool registry.

## Core Commands

| Capability | Command | Status | Notes |
| --- | --- | --- | --- |
| Typecheck | `npm run compile` | present | Registered as `npm-compile` with capability `typecheck`. |
| Unit and integration tests | `npm test -- --runInBand --watchman=false` | present | Registered as `npm-jest` with capability `test`; `--watchman=false` avoids local Watchman sandbox writes. |
| Lint check | `npm run lint:check` | present | Registered as `npm-lint-check` with capability `lint`; non-mutating lint verification. |
| Mutating lint fix | `npm run lint` | present | Uses `--fix`; do not run as proof unless edits are desired. |
| iOS run | `npm run ios` | present | Requires simulator/native environment. |
| Android run | `npm run android` | present | Requires emulator/device. |
| Harness durable CLI | `scripts/bin/harness-cli` | present | Version `0.1.10`; `init` and `import brownfield` completed on 2026-07-01. |

## Degrade Rule

If a provider is missing, skip cleanly and record the gap. Do not fabricate proof.
