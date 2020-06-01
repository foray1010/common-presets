'use strict'

const { hasDep, pkg, pkgDir } = require('@foray1010/common-presets-utils')
const browserslist = require('browserslist')
const semver = require('semver')

module.exports = () => {
  const env = process.env.BABEL_ENV || process.env.NODE_ENV || 'development'
  const isDev = env === 'development'
  const isTest = env === 'test'
  const isProd = env === 'production'

  const hasReact = hasDep('react')
  const hasTypeScript = hasDep('typescript')

  const browsersConfig = browserslist.loadConfig({ path: pkgDir })
  const envTargets = browsersConfig
    ? { browsers: browsersConfig }
    : { node: semver.minVersion(pkg.engines.node).format() }

  return {
    presets: [
      [
        '@babel/preset-env',
        {
          corejs: 3,
          modules: isTest ? 'commonjs' : false,
          shippedProposals: true,
          targets: envTargets,
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
