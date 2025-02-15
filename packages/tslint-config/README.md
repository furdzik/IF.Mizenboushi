# eslint-config-ts-kamisama

'tslint' configuration by style guide [IF.Kamisama](https://github.com/furdzik/IF.Kamisama).  
Contains different framework and library lint configurations and also a global lint which can be used by any JavaScript project.

## Getting started

### Installation

**Peer dependencies**
- `eslint`
- `@babel/core`
- `@typescript-eslint/parser`

```
  npm install --save-dev eslint-config-ts-kamisama
```

### Usage

**Config `.eslintrc`**

```json
  {
    "parser": "@typescript-eslint/parser",
      "extends": [
        "eslint-config-ts-kamisama"
      ],
      "settings": {
      "import/resolver": {
        "babel-module": {}
      }
    }
  }
```
