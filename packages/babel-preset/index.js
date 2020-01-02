'use strict'

const { hasDep } = require('@foray1010/common-presets-utils')

module.exports = () => {
  const env = process.env.BABEL_ENV || process.env.NODE_ENV || 'development'
  const isDev = env === 'development'
  const isTest = env === 'test'
  const isProd = env === 'production'

  const hasReact = hasDep('react')
  const hasTypeScript = hasDep('typescript')

  return {
    presets: [
      [
        '@babel/preset-env',
        {
          corejs: 3,
          modules: isTest ? 'commonjs' : false,
          shippedProposals: true,
          useBuiltIns: 'usage',
        },
      ],
      hasReact && [
        '@babel/preset-react',
        {
          development: isDev,
          useBuiltIns: true,
        },
      ],
      hasTypeScript && '@babel/preset-typescript',
    ].filter(Boolean),
    plugins: [
      '@babel/plugin-proposal-nullish-coalescing-operator',
      '@babel/plugin-proposal-optional-chaining',
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
  }
}
