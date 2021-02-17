module.exports = {
  plugins: ['react-hooks'],
  extends: [],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
  env: {
    browser: true,
  },
  parser: 'babel-eslint',
};
