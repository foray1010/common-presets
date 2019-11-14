'use strict'

module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-css-modules',
    'stylelint-config-idiomatic-order',
    // it requires `stylelint-config-prettier`
    'stylelint-prettier/recommended.js',
  ],
  plugins: ['stylelint-prettier'],
  rules: {
    // not compatible with SCSS
    'at-rule-no-unknown': null,
    // doesn't work with cssnext mixins
    'no-descending-specificity': null,
    // if used with styled-component, not every js files have styles
    'no-empty-source': null,
  },
}
