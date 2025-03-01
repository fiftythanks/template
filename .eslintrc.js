module.exports = {
  extends: ['airbnb-base', 'prettier'],
  ignorePatterns: 'webpack.*.js',
  env: {
    browser: true,
    es2025: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
  },
};
