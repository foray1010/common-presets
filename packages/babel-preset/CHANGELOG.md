# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [4.0.1](https://github.com/foray1010/common-presets/compare/@foray1010/babel-preset@4.0.0...@foray1010/babel-preset@4.0.1) (2020-06-01)

**Note:** Version bump only for package @foray1010/babel-preset

# [4.0.0](https://github.com/foray1010/common-presets/compare/@foray1010/babel-preset@3.0.2...@foray1010/babel-preset@4.0.0) (2020-05-21)

### Features

- use @babel/runtime to reduce bundle size ([70a86ab](https://github.com/foray1010/common-presets/commit/70a86abe178c24dc634585de66d00f496453053f))

### BREAKING CHANGES

- require @babel/runtime as peer dependency

## [3.0.2](https://github.com/foray1010/common-presets/compare/@foray1010/babel-preset@3.0.1...@foray1010/babel-preset@3.0.2) (2020-05-05)

**Note:** Version bump only for package @foray1010/babel-preset

## [3.0.1](https://github.com/foray1010/common-presets/compare/@foray1010/babel-preset@3.0.0...@foray1010/babel-preset@3.0.1) (2020-03-28)

### Bug Fixes

- **deps:** update dependency remark-preset-prettier to ^0.4.0 ([dc5a5f5](https://github.com/foray1010/common-presets/commit/dc5a5f5dfee27aff585e0e8335967b1af5fc3d89))
- **deps:** update dependency stylelint-config-standard to v20 ([#63](https://github.com/foray1010/common-presets/issues/63)) ([85e2c34](https://github.com/foray1010/common-presets/commit/85e2c3471f5db816958c1720b0d713665e13ac84))

# [3.0.0](https://github.com/foray1010/common-presets/compare/@foray1010/babel-preset@2.0.0...@foray1010/babel-preset@3.0.0) (2020-01-02)

### Features

- **babel-preset:** only polyfill when they are used ([ce3ef86](https://github.com/foray1010/common-presets/commit/ce3ef8672ba903982d7d96751700d7f15b6213b6))
- **babel-preset:** polyfill shipped proposals ([9b37261](https://github.com/foray1010/common-presets/commit/9b372611ddf8fa5be6df38c349bc79c2e897fe6d))

### BREAKING CHANGES

- **babel-preset:** should remove core-js from entry point

# [2.0.0](https://github.com/foray1010/common-presets/compare/@foray1010/babel-preset@1.2.1...@foray1010/babel-preset@2.0.0) (2019-12-10)

### chore

- require nodejs 10 ([0a227b0](https://github.com/foray1010/common-presets/commit/0a227b09864d37082ac0167a13580eef3c32a85c))

### BREAKING CHANGES

- drop nodejs < 10.13

## [1.2.1](https://github.com/foray1010/common-presets/compare/@foray1010/babel-preset@1.2.0...@foray1010/babel-preset@1.2.1) (2019-11-27)

### Bug Fixes

- **babel-preset:** move presets to plugins ([8010b26](https://github.com/foray1010/common-presets/commit/8010b26c5164a0358a394e9e441e52cf192f3114))

# [1.2.0](https://github.com/foray1010/common-presets/compare/@foray1010/babel-preset@1.1.5...@foray1010/babel-preset@1.2.0) (2019-11-27)

### Features

- **babel-preset:** support TypeScript 3.7 new syntaxes ([ce63eea](https://github.com/foray1010/common-presets/commit/ce63eeaa15c23d43d30c5359758062bc48029578))

## [1.1.5](https://github.com/foray1010/common-presets/compare/@foray1010/babel-preset@1.1.4...@foray1010/babel-preset@1.1.5) (2019-11-14)

### Bug Fixes

- **deps:** update dependency stylelint-config-css-modules to v2 ([#20](https://github.com/foray1010/common-presets/issues/20)) ([47bb787](https://github.com/foray1010/common-presets/commit/47bb787d75d962e738d47e559bf7bc8462e45607))

## [1.1.4](https://github.com/foray1010/common-presets/compare/@foray1010/babel-preset@1.1.3...@foray1010/babel-preset@1.1.4) (2019-11-05)

### Bug Fixes

- **babel-preset:** remove read-pkg-up ([2221982](https://github.com/foray1010/common-presets/commit/22219821eb5902eb37b77063de1d774d082e13b4))

## [1.1.3](https://github.com/foray1010/common-presets/compare/@foray1010/babel-preset@1.1.2...@foray1010/babel-preset@1.1.3) (2019-11-05)

**Note:** Version bump only for package @foray1010/babel-preset

## [1.1.2](https://github.com/foray1010/common-presets/compare/@foray1010/babel-preset@1.1.1...@foray1010/babel-preset@1.1.2) (2019-10-28)

**Note:** Version bump only for package @foray1010/babel-preset

## [1.1.1](https://github.com/foray1010/common-presets/compare/@foray1010/babel-preset@1.1.0...@foray1010/babel-preset@1.1.1) (2019-10-28)

**Note:** Version bump only for package @foray1010/babel-preset

# [1.1.0](https://github.com/foray1010/common-presets/compare/@foray1010/babel-preset@1.0.1...@foray1010/babel-preset@1.1.0) (2019-10-28)

### Bug Fixes

- **eslint-preset:** unpin dependencies ([8e2c02b](https://github.com/foray1010/common-presets/commit/8e2c02b08f0a5459d5a4fe1f5614b5e71bb19f1e))
- remove @babel/preset-flow ([e9e776d](https://github.com/foray1010/common-presets/commit/e9e776db2777a85ec9e950a752e8533c85632913))

### Features

- **babel-preset:** detect dependencies to load related presets/plugins ([4a6b810](https://github.com/foray1010/common-presets/commit/4a6b81068a9c609c27bde83759b24ed082ccc918))

## 1.0.1 (2019-10-28)

### Bug Fixes

- **deps:** pin dependencies ([5882c7d](https://github.com/foray1010/common-presets/commit/5882c7d7574e0d985d8eba635f7d6809a35fda89))
