'use strict';

module.exports = {
  "extends": [
    "react-app",
    "react-app/jest",
    "plugin:jest/recommended",
    "airbnb/hooks",
    "plugin:@typescript-eslint/recommended"
  ],
  "rules": {},
  "parser": "@typescript-eslint/parser",
  "overrides": [
    {
      "files": [
        "**/*.ts?(x)"
      ],
      "parser": "@typescript-eslint/parser",
      "parserOptions": {
        "ecmaFeatures": {
          "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module",
        "project": "./tsconfig.json"
      },
      "rules": {
        "arrow-parens": [
          "error",
          "always"
        ],
        "indent": ["error", 2, {
          "SwitchCase": 1,
          "VariableDeclarator": 1,
          "MemberExpression": 1,
          "ArrayExpression": 1,
          "ObjectExpression": 1
        }],
        "function-call-argument-newline": [
          "error",
          "consistent"
        ],
        "max-len": ["error", { "code": 200 }],
        "no-multiple-empty-lines": [
          "error",
          {
            "max": 1
          }
        ],
        "@typescript-eslint/comma-dangle": ["error", "never"],
        "@typescript-eslint/naming-convention": [
          0,
          {
            "selector": "property",
            "format": [
              "camelCase",
              "PascalCase",
              "UPPER_CASE"
            ],
            "leadingUnderscore": "allow",
            "trailingUnderscore": "allow",
            "filter": { "regex": "^[0-9]", "match": false }
          }
        ],
        "@typescript-eslint/no-empty-function": [1, { "allow": ["arrowFunctions"] }],
        "@typescript-eslint/space-before-function-paren": ["error", "always"]
      }
    }
  ]
};
