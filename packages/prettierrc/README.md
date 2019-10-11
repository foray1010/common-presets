# `@foray1010/prettierrc`

## Installation

1. `npm install --save-dev prettier @foray1010/prettierrc`

1. Create an `.prettierrc.js` in the project root

   ```js
   'use strict'

   module.exports = require('@foray1010/prettierrc')
   ```

1. Use default prettierignore via npm script

   ```json
   {
     "scripts": {
       "prettier": "prettier --ignore-path=node_modules/@foray1010/prettierrc/prettierignore"
     }
   }
   ```

   then use `npm run prettier` or `yarn prettier` to replace `prettier`
