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
  rules: {
    // commonjs must use strict mode
    strict: ['error', 'global'],
  },
}

/** @type {import('eslint').Linter.BaseConfig} */
const esmConfig = {
  parserOptions: {
    sourceType: 'module',
  },
  plugins: ['eslint-plugin-simple-import-sort'],
  rules: {
    // auto sort export statements
    'simple-import-sort/exports': 'error',
    // auto sort import statements
    'simple-import-sort/imports': 'error',
  },
}

/** @type {import('eslint').Linter.BaseConfig} */
const esmConfigForJs = {
  ...esmConfig,
  rules: {
    ...esmConfig.rules,
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
    'eslint-plugin-unicorn',
  ],
  env: {
    // should align with parserOptions.ecmaVersion
    es2020: true,
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
    // prefer Number static properties over global ones
    'unicorn/prefer-number-properties': 'error',
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
            ...esmConfig,
          },
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
              // turned off because @typescript-eslint/no-unsafe-* rules will output wrong errors
              // allowAutomaticSingleRunInference: true,
              project: ['./tsconfig*.json', './packages/*/tsconfig*.json'],
            },
            plugins: [
              '@typescript-eslint/eslint-plugin',
              'eslint-plugin-deprecation',
              'eslint-plugin-functional',
            ],
            env: {
              // allow commonjs globals as we haven't moved to es modules
              commonjs: true,
            },
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
              // disable the base rule as it can report incorrect errors, use @typescript-eslint/dot-notation instead
              'dot-notation': 'off',
              // only allow indexed syntax (e.g. `obj['key']`) for accessing undefined fields
              '@typescript-eslint/dot-notation': [
                'error',
                {
                  allowIndexSignaturePropertyAccess: true,
                },
              ],
              // encourage to use private accessibility modifier
              '@typescript-eslint/explicit-member-accessibility': [
                'error',
                {
                  accessibility: 'explicit',
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
              // use with functional/prefer-readonly-type
              // mark class variables as readonly if it is not mutated
              '@typescript-eslint/prefer-readonly': 'error',
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
              // do not allow usage of deprecated code
              'deprecation/deprecation': 'error',
              // use with @typescript-eslint/prefer-readonly
              'functional/prefer-readonly-type': [
                'error',
                {
                  // sometimes it is easier to mutate, it should be fine to mutate within local scope
                  allowLocalMutation: true,
                  // don't force library consumer to use readonly type
                  allowMutableReturnType: true,
                  // allow mutating class variables
                  ignoreClass: 'fieldsOnly',
                },
              ],
              // forbid unnecessary callback wrapper
              'functional/prefer-tacit': 'error',
              'no-restricted-syntax': [
                'error',
                {
                  // encourage to use JS standard #private over TS private accessibility modifier, but excluding constructor because it cannot be private in JS: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields#description
                  selector:
                    ':matches(PropertyDefinition, MethodDefinition, TSParameterProperty)[accessibility="private"]:not([kind="constructor"])',
                  message:
                    'Use #private instead (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields)',
                },
              ],
              // @typescript-eslint/eslint-plugin suggests to disable it: https://github.com/typescript-eslint/typescript-eslint/blob/2588e9ea55f78352fdd6ae92a306135aabb49a1a/docs/linting/TROUBLESHOOTING.md#i-get-errors-from-the-no-undef-rule-about-global-variables-not-being-defined-even-though-there-are-no-typescript-errors
              // It is disabled in recommended config but re-enabled here to enforce a subset of global variables that supported by both node.js and browsers
              'no-undef': 'error',
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
