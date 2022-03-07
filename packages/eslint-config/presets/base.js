'use strict'

const { hasDep, isESM } = require('@foray1010/common-presets-utils')

const { testFileGlobs } = require('./utils/testUtil')

const esmRules = {
  'import/extensions': [
    'error',
    // https://nodejs.org/docs/latest-v14.x/api/esm.html#esm_mandatory_file_extensions
    'always',
  ],
}

module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:eslint-comments/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:jsdoc/recommended',
    'plugin:prettier/recommended',
    'eslint-config-prettier',
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'script',
  },
  plugins: [
    'eslint-plugin-eslint-comments',
    'eslint-plugin-import',
    'eslint-plugin-jsdoc',
    'eslint-plugin-prettier',
    'eslint-plugin-simple-import-sort',
  ],
  env: {
    es6: true,
  },
  rules: {
    // allow disable eslint rules for whole file without re-enable it in the end of the file
    'eslint-comments/disable-enable-pair': ['error', { allowWholeFile: true }],
    // make sure every eslint-disable comments are in use
    'eslint-comments/no-unused-disable': 'error',
    // always use named function for easier to debug via stack trace
    'func-names': ['error', 'as-needed'],
    // this rule doesn't support commonjs, some dependencies are using commonjs
    'import/default': 'off',
    // make sure import statements above the others
    'import/first': 'error',
    // doesn't work with redux-saga/effects
    'import/named': 'off',
    // separate import statements from the others
    'import/newline-after-import': 'error',
    // avoid anonymous function or class for easier to debug via stack trace
    // for other types, enforcing named data can improve autocomplete when importing
    'import/no-anonymous-default-export': [
      'error',
      {
        allowArray: false,
        allowArrowFunction: false,
        allowAnonymousClass: false,
        allowAnonymousFunction: false,
        allowCallExpression: false,
        allowLiteral: false,
        allowObject: false,
      },
    ],
    // do not allow import packages that are not listed in dependencies or peerDependencies
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '!**/src/**', // allow files outside of src/
          '**/.*', // allow config rc files
          ...testFileGlobs,
        ],
      },
    ],
    // use the shortest path in import statement, but allow /index because it will be standard to omit index as default file in directory
    'import/no-useless-path-segments': [
      'error',
      {
        commonjs: true,
        noUselessIndex: false,
      },
    ],
    // do not enforce JSDoc for internal methods
    'jsdoc/require-jsdoc': 'off',
    // avoid assigning anonymous function to object key which is harder to trace when debug
    'object-shorthand': [
      'error',
      'always',
      {
        avoidExplicitReturnArrows: true,
      },
    ],
    // auto sort export statements
    'simple-import-sort/exports': 'error',
    // auto sort import statements
    'simple-import-sort/imports': 'error',
    // commonjs must use strict mode
    strict: ['error', 'global'],
  },
  overrides: [
    {
      files: ['*.js'],
      parserOptions: {
        sourceType: isESM() ? 'module' : 'script',
      },
      rules: isESM() ? esmRules : {},
    },
    {
      files: ['*.cjs'],
      parserOptions: {
        sourceType: 'script',
      },
    },
    {
      files: ['*.mjs'],
      parserOptions: {
        sourceType: 'module',
      },
      rules: esmRules,
    },
    {
      files: testFileGlobs,
      extends: ['plugin:jest/recommended'],
      plugins: ['eslint-plugin-jest'],
    },
    // typescript plugins are depended on `typescript` package
    ...(hasDep('typescript')
      ? [
          {
            files: ['*.{cts,mts,ts,tsx}'],
            extends: [
              'plugin:@typescript-eslint/recommended',
              'plugin:@typescript-eslint/recommended-requiring-type-checking',
              'plugin:import/typescript',
              'eslint-config-prettier',
            ],
            parser: '@typescript-eslint/parser',
            parserOptions: {
              // faster linting on cli
              // https://github.com/typescript-eslint/typescript-eslint/issues/3528
              allowAutomaticSingleRunInference: true,
              project: ['./tsconfig*.json', './packages/*/tsconfig*.json'],
              sourceType: 'module',
            },
            plugins: ['@typescript-eslint/eslint-plugin'],
            rules: {
              // encourage to use private accessibility modifier
              '@typescript-eslint/explicit-member-accessibility': [
                'error',
                {
                  accessibility: 'explicit',
                  overrides: {
                    // don't bother because it is always public
                    constructors: 'off',
                  },
                },
              ],
              // sometimes auto detect can provide a better and narrower type
              '@typescript-eslint/explicit-module-boundary-types': 'off',
              // need empty function for react context default value
              '@typescript-eslint/no-empty-function': 'off',
              // encourage to check error type before use in catch clauses
              '@typescript-eslint/no-implicit-any-catch': 'error',
              // enforce correct usage of `void` type
              '@typescript-eslint/no-invalid-void-type': 'error',
              // allow using async function as event handler in frontend
              '@typescript-eslint/no-misused-promises': [
                'error',
                { checksVoidReturn: false },
              ],
              // many false alarms
              '@typescript-eslint/no-unsafe-argument': 'off',
              // some third party packages doesn't offer typings
              '@typescript-eslint/no-unsafe-assignment': 'off',
              // some third party packages doesn't offer typings
              '@typescript-eslint/no-unsafe-call': 'off',
              // some third party packages doesn't offer typings
              '@typescript-eslint/no-unsafe-member-access': 'off',
              // some third party packages doesn't offer typings
              '@typescript-eslint/no-unsafe-return': 'off',
              // must remove unused variables and types
              '@typescript-eslint/no-unused-vars': 'error',
              // do not block functions referring to other functions
              '@typescript-eslint/no-use-before-define': [
                'error',
                {
                  functions: false,
                  classes: true,
                  variables: true,
                  typedefs: true,
                },
              ],
              // fault alarms in 4.29.3
              '@typescript-eslint/restrict-plus-operands': 'off',
              // 1. mistakenly recognize string as any in 4.29.3
              // 2. allow `any` to be used in template string
              '@typescript-eslint/restrict-template-expressions': 'off',
              // redundant for composing functions
              '@typescript-eslint/unbound-method': 'off',
            },
            overrides: [
              {
                files: testFileGlobs,
                rules: {
                  // testing-library's `act` may or may not response promise, this rule produces false alarm
                  '@typescript-eslint/no-floating-promises': 'off',
                  // doesn't work with jest.fn<void>()
                  '@typescript-eslint/no-invalid-void-type': 'off',
                },
              },
            ],
          },
        ]
      : []),
  ],
}
