/** @type {readonly import('eslint').Linter.FlatConfig[]} */
const filesConfig = [
  {
    // replace `eslint --ext=cjs,cts,js,mjs,mts,ts,tsx` in legacy config
    files: ['**/*.{cjs,cts,js,mjs,mts,ts,tsx}'],
  },
]
export default filesConfig
