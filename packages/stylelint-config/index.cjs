'use strict'

/** @type {import('stylelint').Config} */
module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-css-modules',
    'stylelint-config-idiomatic-order',
    'stylelint-prettier/recommended.js',
  ],
  plugins: ['stylelint-no-unsupported-browser-features'],
  rules: {
    // unnecessary and may cause unexpected results when used with stylelint-order
    'comment-empty-line-before': null,
    // false alarms when use with `:root` selector
    'no-descending-specificity': null,
    // if used with styled-component, not every js files have styles
    'no-empty-source': null,
    // do not enforce case for class as camel case is more convenient to use in react
    'selector-class-pattern': null,
    // do not enforce case for id
    'selector-id-pattern': null,
    'plugin/no-unsupported-browser-features': [
      true,
      {
        severity: 'warning',
      },
    ],
  },
}
