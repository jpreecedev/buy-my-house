import fetch from "../fetch"
import serverRenderer from "../render"
import Home from "../../shared/Home"
import loadData from "../../state/loadData"

const Query = `
{
  results {
    country
    result_count
    area_name
    listing{
      listing_id
      property_type
      image_url
      num_bedrooms
      short_description
      price
      displayable_address
    }
  }
}`

export const getState = () =>
  fetch(Query).then(result => ({
    listings: result.results.listing,
    area: result.area_name,
    count: result.result_count
  }))

async function get(req, res) {
  const data = await loadData(getState)
  return serverRenderer(Home, data)(req, res)
}

export default { get, getState }
