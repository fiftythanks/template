/** @type {import('stylelint').Config} */
const config = {
  extends: ['stylelint-config-sass-guidelines'],
  ignoreFiles: ['!(./src/**/*.{css, scss, sass}'],
};

module.exports = config;
