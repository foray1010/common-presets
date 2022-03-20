'use strict'

module.exports = {
  '*.{cjs,cts,js,mjs,mts,ts,tsx}': [
    'corepack yarn prettier --write',
    'corepack yarn eslint --fix',
  ],
  '*.{json,yaml,yml}': 'corepack yarn prettier --write',
  '*.{markdown,md}'(filenames) {
    return [
      `corepack yarn prettier --write ${filenames.join(' ')}`,
      'corepack yarn remark .',
    ]
  },
}
