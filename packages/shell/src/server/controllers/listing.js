import fetch from "../fetch"
import serverRenderer from "../render"
import Listing from "../../shared/Listing"

const Query = `
{
  results {
    listing{
      listing_id
      property_type
      image_url
      num_bedrooms
      description
      price
      displayable_address
    }
  }
}`

async function get(req, res) {
  const variables = {
    listingId: req.params.listingId
  }

  const data = await fetch(Query, variables).then(result => ({
    listing: result.results.listing[0]
  }))

  return serverRenderer(Listing, data)(req, res)
}

export default { get }
