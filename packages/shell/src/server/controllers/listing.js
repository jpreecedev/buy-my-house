import fetch from "../fetch"
import serverRenderer from "../render"
import Listing from "../../shared/Listing"
import loadData from "../../state/loadData"

const Query = `
{
  results {
    listing{
      listing_id
      property_type
      image_url
      num_bedrooms
      short_description
      description
      price
      displayable_address
    }
  }
}`

export const getState = variables =>
  fetch(Query, variables).then(result => ({
    listing: result.results.listing[0]
  }))

async function get(req, res) {
  const variables = {
    listingId: req.params.listingId
  }

  const data = await loadData(getState, variables)
  return serverRenderer(Listing, data)(req, res)
}

export default { get, getState }
