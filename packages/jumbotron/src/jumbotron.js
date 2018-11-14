import * as React from "react"
import { hot } from "react-hot-loader"

import styles from "./styles.scss"

function Jumbotron() {
  return (
    <section className={`jumbotron text-center ${styles.jumbotron}`}>
      <div className="container">
        <h1 className="jumbotron-heading">Buy my home</h1>
        <p className="lead text-muted">
          Something short and leading about the collection below—its contents,
          the creator, etc. Make it short and sweet, but not too short so folks
          do not simply skip over it entirely.
        </p>
      </div>
    </section>
  )
}

export default hot(module)(Jumbotron)
