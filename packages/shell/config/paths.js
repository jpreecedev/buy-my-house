const { resolveApp } = require("../scripts/utils")

const paths = {
  clientBuild: resolveApp("../../build/client"),
  serverBuild: resolveApp("../../build/server"),
  src: resolveApp("src"),
  srcClient: resolveApp("src/client"),
  srcServer: resolveApp("src/server"),
  srcShared: resolveApp("src/shared"),
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
