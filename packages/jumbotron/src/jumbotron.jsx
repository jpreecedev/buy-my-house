import * as React from "react"
import classNames from "classnames"
import { hot } from "react-hot-loader"

import styles from "./styles.module.scss"

function Jumbotron({ small }) {
  const classes = classNames(
    "jumbotron",
    "text-center",
    {
      [styles.jumbotron]: !small
    },
    {
      [styles.small]: small
    }
  )
  return (
    <section className={classes}>
      <div className="container">
        <h1 className="jumbotron-heading">Buy My House</h1>
        {!small && (
          <p className="lead text-muted">
            Something short and leading about the collection below—its contents,
            the creator, etc. Make it short and sweet, but not too short so
            folks do not simply skip over it entirely.
          </p>
        )}
      </div>
    </section>
  )
}

export default hot(module)(Jumbotron)
