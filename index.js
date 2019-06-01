module.exports = {
  root: true,
  env: {
    browser: true,
  },
  extends: [
    // builtin
    '@xwtec/eslint-config/configs/errors.js',
    '@xwtec/eslint-config/configs/best-practices.js',
    '@xwtec/eslint-config/configs/variables.js',
    '@xwtec/eslint-config/configs/style.js',

    // prettier
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
