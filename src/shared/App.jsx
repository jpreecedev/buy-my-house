import * as React from "react"

import "../../components/styling/base.scss"

import Header from "../../components/header"
import Jumbotron from "../../components/jumbotron"
import Results from "../../components/results"
import Footer from "../../components/footer"

function App() {
  return (
    <>
      <Header />
      <main role="main">
        <Jumbotron />
        <Results />
      </main>
      <Footer />
    </>
  )
}

export default App
