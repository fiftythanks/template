const { merge } = require('webpack-merge');
const common = require('./webpack.commo n.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    static: './dist',
  },
});
