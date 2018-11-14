const path = require("path")
const fs = require("fs")

const appDirectory = fs.realpathSync(process.cwd())
const resolveApp = relativePath => path.resolve(appDirectory, relativePath)

const paths = {
  clientBuild: resolveApp("build/client"),
  serverBuild: resolveApp("build/server"),
  src: resolveApp("src"),
  srcClient: resolveApp("packages/shell/src/client"),
  srcServer: resolveApp("packages/shell/src/server"),
  srcShared: resolveApp("packages/shell/src/shared"),
  publicPath: "/static/"
}

paths.resolveModules = [
  paths.srcClient,
  paths.srcServer,
  paths.srcShared,
  paths.src,
  "node_modules"
]

module.exports = paths
