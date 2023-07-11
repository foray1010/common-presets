# `@foray1010/prettier-config`

## Installation

1. `yarn add -DE @foray1010/prettier-config prettier`

1. Create an `.prettierrc.mjs` in the project root

   ```js
   export { default } from '@foray1010/prettier-config'
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
