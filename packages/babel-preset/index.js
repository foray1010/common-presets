'use strict'

const { getEnv, hasDep } = require('./utils')

const isDev = getEnv() === 'development'
const isTest = getEnv() === 'test'
const isProd = getEnv() === 'production'

const hasReact = hasDep('react')
const hasTypescript = hasDep('typescript')

module.exports = () => ({
  presets: [
    [
      '@babel/preset-env',
      {
        modules: isTest ? 'commonjs' : false,
        useBuiltIns: 'entry',
        corejs: { version: 3, proposals: false },
      },
    ],
    hasReact && [
      '@babel/preset-react',
      {
        development: isDev,
        useBuiltIns: true,
      },
    ],
    hasTypescript && '@babel/preset-typescript',
  ].filter(Boolean),
  plugins: [
    ...(isProd && hasReact
      ? [
          '@babel/plugin-transform-react-constant-elements',
          '@babel/plugin-transform-react-inline-elements',
          [
            'babel-plugin-transform-react-remove-prop-types',
            { removeImport: true },
          ],
        ]
      : []),
  ],
})
