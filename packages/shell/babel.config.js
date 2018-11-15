module.exports = {
  presets: ["@babel/preset-env", "@babel/preset-react"],
  plugins: [
    "@babel/plugin-transform-runtime",
    [
      "@babel/plugin-proposal-class-properties",
      {
        loose: true
      }
    ],
    "@babel/plugin-proposal-object-rest-spread",
    "@babel/plugin-transform-async-to-generator",
    "@babel/plugin-syntax-class-properties",
    "@babel/plugin-syntax-object-rest-spread",
    "@babel/plugin-transform-react-inline-elements",
    "@babel/plugin-transform-react-constant-elements",
    "react-hot-loader/babel"
  ]
}
