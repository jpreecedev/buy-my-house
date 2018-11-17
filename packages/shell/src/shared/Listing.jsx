import * as React from "react"

import "@buy-my-house/styling"

import Header from "@buy-my-house/header"
import Jumbotron from "@buy-my-house/jumbotron"
import Footer from "@buy-my-house/footer"
import ListingItem from "@buy-my-house/listing"
import { getState } from "../server/controllers/listing"
import withRouteData from "../state/withRouteData"

function Listing({ initialData: result }) {
  return (
    <>
      <Header />
      <main role="main">
        <Jumbotron small />
        <div className="container">
          <ListingItem listing={result.listing} />
        </div>
      </main>
      <Footer />
    </>
  )
}

export default withRouteData(getState)(Listing)
