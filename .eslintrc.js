module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    // 'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  // parserOptions: {
  //   ecmaFeatures: {
  //     jsx: true,
  //   },
  //   ecmaVersion: 'latest',
  //   sourceType: 'module',
  // },
  parser: '@typescript-eslint/parser',

  plugins: ['react'],
  rules: {
    // 'no-spaced-func': 'off',
    // semi: ['error', 'never'],
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: false,
        arrowParens: 'avoid',
        endOfLine: 'auto',
      },
    ],
  },
}
