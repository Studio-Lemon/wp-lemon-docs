# wp-lemon Testing Roadmap

## Goals

- Add a maintainable automated test suite to protect the core framework behavior used by 150+ downstream sites.
- Use Mantle Testkit as the primary WordPress test harness for integration-style theme tests.
- Keep pull request CI fast and move expensive coverage into a separate workflow tier.

## Phased Rollout

### Phase 1: Foundation

1. Add Mantle Testkit and a theme-local PHPUnit bootstrap.
2. Add base test case classes and reset helpers for theme static state.
3. Establish fast, deterministic tests that do not depend on optional plugins.

### Phase 2: First High-Value Coverage

1. Cover theme bootstrap contracts in `lib/setup.php`.
2. Cover site context construction in `lib/classes/class-site.php`.
3. Cover AJAX query guardrails in `lib/classes/class-generic-ajax-query.php`.
4. Cover block loader and filter behavior in `lib/load-blocks.php`.

### Phase 3: Parent/Child Compatibility

1. Add child-theme fixture coverage for Timber path precedence.
2. Add coverage for child context extension and special-page overrides.
3. Add block filter compatibility coverage between parent and child.

### Phase 4: CI

1. Add a pull-request-safe workflow for `composer test`, `composer analyze`, and `composer lint`.
2. Add a manual or scheduled workflow for slower integration checks.

## Initial Test Targets

### Fast Pull Request Suite

- `WP_Lemon\timber_file_paths()` keeps child paths before parent paths.
- `WP_Lemon\theme_setup()` registers key menus and theme supports.
- `WP_Lemon\custom_sizes()` exposes the expected image size label.
- `WP_Lemon\Classes\WP_Lemon_Site::prepare_site_information()` builds the base global site context.
- `WP_Lemon\Classes\WP_Lemon_Site::add_to_context()` merges runtime context and blocks reserved keys.

### Deferred Extended Suite

- `Generic_Ajax_Query` request validation and query shaping.
- `block_loader()` and editor block filters.
- Twig rendering smoke tests.
- Parent/child compatibility fixtures.

## CI Strategy

- Fast suite runs on pull requests and pushes.
- Expensive suite runs on `workflow_dispatch` or a nightly schedule.
- Release automation should depend on or be preceded by a passing fast suite.

## Notes

- Mantle Testkit supports PHPUnit 11, so it can fit the current theme toolchain.
- SQLite is the default choice for fast CI and local test runs.
- Optional plugin integrations should be covered only after the base suite is stable.
