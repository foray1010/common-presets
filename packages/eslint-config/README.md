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

1. Create an `eslint.config.mjs` in the project root (It is not a standard config path, but we opts for `.mjs` extension to make it compatible with commonjs projects)

   - For general purpose or Node.js project (support TypeScript)

     ```js
     import {
       eslintFilesConfig,
       eslintIgnoresConfig,
       eslintNodeConfig,
     } from '@foray1010/eslint-config'

     const config = [
       ...eslintIgnoresConfig,
       ...eslintFilesConfig,
       ...eslintNodeConfig,
     ]
     export default config
     ```

   - For general frontend projects (support TypeScript)

     ```js
     import {
       eslintFilesConfig,
       eslintIgnoresConfig,
       eslintBrowserConfig,
     } from '@foray1010/eslint-config'

     const config = [
       ...eslintIgnoresConfig,
       ...eslintFilesConfig,
       ...eslintBrowserConfig,
     ]
     export default config
     ```

   - For frontend React projects (support TypeScript)

     ```js
     import {
       eslintFilesConfig,
       eslintIgnoresConfig,
       eslintReactConfig,
     } from '@foray1010/eslint-config'

     const config = [
       ...eslintIgnoresConfig,
       ...eslintFilesConfig,
       ...eslintReactConfig,
     ]
     export default config
     ```

   - You can apply config per different directories

     ```js
     import {
       applyConfig,
       eslintFilesConfig,
       eslintIgnoresConfig,
       eslintNodeConfig,
       eslintReactConfig,
     } from '@foray1010/eslint-config'

     const config = [
       ...eslintIgnoresConfig,
       ...eslintFilesConfig,
       ...applyConfig(
         {
           ignorePrefixes: ['src'],
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

1. Add npm script

   ```json
   {
     "scripts": {
       "eslint": "ESLINT_USE_FLAT_CONFIG=true eslint --config eslint.config.mjs"
     }
   }
   ```

   then use `npm run eslint` or `yarn eslint` to replace `eslint`
