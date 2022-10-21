# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [9.0.1](https://github.com/foray1010/common-presets/compare/@foray1010/tsconfig@9.0.0...@foray1010/tsconfig@9.0.1) (2022-10-21)

### Bug Fixes

- use node module resolution as node16 does not work with many libraries ([3b37293](https://github.com/foray1010/common-presets/commit/3b37293ea42fefb2a7fa8362b21aac4d4f1d0a00))

## [9.0.0](https://github.com/foray1010/common-presets/compare/@foray1010/tsconfig@8.1.0...@foray1010/tsconfig@9.0.0) (2022-10-21)

### ⚠ BREAKING CHANGES

- enforce file extension and use native esm typescript

### Features

- enforce file extension and use native esm typescript ([c885710](https://github.com/foray1010/common-presets/commit/c8857103a3f828d2cf9946885495bd92d15b8d5d))

## [8.1.0](https://github.com/foray1010/common-presets/compare/@foray1010/tsconfig@8.0.2...@foray1010/tsconfig@8.1.0) (2022-10-07)

### Features

- **tsconfig:** add DOM.Iterable in lib ([d04c00a](https://github.com/foray1010/common-presets/commit/d04c00a96dd6bf2223ec7ce2fb0238466d9b86df))
- **tsconfig:** enable exactOptionalPropertyTypes ([51f22f5](https://github.com/foray1010/common-presets/commit/51f22f5463bbf4063e2e2f872bb29f51f3ccdf18))
- **tsconfig:** enable noUncheckedIndexedAccess ([6557b74](https://github.com/foray1010/common-presets/commit/6557b74aca9ddffe27a744b6caf4386d0b42e32e))
- use indexed syntax for accessing undefined fields ([7c1f9d6](https://github.com/foray1010/common-presets/commit/7c1f9d63349f0b34b00aa8608d6908763d964c3e))

## [8.0.2](https://github.com/foray1010/common-presets/compare/@foray1010/tsconfig@8.0.1...@foray1010/tsconfig@8.0.2) (2022-08-24)

**Note:** Version bump only for package @foray1010/tsconfig

## [8.0.1](https://github.com/foray1010/common-presets/compare/@foray1010/tsconfig@8.0.0...@foray1010/tsconfig@8.0.1) (2022-08-24)

**Note:** Version bump only for package @foray1010/tsconfig

## [8.0.0](https://github.com/foray1010/common-presets/compare/@foray1010/tsconfig@7.0.1...@foray1010/tsconfig@8.0.0) (2022-07-28)

### ⚠ BREAKING CHANGES

- **tsconfig:** require typescript ^4.7.4

### Features

- **tsconfig:** enable noImplicitOverride ([f74a2f1](https://github.com/foray1010/common-presets/commit/f74a2f1351fd6eac1120aea4bfae3b4ec709d45d))

## [7.0.1](https://github.com/foray1010/common-presets/compare/@foray1010/tsconfig@7.0.0...@foray1010/tsconfig@7.0.1) (2022-06-13)

### Bug Fixes

- should drop node 17 in version range ([0e911fd](https://github.com/foray1010/common-presets/commit/0e911fd737e472d699bfc32d866067ed6ccfa269))

## [7.0.0](https://github.com/foray1010/common-presets/compare/@foray1010/tsconfig@6.0.0...@foray1010/tsconfig@7.0.0) (2022-06-13)

### ⚠ BREAKING CHANGES

- drop support for typescript >=5
- drop node 12 and 17

### Miscellaneous Chores

- drop node 12 and 17 ([c43351e](https://github.com/foray1010/common-presets/commit/c43351e0da92209fc3100d9cb1bc129af320fdac))
- remove peerDependencies versions that are not sure if supported ([2175adb](https://github.com/foray1010/common-presets/commit/2175adb62efe7d1762f6f66ce9bb0e7adb5f82e5))

## [6.0.0](https://github.com/foray1010/common-presets/compare/@foray1010/tsconfig@5.0.1...@foray1010/tsconfig@6.0.0) (2021-11-10)

### ⚠ BREAKING CHANGES

- only support node ^12.22.0 || ^14.17.0 || >=16.13.0

### Miscellaneous Chores

- bump node version requirement ([6906953](https://github.com/foray1010/common-presets/commit/6906953ac0b781376d5c8a17d27faef6a457278a))

### [5.0.1](https://github.com/foray1010/common-presets/compare/@foray1010/tsconfig@5.0.0...@foray1010/tsconfig@5.0.1) (2021-08-25)

**Note:** Version bump only for package @foray1010/tsconfig

## [5.0.0](https://github.com/foray1010/common-presets/compare/@foray1010/tsconfig@4.1.2...@foray1010/tsconfig@5.0.0) (2021-04-29)

### ⚠ BREAKING CHANGES

- drop node 10

### Miscellaneous Chores

- drop node 10 ([fc35a40](https://github.com/foray1010/common-presets/commit/fc35a406c7da58a192e32929723ec46cc17ae219))

## [4.1.2](https://github.com/foray1010/common-presets/compare/@foray1010/tsconfig@4.1.1...@foray1010/tsconfig@4.1.2) (2021-03-08)

### Bug Fixes

- remove optional peer dependencies from package.json ([886e5f1](https://github.com/foray1010/common-presets/commit/886e5f1ad9969dfc57a598dfc6ab77dc5bf7f401))

## [4.1.1](https://github.com/foray1010/common-presets/compare/@foray1010/tsconfig@4.1.0...@foray1010/tsconfig@4.1.1) (2020-12-21)

**Note:** Version bump only for package @foray1010/tsconfig

# [4.1.0](https://github.com/foray1010/common-presets/compare/@foray1010/tsconfig@4.0.0...@foray1010/tsconfig@4.1.0) (2020-11-22)

### Features

- enable forceConsistentCasingInFileNames and skipLibCheck (follow @tsconfig/recommended) ([1f38aea](https://github.com/foray1010/common-presets/commit/1f38aea9bd52e62dbe9a1397a0b39a03efb87d7f))

# [4.0.0](https://github.com/foray1010/common-presets/compare/@foray1010/tsconfig@3.0.1...@foray1010/tsconfig@4.0.0) (2020-11-20)

### Features

- **tsconfig:** enable automatic react runtime ([2d4d672](https://github.com/foray1010/common-presets/commit/2d4d672d92581a065cc5267c74e8eaac30227a6e))

### BREAKING CHANGES

- **tsconfig:** require typescript >=4.1.2 and react >=17

## [3.0.1](https://github.com/foray1010/common-presets/compare/@foray1010/tsconfig@3.0.0...@foray1010/tsconfig@3.0.1) (2020-08-26)

**Note:** Version bump only for package @foray1010/tsconfig

# [3.0.0](https://github.com/foray1010/common-presets/compare/@foray1010/tsconfig@2.1.0...@foray1010/tsconfig@3.0.0) (2020-08-21)

### Features

- **tsconfig:** enable incremental build ([fd5a956](https://github.com/foray1010/common-presets/commit/fd5a956c4b2b3824277cbc29a05c498752910e5b))

### BREAKING CHANGES

- **tsconfig:** require typescript >=4.0.2

# [2.1.0](https://github.com/foray1010/common-presets/compare/@foray1010/tsconfig@2.0.2...@foray1010/tsconfig@2.1.0) (2020-06-25)

### Features

- support ES2020 ([1aaec79](https://github.com/foray1010/common-presets/commit/1aaec79fc9f2954319ef5c915a007b9fc34ce0d1))

## [2.0.2](https://github.com/foray1010/common-presets/compare/@foray1010/tsconfig@2.0.1...@foray1010/tsconfig@2.0.2) (2020-06-25)

**Note:** Version bump only for package @foray1010/tsconfig

## [2.0.1](https://github.com/foray1010/common-presets/compare/@foray1010/tsconfig@2.0.0...@foray1010/tsconfig@2.0.1) (2020-06-17)

### Bug Fixes

- sync tsconfig target with lib ([a5f3f4a](https://github.com/foray1010/common-presets/commit/a5f3f4a2ea78c55f36d1329b8e1554d404213b27))

# [2.0.0](https://github.com/foray1010/common-presets/compare/@foray1010/tsconfig@1.1.0...@foray1010/tsconfig@2.0.0) (2020-06-03)

### Features

- **tsconfig:** default only do type checking ([77649bf](https://github.com/foray1010/common-presets/commit/77649bf311d2d442c4b8f78cb73c9a8504e478ee))

### BREAKING CHANGES

- **tsconfig:** default tsconfig only do type checking

# 1.1.0 (2020-06-02)

### Features

- add common tsconfig ([0aea176](https://github.com/foray1010/common-presets/commit/0aea1765434e773c7acc3c5442147455f1e27170))
