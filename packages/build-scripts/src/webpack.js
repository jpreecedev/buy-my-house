/* eslint-disable import/no-dynamic-require, global-require, import/no-extraneous-dependencies, class-methods-use-this */

const Webpack = require("webpack")
const WebpackDevServer = require("webpack-dev-server")
const { join, resolve } = require("path")
const { sync } = require("glob")
const log = require("./log")

const getServerConfig = configs => {
  if (Array.isArray(configs)) {
    return configs.find(config => config.target === "node")
  }
  return configs
}

const isEnabled = packagePath => {
  const packageJsonPath = join(packagePath, "package.json")
  return require(packageJsonPath).enabled
}

const processPackage = (packagePath, configPath) =>
  new Promise((resolvePromise, reject) => {
    const config = require(configPath)
    config.output = {
      ...config.output,
      libraryTarget: "commonjs2"
    }

    process.chdir(packagePath)

    config.entry = {
      main: resolve("./main.js")
    }

    const compiler = Webpack(config)
    compiler.run((err, stats) => {
      let messages
      if (err) {
        if (!err.message) {
          return reject(err)
        }
        messages = {
          errors: [err.message],
          warnings: []
        }
      } else {
        messages = stats.toJson({ all: false, warnings: true, errors: true })
      }
      if (messages.errors.length) {
        if (messages.errors.length > 1) {
          messages.errors.length = 1
        }
        return reject(new Error(messages.errors.join("\n\n")))
      }

      const resolveArgs = {
        stats,
        warnings: messages.warnings
      }

      return resolvePromise(resolveArgs)
    })
  })

const initialize = program => {
  const configFile = join(process.cwd(), program.webpackConfig)
  if (!configFile) {
    return new Error(
      "You must specify the path to the webpack configuration using --webpack-config"
    )
  }
  return { configFile }
}

const build = (configPath, root) => {
  const config = require(configPath)

  if (!root) {
    config.output = {
      ...config.output,
      libraryTarget: "commonjs2"
    }

    config.entry = {
      main: resolve("./main.js")
    }
  }

  Webpack(config, (err, stats) => {
    process.stdout.write(stats.toString())
  })
}

const buildAll = configPath => {
  const packages = sync(join(process.cwd(), "packages/*"))

  packages.reduce(
    (promise, packagePath) =>
      promise.then(
        () => isEnabled(packagePath) && processPackage(packagePath, configPath)
      ),
    Promise.resolve()
  )
}

const start = configPath => {
  const configs = require(configPath)
  const serverConfig = getServerConfig(configs)

  serverConfig.entry = [
    resolve("./src/index.jsx"),
    `webpack-dev-server/client?http://localhost:${serverConfig.devServer.port}`
  ]
  const server = new WebpackDevServer(Webpack(serverConfig), {
    headers: { "Access-Control-Allow-Origin": "*" }
  })

  server.listen(serverConfig.devServer.port, "127.0.0.1", () => {
    setTimeout(() => {
      log(`Server listening on http://localhost:${serverConfig.devServer.port}`)
    }, 1000)
  })
}

module.exports = {
  build,
  buildAll,
  initialize,
  start
}
