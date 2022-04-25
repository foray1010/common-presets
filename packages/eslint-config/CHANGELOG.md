# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [6.3.0](https://github.com/foray1010/common-presets/compare/@foray1010/eslint-config@6.2.0...@foray1010/eslint-config@6.3.0) (2022-04-25)

### Features

- enable testing-library/no-global-regexp-flag-in-query ([6343da2](https://github.com/foray1010/common-presets/commit/6343da2038fca9c5ef03aa2ae02129f42ff00b82))
- reenable testing-library/no-await-sync-events for fire events only ([966eb24](https://github.com/foray1010/common-presets/commit/966eb24ad9c3f7b15cb3c856de61516dace2075b))

### Bug Fixes

- **eslint-config:** use jsx-runtime config from react plugin ([806e1ab](https://github.com/foray1010/common-presets/commit/806e1ab25ac42b0bb5a269e01eef659bc12aa616))

## [6.2.0](https://github.com/foray1010/common-presets/compare/@foray1010/eslint-config@6.1.3...@foray1010/eslint-config@6.2.0) (2022-04-05)

### Features

- enable testing-library/prefer-user-event ([5a1de13](https://github.com/foray1010/common-presets/commit/5a1de1348fbc591a35559d5710185487d6b31a87))

### Bug Fixes

- disable no-await-sync-events for @testing-library/user-event v14 ([372a3b5](https://github.com/foray1010/common-presets/commit/372a3b597f5cca2f53bbc895cd0e3da3c051263a))

### [6.1.3](https://github.com/foray1010/common-presets/compare/@foray1010/eslint-config@6.1.2...@foray1010/eslint-config@6.1.3) (2022-03-20)

### Bug Fixes

- **deps:** update dependency eslint-plugin-jsdoc to v38 ([294bd8b](https://github.com/foray1010/common-presets/commit/294bd8b03ee7c94e6e2fe6aad4a60c4d3654c7ca))

### [6.1.2](https://github.com/foray1010/common-presets/compare/@foray1010/eslint-config@6.1.1...@foray1010/eslint-config@6.1.2) (2022-03-07)

### Bug Fixes

- allow using async function as event handler in frontend ([6722b08](https://github.com/foray1010/common-presets/commit/6722b08a659e82bfdc8cba8fc1d0c9cd1d396d03))
- **deps:** update dependency eslint-plugin-jest to v26 ([cee6be9](https://github.com/foray1010/common-presets/commit/cee6be913cee626709053989f2545780e0d46bb0))

### [6.1.1](https://github.com/foray1010/common-presets/compare/@foray1010/eslint-config@6.1.0...@foray1010/eslint-config@6.1.1) (2022-01-09)

### Bug Fixes

- **deps:** update dependency eslint-plugin-compat to v4 ([4b6ee6b](https://github.com/foray1010/common-presets/commit/4b6ee6bc480cf396d047170fc75e53d01ea5886f))
- **deps:** update dependency eslint-plugin-jest-dom to v4 ([2396973](https://github.com/foray1010/common-presets/commit/23969736c9e263f923521115b8104275a755a082))

## [6.1.0](https://github.com/foray1010/common-presets/compare/@foray1010/eslint-config@6.0.1...@foray1010/eslint-config@6.1.0) (2021-11-10)

### Features

- use error level for @typescript-eslint/no-unused-vars ([c635963](https://github.com/foray1010/common-presets/commit/c635963db88a75d8a0c61fda55f8e4c61b33766f))

### Bug Fixes

- disable @typescript-eslint/no-unsafe-argument ([ecad97d](https://github.com/foray1010/common-presets/commit/ecad97d960ab4545f981e79b7c24589ff150f7e1))
- disable buggy react/prop-types ([bec417b](https://github.com/foray1010/common-presets/commit/bec417b909c9abf9b54dcff298c250f1430d318e))

### [6.0.1](https://github.com/foray1010/common-presets/compare/@foray1010/eslint-config@6.0.0...@foray1010/eslint-config@6.0.1) (2021-11-10)

### Bug Fixes

- replace @typescript-eslint/no-unused-vars-experimental by @typescript-eslint/no-unused-vars ([cdff12f](https://github.com/foray1010/common-presets/commit/cdff12fe2f503187a0e8b03588bdc79279fbfea2))

## [6.0.0](https://github.com/foray1010/common-presets/compare/@foray1010/eslint-config@5.0.4...@foray1010/eslint-config@6.0.0) (2021-11-10)

### ⚠ BREAKING CHANGES

- only support node ^12.22.0 || ^14.17.0 || >=16.13.0
- **deps:** require eslint >=7.28.0

### Features

- support .cts and .mts ([bac92f3](https://github.com/foray1010/common-presets/commit/bac92f3d9315af4b8a51848a0cb5c3061ef49f20))

### Bug Fixes

- **deps:** update dependency eslint-plugin-jest to v25 ([8fb9f81](https://github.com/foray1010/common-presets/commit/8fb9f818e19cf8c3c7efa5c862adcb22c433c5e4))
- **deps:** update dependency eslint-plugin-jsdoc to v37 ([bcd1cef](https://github.com/foray1010/common-presets/commit/bcd1cefb4b918cf70724c9849ac20746f0f15fa1))
- **deps:** update dependency eslint-plugin-prettier to v4 ([aa2e33e](https://github.com/foray1010/common-presets/commit/aa2e33e7406739ddde0141a4ad9c77685e4b7d31))
- **deps:** update dependency eslint-plugin-testing-library to v5 ([19f7db5](https://github.com/foray1010/common-presets/commit/19f7db54f1c4c5993d0b5f885ced436c06a4e3dd))
- **deps:** update typescript-eslint monorepo to v5 ([36d4840](https://github.com/foray1010/common-presets/commit/36d4840c107d483780ee6cf0e227be73d82bb918))

### Miscellaneous Chores

- bump node version requirement ([6906953](https://github.com/foray1010/common-presets/commit/6906953ac0b781376d5c8a17d27faef6a457278a))

### [5.0.4](https://github.com/foray1010/common-presets/compare/@foray1010/eslint-config@5.0.3...@foray1010/eslint-config@5.0.4) (2021-08-26)

### Bug Fixes

- disable @typescript-eslint/restrict-plus-operands ([7a8732d](https://github.com/foray1010/common-presets/commit/7a8732d11a23479a4a1a3bdc74e5f40a15d38da9))

### [5.0.3](https://github.com/foray1010/common-presets/compare/@foray1010/eslint-config@5.0.2...@foray1010/eslint-config@5.0.3) (2021-08-26)

### Bug Fixes

- disable @typescript-eslint/restrict-template-expressions ([a1fccfd](https://github.com/foray1010/common-presets/commit/a1fccfdde7ccb3d663cc96702a98d1dac9b2c169))

### [5.0.2](https://github.com/foray1010/common-presets/compare/@foray1010/eslint-config@5.0.1...@foray1010/eslint-config@5.0.2) (2021-08-25)

### Bug Fixes

- **deps:** update dependency eslint-plugin-jsdoc to v34 ([7ea9378](https://github.com/foray1010/common-presets/commit/7ea937870d6e8bffd76f94eda43ec2d0ded0a859))
- **deps:** update dependency eslint-plugin-jsdoc to v35 ([2e76ed2](https://github.com/foray1010/common-presets/commit/2e76ed2f13ad5ae6871c92eee2bc4b96c5a63ee9))
- **deps:** update dependency eslint-plugin-jsdoc to v36 ([eb2f739](https://github.com/foray1010/common-presets/commit/eb2f739e70ee1c5273c2359a40e92c9e314e8878))
- opt-in single run detection for type-aware linting ([41a9957](https://github.com/foray1010/common-presets/commit/41a9957474a454d0540868296dedb528e93f1dde))

### [5.0.1](https://github.com/foray1010/common-presets/compare/@foray1010/eslint-config@5.0.0...@foray1010/eslint-config@5.0.1) (2021-05-08)

### Bug Fixes

- **deps:** update dependency eslint-plugin-jsdoc to v33 ([8129f8f](https://github.com/foray1010/common-presets/commit/8129f8fc74380c7f6ccb5ac53cdae38b84068912))
- **deps:** update dependency eslint-plugin-testing-library to v4.2.0 ([8767be6](https://github.com/foray1010/common-presets/commit/8767be64c0053c50a1f77f91d5d4fdc6173bd444))

## [5.0.0](https://github.com/foray1010/common-presets/compare/@foray1010/eslint-config@4.9.0...@foray1010/eslint-config@5.0.0) (2021-04-29)

### ⚠ BREAKING CHANGES

- drop node 10

### Features

- add more rules via eslint-plugin-testing-library v4 ([4777ac2](https://github.com/foray1010/common-presets/commit/4777ac2cc5e644ece83a8722ad82e9040ddcd9fa))

### Bug Fixes

- **deps:** bump dependencies version ([4aa9919](https://github.com/foray1010/common-presets/commit/4aa99192c75a6b018e88f312246c7306953abc71))

### Miscellaneous Chores

- drop node 10 ([fc35a40](https://github.com/foray1010/common-presets/commit/fc35a406c7da58a192e32929723ec46cc17ae219))

# [4.9.0](https://github.com/foray1010/common-presets/compare/@foray1010/eslint-config@4.8.1...@foray1010/eslint-config@4.9.0) (2021-04-22)

### Features

- enforce import with extension for esm ([298b4ac](https://github.com/foray1010/common-presets/commit/298b4ace6f3cd75051111675596ab9689a13b3b9))

## [4.8.1](https://github.com/foray1010/common-presets/compare/@foray1010/eslint-config@4.8.0...@foray1010/eslint-config@4.8.1) (2021-03-17)

### Bug Fixes

- disable no-unnecessary-condition to prevent false alarms ([7bb9669](https://github.com/foray1010/common-presets/commit/7bb9669bf102027e1c2167616f2c975cf743c7b5))

# [4.8.0](https://github.com/foray1010/common-presets/compare/@foray1010/eslint-config@4.7.0...@foray1010/eslint-config@4.8.0) (2021-03-17)

### Features

- ban [@ts-ignore](https://github.com/ts-ignore) and use [@ts-expect-error](https://github.com/ts-expect-error) with descriptions ([2768348](https://github.com/foray1010/common-presets/commit/2768348dd42b1ca11db3a0415e9dd9170c320edb))
- encourage to check error type before use in catch clauses ([c8e4d17](https://github.com/foray1010/common-presets/commit/c8e4d17b2e3ec6e7c4a91bdda66e3d26ddb1d3f4))
- encourage to use private accessibility modifier ([e798816](https://github.com/foray1010/common-presets/commit/e7988160677f79d5226eb1d687fe51a9b4f6f2fa))
- prevent unnecessary optional chain ([7cda6c1](https://github.com/foray1010/common-presets/commit/7cda6c10ea55d22b92c9c96d460b198df5171729))

# [4.7.0](https://github.com/foray1010/common-presets/compare/@foray1010/eslint-config@4.6.2...@foray1010/eslint-config@4.7.0) (2021-03-11)

### Features

- **eslint-config:** avoid assigning anonymous function to object key ([8747450](https://github.com/foray1010/common-presets/commit/874745030157e9386bd7b3fe40d29bde6811bfad))

## [4.6.2](https://github.com/foray1010/common-presets/compare/@foray1010/eslint-config@4.6.1...@foray1010/eslint-config@4.6.2) (2021-03-08)

### Bug Fixes

- remove optional peer dependencies from package.json ([886e5f1](https://github.com/foray1010/common-presets/commit/886e5f1ad9969dfc57a598dfc6ab77dc5bf7f401))

## [4.6.1](https://github.com/foray1010/common-presets/compare/@foray1010/eslint-config@4.6.0...@foray1010/eslint-config@4.6.1) (2021-02-28)

### Bug Fixes

- **deps:** update dependency eslint-config-prettier to v8 ([#237](https://github.com/foray1010/common-presets/issues/237)) ([b827b6f](https://github.com/foray1010/common-presets/commit/b827b6f7d84dcaa0a6f44020b6a7eda85496efd4))

# [4.6.0](https://github.com/foray1010/common-presets/compare/@foray1010/eslint-config@4.5.1...@foray1010/eslint-config@4.6.0) (2021-02-23)

### Bug Fixes

- **deps:** update dependency eslint-plugin-jsdoc to v32 ([db87ced](https://github.com/foray1010/common-presets/commit/db87ced032349ccc26df54f87652f97ae9491e7e))

### Features

- ignore files under .yarn/ ([e3487a7](https://github.com/foray1010/common-presets/commit/e3487a7191307b311fcd4f53a08ec8fcbb9efc7a))

## [4.5.1](https://github.com/foray1010/common-presets/compare/@foray1010/eslint-config@4.5.0...@foray1010/eslint-config@4.5.1) (2021-02-12)

### Bug Fixes

- allow disable eslint rules for whole file without re-enable it in the end of the file ([fb182ed](https://github.com/foray1010/common-presets/commit/fb182edddacafe769904f954a55ee1ba4a8022d8))

# [4.5.0](https://github.com/foray1010/common-presets/compare/@foray1010/eslint-config@4.4.1...@foray1010/eslint-config@4.5.0) (2021-02-11)

### Bug Fixes

- **deps:** update dependency eslint-plugin-jsdoc to v31 ([fb32330](https://github.com/foray1010/common-presets/commit/fb32330904f3635af35a42afd5195b4d6ae529d4))

### Features

- **eslint-config:** lint eslint comments ([ef45fc4](https://github.com/foray1010/common-presets/commit/ef45fc427cd142ec0280756e32e1f907f77f32fe))

## [4.4.1](https://github.com/foray1010/common-presets/compare/@foray1010/eslint-config@4.4.0...@foray1010/eslint-config@4.4.1) (2020-12-21)

### Bug Fixes

- **deps:** update dependency eslint-config-prettier to v7 ([7e57ccd](https://github.com/foray1010/common-presets/commit/7e57ccd12a3e40b83ca062377f8bf9c0da2bc607))
- **deps:** update dependency eslint-plugin-simple-import-sort to v7 ([5514a06](https://github.com/foray1010/common-presets/commit/5514a06e4b6048fe848ec3d24e417568e3f2e127))

# [4.4.0](https://github.com/foray1010/common-presets/compare/@foray1010/eslint-config@4.3.1...@foray1010/eslint-config@4.4.0) (2020-11-19)

### Features

- make sure import statements above the others with line break ([85ef3d2](https://github.com/foray1010/common-presets/commit/85ef3d2341fbb9819539081a83f4c53bc02595ca))
- **eslint-config:** sort export statements ([78e4f6a](https://github.com/foray1010/common-presets/commit/78e4f6ae2ead8d13ba82c84dbfa68b5ee823a56f))

## [4.3.1](https://github.com/foray1010/common-presets/compare/@foray1010/eslint-config@4.3.0...@foray1010/eslint-config@4.3.1) (2020-11-18)

### Bug Fixes

- **eslint-config:** failed to import react preset ([2864f6a](https://github.com/foray1010/common-presets/commit/2864f6ab4310de117309ff7432a2de5c5debeae6))

# [4.3.0](https://github.com/foray1010/common-presets/compare/@foray1010/eslint-config@4.2.0...@foray1010/eslint-config@4.3.0) (2020-11-17)

### Features

- avoid side effects inside `waitFor` ([7fccfe7](https://github.com/foray1010/common-presets/commit/7fccfe733a08c385d87e7af17528ea79c6c5788b))
- avoid using unnecessary `await` as workaround for `not wrapped in act(...)` warnings ([a060161](https://github.com/foray1010/common-presets/commit/a060161efb9cef788b3a032fe7f00e2b431085f9))

# [4.2.0](https://github.com/foray1010/common-presets/compare/@foray1010/eslint-config@4.1.1...@foray1010/eslint-config@4.2.0) (2020-11-17)

### Features

- **eslint-config:** lint browser compatibility ([1059794](https://github.com/foray1010/common-presets/commit/1059794652cbed74e5075c148e6dccb270f9539d))
- **eslint-config:** lint JSDoc ([96a91b6](https://github.com/foray1010/common-presets/commit/96a91b6858866df237f33b73c6a6df094d095839))

## [4.1.1](https://github.com/foray1010/common-presets/compare/@foray1010/eslint-config@4.1.0...@foray1010/eslint-config@4.1.1) (2020-11-10)

### Bug Fixes

- **eslint-config:** disable react/react-in-jsx-scope for automatic react runtime ([71e0a5b](https://github.com/foray1010/common-presets/commit/71e0a5bb1b33d04f18cb866cd5dd21290bbb6ef4))

# [4.1.0](https://github.com/foray1010/common-presets/compare/@foray1010/eslint-config@4.0.1...@foray1010/eslint-config@4.1.0) (2020-10-28)

### Features

- **eslint-config:** enable react/jsx-no-useless-fragment ([c7c4b31](https://github.com/foray1010/common-presets/commit/c7c4b31fc663501aec2ca85e026630e82196f922))

## [4.0.1](https://github.com/foray1010/common-presets/compare/@foray1010/eslint-config@4.0.0...@foray1010/eslint-config@4.0.1) (2020-09-11)

### Bug Fixes

- generic type does not work with react-hooks/exhaustive-deps ([253c7fa](https://github.com/foray1010/common-presets/commit/253c7faa574d6bb84aad0ab4c4a3b8258401d4b2))

# [4.0.0](https://github.com/foray1010/common-presets/compare/@foray1010/eslint-config@3.9.0...@foray1010/eslint-config@4.0.0) (2020-09-06)

### Bug Fixes

- **deps:** update eslint-plugin-jest to v24 ([eb05452](https://github.com/foray1010/common-presets/commit/eb05452c5f7c24843926d278c9a0be1badb04c88))
- **deps:** update typescript-eslint monorepo to v4 ([8519d78](https://github.com/foray1010/common-presets/commit/8519d78d4e4b145da0f0991e38e9b970b43461a5))
- **eslint-config:** only run test related rules on test files ([fcba1dd](https://github.com/foray1010/common-presets/commit/fcba1ddc79d8e437abecd3f48b194fb3592e03e4))

### BREAKING CHANGES

- **deps:** require eslint >=7.5.0

# [3.9.0](https://github.com/foray1010/common-presets/compare/@foray1010/eslint-config@3.8.1...@foray1010/eslint-config@3.9.0) (2020-08-28)

### Features

- enforce named data to improve import autocomplete & debug stack trace ([b698a29](https://github.com/foray1010/common-presets/commit/b698a294aa861fe0408d43a2b1fa3e2cf235cd1c))

## [3.8.1](https://github.com/foray1010/common-presets/compare/@foray1010/eslint-config@3.8.0...@foray1010/eslint-config@3.8.1) (2020-08-26)

### Bug Fixes

- remove react/sort-prop-types as it does not support TS ([6dd94eb](https://github.com/foray1010/common-presets/commit/6dd94ebfa1abee2feb46bf5890960d94feebe752))

# [3.8.0](https://github.com/foray1010/common-presets/compare/@foray1010/eslint-config@3.7.1...@foray1010/eslint-config@3.8.0) (2020-08-26)

### Features

- **eslint-config:** sort jsx props and prop-types ([cf2465b](https://github.com/foray1010/common-presets/commit/cf2465b72f7a8739bea8d8ef165d7ee4f6d75937))

## [3.7.1](https://github.com/foray1010/common-presets/compare/@foray1010/eslint-config@3.7.0...@foray1010/eslint-config@3.7.1) (2020-08-19)

### Bug Fixes

- **eslint-config:** allow using testing library's act without await ([e8f42ee](https://github.com/foray1010/common-presets/commit/e8f42ee4828f5a2a41e2e287f55c83aabd0c0627))
- **eslint-config:** disable no-invalid-void-type on all tests ([9b79677](https://github.com/foray1010/common-presets/commit/9b796770461ee2e61ae61bb3c8891f4d46f6a745))

# [3.7.0](https://github.com/foray1010/common-presets/compare/@foray1010/eslint-config@3.6.0...@foray1010/eslint-config@3.7.0) (2020-08-08)

### Bug Fixes

- **eslint-config:** allow config rc files to import devDependencies ([91c88d9](https://github.com/foray1010/common-presets/commit/91c88d941fd48a87abe93b4213c14661de7b9290))
- **eslint-config:** allow files outside of src/ to import devDependencies ([3e203ba](https://github.com/foray1010/common-presets/commit/3e203ba99162ad5b1b2231db079a382315d54bb9))

### Features

- **eslint-config:** do not allow import non-dependencies but allow tests to import devDependencies ([0654f63](https://github.com/foray1010/common-presets/commit/0654f63c77063bfe4800be88da8b421f563a6ae3))
- **eslint-config:** use the shortest path in import statement ([52032c2](https://github.com/foray1010/common-presets/commit/52032c2d2156e0b23794e71befdbb59fee425b78))

# [3.6.0](https://github.com/foray1010/common-presets/compare/@foray1010/eslint-config@3.5.0...@foray1010/eslint-config@3.6.0) (2020-08-04)

### Features

- **eslint-config:** add more rules for testing-library ([deded23](https://github.com/foray1010/common-presets/commit/deded23d0cbb717d47ccf61b26937e55bc730ea5))

# [3.5.0](https://github.com/foray1010/common-presets/compare/@foray1010/eslint-config@3.4.0...@foray1010/eslint-config@3.5.0) (2020-08-04)

### Features

- **eslint-config:** supports linting hook dependencies for package `use-deep-compare` ([1def9bb](https://github.com/foray1010/common-presets/commit/1def9bba7e239ef351e34fced89e5a4fa250ea16))

# [3.4.0](https://github.com/foray1010/common-presets/compare/@foray1010/eslint-config@3.3.0...@foray1010/eslint-config@3.4.0) (2020-06-25)

### Features

- support ES2020 ([1aaec79](https://github.com/foray1010/common-presets/commit/1aaec79fc9f2954319ef5c915a007b9fc34ce0d1))

# [3.3.0](https://github.com/foray1010/common-presets/compare/@foray1010/eslint-config@3.2.2...@foray1010/eslint-config@3.3.0) (2020-06-25)

### Features

- support seperated tsconfig in monorepo ([20ebb75](https://github.com/foray1010/common-presets/commit/20ebb757bf138e8468586232e6618304975afe97))

## [3.2.2](https://github.com/foray1010/common-presets/compare/@foray1010/eslint-config@3.2.1...@foray1010/eslint-config@3.2.2) (2020-06-25)

**Note:** Version bump only for package @foray1010/eslint-config

## [3.2.1](https://github.com/foray1010/common-presets/compare/@foray1010/eslint-config@3.2.0...@foray1010/eslint-config@3.2.1) (2020-06-25)

### Bug Fixes

- disable no-invalid-void-type for test files ([3449625](https://github.com/foray1010/common-presets/commit/34496259737701f1a445212fb391d84551d8369e))

# [3.2.0](https://github.com/foray1010/common-presets/compare/@foray1010/eslint-config@3.1.0...@foray1010/eslint-config@3.2.0) (2020-06-24)

### Features

- enforce correct usage of `void` type ([df1652e](https://github.com/foray1010/common-presets/commit/df1652ec9d9fd76afb6caefce4c0f1477041b20a))
- eslint throw error on used variables and types ([3f5a17a](https://github.com/foray1010/common-presets/commit/3f5a17a27d22ff5de6658b2ba958a263d4065a9c))

# [3.1.0](https://github.com/foray1010/common-presets/compare/@foray1010/eslint-config@3.0.5...@foray1010/eslint-config@3.1.0) (2020-06-21)

### Features

- enable node/no-exports-assign ([bfa0067](https://github.com/foray1010/common-presets/commit/bfa0067c2143f746b28c1d393cbff12af9f6b622))
- enable node/no-unpublished-bin ([cdd5842](https://github.com/foray1010/common-presets/commit/cdd5842ea97a6864583c89e92b31c7d9c28b5117))
- enable node/no-unsupported-features/node-builtins ([4784ac6](https://github.com/foray1010/common-presets/commit/4784ac60cfd622e59fff1c4a2dc6f09aa838a30c))
- use eslint-plugin-jest-dom with recommended config ([b7b7458](https://github.com/foray1010/common-presets/commit/b7b7458841fc92bbb6875e7edaaf97a3fc577776))

## [3.0.5](https://github.com/foray1010/common-presets/compare/@foray1010/eslint-config@3.0.4...@foray1010/eslint-config@3.0.5) (2020-06-17)

**Note:** Version bump only for package @foray1010/eslint-config

## [3.0.4](https://github.com/foray1010/common-presets/compare/@foray1010/eslint-config@3.0.3...@foray1010/eslint-config@3.0.4) (2020-06-02)

### Bug Fixes

- **eslint-config:** disable @typescript-eslint/no-unsafe-member-access ([6a1479b](https://github.com/foray1010/common-presets/commit/6a1479b06a172bc4ed1d6320a77585b624974b94))

## [3.0.3](https://github.com/foray1010/common-presets/compare/@foray1010/eslint-config@3.0.2...@foray1010/eslint-config@3.0.3) (2020-06-02)

### Bug Fixes

- **eslint-config:** follow @typescript-eslint/eslint-plugin rule changes ([876413b](https://github.com/foray1010/common-presets/commit/876413beb9e2328c601acc8015f206c7fa10776d))

## [3.0.2](https://github.com/foray1010/common-presets/compare/@foray1010/eslint-config@3.0.1...@foray1010/eslint-config@3.0.2) (2020-06-02)

### Bug Fixes

- **eslint-config:** follow @typescript-eslint/eslint-plugin rule changes ([ea317dd](https://github.com/foray1010/common-presets/commit/ea317dd592796b03678de99aa5e95da2afb9733d))

## [3.0.1](https://github.com/foray1010/common-presets/compare/@foray1010/eslint-config@3.0.0...@foray1010/eslint-config@3.0.1) (2020-06-01)

**Note:** Version bump only for package @foray1010/eslint-config

# [3.0.0](https://github.com/foray1010/common-presets/compare/@foray1010/eslint-config@2.3.2...@foray1010/eslint-config@3.0.0) (2020-06-01)

### Bug Fixes

- **deps:** update typescript-eslint monorepo to v3 ([221565d](https://github.com/foray1010/common-presets/commit/221565dde29ab2fc3e9e5cedf66e10c957872e00))

### BREAKING CHANGES

- **deps:** require typescript >=3.3.1

## [2.3.2](https://github.com/foray1010/common-presets/compare/@foray1010/eslint-config@2.3.1...@foray1010/eslint-config@2.3.2) (2020-05-21)

**Note:** Version bump only for package @foray1010/eslint-config

## [2.3.1](https://github.com/foray1010/common-presets/compare/@foray1010/eslint-config@2.3.0...@foray1010/eslint-config@2.3.1) (2020-05-05)

**Note:** Version bump only for package @foray1010/eslint-config

# [2.3.0](https://github.com/foray1010/common-presets/compare/@foray1010/eslint-config@2.2.2...@foray1010/eslint-config@2.3.0) (2020-05-05)

### Features

- **eslint:** lint react code using eslint-plugin-testing-library ([a7f0fd3](https://github.com/foray1010/common-presets/commit/a7f0fd33d704deef81a1aa9523a8ffdc738217bc))

## [2.2.2](https://github.com/foray1010/common-presets/compare/@foray1010/eslint-config@2.2.1...@foray1010/eslint-config@2.2.2) (2020-05-05)

### Bug Fixes

- **deps:** update dependency eslint-plugin-react-hooks to v4 ([ea6ba0c](https://github.com/foray1010/common-presets/commit/ea6ba0c65235df8dd96f78c4a77592bb97d44b84))

## [2.2.1](https://github.com/foray1010/common-presets/compare/@foray1010/eslint-config@2.2.0...@foray1010/eslint-config@2.2.1) (2020-03-31)

### Bug Fixes

- **deps:** update dependency eslint-plugin-react-hooks to v3 ([ae3b074](https://github.com/foray1010/common-presets/commit/ae3b0745b1770b28c232f8dcdd4a2102947ae126))

# [2.2.0](https://github.com/foray1010/common-presets/compare/@foray1010/eslint-config@2.1.1...@foray1010/eslint-config@2.2.0) (2020-03-28)

### Features

- **eslint-config:** support prettier v2 ([89cb0ec](https://github.com/foray1010/common-presets/commit/89cb0ec29fe74e987eeccca88591b25fc8156370))

## [2.1.1](https://github.com/foray1010/common-presets/compare/@foray1010/eslint-config@2.1.0...@foray1010/eslint-config@2.1.1) (2020-03-28)

### Bug Fixes

- **deps:** update dependency remark-preset-prettier to ^0.4.0 ([dc5a5f5](https://github.com/foray1010/common-presets/commit/dc5a5f5dfee27aff585e0e8335967b1af5fc3d89))
- **deps:** update dependency stylelint-config-standard to v20 ([#63](https://github.com/foray1010/common-presets/issues/63)) ([85e2c34](https://github.com/foray1010/common-presets/commit/85e2c3471f5db816958c1720b0d713665e13ac84))

# [2.1.0](https://github.com/foray1010/common-presets/compare/@foray1010/eslint-config@2.0.2...@foray1010/eslint-config@2.1.0) (2020-01-06)

### Features

- replace import-sort-cli by eslint-plugin-simple-import-sort ([d1c8580](https://github.com/foray1010/common-presets/commit/d1c858043bc0376442daf72551d4ea60cda1a6b5))

## [2.0.2](https://github.com/foray1010/common-presets/compare/@foray1010/eslint-config@2.0.1...@foray1010/eslint-config@2.0.2) (2019-12-30)

### Bug Fixes

- **deps:** update dependency eslint-plugin-node to v11 ([#44](https://github.com/foray1010/common-presets/issues/44)) ([1844527](https://github.com/foray1010/common-presets/commit/18445278c9191337ab8e8828b0fb02db43caa946))

## [2.0.1](https://github.com/foray1010/common-presets/compare/@foray1010/eslint-config@2.0.0...@foray1010/eslint-config@2.0.1) (2019-12-16)

### Bug Fixes

- **eslint-config:** allow empty function ([fd124d0](https://github.com/foray1010/common-presets/commit/fd124d0a6af7a5e4d7ed44da087ae42cb83d7bd1))

# [2.0.0](https://github.com/foray1010/common-presets/compare/@foray1010/eslint-config@1.9.1...@foray1010/eslint-config@2.0.0) (2019-12-10)

### chore

- require nodejs 10 ([0a227b0](https://github.com/foray1010/common-presets/commit/0a227b09864d37082ac0167a13580eef3c32a85c))

### BREAKING CHANGES

- drop nodejs < 10.13

## [1.9.1](https://github.com/foray1010/common-presets/compare/@foray1010/eslint-config@1.9.0...@foray1010/eslint-config@1.9.1) (2019-11-27)

### Bug Fixes

- **deps:** update dependency stylelint-config-css-modules to v2 ([#20](https://github.com/foray1010/common-presets/issues/20)) ([47bb787](https://github.com/foray1010/common-presets/commit/47bb787d75d962e738d47e559bf7bc8462e45607))

# [1.9.0](https://github.com/foray1010/common-presets/compare/@foray1010/eslint-config@1.8.3...@foray1010/eslint-config@1.9.0) (2019-11-05)

### Features

- move typescript to peerDependencies ([48c53b5](https://github.com/foray1010/common-presets/commit/48c53b59f6ceabd6363f9440b9e376b921d048fe))

## [1.8.3](https://github.com/foray1010/common-presets/compare/@foray1010/eslint-config@1.8.2...@foray1010/eslint-config@1.8.3) (2019-11-03)

### Bug Fixes

- **deps:** update dependency eslint-plugin-jest to v23 ([#18](https://github.com/foray1010/common-presets/issues/18)) ([019eabe](https://github.com/foray1010/common-presets/commit/019eabef326e92779390c77fb955da1a60ec39a7))

## [1.8.2](https://github.com/foray1010/common-presets/compare/@foray1010/eslint-config@1.8.1...@foray1010/eslint-config@1.8.2) (2019-10-28)

**Note:** Version bump only for package @foray1010/eslint-config

## [1.8.1](https://github.com/foray1010/common-presets/compare/@foray1010/eslint-config@1.8.0...@foray1010/eslint-config@1.8.1) (2019-10-28)

**Note:** Version bump only for package @foray1010/eslint-config

# [1.8.0](https://github.com/foray1010/common-presets/compare/@foray1010/eslint-config@1.7.0...@foray1010/eslint-config@1.8.0) (2019-10-27)

### Bug Fixes

- **eslint-config:** add browser env to react preset ([f1c9ebc](https://github.com/foray1010/common-presets/commit/f1c9ebc7adfd8fbb3280fa02d19e11e5ceee9e7c))

### Features

- use eslint-plugin-node ([2faccbb](https://github.com/foray1010/common-presets/commit/2faccbb738ec94aa99e8c8c8b0fac163ca489124))

# [1.7.0](https://github.com/foray1010/common-presets/compare/@foray1010/eslint-config@1.6.0...@foray1010/eslint-config@1.7.0) (2019-10-25)

### Features

- support packageJson.type & cjs format ([fcb8920](https://github.com/foray1010/common-presets/commit/fcb8920cbbc8128e67f1ee3a003c8a887d8ed590))

# [1.6.0](https://github.com/foray1010/common-presets/compare/@foray1010/eslint-config@1.5.0...@foray1010/eslint-config@1.6.0) (2019-10-16)

### Features

- stricter peerDependencies range ([52f58bc](https://github.com/foray1010/common-presets/commit/52f58bc1e6ad87b544730ef7320be2c052d4d34d))

# [1.5.0](https://github.com/foray1010/common-presets/compare/@foray1010/eslint-config@1.4.0...@foray1010/eslint-config@1.5.0) (2019-10-16)

### Features

- **eslint-config:** support \*.mjs ([eb38214](https://github.com/foray1010/common-presets/commit/eb382146b8895734f6349538073d4094ad3b624b))
- lint all hidden files ([e695ea3](https://github.com/foray1010/common-presets/commit/e695ea3c8ba2a5862d0c80cd4b0a19e2bd3f2bfc))

# [1.4.0](https://github.com/foray1010/common-presets/compare/@foray1010/eslint-config@1.3.1...@foray1010/eslint-config@1.4.0) (2019-10-15)

### Features

- **eslint-config:** do not ignore hidden files ([1720acf](https://github.com/foray1010/common-presets/commit/1720acf4880547f93c09847fad295fd5d627712e))

## [1.3.1](https://github.com/foray1010/common-presets/compare/@foray1010/eslint-config@1.3.0...@foray1010/eslint-config@1.3.1) (2019-10-15)

**Note:** Version bump only for package @foray1010/eslint-config

# [1.3.0](https://github.com/foray1010/common-presets/compare/@foray1010/eslint-config@1.2.4...@foray1010/eslint-config@1.3.0) (2019-10-11)

### Features

- add default ignore file ([e59de5a](https://github.com/foray1010/common-presets/commit/e59de5a))

## [1.2.4](https://github.com/foray1010/common-presets/compare/@foray1010/eslint-config@1.2.3...@foray1010/eslint-config@1.2.4) (2019-10-11)

**Note:** Version bump only for package @foray1010/eslint-config

## [1.2.3](https://github.com/foray1010/common-presets/compare/@foray1010/eslint-config@1.2.2...@foray1010/eslint-config@1.2.3) (2019-10-07)

### Bug Fixes

- missing typescript dependency for [@typescript-eslint](https://github.com/typescript-eslint) rules ([8462e8f](https://github.com/foray1010/common-presets/commit/8462e8f))

## [1.2.2](https://github.com/foray1010/common-presets/compare/@foray1010/eslint-config@1.2.1...@foray1010/eslint-config@1.2.2) (2019-10-05)

### Bug Fixes

- **eslint-config:** allow es6 globals ([e21782b](https://github.com/foray1010/common-presets/commit/e21782b))

## [1.2.1](https://github.com/foray1010/common-presets/compare/@foray1010/eslint-config@1.2.0...@foray1010/eslint-config@1.2.1) (2019-10-05)

### Bug Fixes

- **eslint-config:** do not lint jest coding style ([8ad8d01](https://github.com/foray1010/common-presets/commit/8ad8d01))

# [1.2.0](https://github.com/foray1010/common-presets/compare/@foray1010/eslint-config@1.1.0...@foray1010/eslint-config@1.2.0) (2019-10-05)

### Features

- **eslint-config:** allow commonjs syntax ([c36e8bb](https://github.com/foray1010/common-presets/commit/c36e8bb))
- **eslint-config:** apply eslint-plugin-prettier ([5e4be00](https://github.com/foray1010/common-presets/commit/5e4be00))
- **eslint-config:** enforce js strict mode ([a198729](https://github.com/foray1010/common-presets/commit/a198729))

# 1.1.0 (2019-10-04)

### Features

- **eslint-config:** add rules ([e5ebb05](https://github.com/foray1010/common-presets/commit/e5ebb05))
