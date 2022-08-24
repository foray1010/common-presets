'use strict'

module.exports = {
  root: true,
  extends: ['@foray1010/eslint-config'],
  rules: {
    // https://github.com/gajus/eslint-plugin-jsdoc/issues/145
    'jsdoc/valid-types': 'off',
  },
}
