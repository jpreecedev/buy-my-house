const MiniCssExtractPlugin = require("mini-css-extract-plugin")

const generateSourceMap = process.env.OMIT_SOURCEMAP !== "true"

const cssRegex = /\.css$/
const cssModuleRegex = /\.module\.css$/

const scssRegex = /\.scss$/
const scssModuleRegex = /\.module\.scss$/

const babelLoader = {
  test: /\.(js|mjs)$/,
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
    }
  ]
}

const scssModuleLoaderClient = {
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
  use: [
    require.resolve("css-hot-loader"),
    MiniCssExtractPlugin.loader,
    require.resolve("css-loader")
  ]
}

const scssLoaderClient = {
  use: [
    require.resolve("css-hot-loader"),
    MiniCssExtractPlugin.loader,
    require.resolve("css-loader"),
    require.resolve("sass-loader")
  ]
}

const cssLoaderServer = {
  loader: require.resolve("css-loader")
}

const scssLoaderServer = {
  use: [require.resolve("css-loader"), require.resolve("sass-loader")]
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
    test: /\.js$/,
    use: [babelLoader, urlLoaderClient, fileLoaderClient]
  },
  {
    test: /\.scss$/,
    oneOf: [scssLoaderClient]
  },
  {
    test: /\.css$/,
    oneOf: [cssLoaderClient]
  }
]

const server = [
  {
    test: /\.js$/,
    oneOf: [urlLoaderServer, fileLoaderServer]
  }
]

module.exports = {
  client,
  server
}
