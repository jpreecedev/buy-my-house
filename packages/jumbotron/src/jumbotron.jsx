import * as React from "react"
import { hot } from "react-hot-loader"
import "./styles.scss"

function Jumbotron() {
  return (
    <section className="jumbotron text-center">
      <div className="container">
        <h1 className="jumbotron-heading">Buy my house</h1>
        <p className="lead text-muted">
          Something short and leading about the collection below—its contents,
          the creator, etc. Make it short and sweet, but not too short so folks
          do not simply skip over it entirely.
        </p>
        <p>
          <a href="/" className="btn btn-primary my-2">
            Main call to action
          </a>
          <a href="/" className="btn btn-secondary my-2">
            Secondary action
          </a>
        </p>
      </div>
    </section>
  )
}

export default hot(module)(Jumbotron)
