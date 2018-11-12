/* eslint-disable import/no-extraneous-dependencies */

const webpack = require("webpack")
const merge = require("webpack-merge")
const HtmlWebPackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const common = require("./package.common")

const isDevelopment = process.env.NODE_ENV !== "production"

let config = {
  target: "web",
  output: {
    filename: "./client/[name].js"
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
    new MiniCssExtractPlugin({
      filename: isDevelopment ? "[name].css" : "[name].[hash].css",
      chunkFilename: isDevelopment ? "[id].css" : "[id].[hash].css"
    }),
    new webpack.ProvidePlugin({
      React: "React",
      react: "React",
      "window.react": "React",
      "window.React": "React"
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
}

if (isDevelopment) {
  config = {
    ...config,
    mode: "development",
    devtool: "source-map",
    devServer: {
      port: 9955,
      hot: true
    }
  }
}

module.exports = merge(common, config)
