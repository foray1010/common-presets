/** @typedef {import('../types/internal.d.ts').EslintConfig} EslintConfig */

/** @type {EslintConfig} */
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
