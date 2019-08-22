module.exports = {
  root: true,
  parser: 'babel-eslint',
  env: {
    es6: false,
    node: false,
    browser: true,
  },
  parserOptions: {
    ecmaVersion: 5,
    sourceType: 'script',
    ecmaFeatures: {
      globalReturn: false,
      jsx: false,
    },
  },
  extends: [
    // fixable
    '@xwtec/eslint-config/configs/fixable.js',

    // builtin
    '@xwtec/eslint-config/configs/errors.js',
    '@xwtec/eslint-config/configs/best-practices.js',
    '@xwtec/eslint-config/configs/variables.js',
    '@xwtec/eslint-config/configs/style.js',

    // prettier
    'eslint-config-prettier',
    '@xwtec/eslint-config/configs/prettier.js',
  ].map(require.resolve),
  rules: {
    strict: ['warn', 'function'],

    'no-catch-shadow': 'warn',

    // enforce one true comma style
    'comma-style': 'warn',

    'dot-notation': ['warn', {allowKeywords: false}],
  },
};
