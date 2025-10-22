# Changelog

## [5.0.0](https://github.com/npm/node-gyp/compare/v4.0.0...v5.0.0) (2025-10-22)
### ⚠️ BREAKING CHANGES
* `@npmcli/node-gyp` now supports node `^20.17.0 || >=22.9.0`
### Bug Fixes
* [`09083f4`](https://github.com/npm/node-gyp/commit/09083f4ddd9b108e9b54fe4f3c838bbc2e9c42f4) [#97](https://github.com/npm/node-gyp/pull/97) align to npm 11 node engine range (#97) (@owlstronaut)
### Chores
* [`c614399`](https://github.com/npm/node-gyp/commit/c6143993b0ed226ed5831ca79545c7217f31e6a9) [#91](https://github.com/npm/node-gyp/pull/91) postinstall workflow updates (#91) (@owlstronaut)
* [`a35d623`](https://github.com/npm/node-gyp/commit/a35d6238fb40ea8efe7c50a4ad661fc0cc805a85) [#96](https://github.com/npm/node-gyp/pull/96) bump @npmcli/template-oss from 4.26.0 to 4.27.1 (#96) (@dependabot[bot], @npm-cli-bot)

## [4.0.0](https://github.com/npm/node-gyp/compare/v3.0.0...v4.0.0) (2024-09-24)
### ⚠️ BREAKING CHANGES
* `@npmcli/node-gyp` now supports node `^18.17.0 || >=20.5.0`
### Bug Fixes
* [`eaddea9`](https://github.com/npm/node-gyp/commit/eaddea9feac831f6e69d9a402c9477f347482452) [#86](https://github.com/npm/node-gyp/pull/86) align to npm 10 node engine range (@hashtagchris)
### Chores
* [`795462a`](https://github.com/npm/node-gyp/commit/795462a87307bffc90c01f93eeddb60ee75f770c) [#88](https://github.com/npm/node-gyp/pull/88) enable auto publish (#88) (@reggi)
* [`a90eaa2`](https://github.com/npm/node-gyp/commit/a90eaa2d89be74fc8eca81dd1758e124be4617c7) [#86](https://github.com/npm/node-gyp/pull/86) run template-oss-apply (@hashtagchris)
* [`591fc45`](https://github.com/npm/node-gyp/commit/591fc45917200e5d249d52a62987abcf951552ee) [#84](https://github.com/npm/node-gyp/pull/84) bump @npmcli/eslint-config from 4.0.5 to 5.0.0 (@dependabot[bot])
* [`c51d4d0`](https://github.com/npm/node-gyp/commit/c51d4d088dcd0e1e532ba0744aea1ec462bbca86) [#73](https://github.com/npm/node-gyp/pull/73) bump @npmcli/template-oss to 4.22.0 (@lukekarrys)
* [`588b9f4`](https://github.com/npm/node-gyp/commit/588b9f401314f229cdc96e210374720e09f602aa) [#43](https://github.com/npm/node-gyp/pull/43) add LICENSE (#43) (@MylesBorins)
* [`eeda3eb`](https://github.com/npm/node-gyp/commit/eeda3ebeb2e316c5354ca4f1b6d860e42c2caf94) [#29](https://github.com/npm/node-gyp/pull/29) bump @npmcli/eslint-config from 3.1.0 to 4.0.0 (@dependabot[bot])
* [`b8d5930`](https://github.com/npm/node-gyp/commit/b8d593033f3ed6ed0f54178ae7973e1eba13cbbc) [#85](https://github.com/npm/node-gyp/pull/85) postinstall for dependabot template-oss PR (@hashtagchris)
* [`675142d`](https://github.com/npm/node-gyp/commit/675142d9ce5047d43c80acad4b5971e67d34ae99) [#85](https://github.com/npm/node-gyp/pull/85) bump @npmcli/template-oss from 4.23.1 to 4.23.3 (@dependabot[bot])

## [3.0.0](https://github.com/npm/node-gyp/compare/v2.0.0...v3.0.0) (2022-10-10)

### ⚠️ BREAKING CHANGES

* `@npmcli/node-gyp` is now compatible with the following semver range for node: `^14.17.0 || ^16.13.0 || >=18.0.0`

### Features

* [`7f84e06`](https://github.com/npm/node-gyp/commit/7f84e060c43549445e64cc6e24a73b5195303664) [#22](https://github.com/npm/node-gyp/pull/22) postinstall for dependabot template-oss PR (@lukekarrys)

## [2.0.0](https://github.com/npm/node-gyp/compare/v1.0.3...v2.0.0) (2022-04-05)


### ⚠ BREAKING CHANGES

* this drops support for node 10 and non-LTS versions of node 12 and node 14

### Dependencies

* @npmcli/template-oss@3.2.2 ([#8](https://github.com/npm/node-gyp/issues/8)) ([76dc03a](https://github.com/npm/node-gyp/commit/76dc03a00895b509039ee65beb6ba4d0e3c03b68))
