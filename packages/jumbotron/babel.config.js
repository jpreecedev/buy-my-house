module.exports = {
  presets: ["@babel/preset-env", "@babel/preset-react"],
  plugins: [
    "@babel/plugin-syntax-dynamic-import",
    ["@babel/plugin-proposal-class-properties", { loose: true }],
    "@babel/plugin-proposal-object-rest-spread",
    "@babel/plugin-syntax-class-properties",
    "@babel/plugin-syntax-object-rest-spread",
    "@babel/plugin-transform-react-inline-elements",
    "@babel/plugin-transform-react-constant-elements",
    "react-hot-loader/babel"
  ],
  compact: true
}
