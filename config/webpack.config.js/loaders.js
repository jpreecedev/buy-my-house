const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const generateSourceMap = process.env.OMIT_SOURCEMAP === "true" ? false : true

const cssRegex = /\.scss$/
const cssModuleRegex = /\.module\.scss$/

const babelLoader = {
  test: /\.(js|jsx|mjs)$/,
  exclude: /node_modules/,
  loader: require.resolve("babel-loader")
}

const cssModuleLoaderClient = {
  test: cssModuleRegex,
  use: [
    require.resolve("css-hot-loader"),
    MiniCssExtractPlugin.loader,
    {
      loader: require.resolve("css-loader"),
      options: {
        camelCase: true,
        modules: true,
        importLoaders: 1,
        sourceMap: generateSourceMap,
        localIdentName: "[name]__[local]___[hash:base64:5]"
      }
    },
    {
      loader: require.resolve("sass-loader"),
      options: {
        sourceMap: generateSourceMap
      }
    }
  ]
}

const cssLoaderClient = {
  test: cssRegex,
  exclude: cssModuleRegex,
  use: [
    require.resolve("css-hot-loader"),
    MiniCssExtractPlugin.loader,
    require.resolve("css-loader"),
    require.resolve("sass-loader")
  ]
}

const cssModuleLoaderServer = {
  test: cssModuleRegex,
  use: [
    {
      loader: require.resolve("css-loader/locals"),
      options: {
        camelCase: true,
        importLoaders: 1,
        modules: true,
        localIdentName: "[name]__[local]___[hash:base64:5]"
      }
    },
    {
      loader: require.resolve("sass-loader"),
      options: {
        sourceMap: generateSourceMap
      }
    }
  ]
}

const urlLoaderClient = {
  test: /\.(png|jpe?g|gif|svg)$/,
  loader: require.resolve(require.resolve("url-loader")),
  options: {
    limit: 2048,
    name: "assets/[name].[hash:8].[ext]"
  }
}

const urlLoaderServer = {
  ...urlLoaderClient,
  options: {
    ...urlLoaderClient.options,
    emitFile: false
  }
}

const fileLoaderClient = {
  exclude: [/\.(js|css|mjs|html|json)$/],
  use: [
    {
      loader: require.resolve("file-loader"),
      options: {
        name: "assets/[name].[hash:8].[ext]"
      }
    }
  ]
}

const fileLoaderServer = {
  exclude: [/\.(js|css|mjs|html|json)$/],
  use: [
    {
      loader: require.resolve("file-loader"),
      options: {
        name: "assets/[name].[hash:8].[ext]",
        emitFile: false
      }
    }
  ]
}

const client = [
  {
    oneOf: [
      babelLoader,
      cssModuleLoaderClient,
      cssLoaderClient,
      urlLoaderClient,
      fileLoaderClient
    ]
  }
]
const server = [
  {
    oneOf: [
      babelLoader,
      cssModuleLoaderServer,
      urlLoaderServer,
      fileLoaderServer
    ]
  }
]

module.exports = {
  client,
  server
}
