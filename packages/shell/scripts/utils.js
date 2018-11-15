const chalk = require("chalk")
const { realpathSync } = require("fs")
const { resolve } = require("path")

const appDirectory = realpathSync(process.cwd())
const resolveApp = relativePath => resolve(appDirectory, relativePath)

const logMessage = (message, level = "info") => {
  const color =
    level === "error" ? "red" : level === "warning" ? "yellow" : "white"
  console.log(`[${new Date().toISOString()}]`, chalk[color](message))
}

const compilerPromise = (name, compiler) => {
  return new Promise((resolvePromise, reject) => {
    compiler.hooks.compile.tap(name, () => {
      logMessage(`[${name}] Compiling `)
    })
    compiler.hooks.done.tap(name, stats => {
      if (!stats.hasErrors()) {
        return resolvePromise()
      }
      return reject(new Error(`Failed to compile ${name} - ${stats}`))
    })
  })
}

module.exports = {
  logMessage,
  appDirectory,
  resolveApp,
  compilerPromise
}
