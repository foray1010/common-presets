"use strict";

module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:jest/style",
    "plugin:prettier/recommended",
    "eslint-config-prettier",
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "script",
  },
  plugins: [
    "eslint-plugin-import",
    "eslint-plugin-jest",
    "eslint-plugin-prettier",
  ],
  rules: {
    // this rule doesn't support commonjs, some dependencies are using commonjs
    "import/default": "off",
    // doesn't work with redux-saga/effects
    "import/named": "off",
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      extends: [
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "plugin:import/typescript",
        "eslint-config-prettier/@typescript-eslint",
      ],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        project: ["./tsconfig.json", "./tsconfig.*.json"],
        sourceType: "module",
      },
      plugins: ["@typescript-eslint/eslint-plugin"],
      rules: {
        // sometime it takes too much manpower to get the type right and may prefer to fix it later
        // also sometime the types from third-party libraries are wrong
        "@typescript-eslint/ban-ts-ignore": "off",
        // do not force third-party object (e.g. api response) to follow camel case
        "@typescript-eslint/camelcase": ["error", { properties: "never" }],
        // prefer auto detect
        "@typescript-eslint/explicit-function-return-type": "off",
        // do not block functions referring to other functions
        "@typescript-eslint/no-use-before-define": [
          "error",
          {
            functions: false,
            classes: true,
            variables: true,
            typedefs: true,
          },
        ],
        // redundant for composing functions
        "@typescript-eslint/unbound-method": "off",
      },
    },
  ],
};
