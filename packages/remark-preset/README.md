# `@foray1010/remark-preset`

## Installation

1. `yarn add -DE @foray1010/remark-preset remark-cli`

1. Create an `.remarkrc.mjs` in the project root

   ```js
   const config = {
     plugins: ['@foray1010/remark-preset'],
   }
   export default config
   ```

1. Use default remarkignore via npm script

   ```json
   {
     "scripts": {
       "remark": "remark --ignore-path=node_modules/@foray1010/remark-preset/remarkignore --ignore-path-resolve-from=cwd"
     }
   }
   ```

   then use `npm run remark` or `yarn remark` to replace `remark`
