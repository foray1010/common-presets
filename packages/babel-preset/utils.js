'use strict'

const getEnv = () => {
  return process.env.BABEL_ENV || process.env.NODE_ENV || 'development'
}

module.exports = {
  getEnv,
}
