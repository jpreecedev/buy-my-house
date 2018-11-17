/* eslint-disable no-underscore-dangle */

import React from "react"
import { hydrate } from "react-dom"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "../shared/Home"
import Listing from "../shared/Listing"

hydrate(
  <Router>
    <Switch>
      <Route path="/listing/:listingId">
        <Listing initialData={window.__PRELOADED_STATE__} />
      </Route>
      <Route exact path="/">
        <Home initialData={window.__PRELOADED_STATE__} />
      </Route>
    </Switch>
  </Router>,
  document.getElementById("app")
)

if (process.env.NODE_ENV === "development") {
  if (module.hot) {
    module.hot.accept()
  }
}
