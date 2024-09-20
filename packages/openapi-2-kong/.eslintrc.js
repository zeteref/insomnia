const { OFF, TYPESCRIPT_CONVERSION } = require('eslint-config-helpers');

/** @type { import('eslint').Linter.Config } */
module.exports = {
  extends: '../../.eslintrc.js',
  rules: {
    camelcase: 'off',
    '@typescript-eslint/no-explicit-any': OFF(TYPESCRIPT_CONVERSION),
    '@typescript-eslint/no-empty-interface': OFF(TYPESCRIPT_CONVERSION),
    '@typescript-eslint/no-use-before-define': OFF(TYPESCRIPT_CONVERSION),
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        'args': 'all',
        'argsIgnorePattern': '^_',
        'caughtErrors': 'all',
        'caughtErrorsIgnorePattern': '^_',
        'destructuredArrayIgnorePattern': '^_',
        'varsIgnorePattern': '^_',
        'ignoreRestSiblings': true,
      },
    ],
  },
};
