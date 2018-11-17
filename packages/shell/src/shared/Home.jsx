import * as React from "react"

import "@buy-my-house/styling"

import Header from "@buy-my-house/header"
import Jumbotron from "@buy-my-house/jumbotron"
import ResultsContainer from "@buy-my-house/results"
import Footer from "@buy-my-house/footer"

function Home({ initialData: results }) {
  return (
    <>
      <Header />
      <main role="main">
        <Jumbotron />
        {results && <ResultsContainer listings={results.listings} />}
      </main>
      <Footer />
    </>
  )
}

export default Home