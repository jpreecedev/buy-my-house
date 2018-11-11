import React from "react"
import { renderToString } from "react-dom/server"
import Html from "./components/HTML"
import App from "../shared/App"

const serverRenderer = () => (req, res) => {
  const content = renderToString(<App />)

  return res.send(
    `<!doctype html>${renderToString(
      <Html
        css={[
          res.locals.assetPath("bundle.css"),
          res.locals.assetPath("vendor.css")
        ]}
        scripts={[
          "https://unpkg.com/react@16/umd/react.development.js",
          "https://unpkg.com/react-dom@16/umd/react-dom.development.js",
          res.locals.assetPath("bundle.js"),
          res.locals.assetPath("vendor.js")
        ]}
      >
        {content}
      </Html>
    )}`
  )
}

export default serverRenderer
