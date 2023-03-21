# `@foray1010/tsconfig`

This config assumes user never use TypeScript as compiler, but use it for type checker and/or type generator.

If you need to compile TypeScript, use [@foray1010/babel-preset](../babel-preset)

## Installation

1. `yarn add -DE @foray1010/tsconfig typescript`

2. Create an `tsconfig.json` in the project root

   - For Node.js app (type checking only):

     ```json
     {
       "$schema": "https://json.schemastore.org/tsconfig",
       "extends": "@foray1010/tsconfig/tsconfig.base.json"
     }
     ```

   - For general frontend application (type checking only):

     ```json
     {
       "$schema": "https://json.schemastore.org/tsconfig",
       "extends": [
         "@foray1010/tsconfig/tsconfig.base.json",
         "@foray1010/tsconfig/tsconfig.browser.json"
       ]
     }
     ```

   - For react.js application (type checking only):

     ```json
     {
       "$schema": "https://json.schemastore.org/tsconfig",
       "extends": [
         "@foray1010/tsconfig/tsconfig.base.json",
         "@foray1010/tsconfig/tsconfig.react.json"
       ]
     }
     ```

   - For library (type checking and generate typings):

     ```json
     {
       "$schema": "https://json.schemastore.org/tsconfig",
       "extends": [
         "@foray1010/tsconfig/tsconfig.base.json",
         "@foray1010/tsconfig/tsconfig.library.json"
       ]
     }
     ```
