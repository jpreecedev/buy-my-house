import * as React from "react"
import "@buy-my-house/styling/dist/base.css"

import { Header } from "@buy-my-house/header"
import { Jumbotron } from "@buy-my-house/jumbotron"
import { Results } from "@buy-my-house/results"

function App() {
  return (
    <>
      <Header />
      <main role="main">
        <Jumbotron />
      </main>
      <Results />
    </>
  )
}

export default App
