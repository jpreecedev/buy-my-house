import * as React from "react"

function Footer() {
  return (
    <footer className="text-muted footer">
      <div className="container">
        <p className="float-right">
          <a href="/">Back to top</a>
        </p>
        <p>
          © Buy My House, a practical example of front-end microservice
          architecture
        </p>
        <p>
          New to Bootstrap? <a href="../../">Visit the homepage</a> or read our{" "}
          <a href="../../getting-started/">getting started guide</a>.
        </p>
      </div>
    </footer>
  )
}

export default Footer
