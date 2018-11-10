import * as React from "react"
import styles from "./Features.module.scss"

const Features = () => (
  <>
    <h2>Features</h2>
    <ul className={styles.wrapper}>
      <li className={styles.hot}>Webpack 4</li>
      <li className={styles.hot}>Babel 7</li>
      <li className={styles.hot}>ESLint 5</li>
      <li className={styles.hot}>Flow Type</li>
      <li className={styles.react}>React 16.6</li>
      <li>React Router 4</li>
      <li>React Helmet</li>
      <li>Express Webserver + Server Side Prerendering</li>
      <li>CSS Modules</li>
      <li>HMR (buggy, see Readme)</li>
    </ul>
  </>
)

export default Features
