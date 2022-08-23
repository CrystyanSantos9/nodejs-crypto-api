module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: 'airbnb-base',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'no-console': 0,
    quotes: [
      2,
      'single',
    ],
    'linebreak-style': [
      2,
      'unix',
    ],
    semi: [
      2,
      'always',
    ],
  },
};
