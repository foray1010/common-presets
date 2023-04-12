# `@foray1010/eslint-config`

It aims at providing a general eslint config for:

1. assisting developer to obtain better code quality

1. no opinion on coding styles, leave it to [@foray1010/prettier-config](../prettier-config)

## Versioning

### X.Y.Z

X for requiring newer eslint or node (breaking changes)

Y for stricter rules

Z for looser rules

## Installation

1. `yarn add -DE @foray1010/eslint-config eslint prettier`

2. Create an `eslint.config.js` in the project root

   - For general purpose or Node.js project (support TypeScript)

     ```js
     import {
       eslintIgnoresConfig,
       eslintNodeConfig,
     } from '@foray1010/eslint-config'

     const config = [...eslintIgnoresConfig, ...eslintNodeConfig]
     export default config
     ```

   - For general frontend projects (support TypeScript)

     ```js
     import {
       eslintIgnoresConfig,
       eslintBrowserConfig,
     } from '@foray1010/eslint-config'

     const config = [...eslintIgnoresConfig, ...eslintBrowserConfig]
     export default config
     ```

   - For frontend React projects (support TypeScript)

     ```js
     import {
       eslintIgnoresConfig,
       eslintReactConfig,
     } from '@foray1010/eslint-config'

     const config = [...eslintIgnoresConfig, ...eslintReactConfig]
     export default config
     ```

   - You can apply config per different directories

     ```js
     import {
       applyConfig,
       eslintIgnoresConfig,
       eslintNodeConfig,
       eslintReactConfig,
     } from '@foray1010/eslint-config'

     const config = [
       ...eslintIgnoresConfig,
       ...applyConfig(
         {
           filePrefixes: '.',
           ignores: ['src/**'],
         },
         eslintNodeConfig,
       ),
       ...applyConfig(
         {
           filePrefixes: ['src'],
         },
         eslintReactConfig,
       ),
     ]
     export default config
     ```

3. If the project support ES Modules, you can directly use `eslint` command with the following setting in `package.json`.

   ```json
   {
     "type": "module"
   }
   ```

4. If the project does not support ES Modules, you have to put the config in `eslint.config.mjs` instead, and use the following npm script in `package.json`. Note that your editor may not support custom eslint config path and may not work properly.

   ```json
   {
     "scripts": {
       "eslint": "ESLINT_USE_FLAT_CONFIG=true eslint --config eslint.config.mjs"
     }
   }
   ```

   then use `npm run eslint` or `yarn eslint` to replace `eslint`
