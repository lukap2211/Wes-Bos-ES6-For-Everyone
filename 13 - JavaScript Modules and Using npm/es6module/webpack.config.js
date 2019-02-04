const webpack = require('webpack');
const nodeEnv = process.env.NODE_ENV || 'production';
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  // mode: 'development',
	mode: 'production',
  devtool: 'source-map',
  entry: './app.js',
  output: {
    filename: 'bundle.js'
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        test: /\.js(\?.*)?$/i,
        sourceMap: true,
        extractComments: true,
        include: /\/includes/,
      }),
    ],
  },
};


