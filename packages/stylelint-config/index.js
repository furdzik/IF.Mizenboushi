'use strict';

import { stylesOrder } from 'stylesOrder';

module.exports = {
  'extends': [
    'stylelint-config-standard',
    'stylelint-config-recommended',
    'stylelint-config-recommended-scss'
  ],
  'plugins': [
    'stylelint-declaration-strict-value',
    'stylelint-declaration-block-no-ignored-properties',
    'stylelint-order'
  ],
  'rules': {
    'rule-empty-line-before': null,
    'at-rule-no-unknown': [
      true,
      {
        'ignoreAtRules': [
          'at-root',
          'content',
          'extend',
          'for',
          'function',
          'include',
          'mixin',
          'return'
        ]
      }
    ],
    'block-closing-brace-empty-line-before': 'never',
    'color-hex-case': 'lower',
    'color-hex-length': 'long',
    'declaration-empty-line-before': null,
    'function-url-quotes': 'always',
    'indentation': 2,
    'max-nesting-depth': [
      3,
      {
        'ignoreAtRules': [
          'at-root',
          'content',
          'extend',
          'function',
          'include',
          'mixin',
          'return'
        ]
      }
    ],
    'media-feature-range-operator-space-before': 'always',
    'media-feature-range-operator-space-after': 'always',
    'media-feature-parentheses-space-inside': 'never',
    'media-feature-name-no-vendor-prefix': true,
    'media-feature-colon-space-before': 'never',
    'media-feature-colon-space-after': 'always',
    'order/properties-order': stylesOrder,
    'plugin/declaration-block-no-ignored-properties': true,
    'selector-list-comma-newline-after': 'always-multi-line',
    'selector-no-qualifying-type': true,
    'selector-no-vendor-prefix': true,
    'selector-pseudo-element-colon-notation': 'double',
    'selector-type-no-unknown': [ true, { 'ignore': ['custom-elements', 'default-namespace'] }],
    'string-quotes': 'single',
    'no-descending-specificity': null,
    'value-keyword-case': null,
    'selector-type-case': null,
    'alpha-value-notation': null,
    'selector-class-pattern': null,
    'font-family-name-quotes': 'always-unless-keyword',
    'number-leading-zero': 'never',
    'declaration-colon-newline-after': null,

    // Styled components
    'value-no-vendor-prefix': true,
    'property-no-vendor-prefix': true,
    'no-empty-source': null,
    'no-missing-end-of-source-newline': null
  }
};
