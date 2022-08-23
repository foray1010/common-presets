# `@foray1010/tsconfig`

This config assumes user never use TypeScript as compiler, but use it for type checker and/or type generator.

If you need to compile TypeScript, use [@foray1010/babel-preset](../babel-preset)

## Installation

1. `yarn add -DE typescript @foray1010/tsconfig`

2. Create an `tsconfig.json` in the project root

   for app (type checking only):

   ```json
   {
     "$schema": "https://json.schemastore.org/tsconfig",
     "extends": "@foray1010/tsconfig"
   }
   ```

   for library (type checking and generate typings):

   ```json
   {
     "$schema": "https://json.schemastore.org/tsconfig",
     "extends": "@foray1010/tsconfig",
     "compilerOptions": {
       "emitDeclarationOnly": true,
       "noEmit": false,
       "outDir": "build/dts"
     }
   }
   ```
