const path = require("path")
const nodeExternals = require("webpack-node-externals")

const paths = require("../paths")
const { server: serverLoaders } = require("./loaders")
const resolvers = require("./resolvers")
const plugins = require("./plugins")

module.exports = {
  name: "server",
  target: "node",
  entry: {
    server: [path.resolve(paths.srcServer, "index.js")]
  },
  externals: [
    nodeExternals({
      // we still want imported css from external files to be bundled otherwise 3rd party packages
      // which require us to include their own css would not work properly
      whitelist: /\.css$/
    })
  ],
  output: {
    path: paths.serverBuild,
    filename: "server.js",
    publicPath: paths.publicPath,
    libraryTarget: "commonjs2"
  },
  resolve: { ...resolvers, symlinks: false },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
          plugins: [
            "@babel/plugin-syntax-dynamic-import",
            ["@babel/plugin-proposal-class-properties", { loose: true }],
            "@babel/plugin-proposal-object-rest-spread",
            "@babel/plugin-syntax-class-properties",
            "@babel/plugin-syntax-object-rest-spread",
            "@babel/plugin-transform-react-inline-elements",
            "@babel/plugin-transform-react-constant-elements",
            "react-hot-loader/babel"
          ],
          compact: true
        },
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
              sourceMap: false
            }
          }
        ]
      }
    ]
  },
  plugins: [...plugins.shared, ...plugins.server],
  stats: {
    colors: true
  }
}
