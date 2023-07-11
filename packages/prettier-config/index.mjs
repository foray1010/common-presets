/** @type {import('prettier').Config} */
const config = {
  plugins: ['prettier-plugin-packagejson'],

  arrowParens: 'always',
  bracketSameLine: false,
  bracketSpacing: true,
  endOfLine: 'lf',
  jsxSingleQuote: true,
  printWidth: 80,
  quoteProps: 'as-needed',
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  useTabs: false,

  overrides: [
    {
      files: ['*.md'],
      options: {
        // set to 4 when https://github.com/prettier/prettier/issues/5019 is fixed
        tabWidth: 2,
      },
    },
  ],
}
export default config
