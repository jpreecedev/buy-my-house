const webpack = require("webpack")
const ManifestPlugin = require("webpack-manifest-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

const env = require("../env")()

const shared = []

const client = [
  new webpack.DefinePlugin(env.stringified),
  new webpack.DefinePlugin({
    "process.env.__SERVER__": "false",
    "process.env.__CLIENT__": "true"
  }),
  new MiniCssExtractPlugin({
    filename:
      process.env.NODE_ENV === "development"
        ? "[name].css"
        : "[name].[contenthash].css",
    chunkFilename:
      process.env.NODE_ENV === "development"
        ? "[id].css"
        : "[id].[contenthash].css"
  }),
  new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
  new ManifestPlugin({ fileName: "manifest.json" })
]

const server = [
  new webpack.DefinePlugin({
    "process.env.__SERVER__": "true",
    "process.env.__CLIENT__": "false"
  })
]

module.exports = {
  shared,
  client,
  server
}
