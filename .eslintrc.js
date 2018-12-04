module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'import/extensions': false,
    'no-tabs': 0,
    'max-len': 0,
    indent: 0,
    'no-param-reassign': 0,
    'prefer-destructuring': 0,
    'no-unused-expressions': 0,
    'no-restricted-syntax': 0,
    'no-plusplus': 0,
    'object-curly-newline': 0,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
