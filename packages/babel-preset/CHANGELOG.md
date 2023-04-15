# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [11.1.0](https://github.com/foray1010/common-presets/compare/@foray1010/babel-preset@11.0.2...@foray1010/babel-preset@11.1.0) (2023-04-15)

### Features

- **eslint-config:** enable functional/prefer-immutable-types and type-declaration-immutability ([9dc211e](https://github.com/foray1010/common-presets/commit/9dc211e550df72c4538a5526285ad635b1a491d5))

## [11.0.2](https://github.com/foray1010/common-presets/compare/@foray1010/babel-preset@11.0.1...@foray1010/babel-preset@11.0.2) (2023-03-29)

**Note:** Version bump only for package @foray1010/babel-preset

## [11.0.1](https://github.com/foray1010/common-presets/compare/@foray1010/babel-preset@11.0.0...@foray1010/babel-preset@11.0.1) (2023-03-23)

**Note:** Version bump only for package @foray1010/babel-preset

## [11.0.0](https://github.com/foray1010/common-presets/compare/@foray1010/babel-preset@10.0.0...@foray1010/babel-preset@11.0.0) (2023-03-23)

### ⚠ BREAKING CHANGES

- **eslint-config:** migrate to eslint flat config and mjs
- **babel-preset:** set default dependenciesModules to `esmodules`
- **babel-preset:** require BABEL_ENV or NODE_ENV
- **babel-preset:** use mjs
- require node `^16.14.0 || >=18.12.0`

### Features

- **babel-preset:** require BABEL_ENV or NODE_ENV ([564a01b](https://github.com/foray1010/common-presets/commit/564a01b3ae602d121c00e30284bcc15b8fab0b56))
- **babel-preset:** set default dependenciesModules to `esmodules` ([cf55f80](https://github.com/foray1010/common-presets/commit/cf55f8063eef13c9c32dcd1a955570c10cf29824))
- **eslint-config:** migrate to eslint flat config and mjs ([d435d01](https://github.com/foray1010/common-presets/commit/d435d012faf1574dda750917dbada56048eecd09))
- **tsconfig:** split tsconfig to mutliple files for different scenarios ([fcaf3ae](https://github.com/foray1010/common-presets/commit/fcaf3aee3f9f1851439d01631c2e8584bde685ba))

### Miscellaneous Chores

- **babel-preset:** use mjs ([45ce9d8](https://github.com/foray1010/common-presets/commit/45ce9d81b84fa043bad670a1e32b93f0b171800b))
- require node `^16.14.0 || >=18.12.0` ([5baf6eb](https://github.com/foray1010/common-presets/commit/5baf6eba6d42958596c130724a502c59fe1a4e83))

## [10.0.0](https://github.com/foray1010/common-presets/compare/@foray1010/babel-preset@9.2.0...@foray1010/babel-preset@10.0.0) (2022-11-07)

### ⚠ BREAKING CHANGES

- drop nodejs 14.17 and 18.11

### Features

- **eslint-config:** prefer node protocol ([204e5c1](https://github.com/foray1010/common-presets/commit/204e5c168aacaa020d2481306489724dfd6da7bc))

### Miscellaneous Chores

- drop nodejs 14.17 and 18.11 ([8e5c967](https://github.com/foray1010/common-presets/commit/8e5c9677b89d38c88de465f069bb5de683a8a40b))

## [9.2.0](https://github.com/foray1010/common-presets/compare/@foray1010/babel-preset@9.1.1...@foray1010/babel-preset@9.2.0) (2022-10-07)

### Features

- use indexed syntax for accessing undefined fields ([7c1f9d6](https://github.com/foray1010/common-presets/commit/7c1f9d63349f0b34b00aa8608d6908763d964c3e))

## [9.1.1](https://github.com/foray1010/common-presets/compare/@foray1010/babel-preset@9.1.0...@foray1010/babel-preset@9.1.1) (2022-09-28)

**Note:** Version bump only for package @foray1010/babel-preset

## [9.1.0](https://github.com/foray1010/common-presets/compare/@foray1010/babel-preset@9.0.2...@foray1010/babel-preset@9.1.0) (2022-09-22)

### Features

- **eslint-config:** explicitly import node.js only built-in modules ([969c1d2](https://github.com/foray1010/common-presets/commit/969c1d299a3d092eaa373ba9ceca4d7616076cfc))

## [9.0.2](https://github.com/foray1010/common-presets/compare/@foray1010/babel-preset@9.0.1...@foray1010/babel-preset@9.0.2) (2022-08-24)

**Note:** Version bump only for package @foray1010/babel-preset

## [9.0.1](https://github.com/foray1010/common-presets/compare/@foray1010/babel-preset@9.0.0...@foray1010/babel-preset@9.0.1) (2022-06-13)

### Bug Fixes

- should drop node 17 in version range ([0e911fd](https://github.com/foray1010/common-presets/commit/0e911fd737e472d699bfc32d866067ed6ccfa269))

## [9.0.0](https://github.com/foray1010/common-presets/compare/@foray1010/babel-preset@8.0.0...@foray1010/babel-preset@9.0.0) (2022-06-13)

### ⚠ BREAKING CHANGES

- drop node 12 and 17

### Miscellaneous Chores

- drop node 12 and 17 ([c43351e](https://github.com/foray1010/common-presets/commit/c43351e0da92209fc3100d9cb1bc129af320fdac))

## [8.0.0](https://github.com/foray1010/common-presets/compare/@foray1010/babel-preset@7.0.1...@foray1010/babel-preset@8.0.0) (2021-11-10)

### ⚠ BREAKING CHANGES

- only support node ^12.22.0 || ^14.17.0 || >=16.13.0

### Miscellaneous Chores

- bump node version requirement ([6906953](https://github.com/foray1010/common-presets/commit/6906953ac0b781376d5c8a17d27faef6a457278a))

### [7.0.1](https://github.com/foray1010/common-presets/compare/@foray1010/babel-preset@7.0.0...@foray1010/babel-preset@7.0.1) (2021-08-25)

**Note:** Version bump only for package @foray1010/babel-preset

## [7.0.0](https://github.com/foray1010/common-presets/compare/@foray1010/babel-preset@6.2.0...@foray1010/babel-preset@7.0.0) (2021-04-29)

### ⚠ BREAKING CHANGES

- drop node 10

### Bug Fixes

- **deps:** bump dependencies version ([4aa9919](https://github.com/foray1010/common-presets/commit/4aa99192c75a6b018e88f312246c7306953abc71))

### Miscellaneous Chores

- drop node 10 ([fc35a40](https://github.com/foray1010/common-presets/commit/fc35a406c7da58a192e32929723ec46cc17ae219))

# [6.2.0](https://github.com/foray1010/common-presets/compare/@foray1010/babel-preset@6.1.3...@foray1010/babel-preset@6.2.0) (2021-03-08)

### Bug Fixes

- explicitly throw error when cannot get env targets ([10a4dc2](https://github.com/foray1010/common-presets/commit/10a4dc26966e5f9d295b4d6d5a58061cb79fd8ad))
- remove optional peer dependencies from package.json ([886e5f1](https://github.com/foray1010/common-presets/commit/886e5f1ad9969dfc57a598dfc6ab77dc5bf7f401))

### Features

- enable react development mode for test env ([f6e260d](https://github.com/foray1010/common-presets/commit/f6e260dcf1d8919bb75f71e53cfb6fc2a02ae252))

## [6.1.3](https://github.com/foray1010/common-presets/compare/@foray1010/babel-preset@6.1.2...@foray1010/babel-preset@6.1.3) (2021-02-28)

**Note:** Version bump only for package @foray1010/babel-preset

## [6.1.2](https://github.com/foray1010/common-presets/compare/@foray1010/babel-preset@6.1.1...@foray1010/babel-preset@6.1.2) (2021-02-23)

**Note:** Version bump only for package @foray1010/babel-preset

## [6.1.1](https://github.com/foray1010/common-presets/compare/@foray1010/babel-preset@6.1.0...@foray1010/babel-preset@6.1.1) (2021-02-11)

**Note:** Version bump only for package @foray1010/babel-preset

# [6.1.0](https://github.com/foray1010/common-presets/compare/@foray1010/babel-preset@6.0.1...@foray1010/babel-preset@6.1.0) (2020-12-21)

### Features

- **babel-preset:** add options dependenciesModules ([233e7a3](https://github.com/foray1010/common-presets/commit/233e7a381f938347cb241c194affd83c484ad434))
- **babel-preset:** use @babel/preset-env auto modules ([3596fdb](https://github.com/foray1010/common-presets/commit/3596fdb7fc7d56b739cc6f655482c82affdefabd))

## [6.0.1](https://github.com/foray1010/common-presets/compare/@foray1010/babel-preset@6.0.0...@foray1010/babel-preset@6.0.1) (2020-11-20)

### Bug Fixes

- should require typescript 4.1 instead of 3 ([9947270](https://github.com/foray1010/common-presets/commit/99472709058ad49682f7fdf09668662c57b5bd0e))

# [6.0.0](https://github.com/foray1010/common-presets/compare/@foray1010/babel-preset@5.2.6...@foray1010/babel-preset@6.0.0) (2020-11-10)

### Features

- **babel-preset:** enable automatic react runtime ([7e62010](https://github.com/foray1010/common-presets/commit/7e620107f144b63fac1c4dcdec1be0e2f8b000c8))

### BREAKING CHANGES

- **babel-preset:** require react >=17

## [5.2.6](https://github.com/foray1010/common-presets/compare/@foray1010/babel-preset@5.2.5...@foray1010/babel-preset@5.2.6) (2020-10-28)

### Bug Fixes

- **babel-preset:** do not use esm babel runtime to avoid problem when output cjs build ([2bbf4a9](https://github.com/foray1010/common-presets/commit/2bbf4a98a65eb21fd556c0f68445f481e0cd4b75))

## [5.2.5](https://github.com/foray1010/common-presets/compare/@foray1010/babel-preset@5.2.4...@foray1010/babel-preset@5.2.5) (2020-09-11)

**Note:** Version bump only for package @foray1010/babel-preset

## [5.2.4](https://github.com/foray1010/common-presets/compare/@foray1010/babel-preset@5.2.3...@foray1010/babel-preset@5.2.4) (2020-08-26)

**Note:** Version bump only for package @foray1010/babel-preset

## [5.2.3](https://github.com/foray1010/common-presets/compare/@foray1010/babel-preset@5.2.2...@foray1010/babel-preset@5.2.3) (2020-08-19)

**Note:** Version bump only for package @foray1010/babel-preset

## [5.2.2](https://github.com/foray1010/common-presets/compare/@foray1010/babel-preset@5.2.1...@foray1010/babel-preset@5.2.2) (2020-08-04)

**Note:** Version bump only for package @foray1010/babel-preset

## [5.2.1](https://github.com/foray1010/common-presets/compare/@foray1010/babel-preset@5.2.0...@foray1010/babel-preset@5.2.1) (2020-08-03)

### Bug Fixes

- **babel-preset:** use commonjs for testing ([469c973](https://github.com/foray1010/common-presets/commit/469c973ea21f03cc9c726747b376808ec1e229a5))

# [5.2.0](https://github.com/foray1010/common-presets/compare/@foray1010/babel-preset@5.1.5...@foray1010/babel-preset@5.2.0) (2020-07-09)

### Features

- support export all as namespace ([6cad869](https://github.com/foray1010/common-presets/commit/6cad869410611dc22ad597244ad454f472ff39b8))

## [5.1.5](https://github.com/foray1010/common-presets/compare/@foray1010/babel-preset@5.1.4...@foray1010/babel-preset@5.1.5) (2020-07-06)

**Note:** Version bump only for package @foray1010/babel-preset

## [5.1.4](https://github.com/foray1010/common-presets/compare/@foray1010/babel-preset@5.1.3...@foray1010/babel-preset@5.1.4) (2020-06-25)

**Note:** Version bump only for package @foray1010/babel-preset

## [5.1.3](https://github.com/foray1010/common-presets/compare/@foray1010/babel-preset@5.1.2...@foray1010/babel-preset@5.1.3) (2020-06-25)

**Note:** Version bump only for package @foray1010/babel-preset

## [5.1.2](https://github.com/foray1010/common-presets/compare/@foray1010/babel-preset@5.1.1...@foray1010/babel-preset@5.1.2) (2020-06-25)

**Note:** Version bump only for package @foray1010/babel-preset

## [5.1.1](https://github.com/foray1010/common-presets/compare/@foray1010/babel-preset@5.1.0...@foray1010/babel-preset@5.1.1) (2020-06-24)

**Note:** Version bump only for package @foray1010/babel-preset

# [5.1.0](https://github.com/foray1010/common-presets/compare/@foray1010/babel-preset@5.0.1...@foray1010/babel-preset@5.1.0) (2020-06-03)

### Features

- **babel-preset:** enable bugfixes flag in preset env ([236a801](https://github.com/foray1010/common-presets/commit/236a801d8ad1e350da3ae62db0d731dfb75cd7a2))

## [5.0.1](https://github.com/foray1010/common-presets/compare/@foray1010/babel-preset@5.0.0...@foray1010/babel-preset@5.0.1) (2020-06-01)

### Bug Fixes

- make core-js optional for library ([6430288](https://github.com/foray1010/common-presets/commit/64302880cdaabfd07c16e54eebbab33034f63c41))

# [5.0.0](https://github.com/foray1010/common-presets/compare/@foray1010/babel-preset@4.0.1...@foray1010/babel-preset@5.0.0) (2020-06-01)

### Bug Fixes

- disable useBuiltIns for react as cannot use with useSpread ([22f1554](https://github.com/foray1010/common-presets/commit/22f15545a5b0d162f366e8adcbc8a824b2141fd5))

### Features

- **babel-preset:** auto detect min node version if no browsers config ([18f88df](https://github.com/foray1010/common-presets/commit/18f88dfed552cec240606a64b573d0ad4767271c))
- useESModules in transform-runtime ([41ac0a9](https://github.com/foray1010/common-presets/commit/41ac0a94583f6101c2da4cd956527907bf320044))
- **babel-preset:** enable allowDeclareFields in typescript ([1b4efd0](https://github.com/foray1010/common-presets/commit/1b4efd003d7e4eeabf39c3cee356f9a481636e8f))
- **babel-preset:** enable onlyRemoveTypeImports in typescript ([886e6bd](https://github.com/foray1010/common-presets/commit/886e6bd1bb126b49fae8a952c90baaf388ac53f9))
- **babel-preset:** use spread syntax for jsx props ([81895c0](https://github.com/foray1010/common-presets/commit/81895c033a024eee72f8d816019cf975b71d8d8f))

### BREAKING CHANGES

- **babel-preset:** require typescript >=3.8.0

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
