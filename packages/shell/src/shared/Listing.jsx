import * as React from "react"

import "@buy-my-house/styling"

import ListingItem from "@buy-my-house/listing"
import Layout from "./Layout"
import { getState } from "../server/controllers/listing"
import withRouteData from "../state/withRouteData"

function Listing({ initialData: result }) {
  return (
    <Layout small>
      <ListingItem listing={result.listing} />
    </Layout>
  )
}

export default withRouteData(getState)(Listing)
