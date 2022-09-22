'use strict'

// @ts-expect-error
const { hasDep, isESM } = require('@foray1010/common-presets-utils')

const { testFileGlobs } = require('./utils/testUtil')

/** @type {import('eslint').Linter.BaseConfig} */
const cjsConfig = {
  parserOptions: {
    sourceType: 'script',
  },
  env: {
    commonjs: true,
  },
}

/** @type {import('eslint').Linter.BaseConfig} */
const esmConfigForJs = {
  parserOptions: {
    sourceType: 'module',
  },
  rules: {
    'import/extensions': [
      'error',
      // https://nodejs.org/docs/latest-v14.x/api/esm.html#esm_mandatory_file_extensions
      'always',
    ],
  },
}

/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:eslint-comments/recommended',
    'plugin:import/recommended',
    'plugin:jsdoc/recommended',
    // included eslint-config-prettier
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  plugins: [
    'eslint-plugin-eslint-comments',
    'eslint-plugin-import',
    'eslint-plugin-jsdoc',
    'eslint-plugin-prettier',
    'eslint-plugin-simple-import-sort',
  ],
  env: {
    /* Not using `node` to explicitly import node.js only built-in modules, e.g.
     * import { Buffer } from 'node:buffer'
     * import process from 'node:process'
     */
    'shared-node-browser': true,
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
    // does not work well with TypeScript https://github.com/gajus/eslint-plugin-jsdoc/issues/145
    'jsdoc/valid-types': 'off',
    // avoid assigning anonymous function to object key which is harder to trace when debug
    'object-shorthand': ['error', 'always'],
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
      ...(isESM() ? esmConfigForJs : cjsConfig),
    },
    {
      files: ['*.cjs'],
      ...cjsConfig,
    },
    {
      files: ['*.mjs'],
      ...esmConfigForJs,
    },
    {
      files: testFileGlobs,
      extends: ['plugin:jest/recommended', 'plugin:jest/style'],
      plugins: ['eslint-plugin-jest'],
      rules: {
        // make sure lifecycle hooks on the top for readability
        'jest/prefer-hooks-on-top': 'error',
      },
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
              // included eslint-config-prettier
              'plugin:prettier/recommended',
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
              // extend existing rule
              '@typescript-eslint/ban-types': [
                'error',
                {
                  types: {
                    // TypeScript team suggests to use `<T extends {}>` https://devblogs.microsoft.com/typescript/announcing-typescript-4-8/#unconstrained-generics-no-longer-assignable-to
                    '{}': false,
                  },
                  extendDefaults: true,
                },
              ],
              // separate type imports which allow certain optimizations within compilers
              '@typescript-eslint/consistent-type-imports': [
                'error',
                { prefer: 'type-imports' },
              ],
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
              // do not block functions referring to other functions
              '@typescript-eslint/no-use-before-define': [
                'error',
                {
                  /* options from eslint/no-use-before-define */
                  // allow use function before defined as they could be hoisted
                  functions: false,
                  classes: true,
                  variables: true,

                  /* options from @typescript-eslint/no-use-before-define */
                  enums: true,
                  // confusing option, it will disable `typedefs`
                  ignoreTypeReferences: false,
                  // tsc allows types to be used before define
                  typedefs: false,
                },
              ],
              // fault alarms in 4.29.3
              '@typescript-eslint/restrict-plus-operands': 'off',
              // allow primitive value in template string
              '@typescript-eslint/restrict-template-expressions': [
                'error',
                {
                  allowNumber: true,
                  allowBoolean: true,
                  allowAny: true, // mistakenly recognize string as any in 4.29.3
                  allowNullish: true,
                  allowRegExp: true,
                },
              ],
              // ignore static function as those are not supposed to use `this`
              '@typescript-eslint/unbound-method': [
                'error',
                { ignoreStatic: true },
              ],
            },
            overrides: [
              {
                files: testFileGlobs,
                rules: {
                  // doesn't work with jest.fn<void>()
                  '@typescript-eslint/no-invalid-void-type': 'off',
                  // replace by jest/unbound-method
                  '@typescript-eslint/unbound-method': 'off',
                  // allow passing an unbound method to `expect` calls
                  'jest/unbound-method': ['error', { ignoreStatic: true }],
                },
              },
            ],
          },
        ]
      : []),
  ],
}
