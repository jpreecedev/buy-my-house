import * as React from "react"

import styles from "./styles.module.scss"

function Footer() {
  return (
    <footer className={`text-muted text-center footer ${styles.footer}`}>
      <div className="container">
        <p>
          © Buy My House, a practical example of front-end microservice
          architecture
        </p>
      </div>
    </footer>
  )
}

export default Footer
