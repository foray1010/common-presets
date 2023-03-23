/** @type {readonly import('eslint').Linter.FlatConfig[]} */
const ignoresConfig = [
  {
    // replace `.eslintignore`
    ignores: [
      '**/.yarn/**',
      '**/build/**',
      '**/coverage/**',
      '**/dist/**',
      '**/node_modules/**',
    ],
  },
]
export default ignoresConfig
