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
  extends: ["airbnb", "prettier"],
  settings: {
    "import/resolver": {
      node: {
        paths: paths.resolveModules
      }
    }
  },
  rules: {
    "react/prop-types": "off",
    "import/no-extraneous-dependencies": "off",
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }]
  }
}
