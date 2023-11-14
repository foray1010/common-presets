import js from '@eslint/js'
import eslintPluginEslintComments from '@eslint-community/eslint-plugin-eslint-comments'
// @ts-expect-error
import { hasDep, isESM } from '@foray1010/common-presets-utils'
import eslintPluginImport from 'eslint-plugin-import'
import eslintPluginJest from 'eslint-plugin-jest'
import eslintPluginRegexp from 'eslint-plugin-regexp'
import eslintPluginSimpleImportSort from 'eslint-plugin-simple-import-sort'
import eslintPluginUnicorn from 'eslint-plugin-unicorn'
import globals from 'globals'

import {
  testFileGlobs,
  typeScriptFileGlobs,
  typeScriptTestFileGlobs,
} from '../constants.mjs'

/** @typedef {import('../types/internal.d.ts').EslintConfig} EslintConfig */

/** @returns {Promise<EslintConfig>} */
async function generateTypeScriptConfig() {
  // typescript plugins are depended on `typescript` package
  if (!hasDep('typescript')) return []

  /* eslint-disable import/no-unresolved */
  const eslintPluginTypescriptEslint = (
    await import('@typescript-eslint/eslint-plugin')
  ).default
  const typescriptEslintParser = (await import('@typescript-eslint/parser'))
    .default
  /* eslint-enable import/no-unresolved */
  const eslintPluginDeprecation = (await import('eslint-plugin-deprecation'))
    .default
  const eslintPluginFunctional = (await import('eslint-plugin-functional'))
    .default

  return [
    {
      files: typeScriptFileGlobs,
      languageOptions: {
        // @ts-expect-error
        parser: typescriptEslintParser,
        parserOptions: {
          // faster linting on cli
          // https://github.com/typescript-eslint/typescript-eslint/issues/3528
          // turned off because @typescript-eslint/no-unsafe-* rules will output wrong errors
          // allowAutomaticSingleRunInference: true,
          project: ['./tsconfig*.json', './packages/*/tsconfig*.json'],
        },
      },
      settings: {
        'import/resolver': {
          typescript: true,
        },
      },
      plugins: {
        // @ts-expect-error
        '@typescript-eslint': eslintPluginTypescriptEslint,
        // @ts-expect-error
        deprecation: eslintPluginDeprecation,
        functional: eslintPluginFunctional,
      },
      rules: {
        ...eslintPluginTypescriptEslint.configs[
          'eslint-recommended'
        ]?.overrides?.reduce(
          (acc, override) => ({ ...acc, ...override.rules }),
          {},
        ),
        ...eslintPluginTypescriptEslint.configs['recommended']?.rules,
        ...eslintPluginTypescriptEslint.configs[
          'recommended-requiring-type-checking'
        ]?.rules,
        ...eslintPluginImport.configs['typescript']?.rules,
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
        // separate type exports which allow certain optimizations within compilers
        '@typescript-eslint/consistent-type-exports': [
          'error',
          {
            fixMixedExportsWithInlineTypeSpecifier: true,
          },
        ],
        '@typescript-eslint/consistent-type-imports': [
          'error',
          {
            // separate type imports which allow certain optimizations within compilers
            prefer: 'type-imports',
            // Use inline type imports to avoid duplicate imports, but can be overridden by @typescript-eslint/no-import-type-side-effects
            fixStyle: 'inline-type-imports',
          },
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
        // disallow duplicated value in enum as it is error-prone
        '@typescript-eslint/no-duplicate-enum-values': 'error',
        // need empty function for react context default value
        '@typescript-eslint/no-empty-function': 'off',
        // when using typescript 5.0 with verbatimModuleSyntax flag on, compiler will not remove import statements with only inline type imports which lead to side effects
        '@typescript-eslint/no-import-type-side-effects': 'error',
        // enforce correct usage of `void` type
        '@typescript-eslint/no-invalid-void-type': 'error',
        // allow using async function as event handler in frontend
        '@typescript-eslint/no-misused-promises': [
          'error',
          { checksVoidReturn: false },
        ],
        // declaration merging between classes and interfaces is unsafe
        '@typescript-eslint/no-unsafe-declaration-merging': 'error',
        '@typescript-eslint/no-unused-vars': [
          'error',
          {
            // error is optional now
            caughtErrors: 'all',
          },
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
        // make sure functions which return a promise will just return a rejected promise instead of throwing an error
        '@typescript-eslint/promise-function-async': 'error',
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
        // avoid missed switch-case by requiring switch-case statements to be exhaustive with union type
        '@typescript-eslint/switch-exhaustiveness-check': 'error',
        // ignore static function as those are not supposed to use `this`
        '@typescript-eslint/unbound-method': ['error', { ignoreStatic: true }],
        // do not allow usage of deprecated code
        'deprecation/deprecation': 'error',
        // use with functional/type-declaration-immutability
        'functional/prefer-immutable-types': [
          'error',
          {
            // as there is no native way to achieve `ReadonlyDeep` in TypeScript
            enforcement: 'ReadonlyShallow',
            // reduce the difficult to use this rule
            ignoreInferredTypes: true,
            // escape hatch without using eslint-disable
            ignoreNamePattern: 'Mutable$',
            ignoreTypePattern: [
              '^React.', // Some React types does not work with `Readonly`
            ],
          },
        ],
        // forbid unnecessary callback wrapper
        'functional/prefer-tacit': 'error',
        // use with functional/prefer-immutable-types
        'functional/type-declaration-immutability': [
          'error',
          {
            rules: [
              {
                identifiers: '.+',
                immutability: 'ReadonlyShallow',
                comparator: 'AtLeast',
                // modified from https://github.com/eslint-functional/eslint-plugin-functional/blob/main/docs/rules/type-declaration-immutability.md#preset-overrides
                fixer: [
                  {
                    pattern: '^(Array|Map|Set)<(.+)>$',
                    replace: 'Readonly$1<$2>',
                  },
                  {
                    pattern: '^(.+)$',
                    replace: 'Readonly<$1>',
                  },
                ],
              },
            ],
          },
        ],
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
    },
    {
      files: typeScriptTestFileGlobs,
      plugins: {
        // @ts-expect-error
        '@typescript-eslint': eslintPluginTypescriptEslint,
        jest: eslintPluginJest,
      },
      rules: {
        // doesn't work with jest.fn<void>()
        '@typescript-eslint/no-invalid-void-type': 'off',
        // replace by jest/unbound-method
        '@typescript-eslint/unbound-method': 'off',
        // allow passing an unbound method to `expect` calls
        'jest/unbound-method': ['error', { ignoreStatic: true }],
      },
    },
    {
      files: typeScriptFileGlobs,
      ...esmConfig,
    },
  ]
}

/** @type {EslintConfig[number]} */
const cjsConfig = {
  languageOptions: {
    globals: globals.commonjs,
    sourceType: 'script',
  },
  rules: {
    // commonjs must use strict mode
    strict: ['error', 'global'],
  },
}

/** @type {EslintConfig[number]} */
const esmConfig = {
  languageOptions: {
    sourceType: 'module',
  },
  plugins: {
    'simple-import-sort': eslintPluginSimpleImportSort,
  },
  rules: {
    // auto sort export statements
    'simple-import-sort/exports': 'error',
    // auto sort import statements
    'simple-import-sort/imports': 'error',
  },
}

/** @type {EslintConfig} */
const baseConfig = [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 2023,
      globals: {
        // No es2022/es2023 preset yet
        ...globals.es2021,
        /* Not using `node` to explicitly import node.js only built-in modules, e.g.
         * import { Buffer } from 'node:buffer'
         * import process from 'node:process'
         */
        ...globals['shared-node-browser'],
      },
    },
    plugins: {
      '@eslint-community/eslint-comments': eslintPluginEslintComments,
      import: eslintPluginImport,
      regexp: eslintPluginRegexp,
      unicorn: eslintPluginUnicorn,
    },
    rules: {
      ...eslintPluginEslintComments.configs['recommended']?.rules,
      ...eslintPluginImport.configs['recommended']?.rules,
      ...eslintPluginRegexp.configs['recommended']?.rules,
      ...Object.fromEntries(
        Object.entries(
          eslintPluginUnicorn.configs['recommended']?.rules ?? {},
        ).filter(([ruleName]) => {
          // only use a subset of recommended rules as other rules are too strict
          return (
            ruleName.startsWith('unicorn/no-useless-') ||
            ruleName.startsWith('unicorn/prefer-')
          )
        }),
      ),
      // allow disable eslint rules for whole file without re-enable it in the end of the file
      '@eslint-community/eslint-comments/disable-enable-pair': [
        'error',
        { allowWholeFile: true },
      ],
      // make sure every eslint-disable comments are in use
      '@eslint-community/eslint-comments/no-unused-disable': 'error',
      // always use named function for easier to debug via stack trace
      'func-names': ['error', 'as-needed'],
      // this rule doesn't support commonjs, some dependencies are using commonjs
      'import/default': 'off',
      // enforce extensions for both cjs and esm
      'import/extensions': [
        'error',
        // https://nodejs.org/docs/latest-v14.x/api/esm.html#esm_mandatory_file_extensions
        'always',
        {
          pattern: {
            // eslint-plugin-import does not support checking es modules in typescript files
            cts: 'never',
            mts: 'never',
            ts: 'never',
            tsx: 'never',
          },
        },
      ],
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
      // no circular dependency
      'import/no-cycle': [
        'error',
        {
          // speed up linting time
          ignoreExternal: true,
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
      // forbid a module from importing itself
      'import/no-self-import': 'error',
      // use the shortest path in import statement, but allow /index because it will be standard to omit index as default file in directory
      'import/no-useless-path-segments': [
        'error',
        {
          commonjs: true,
          noUselessIndex: false,
        },
      ],
      // turn off these rules as they do not support flat config: https://github.com/import-js/eslint-plugin-import/issues/2556
      'import/namespace': 'off',
      'import/no-named-as-default': 'off',
      'import/no-named-as-default-member': 'off',
      // prefer explicitly convert type for readability
      'no-implicit-coercion': 'error',
      // make sure private class members are in-use
      'no-unused-private-class-members': 'error',
      // avoid assigning anonymous function to object key which is harder to trace when debug
      'object-shorthand': ['error', 'always'],
      // prefer `const` when the variable won't be reassigned
      'prefer-const': [
        'error',
        {
          // if one of the variables will be reassigned, do not enforce `const`
          destructuring: 'all',
        },
      ],
      // use with `unicorn/throw-new-error`
      // disallow builtins to be created without `new` operator, to be consistent with es6 class syntax
      'unicorn/new-for-builtins': 'error',
      // some legacy projects still use commonjs
      'unicorn/prefer-module': 'off',
      // `querySelector` is slower than `getElementById`
      'unicorn/prefer-query-selector': 'off',
      // `Array.from(iterable)` is more readable than `[...iterable]`
      'unicorn/prefer-spread': 'off',
      // sometimes it is less readable using ternary expressions
      'unicorn/prefer-ternary': 'off',
      // webpack support on `top level await` is still experimental, and some legacy projects still use commonjs
      'unicorn/prefer-top-level-await': 'off',
      // use with `unicorn/new-for-builtins`
      'unicorn/throw-new-error': 'error',
    },
  },
  {
    files: ['**/*.js'],
    ...(isESM() ? esmConfig : cjsConfig),
  },
  {
    files: ['**/*.cjs'],
    ...cjsConfig,
  },
  {
    files: ['**/*.mjs'],
    ...esmConfig,
  },
  {
    files: testFileGlobs,
    languageOptions: {
      globals: globals.jest,
    },
    plugins: {
      jest: eslintPluginJest,
    },
    rules: {
      ...eslintPluginJest.configs['recommended']?.rules,
      ...eslintPluginJest.configs['style']?.rules,
      // make sure lifecycle hooks on the top for readability
      'jest/prefer-hooks-on-top': 'error',
    },
  },
  ...(await generateTypeScriptConfig()),
]
export default baseConfig
