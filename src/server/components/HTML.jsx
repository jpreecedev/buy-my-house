/* eslint-disable react/no-danger */
import React from "react"
import Helmet from "react-helmet"

function HTML({ children, scripts, css }) {
  const head = Helmet.renderStatic()
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {head.base.toComponent()}
        {head.title.toComponent()}
        {head.meta.toComponent()}
        {head.link.toComponent()}
        {head.script.toComponent()}
        {css.map(href => (
          <link key={href} rel="stylesheet" href={href} />
        ))}
      </head>
      <body>
        <div id="app" dangerouslySetInnerHTML={{ __html: children }} />
        {scripts.map(src => (
          <script key={src} src={src} />
        ))}
      </body>
    </html>
  )
}

HTML.defaultProps = {
  css: [],
  scripts: []
}

export default HTML
