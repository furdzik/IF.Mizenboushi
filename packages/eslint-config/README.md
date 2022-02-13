# Package `@furdzik/eslint-config`

Lint configuration by style guide [IF.Kamisama](https://github.com/furdzik/IF.Kamisama).  
Contains different framework and library lint configurations and also a global lint which can be used by any JavaScript project.

---

## Getting started

### Installation

#### peer dependencies
- `eslint`
- `babel-plugin-module-resolver`
- `eslint-import-resolver-babel-module`

```
npm install --save-dev eslint babel-plugin-module-resolver eslint-import-resolver-babel-module @furdzik/eslint
```

### Usage

#### Config `.eslintrc`

```json
  {
    "parser": "@babel/eslint-parser",
      "extends": [
        "@furdzik/eslint-config"
      ],
      "settings": {
      "import/resolver": {
        "babel-module": {}
      }
    }
  }
```
