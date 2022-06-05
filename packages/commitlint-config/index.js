'use strict';

module.exports = {
  extends: [
    '@commitlint/config-conventional'
  ],
  rules: {
    'subject-empty': [2, 'never'],
    'subject-case': [
      2,
      'never',
      ['start-case', 'pascal-case', 'upper-case'],
    ],
    'header-max-length': [2, 'always', 150],
    'type-enum': [
      2,
      'always',
      ['fix', 'update', 'docs', 'build', 'feat', 'refactor', 'perf', 'revert', 'chore', 'style', 'test']
    ]
  }
};
