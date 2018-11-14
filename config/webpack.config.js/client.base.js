const path = require("path")
const paths = require("../paths")
const fs = require("fs")
const { client: clientLoaders } = require("./loaders")
const resolvers = require("./resolvers")
const plugins = require("./plugins")

module.exports = {
  name: "client",
  target: "web",
  entry: {
    bundle: [`${paths.srcClient}/index.js`]
  },
  output: {
    path: path.join(paths.clientBuild, paths.publicPath),
    filename: "bundle.js",
    publicPath: paths.publicPath,
    chunkFilename: "[name].[chunkhash:8].chunk.js"
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        loader: "babel-loader",
        include: [
          fs.realpathSync("packages/header"),
          fs.realpathSync("packages/shell/src/client"),
          fs.realpathSync("packages/shell/src/shared"),
          fs.realpathSync("packages/footer"),
          fs.realpathSync("packages/filter"),
          fs.realpathSync("packages/jumbotron"),
          fs.realpathSync("packages/results"),
          fs.realpathSync("packages/styling")
        ]
      },
      {
        test: /\.s(a|c)ss$/,
        exclude: /\.module.(s(a|c)ss)$/,
        loader: [
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              sourceMap: false
            }
          }
        ]
      }
    ]
  },
  resolve: { ...resolvers, symlinks: false },
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
    chunks: true,
    chunkModules: true,
    colors: true,
    hash: false,
    modules: false,
    reasons: true,
    timings: true,
    version: false
  },
  externals: {
    react: "React",
    "react-dom": "ReactDOM"
  }
}
