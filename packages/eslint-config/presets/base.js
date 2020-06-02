'use strict'

const { hasDep, isESM } = require('@foray1010/common-presets-utils')

const hasTypeScript = hasDep('typescript')

const typescriptConfig = {
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:import/typescript',
    'eslint-config-prettier/@typescript-eslint',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.json', './tsconfig.*.json'],
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
    // some third party packages doesn't offer typings
    '@typescript-eslint/no-unsafe-assignment': 'off',
    // some third party packages doesn't offer typings
    '@typescript-eslint/no-unsafe-call': 'off',
    // some third party packages doesn't offer typings
    '@typescript-eslint/no-unsafe-return': 'off',
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
}

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
    ecmaVersion: 2018,
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
    // this rule doesn't support commonjs, some dependencies are using commonjs
    'import/default': 'off',
    // doesn't work with redux-saga/effects
    'import/named': 'off',
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
    {
      files: ['*.ts', '*.tsx'],
      // typescript plugins are depended on `typescript` package
      ...(hasTypeScript ? typescriptConfig : {}),
    },
  ],
}
