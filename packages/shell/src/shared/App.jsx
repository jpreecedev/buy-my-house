import * as React from "react"

import "@buy-my-house/styling"

import Header from "@buy-my-house/header"
import Jumbotron from "@buy-my-house/jumbotron"
import Results from "@buy-my-house/results"
import Footer from "@buy-my-house/footer"

function App({ initialData: listings }) {
  return (
    <>
      <Header />
      <main role="main">
        <Jumbotron />
        <Results listings={listings} />
      </main>
      <Footer />
    </>
  )
}

export default App
