import fetch from "node-fetch"
import urljoin from "url-join"

function fetchApiData(query) {
  return fetch(urljoin(process.env.WEB_GATEWAY, "graphql"), {
    method: "POST",
    mode: "cors",
    headers: { "Content-Type": "application/json" },
    cache: "no-cache",
    body: JSON.stringify({ query })
  })
    .then(res => res.json())
    .then(res => res.data)
}

export default fetchApiData
