'use strict'

module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-css-modules',
    'stylelint-config-idiomatic-order',
    // it requires `stylelint-config-prettier`
    'stylelint-prettier/recommended.js',
  ],
  plugins: [
    'stylelint-no-indistinguishable-colors',
    'stylelint-no-unsupported-browser-features',
  ],
  rules: {
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
    'plugin/stylelint-no-indistinguishable-colors': true,
  },
}
