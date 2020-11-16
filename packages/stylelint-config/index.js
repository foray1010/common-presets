'use strict'

module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-css-modules',
    'stylelint-config-idiomatic-order',
    // it requires `stylelint-config-prettier`
    'stylelint-prettier/recommended.js',
  ],

  plugins: ['stylelint-no-unsupported-browser-features'],
  rules: {
    // if used with styled-component, not every js files have styles
    'no-empty-source': null,
    'plugin/no-unsupported-browser-features': [
      true,
      {
        severity: 'warning',
      },
    ],
  },
}
