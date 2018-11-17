import * as React from "react"

import Header from "@buy-my-house/header"
import Jumbotron from "@buy-my-house/jumbotron"
import Footer from "@buy-my-house/footer"

function Layout({ children, small }) {
  return (
    <>
      <Header />
      <main role="main">
        <Jumbotron small={small} />
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Layout
