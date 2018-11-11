const webpack = require("webpack")
const WriteFileWebpackPlugin = require("write-file-webpack-plugin")
const baseConfig = require("./client.base")

const generateSourceMap = process.env.OMIT_SOURCEMAP !== "true"

const config = {
  ...baseConfig,
  plugins: [
    new WriteFileWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    ...baseConfig.plugins
  ],
  mode: "development",
  devtool: generateSourceMap ? "cheap-module-inline-source-map" : false,
  performance: {
    hints: false
  }
}

module.exports = config
