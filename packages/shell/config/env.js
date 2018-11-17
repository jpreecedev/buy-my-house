const fs = require("fs")
const path = require("path")

delete require.cache[require.resolve("./paths")]

if (!process.env.NODE_ENV) {
  throw new Error(
    "The process.env.NODE_ENV environment variable is required but was not specified."
  )
}

const appDirectory = fs.realpathSync(process.cwd())
process.env.NODE_PATH = (process.env.NODE_PATH || "")
  .split(path.delimiter)
  .filter(folder => folder && !path.isAbsolute(folder))
  .map(folder => path.resolve(appDirectory, folder))
  .join(path.delimiter)

module.exports = () => {
  const raw = {
    PORT: process.env.PORT || 8500,
    NODE_ENV: process.env.NODE_ENV || "development",
    WEB_GATEWAY: process.env.WEB_GATEWAY || "http://localhost:3002"
  }

  // Stringify all values so we can feed into Webpack DefinePlugin
  const stringified = {
    "process.env": Object.keys(raw).reduce((env, key) => {
      env[key] = JSON.stringify(raw[key])
      return env
    }, {})
  }

  return { raw, stringified }
}
