'use strict'

const { hasDep, isESM } = require('@foray1010/common-presets-utils')

module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:jest/recommended',
    'plugin:prettier/recommended',
    'eslint-config-prettier',
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'script',
  },
  plugins: [
    'eslint-plugin-import',
    'eslint-plugin-jest',
    'eslint-plugin-prettier',
    'eslint-plugin-simple-import-sort',
  ],
  env: {
    es6: true,
  },
  rules: {
    // always use named function for easier to debug via stack trace
    'func-names': ['error', 'as-needed'],
    // this rule doesn't support commonjs, some dependencies are using commonjs
    'import/default': 'off',
    // doesn't work with redux-saga/effects
    'import/named': 'off',
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

          // allow test related files
          '**/__fixtures__/**',
          '**/__mocks__/**',
          '**/__tests__/**',
          '**/*.{spec,test}.{cjs,js,mjs,ts,tsx}',
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
    // auto sort import statements
    'simple-import-sort/sort': 'error',
    // commonjs must use strict mode
    strict: ['error', 'global'],
  },
  overrides: [
    {
      files: ['*.js'],
      parserOptions: {
        sourceType: isESM() ? 'module' : 'script',
      },
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
    },
    // typescript plugins are depended on `typescript` package
    ...(hasDep('typescript')
      ? [
          {
            files: ['*.{ts,tsx}'],
            extends: [
              'plugin:@typescript-eslint/recommended',
              'plugin:@typescript-eslint/recommended-requiring-type-checking',
              'plugin:import/typescript',
              'eslint-config-prettier/@typescript-eslint',
            ],
            parser: '@typescript-eslint/parser',
            parserOptions: {
              project: ['./tsconfig*.json', './packages/*/tsconfig*.json'],
              sourceType: 'module',
            },
            plugins: ['@typescript-eslint/eslint-plugin'],
            rules: {
              // sometime it takes too much manpower to get the type right and may prefer to fix it later
              // also sometime the types from third-party libraries are wrong
              '@typescript-eslint/ban-ts-comment': 'off',
              // prefer auto detect
              '@typescript-eslint/explicit-module-boundary-types': 'off',
              // need empty function for react context default value
              '@typescript-eslint/no-empty-function': 'off',
              // enforce correct usage of `void` type
              '@typescript-eslint/no-invalid-void-type': 'error',
              // some third party packages doesn't offer typings
              '@typescript-eslint/no-unsafe-assignment': 'off',
              // some third party packages doesn't offer typings
              '@typescript-eslint/no-unsafe-call': 'off',
              // some third party packages doesn't offer typings
              '@typescript-eslint/no-unsafe-member-access': 'off',
              // some third party packages doesn't offer typings
              '@typescript-eslint/no-unsafe-return': 'off',
              // use @typescript-eslint/no-unused-vars-experimental as this rule doesn't support types
              '@typescript-eslint/no-unused-vars': 'off',
              // must remove unused variables and types
              '@typescript-eslint/no-unused-vars-experimental': [
                'error',
                {
                  ignoreArgsIfArgsAfterAreUsed: true,
                  ignoredNamesRegex: false,
                },
              ],
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
              // redundant for composing functions
              '@typescript-eslint/unbound-method': 'off',
            },
            overrides: [
              {
                files: ['**/*.{spec,test}.{cjs,js,mjs,ts,tsx}'],
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
