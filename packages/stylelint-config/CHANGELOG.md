# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [5.0.0](https://github.com/foray1010/common-presets/compare/@foray1010/stylelint-config@4.0.1...@foray1010/stylelint-config@5.0.0) (2021-11-10)

### ⚠ BREAKING CHANGES

- **deps:** require stylelint >=14 <15
- only support node ^12.22.0 || ^14.17.0 || >=16.13.0

### Bug Fixes

- **deps:** update dependency stylelint-config-prettier to v9 ([b2beb16](https://github.com/foray1010/common-presets/commit/b2beb16dd361bb234dc5be143ea0900a8617964f))
- **deps:** update dependency stylelint-config-standard to v23 ([7dc379b](https://github.com/foray1010/common-presets/commit/7dc379bde264e7d0d9ccf42ee031c6a79d262e37))
- **deps:** update dependency stylelint-prettier to v2 ([e17b4d2](https://github.com/foray1010/common-presets/commit/e17b4d2e5aa14f7fbcb73bd44edbfd75f4ea623a))

### Miscellaneous Chores

- bump node version requirement ([6906953](https://github.com/foray1010/common-presets/commit/6906953ac0b781376d5c8a17d27faef6a457278a))
- **deps:** update dependency stylelint to v14 ([#346](https://github.com/foray1010/common-presets/issues/346)) ([cdd7a24](https://github.com/foray1010/common-presets/commit/cdd7a24d0411427ab4a0a3e6aec267f2fae79667))

### [4.0.1](https://github.com/foray1010/common-presets/compare/@foray1010/stylelint-config@4.0.0...@foray1010/stylelint-config@4.0.1) (2021-08-25)

### Bug Fixes

- **deps:** update dependency stylelint-no-unsupported-browser-features to v5 ([81fc5ee](https://github.com/foray1010/common-presets/commit/81fc5ee2657d0e7ee9ad05a49c46386e3cc5e383))

## [4.0.0](https://github.com/foray1010/common-presets/compare/@foray1010/stylelint-config@3.0.0...@foray1010/stylelint-config@4.0.0) (2021-04-29)

### ⚠ BREAKING CHANGES

- drop node 10
- require node >=12.13 & stylelint >=13.13

### Features

- add more rules via stylelint-config-standard v22 ([b919a77](https://github.com/foray1010/common-presets/commit/b919a77c66518f016f1ec54f073feff55ec56068))

### Miscellaneous Chores

- drop node 10 ([fc35a40](https://github.com/foray1010/common-presets/commit/fc35a406c7da58a192e32929723ec46cc17ae219))

# [3.0.0](https://github.com/foray1010/common-presets/compare/@foray1010/stylelint-config@2.3.2...@foray1010/stylelint-config@3.0.0) (2021-03-11)

### Features

- add rules by stylelint-config-recommended v4 ([8d9e663](https://github.com/foray1010/common-presets/commit/8d9e663c4d61ef2a7dc0308879db97bbe0a5e84e))

### BREAKING CHANGES

- require stylelint >=13.12.0

## [2.3.2](https://github.com/foray1010/common-presets/compare/@foray1010/stylelint-config@2.3.1...@foray1010/stylelint-config@2.3.2) (2020-12-21)

**Note:** Version bump only for package @foray1010/stylelint-config

## [2.3.1](https://github.com/foray1010/common-presets/compare/@foray1010/stylelint-config@2.3.0...@foray1010/stylelint-config@2.3.1) (2020-11-18)

### Bug Fixes

- disable no-descending-specificity as it produces false alarams when use with `:root` selector ([28d559e](https://github.com/foray1010/common-presets/commit/28d559eba215201a802dfdbad05c8d62713ec26a))

# [2.3.0](https://github.com/foray1010/common-presets/compare/@foray1010/stylelint-config@2.2.5...@foray1010/stylelint-config@2.3.0) (2020-11-17)

### Features

- **stylelint-config:** disallows colors that are suspiciously close to being identical ([205803f](https://github.com/foray1010/common-presets/commit/205803ff95662e6ce4fe19ac061512c4923c6690))
- reenable at-rule-no-unknown since we are not using scss anymore ([de1a9f8](https://github.com/foray1010/common-presets/commit/de1a9f84c9df012a06ee3013cac5fdc8c5fcbc9c))
- reenable no-descending-specificity since we are not using mixins anymore ([f8a590d](https://github.com/foray1010/common-presets/commit/f8a590dab01f3e2fae02f51133848623049bf89c))
- show warnings on unsupported css based on browserslist ([0513439](https://github.com/foray1010/common-presets/commit/05134391c9f6f8e8b0566cffe4e735de1d04b7e3))

## [2.2.5](https://github.com/foray1010/common-presets/compare/@foray1010/stylelint-config@2.2.4...@foray1010/stylelint-config@2.2.5) (2020-08-26)

**Note:** Version bump only for package @foray1010/stylelint-config

## [2.2.4](https://github.com/foray1010/common-presets/compare/@foray1010/stylelint-config@2.2.3...@foray1010/stylelint-config@2.2.4) (2020-06-25)

**Note:** Version bump only for package @foray1010/stylelint-config

## [2.2.3](https://github.com/foray1010/common-presets/compare/@foray1010/stylelint-config@2.2.2...@foray1010/stylelint-config@2.2.3) (2020-06-17)

**Note:** Version bump only for package @foray1010/stylelint-config

## [2.2.2](https://github.com/foray1010/common-presets/compare/@foray1010/stylelint-config@2.2.1...@foray1010/stylelint-config@2.2.2) (2020-06-01)

**Note:** Version bump only for package @foray1010/stylelint-config

## [2.2.1](https://github.com/foray1010/common-presets/compare/@foray1010/stylelint-config@2.2.0...@foray1010/stylelint-config@2.2.1) (2020-05-05)

**Note:** Version bump only for package @foray1010/stylelint-config

# [2.2.0](https://github.com/foray1010/common-presets/compare/@foray1010/stylelint-config@2.1.1...@foray1010/stylelint-config@2.2.0) (2020-03-28)

### Features

- **stylelint-config:** support prettier v2 ([1d72309](https://github.com/foray1010/common-presets/commit/1d723090d246eea611c7efcf004ff70aa755912a))

## [2.1.1](https://github.com/foray1010/common-presets/compare/@foray1010/stylelint-config@2.1.0...@foray1010/stylelint-config@2.1.1) (2020-02-13)

### Bug Fixes

- **deps:** update dependency stylelint-config-standard to v20 ([#63](https://github.com/foray1010/common-presets/issues/63)) ([85e2c34](https://github.com/foray1010/common-presets/commit/85e2c3471f5db816958c1720b0d713665e13ac84))

# [2.1.0](https://github.com/foray1010/common-presets/compare/@foray1010/stylelint-config@2.0.0...@foray1010/stylelint-config@2.1.0) (2020-01-13)

### Features

- **stylelint-config:** support stylelint 13 ([559aca2](https://github.com/foray1010/common-presets/commit/559aca252e73e72561c6eaefcbe657a453d8400a))

# [2.0.0](https://github.com/foray1010/common-presets/compare/@foray1010/stylelint-config@1.5.2...@foray1010/stylelint-config@2.0.0) (2019-12-10)

### Bug Fixes

- **deps:** update dependency stylelint-config-prettier to v8 ([#39](https://github.com/foray1010/common-presets/issues/39)) ([6365e2a](https://github.com/foray1010/common-presets/commit/6365e2a8332a4dabadb9b27492eff790e36aebad))

### chore

- require nodejs 10 ([0a227b0](https://github.com/foray1010/common-presets/commit/0a227b09864d37082ac0167a13580eef3c32a85c))

### BREAKING CHANGES

- drop nodejs < 10.13

## [1.5.2](https://github.com/foray1010/common-presets/compare/@foray1010/stylelint-config@1.5.1...@foray1010/stylelint-config@1.5.2) (2019-12-02)

### Bug Fixes

- **deps:** update dependency stylelint-config-prettier to v7 ([#35](https://github.com/foray1010/common-presets/issues/35)) ([101f488](https://github.com/foray1010/common-presets/commit/101f4888743fbf1c4f767f8a179ae9900809cfd7))

## [1.5.1](https://github.com/foray1010/common-presets/compare/@foray1010/stylelint-config@1.5.0...@foray1010/stylelint-config@1.5.1) (2019-11-27)

**Note:** Version bump only for package @foray1010/stylelint-config

# [1.5.0](https://github.com/foray1010/common-presets/compare/@foray1010/stylelint-config@1.4.3...@foray1010/stylelint-config@1.5.0) (2019-11-14)

### Features

- **stylelint-config:** use idiomatic-css declaration order ([301b8fd](https://github.com/foray1010/common-presets/commit/301b8fd5610a9acd7a9e8308bac9fea4ef6fe5ed))

## [1.4.3](https://github.com/foray1010/common-presets/compare/@foray1010/stylelint-config@1.4.2...@foray1010/stylelint-config@1.4.3) (2019-11-08)

### Bug Fixes

- **deps:** update dependency stylelint-config-css-modules to v2 ([#20](https://github.com/foray1010/common-presets/issues/20)) ([47bb787](https://github.com/foray1010/common-presets/commit/47bb787d75d962e738d47e559bf7bc8462e45607))

## [1.4.2](https://github.com/foray1010/common-presets/compare/@foray1010/stylelint-config@1.4.1...@foray1010/stylelint-config@1.4.2) (2019-10-28)

**Note:** Version bump only for package @foray1010/stylelint-config

## [1.4.1](https://github.com/foray1010/common-presets/compare/@foray1010/stylelint-config@1.4.0...@foray1010/stylelint-config@1.4.1) (2019-10-25)

**Note:** Version bump only for package @foray1010/stylelint-config

# [1.4.0](https://github.com/foray1010/common-presets/compare/@foray1010/stylelint-config@1.3.0...@foray1010/stylelint-config@1.4.0) (2019-10-16)

### Features

- stricter peerDependencies range ([52f58bc](https://github.com/foray1010/common-presets/commit/52f58bc1e6ad87b544730ef7320be2c052d4d34d))

# [1.3.0](https://github.com/foray1010/common-presets/compare/@foray1010/stylelint-config@1.2.1...@foray1010/stylelint-config@1.3.0) (2019-10-16)

### Features

- lint all hidden files ([e695ea3](https://github.com/foray1010/common-presets/commit/e695ea3c8ba2a5862d0c80cd4b0a19e2bd3f2bfc))

## [1.2.1](https://github.com/foray1010/common-presets/compare/@foray1010/stylelint-config@1.2.0...@foray1010/stylelint-config@1.2.1) (2019-10-15)

**Note:** Version bump only for package @foray1010/stylelint-config

# [1.2.0](https://github.com/foray1010/common-presets/compare/@foray1010/stylelint-config@1.1.2...@foray1010/stylelint-config@1.2.0) (2019-10-11)

### Features

- add default ignore file ([e59de5a](https://github.com/foray1010/common-presets/commit/e59de5a))

## [1.1.2](https://github.com/foray1010/common-presets/compare/@foray1010/stylelint-config@1.1.1...@foray1010/stylelint-config@1.1.2) (2019-10-11)

### Bug Fixes

- **stylelint-config:** require node >=8.9 ([44b867a](https://github.com/foray1010/common-presets/commit/44b867a))
- **stylelint-config:** require stylelint & prettier as peer dependencies ([75fe9ac](https://github.com/foray1010/common-presets/commit/75fe9ac))

## [1.1.1](https://github.com/foray1010/common-presets/compare/@foray1010/stylelint-config@1.1.0...@foray1010/stylelint-config@1.1.1) (2019-10-07)

**Note:** Version bump only for package @foray1010/stylelint-config

# 1.1.0 (2019-10-05)

### Features

- **stylelint-config:** add rules ([86e971f](https://github.com/foray1010/common-presets/commit/86e971f))
