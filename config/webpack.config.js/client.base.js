const path = require("path")
const paths = require("../paths")
const { client: clientLoaders } = require("./loaders")
const resolvers = require("./resolvers")
const plugins = require("./plugins")

module.exports = {
  name: "client",
  target: "web",
  entry: {
    bundle: [`${paths.srcClient}/index.jsx`]
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
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/
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
              sourceMap: true
            }
          }
        ]
      }
    ]
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
