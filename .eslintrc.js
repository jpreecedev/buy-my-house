const paths = require("./config/paths")

module.exports = {
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 7,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
      modules: true
    }
  },
  env: {
    browser: true
  },
  extends: [
    "prettier",
    "prettier/react",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:prettier/recommended"
  ],
  plugins: ["babel", "import", "prettier"],
  settings: {
    "import/resolver": {
      node: {
        paths: paths.resolveModules
      }
    }
  }
}
