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
          useSpread: true,
        },
      ],
      hasTypeScript && [
        '@babel/preset-typescript',
        {
          allowDeclareFields: true,
          onlyRemoveTypeImports: true,
        },
      ],
    ].filter(Boolean),
    plugins: [
      ['@babel/plugin-transform-runtime', { useESModules: true }],
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
