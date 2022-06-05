'use strict';

module.exports = {
  extends: [
    'eslint-config-airbnb'
  ],
  parser: '@babel/eslint-parser',
  plugins: [
    'eslint-plugin-import',
    'eslint-plugin-module-resolver',
    'eslint-plugin-react',
    'eslint-plugin-react-hooks'
  ],
  env: {
    'browser': true,
    'jest': true,
    'es6': true
  },
  rules: {
    'react/destructuring-assignment': 0,
    'react/sort-prop-types': [2, {
      'ignoreCase': true,
      'requiredFirst': true,
      'callbacksLast': true
    }],
    'import/extensions': 0,
    'react/function-component-definition': 0,
    'react/jsx-fragments': [1, 'element'],
    'react/jsx-one-expression-per-line': 0,
    'react/jsx-props-no-spreading': 0,
    'react/static-property-placement': [1, 'static public field'],
    'import/no-extraneous-dependencies': 0,
    'import/no-useless-path-segments': 0,
    'import/prefer-default-export': 0,
    'jsx-a11y/anchor-has-content': 0,
    'arrow-parens': ['error', 'always'],
    'camelcase': 0,
    'comma-dangle': ['error', 'never'],
    'function-call-argument-newline': ['error', 'consistent'],
    'function-paren-newline': 0,
    'no-confusing-arrow': 0,
    'no-else-return': 0,
    'no-multiple-empty-lines': ['error', { 'max': 1 }],
    'no-restricted-exports': ['error', {
      'restrictedNamedExports': ['foo', 'bar', 'Baz', 'a', 'b', 'c', 'd']
    }],
    'space-before-function-paren': 0
  }
};
