/** @type {import('stylelint').Config} */
const stylelintConfig = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-css-modules',
    'stylelint-config-concentric-order',
    'stylelint-prettier/recommended',
  ],
  plugins: ['stylelint-gamut', 'stylelint-no-unsupported-browser-features'],
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

    /** Enforce oklch color */
    // prefer oklch color function
    'color-no-hex': true,
    // block legacy color functions
    'function-disallowed-list': [
      'hsl',
      'hsla',
      'hwb',
      'lab',
      'lch',
      'rgb',
      'rgba',
    ],
    // avoid oklch color out of gamut range
    'gamut/color-no-out-gamut-range': true,
  },
}
export default stylelintConfig
