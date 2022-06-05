# Package `kamisama-eslint-config`

Lint configuration by style guide [IF.Kamisama](https://github.com/furdzik/IF.Kamisama).  
Contains different framework and library lint configurations and also a global lint which can be used by any JavaScript project.

## Getting started

### Installation

**Peer dependencies**
- `eslint`
- `@babel/core`
- `@babel/eslint-parser`
- `babel-plugin-module-resolver`
- `eslint-import-resolver-babel-module`

```
npm install --save-dev kamisama-eslint
```

### Usage

**Config `.eslintrc`**

```json
  {
    "parser": "@babel/eslint-parser",
      "extends": [
        "kamisama-eslint-config"
      ],
      "settings": {
      "import/resolver": {
        "babel-module": {}
      }
    }
  }
```
