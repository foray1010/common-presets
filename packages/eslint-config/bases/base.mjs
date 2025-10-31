/* eslint-disable import-x/extensions */
import js from '@eslint/js'
// @ts-expect-error - no official types
import eslintPluginEslintCommentsConfigs from '@eslint-community/eslint-plugin-eslint-comments/configs'
import { hasDep, isESM } from '@foray1010/common-presets-utils'
import { defineConfig } from 'eslint/config'
import eslintPluginImportX from 'eslint-plugin-import-x'
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

async function generateTypeScriptConfig() {
  // typescript plugins are depended on `typescript` package
  if (!hasDep('typescript')) return []

  const tseslint = (await import('typescript-eslint')).default

  return defineConfig(
    {
      files: typeScriptFileGlobs,
      extends: [
        tseslint.configs.eslintRecommended,
        tseslint.configs.recommendedTypeChecked,
        eslintPluginImportX.configs['typescript'],
        esmConfig,
      ],
      languageOptions: {
        parserOptions: {
          // faster linting on cli
          // https://github.com/typescript-eslint/typescript-eslint/issues/3528
          // turned off because @typescript-eslint/no-unsafe-* rules will output wrong errors
          // allowAutomaticSingleRunInference: true,
          project: ['./tsconfig*.json', './packages/*/tsconfig*.json'],
        },
      },
      rules: {
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
        // do not allow usage of deprecated code
        '@typescript-eslint/no-deprecated': 'error',
        // TypeScript team suggests to use `<T extends {}>` https://devblogs.microsoft.com/typescript/announcing-typescript-4-8/#unconstrained-generics-no-longer-assignable-to
        '@typescript-eslint/no-empty-object-type': 'off',
        // when using typescript 5.0 with verbatimModuleSyntax flag on, compiler will not remove import statements with only inline type imports which lead to side effects
        '@typescript-eslint/no-import-type-side-effects': 'error',
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
            // confusing option, it will disable `typedefs`
            ignoreTypeReferences: false,
            // tsc allows types to be used before define
            typedefs: false,
          },
        ],
        // make sure functions which return a promise will just return a rejected promise instead of throwing an error
        '@typescript-eslint/promise-function-async': 'error',
        // avoid missed switch-case by requiring switch-case statements to be exhaustive with union type
        '@typescript-eslint/switch-exhaustiveness-check': 'error',
        // ignore static function as those are not supposed to use `this`
        '@typescript-eslint/unbound-method': ['error', { ignoreStatic: true }],
        'no-restricted-syntax': [
          'error',
          {
            // encourage to use JS standard #private over TS private accessibility modifier, but excluding constructor because it cannot be private in JS: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields#description
            selector:
              ':matches(PropertyDefinition, MethodDefinition, TSParameterProperty)[accessibility="private"]:not([kind="constructor"])',
            message:
              'Use #private instead (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields)',
          },
          {
            selector: 'TSEnumDeclaration',
            message:
              '"Use string literals with unions or `as const` instead because they work with Node.js type stripping, see https://news.ycombinator.com/item?id=42767627',
          },
        ],
        // @typescript-eslint/eslint-plugin suggests to disable it: https://github.com/typescript-eslint/typescript-eslint/blob/2588e9ea55f78352fdd6ae92a306135aabb49a1a/docs/linting/TROUBLESHOOTING.md#i-get-errors-from-the-no-undef-rule-about-global-variables-not-being-defined-even-though-there-are-no-typescript-errors
        // It is disabled in recommended config but re-enabled here to enforce a subset of global variables that supported by both node.js and browsers
        'no-undef': 'error',
      },
    },
    {
      files: typeScriptTestFileGlobs,
      rules: {
        // doesn't work with jest.fn<void>()
        '@typescript-eslint/no-invalid-void-type': 'off',
        // replace by jest/unbound-method
        '@typescript-eslint/unbound-method': 'off',
        // allow passing an unbound method to `expect` calls
        'jest/unbound-method': ['error', { ignoreStatic: true }],
      },
    },
  )
}

const cjsConfig = defineConfig({
  languageOptions: {
    globals: globals.commonjs,
    sourceType: 'script',
  },
  rules: {
    // commonjs must use strict mode
    strict: ['error', 'global'],
  },
})

const esmConfig = defineConfig({
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
})

const baseConfig = defineConfig(
  js.configs.recommended,
  {
    extends: [eslintPluginEslintCommentsConfigs['recommended']],
    rules: {
      // allow disable eslint rules for whole file without re-enable it in the end of the file
      '@eslint-community/eslint-comments/disable-enable-pair': [
        'error',
        { allowWholeFile: true },
      ],
      // make sure every eslint-disable comments are in use
      '@eslint-community/eslint-comments/no-unused-disable': 'error',
    },
  },
  {
    extends: [eslintPluginImportX.flatConfigs.recommended],
    rules: {
      // this rule doesn't support commonjs, some dependencies are using commonjs
      'import-x/default': 'off',
      // Does not work after upgrading to eslint-plugin-import-x v4, got this error message: `sourceType 'module' is not supported when ecmaVersion < 2015. Consider adding `{ ecmaVersion: 2015 }` to the parser options. (undefined:undefined)`
      'import-x/export': 'off',
      // enforce extensions for both cjs and esm
      'import-x/extensions': [
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
      'import-x/first': 'error',
      // separate import statements from the others
      'import-x/newline-after-import': 'error',
      // avoid anonymous function or class for easier to debug via stack trace
      // for other types, enforcing named data can improve autocomplete when importing
      'import-x/no-anonymous-default-export': [
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
      'import-x/no-cycle': [
        'error',
        {
          // speed up linting time
          ignoreExternal: true,
        },
      ],
      // do not allow import packages that are not listed in dependencies or peerDependencies
      'import-x/no-extraneous-dependencies': [
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
      'import-x/no-self-import': 'error',
      // use the shortest path in import statement, but allow /index because it will be standard to omit index as default file in directory
      'import-x/no-useless-path-segments': [
        'error',
        {
          commonjs: true,
          noUselessIndex: false,
        },
      ],
      // turn off these rules as they do not support flat config: https://github.com/import-js/eslint-plugin-import/issues/2556
      // Getting this error for eslint-plugin-import-x: `sourceType 'module' is not supported when ecmaVersion < 2015. Consider adding `{ ecmaVersion: 2015 }` to the parser options. (undefined:undefined)`
      'import-x/namespace': 'off',
      'import-x/no-named-as-default': 'off',
      'import-x/no-named-as-default-member': 'off',
    },
  },
  {
    extends: [eslintPluginRegexp.configs['flat/recommended']],
    rules: {
      // enable regexp strict mode (use `v` flag instead when it is widely supported)
      'regexp/require-unicode-regexp': 'error',
    },
  },
  {
    plugins: {
      unicorn: eslintPluginUnicorn,
    },
    rules: {
      ...Object.fromEntries(
        Object.entries(
          eslintPluginUnicorn.configs['flat/recommended']?.rules ?? {},
        ).filter(([ruleName]) => {
          // only use a subset of recommended rules as other rules are too strict
          return (
            ruleName.startsWith('unicorn/no-useless-') ||
            ruleName.startsWith('unicorn/prefer-')
          )
        }),
      ),
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
    linterOptions: {
      reportUnusedDisableDirectives: 'error',
      reportUnusedInlineConfigs: 'error',
    },
    languageOptions: {
      ecmaVersion: 2023,
      globals: {
        ...globals.es2023,
        /* Not using `node` to explicitly import node.js only built-in modules, e.g.
         * import { Buffer } from 'node:buffer'
         * import process from 'node:process'
         */
        ...globals['shared-node-browser'],
      },
    },
    rules: {
      // always use named function for easier to debug via stack trace
      'func-names': ['error', 'as-needed'],
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
    },
  },
  {
    files: ['**/*.js'],
    extends: [isESM() ? esmConfig : cjsConfig],
  },
  {
    files: ['**/*.cjs'],
    extends: [cjsConfig],
  },
  {
    files: ['**/*.mjs'],
    extends: [esmConfig],
  },
  {
    files: testFileGlobs,
    extends: [
      eslintPluginJest.configs['flat/recommended'],
      eslintPluginJest.configs['flat/style'],
    ],
    rules: {
      // make sure lifecycle hooks on the top for readability
      'jest/prefer-hooks-on-top': 'error',
    },
  },
  await generateTypeScriptConfig(),
)
export default baseConfig
