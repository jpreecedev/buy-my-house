const path = require("path")
const paths = require("../paths")
const { client: clientLoaders } = require("./loaders")
const resolvers = require("./resolvers")
const plugins = require("./plugins")
const HtmlWebPackPlugin = require("html-webpack-plugin")

const entry = process.env.ENTRY || paths.srcClient
const isIsolated = process.env.ENTRY === "."

const config = {
  name: "client",
  target: "web",
  entry: {
    bundle: [`${entry}/index.jsx`]
  },
  output: {
    path: path.join(paths.clientBuild, paths.publicPath),
    filename: "bundle.js",
    publicPath: paths.publicPath,
    chunkFilename: "[name].[chunkhash:8].chunk.js"
  },
  module: {
    rules: clientLoaders
  },
  resolve: { ...resolvers },
  plugins: [...plugins.shared, ...plugins.client],
  node: {
    dgram: "empty",
    fs: "empty",
    net: "empty",
    tls: "empty",
    child_process: "empty"
  },
  optimization: {
    namedModules: true,
    noEmitOnErrors: true,
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendor",
          chunks: "all"
        }
      }
    }
  },
  stats: {
    cached: false,
    cachedAssets: false,
    chunks: false,
    chunkModules: false,
    colors: true,
    hash: false,
    modules: false,
    reasons: false,
    timings: true,
    version: false
  },
  externals: {
    react: "React",
    "react-dom": "ReactDOM"
  }
}

if (isIsolated) {
  delete config.output.publicPath

  config.plugins.push(
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  )
}

module.exports = config
