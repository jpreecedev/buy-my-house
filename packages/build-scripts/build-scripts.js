#!/usr/bin/env node

const program = require("commander")
const log = require("./src/log")
const { initialize, build, buildAll, start } = require("./src/webpack")

program
  .version("1.0.0")
  .option("-a, --all", "Builds all components")
  .option("-w, --webpack-config [path]", "Webpack Configuration Path")
  .option("-b, --build [packageName]", "Build Webpack Bundle")
  .option("-r, --root", "Is Root Project")
  .option("-s, --start", "Start Webpack Dev Server")
  .parse(process.argv)

const result = initialize(program)
if (result instanceof Error) {
  log(result)
  return
}

const { configFile } = result

log(`Using: ${configFile}`)

if (program.all) {
  buildAll(configFile)
} else if (program.build) {
  build(configFile, program.build, program.root)
} else if (program.start) {
  start(configFile)
}
