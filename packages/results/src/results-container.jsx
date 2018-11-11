import * as React from "react"
import Result from "./result"

function ResultsContainer() {
  return (
    <div className="py-5 bg-light">
      <div className="container">
        <div className="row">
          {[1, 2, 3, 4, 5, 6].map(() => (
            <Result />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ResultsContainer
