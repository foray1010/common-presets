'use strict'

const { declare } = require('@babel/helper-plugin-utils')
// @ts-expect-error
const { hasDep, pkg, pkgDir } = require('@foray1010/common-presets-utils')
const browserslist = require('browserslist')
const process = require('process')
const semver = require('semver')

const Modules = {
  CommonJS: 'commonjs',
  ESModules: 'esmodules',
}

const getEnvTargets = () => {
  const browsersConfig = browserslist.loadConfig({ path: pkgDir })
  if (browsersConfig) {
    return { browsers: browsersConfig }
  }

  const nodeVersionRange = pkg.engines.node
  if (nodeVersionRange) {
    return { node: semver.minVersion(pkg.engines.node)?.format() }
  }

  throw new Error('no browserslist nor engines.node is found')
}

const babelPreset = declare(function presetDefinitions(
  api,
  { dependenciesModules = Modules.CommonJS },
) {
  api.assertVersion(7)

  const env = process.env.BABEL_ENV || process.env.NODE_ENV || 'development'
  // enable in next major version
  /*
  if (!env) {
    throw new Error('missing env: BABEL_ENV or NODE_ENV')
  }
  */

  const isDev = env === 'development'
  const isProd = env === 'production'
  const isTest = env === 'test'

  const hasCoreJS = hasDep('core-js')
  const hasReact = hasDep('react')
  const hasTypeScript = hasDep('typescript')

  return {
    presets: [
      [
        '@babel/preset-env',
        {
          bugfixes: true,
          modules: 'auto',
          shippedProposals: true,
          targets: getEnvTargets(),
          ...(hasCoreJS ? { corejs: 3, useBuiltIns: 'usage' } : null),
        },
      ],
      hasReact && [
        '@babel/preset-react',
        {
          development: isDev || isTest,
          runtime: 'automatic',
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
      [
        '@babel/plugin-transform-runtime',
        {
          useESModules: dependenciesModules === Modules.ESModules,
        },
      ],
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
})

module.exports = babelPreset
