# Validation Report

Date: 2026-07-01

## Scope

Initial Harness migration and brownfield baseline discovery.

## Commands Run

```text
npm test -- --runInBand
ASDF_NODEJS_VERSION=22.19.0 npm test -- --runInBand --watchman=false
ASDF_NODEJS_VERSION=22.19.0 npm run compile
scripts/bin/harness-cli --version
scripts/bin/harness-cli init
scripts/bin/harness-cli import brownfield
scripts/bin/harness-cli query matrix
scripts/bin/harness-cli query stats
scripts/bin/harness-cli tool check
node --version
npm --version
npm run compile
npm test -- --runInBand --watchman=false
npm test -- --runInBand --watchman=false --forceExit
bundle install
bundle exec pod install --project-directory=ios
XcodeBuildMCP build_sim
```

## Results

| Check | Result | Notes |
| --- | --- | --- |
| Default test command | blocked | `.tool-versions` requests Node 22.11.0, which is not installed in local asdf. |
| Jest with Node 22.19.0 and Watchman disabled | failed | 2 suites passed, 7 suites failed; Jest also stayed open due async handles until interrupted. |
| Typecheck | failed | 37 TypeScript errors across 16 files. |
| Unit | partial | `tests/unit/recipe/ImageCarousel.test.tsx` and `tests/unit/recipe/Gating.test.tsx` passed. |
| Integration | failed | Explore and Detail integration tests fail in React Native mock setup around `ActivityIndicator`. |
| E2E | not run | No E2E command selected for this migration. |
| Platform | not run | No simulator/device smoke attempted. |
| Harness CLI | passed | `harness-cli 0.1.10`; DB initialized; brownfield import reported 7 stories and 9 decisions. |
| Tool registry | passed | `npm-compile`, `npm-jest`, and `npm-lint-check` scan as present. |
| Restored typecheck | passed | `npm run compile` now exits successfully on Node 26.2.0. |
| Restored Jest | passed | `npm test -- --runInBand --watchman=false --forceExit` passed 9 suites / 16 tests. The suite still needs open-handle cleanup before `--forceExit` can be removed. |
| CocoaPods | passed | `bundle exec pod install --project-directory=ios` succeeds after adding Ruby stdlib gems and Expo autolinking. |
| iOS simulator build | passed | XcodeBuildMCP `build_sim` succeeded for `FilmRecipe` on iPhone 17. Build log: `/Users/dev/Library/Developer/XcodeBuildMCP/workspaces/film-recipe-3380fe3e4ff8/logs/build_sim_2026-07-01T04-16-56-490Z_pid69549_b6093325.log`. |
| Lint | failed | `npm run lint:check` still reports 572 problems, mostly legacy formatting/rule drift and copied scaffold files. Tracked separately as Backlog #4. |

## Failure Summary

- Initial pass: `.tool-versions` pinned Node 22.11.0, but that version was not installed.
- Follow-up pass: `.tool-versions` now selects Node 26.2.0; `node --version` returns `v26.2.0`, so the Node-version blocker is resolved.
- Watchman attempts to write under `~/.local/state/watchman`, which is outside the workspace sandbox.
- i18n tests import `../app/i18n/en`, but current code has `src/i18n/en.ts`.
- Several scaffold imports reference missing `@/screens/*`, `@/services/api`, and `@/components/Icon` modules.
- `src/navigators/TabNavigator.tsx` imports screens via `../../screens/*`, which does not resolve from `src/navigators`.
- `src/features/explore/hooks.ts` is missing TanStack Query v5 `initialPageParam` typing.
- Static recipe JSON inference conflicts with `Recipe.settings: Record<string, string>`.
- `src/components/grid/MasonryGrid.tsx` passes `estimatedItemSize`, which the installed FlashList types do not accept.
- React Native Jest mocks fail for `Text`/`ActivityIndicator` in several screen/component tests.
- MMKV storage tests fail because the mock does not implement expected behavior such as `getAllKeys`.
- Restored pass: the app entrypoint now wraps React Query, routes to the Film Recipe tab navigator, and no longer imports missing scaffold auth/demo screens.
- Restored pass: Jest now uses `jest-expo`, Expo Babel preset, project aliases, and an MMKV mock with in-memory behavior.
- Restored pass: TypeScript excludes stale copied scaffold files that are not part of the active app surface.
- Restored pass: CocoaPods now uses Bundler with `nkf` and `tsort`, Expo Modules autolinking, `react-native-mmkv` 3.3.3 Pods, an `fmt` C++17 workaround for Xcode 26, iOS deployment target 15.1, and a non-empty location usage string.

## Evidence

The command outputs were observed during the migration and restoration turns and reflected into `docs/TEST_MATRIX.md` plus `docs/HARNESS_BACKLOG.md`.

## Gaps

- Harness CLI durable records are now created in local `harness.db`.
- Runtime navigation smoke remains open as Backlog #2.
- Lint cleanup remains open as Backlog #4.
- Jest still needs open-handle cleanup so the suite can pass without `--forceExit`.
