import * as React from "react"
import { render } from "react-dom"
import { hot } from "react-hot-loader"

import Header from "./header"

import "@buy-my-house/styling/dist/base.css"

const renderComponent = Component =>
  render(hot(module)(Component), document.getElementById("root"))

renderComponent(<Header />)
