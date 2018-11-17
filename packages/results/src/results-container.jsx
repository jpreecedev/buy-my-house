import * as React from "react"
import Result from "./result"

function ResultsContainer({ listings }) {
  return (
    <div className="py-5 bg-light">
      <div className="container">
        <div className="row">
          {listings.map(listing => (
            <Result listing={listing} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ResultsContainer
