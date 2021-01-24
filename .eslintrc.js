module.exports = {
  extends: [
    'react-app',
    'eslint:recommended',
    'plugin:react/recommended',
  ],
  env: {
    node: true,
    browser: true,
    commonjs: true,
    es6: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'react-hooks',
  ],
  rules: {
    'comma-dangle': ['error', 'always-multiline'],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error', {
      'vars': 'all',
      'args': 'after-used',
      'ignoreRestSiblings': true,
    }],
    'camelcase': ['off'],
    'indent': ['error', 2],
    'quotes': ['error', 'single'],
    'react/prop-types': 'off',
    '@typescript-eslint/no-explicit-any': 'error',
    'eol-last': ['error'],
  },
}
