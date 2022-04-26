# Package `@furdzik/stylelint-config`

Stylelint configuration by style guide [IF.Kamisama](https://github.com/furdzik/IF.Kamisama).  
Contains different framework and library lint configurations and also a global stylelint which can be used by any JavaScript project.

## Getting started

### Installation

**Peer dependencies**
- `stylelint`
- `stylelint-processor-styled-components`

```
npm install --save-dev @furdzik/stylelint
```

### Usage

**Config `.stylelintrc`**

```json
  {
    "processors": [
      "stylelint-processor-styled-components"
    ],
      "extends": [
      "@furdzik/stylelint"
    ]
  }
```
