'use strict';

module.exports = {
  extends: [
    '@commitlint/config-conventional'
  ],
  rules: {
    'subject-empty': [2, 'never'],
    'type-enum': [
      2,
      'always',
      ['fix', 'update', 'docs', 'build', 'feat', 'refactor', 'perf', 'revert', 'chore', 'style', 'test']
    ]
  }
};
