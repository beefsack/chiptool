// @flow
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractLess = new ExtractTextPlugin({
  filename: '[name].css',
});

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: "source-map",
  resolve: {
    extensions: [".ts", ".tsx", ".webpack.js", ".web.js", ".js", ".json"],
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
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
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
  },
};