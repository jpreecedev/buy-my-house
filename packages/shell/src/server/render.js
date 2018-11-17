import React from "react"
import { renderToString } from "react-dom/server"
import { StaticRouter as Router } from "react-router-dom"
import Html from "./components/HTML"

const serverRenderer = (Component, data) => (req, res) => {
  const content = renderToString(
    <Router location={req.url} context={{}}>
      <Component initialData={data} />
    </Router>
  )

  return res.send(
    `<!doctype html>${renderToString(
      <Html
        css={[
          res.locals.assetPath("bundle.css"),
          res.locals.assetPath("vendor.css")
        ]}
        scripts={[
          res.locals.assetPath("bundle.js"),
          res.locals.assetPath("vendor.js")
        ]}
        initialData={data}
      >
        {content}
      </Html>
    )}`
  )
}

export default serverRenderer
