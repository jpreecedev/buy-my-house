import * as React from "react"
import { hot } from "react-hot-loader"
import House from "./house"

function Header() {
  return (
    <header>
      <div className="navbar navbar-dark bg-dark box-shadow">
        <div className="container d-flex justify-content-between">
          <a href="/" className="navbar-brand d-flex align-items-center">
            <House />
            <strong>Buy My House</strong>
          </a>
        </div>
      </div>
    </header>
  )
}

export default hot(module)(Header)
