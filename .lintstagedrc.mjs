const config = {
  '*.{cjs,cts,js,mjs,mts,ts,tsx}': ['yarn prettier --write', 'eslint --fix'],
  '*.css': ['yarn prettier --write', 'yarn stylelint --fix'],
  '*.{json,yaml,yml}': 'yarn prettier --write',
  '*.{markdown,md}': ['yarn prettier --write', 'yarn remark'],
}
export default config
