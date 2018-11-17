import * as React from "react"

import "@buy-my-house/styling"

import ResultsContainer from "@buy-my-house/results"
import Layout from "./Layout"
import { getState } from "../server/controllers/home"
import withRouteData from "../state/withRouteData"

function Home({ initialData: results }) {
  return (
    <Layout>
      {results && <ResultsContainer listings={results.listings} />}
    </Layout>
  )
}

export default withRouteData(getState)(Home)
