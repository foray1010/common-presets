'use strict'

module.exports = {
  '*.{cjs,cts,js,mjs,mts,ts,tsx}': [
    'yarn prettier --write',
    'yarn eslint --fix',
  ],
  '*.{json,yaml,yml}': 'yarn prettier --write',
  '*.{markdown,md}'(filenames) {
    return [`yarn prettier --write ${filenames.join(' ')}`, 'yarn remark .']
  },
}
