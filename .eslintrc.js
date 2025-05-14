module.exports = {
  extends: ['airbnb-base', 'prettier', 'plugin:jsdoc/recommended'],
  ignorePatterns: ['webpack.*.js', 'dist'],
  env: {
    browser: true,
    es2024: true,
    jest: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
  },
};
