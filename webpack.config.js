// @flow
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractLess = new ExtractTextPlugin({
  filename: '[name].css',
});

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: "source-map",
  resolve: {
    extensions: [".webpack.js", ".web.js", ".js", ".json", ".jsx"],
  },
  plugins: [
    extractLess,
    new HtmlWebpackPlugin({
      title: 'Chip Tool',
      hash: true,
      template: 'src/index.ejs',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['flow', 'react', 'es2017'],
            plugins: ['transform-class-properties'],
          },
        },
      },
      {
        test: /\.less$/,
        use: extractLess.extract({
          use: [
            { loader: 'css-loader' },
            { loader: 'less-loader' },
          ],
          fallback: 'style-loader',
        }),
      },
    ],
  },
  externals: {
    "react": "React",
    "react-dom": "ReactDOM",
    "three": "THREE",
  },
};