const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { AureliaPlugin } = require("aurelia-webpack-plugin");

module.exports = {
  entry: { "main": "aurelia-bootstrapper" },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.ts', '.js'],
    modules: ["src", "node_modules"]
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      }
    ]
  },
  plugins: [
    new AureliaPlugin(),
    // have Webpack copy over the index.html and inject appropriate script tag for Webpack-bundled entry point 'main.js'
    new HtmlWebpackPlugin({ template: 'index.html' })
  ]
};