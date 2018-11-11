import * as React from "react"

import { Header } from "@buy-my-house/header"
import { Jumbotron } from "@buy-my-house/jumbotron"

import "@buy-my-house/styling/dist/base.css"

function App() {
  return (
    <>
      <Header />
      <main role="main">
        <Jumbotron />
      </main>
    </>
  )
}

export default App
