# `@foray1010/prettier-config`

## Installation

1. `yarn add -DE prettier @foray1010/prettier-config`

1. Create an `.prettierrc.js` in the project root

   ```js
   'use strict'

   module.exports = require('@foray1010/prettier-config')
   ```

1. Use default prettierignore via npm script

   ```json
   {
     "scripts": {
       "prettier": "prettier --ignore-path=node_modules/@foray1010/prettier-config/prettierignore"
     }
   }
   ```

   then use `npm run prettier` or `yarn prettier` to replace `prettier`
