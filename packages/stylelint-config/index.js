'use strict';

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
    'color-hex-length': 'long',
    'declaration-empty-line-before': null,
    'function-url-quotes': 'always',
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
    'media-feature-name-no-vendor-prefix': true,
    'order/properties-order': [
      {
        'properties': [
          'box-sizing'
        ]
      },
      {
        'properties': [
          'content',
          'counter-increment',
          'counter-reset'
        ]
      },
      {
        'properties': [
          'position',
          'top',
          'right',
          'bottom',
          'left',
          'z-index'
        ]
      },
      {
        'properties': [
          'display',
          'flex',
          'flex-grow',
          'flex-shrink',
          'flex-basis',
          'flex-flow',
          'flex-direction',
          'flex-wrap',
          'place-content',
          'place-items',
          'place-self',
          'justify-content',
          'justify-items',
          'justify-self ',
          'align-content',
          'align-items',
          'align-self',
          'order'
        ]
      },
      {
        'properties': [
          'grid',
          'grid-template',
          'grid-template-rows',
          'grid-template-columns',
          'grid-auto-flow',
          'grid-auto-columns',
          'grid-auto-rows',
          'grid-area',
          'grid-row-start',
          'grid-row-end',
          'grid-column-start',
          'grid-column-end',
          'grid-template',
          'grid-template-rows',
          'grid-template-columns',
          'grid-template-areas'
        ]
      },
      {
        'properties': [
          'columns',
          'column-width',
          'column-count',
          'column-span',
          'column-gap',
          'column-fill',
          'column-rule',
          'column-rule-width',
          'column-rule-style',
          'column-rule-color',
          'row-gap',
          'gap'
        ]
      },
      {
        'properties': [
          'overflow',
          'overflow-x',
          'overflow-y',
          'visibility',
          'float',
          'clear'
        ]
      },
      {
        'properties': [
          'transform',
          'transform-origin',
          'transform-style',
          'perspective',
          'perspective-origin'
        ]
      },
      {
        'properties': [
          'width',
          'min-width',
          'max-width',
          'height',
          'min-height',
          'max-height'
        ]
      },
      {
        'properties': [
          'margin',
          'margin-top',
          'margin-right',
          'margin-bottom',
          'margin-left'
        ]
      },
      {
        'properties': [
          'padding',
          'padding-top',
          'padding-right',
          'padding-bottom',
          'padding-left'
        ]
      },
      {
        'properties': [
          'border',
          'border-top',
          'border-right',
          'border-bottom',
          'border-left',
          'border-width',
          'border-top-width',
          'border-right-width',
          'border-bottom-width',
          'border-left-width',
          'border-style',
          'border-top-style',
          'border-right-style',
          'border-bottom-style',
          'border-left-style',
          'border-color',
          'border-top-color',
          'border-right-color',
          'border-bottom-color',
          'border-left-color',
          'border-radius',
          'border-top-right-radius',
          'border-top-left-radius',
          'border-bottom-right-radius',
          'border-bottom-left-radius',
          'border-image',
          'border-image-source',
          'border-image-slice',
          'border-image-width',
          'border-image-outset',
          'border-image-repeat',
          'outline',
          'outline-width',
          'outline-style',
          'outline-color',
          'outline-offset'
        ]
      },
      {
        'properties': [
          'background',
          'background-color',
          'background-image',
          'background-size',
          'background-position',
          'background-repeat',
          'background-origin',
          'background-attachment',
          'background-clip',
          'box-shadow'
        ]
      },
      {
        'properties': [
          'border-collapse',
          'border-spacing',
          'caption-side',
          'empty-cells',
          'table-layout'
        ]
      },
      {
        'properties': [
          'direction',
          'writing-mode',
          'font',
          'font-family',
          'font-size',
          'font-size-adjust',
          'font-weight',
          'font-style',
          'font-variant',
          'font-stretch',
          'line-height',
          'letter-spacing',
          'color',
          'text-shadow',
          'text-align',
          'text-align-last',
          'text-decoration',
          'text-decoration-line',
          'text-decoration-style',
          'text-decoration-color',
          'text-underline-position',
          'text-transform',
          'text-overflow',
          'text-indent',
          'text-justify',
          'text-emphasis',
          'text-emphasis-style',
          'text-emphasis-position',
          'text-emphasis-color',
          'vertical-align',
          'white-space',
          'word-break',
          'word-spacing',
          'word-wrap'
        ]
      },
      {
        'properties': [
          'opacity',
          'transition',
          'transition-property',
          'transition-duration',
          'transition-timing-function',
          'transition-delay',
          'animation',
          'animation-name',
          'animation-duration',
          'animation-timing-function',
          'animation-delay',
          'animation-direction',
          'animation-iteration-count',
          'animation-fill-mode',
          'animation-play-state',
          'filter'
        ]
      },
      {
        'properties': [
          'list-style',
          'list-style-type',
          'list-style-position',
          'list-style-image'
        ]
      },
      {
        'properties': [
          'backface-visibility',
          'resize',
          'tab-size',
          'quotes',
          'caret-color',
          'min-block-size',
          'max-block-size',
          'min-inline-size',
          'max-inline-size',
          'mix-blend-mode',
          'scroll-margin',
          'scroll-margin-block',
          'scroll-margin-block-end',
          'scroll-margin-block-start',
          'scroll-margin-bottom',
          'scroll-margin-inline',
          'scroll-margin-inline-end',
          'scroll-margin-inline-start',
          'scroll-margin-left',
          'scroll-margin-right',
          'scroll-margin-top',
          'scroll-padding',
          'scroll-padding-block',
          'scroll-padding-block-end',
          'scroll-padding-block-start',
          'scroll-padding-bottom',
          'scroll-padding-inline',
          'scroll-padding-inline-end',
          'scroll-padding-inline-start',
          'scroll-padding-left',
          'scroll-padding-right',
          'scroll-padding-top',
          'scroll-padding-top',
          'scroll-snap-align',
          'scroll-snap-stop',
          'scroll-snap-type'
        ]
      },
      {
        'properties': [
          'glyph-orientation-horizontal',
          'glyph-orientation-vertical',
          'kerning',
          'dominant-baseline',
          'baseline-shift',
          'alignment-baseline',
          'enable-background',
          'text-anchor',
          'text-rendering',
          'flood-color',
          'flood-opacity',
          'color-profile',
          'color-interpolation',
          'color-interpolation-filters',
          'color-rendering',
          'lighting-color',
          'stop-color',
          'stop-opacity',
          'image-rendering',
          'clip',
          'clip-path',
          'clip-rule',
          'fill',
          'fill-opacity',
          'marker',
          'marker-start',
          'marker-end',
          'marker-mid',
          'mask',
          'mask-image',
          'mask-position',
          'mask-size',
          'mask-repeat',
          'mask-origin',
          'mask-clip',
          'shape-margin',
          'shape-outside',
          'shape-rendering',
          'stroke',
          'stroke-color',
          'stroke-dasharray',
          'stroke-dashoffset',
          'stroke-linecap',
          'stroke-linejoin',
          'stroke-opacity',
          'stroke-width'
        ]
      },
      {
        'properties': [
          'cursor',
          'user-select',
          'pointer-events'
        ]
      },
      {
        'properties': [
          'page-break-inside',
          'page-break-before',
          'page-break-after'
        ]
      }
    ],
    'plugin/declaration-block-no-ignored-properties': true,
    'selector-no-qualifying-type': true,
    'selector-no-vendor-prefix': true,
    'selector-pseudo-element-colon-notation': 'double',
    'selector-type-no-unknown': [ true, { 'ignore': ['custom-elements', 'default-namespace'] }],
    'no-descending-specificity': null,
    'value-keyword-case': null,
    'selector-type-case': null,
    'alpha-value-notation': null,
    'selector-class-pattern': null,
    'font-family-name-quotes': 'always-unless-keyword',
    // SCSS
    'scss/operator-no-unspaced': null,
    // Styled components
    'value-no-vendor-prefix': true,
    'property-no-vendor-prefix': true,
    'no-empty-source': null
  }
};
