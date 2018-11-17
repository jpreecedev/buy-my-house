import * as React from "react"

import "@buy-my-house/styling"

import Header from "@buy-my-house/header"
import Jumbotron from "@buy-my-house/jumbotron"
import Footer from "@buy-my-house/footer"
import ListingItem from "@buy-my-house/listing"

function Listing({ initialData: listing }) {
  return (
    <>
      <Header />
      <main role="main">
        <Jumbotron small />
        <div className="container">
          <ListingItem listing={listing} />
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Listing
