import * as React from "react"
import { Link } from "react-router-dom"
import House from "./house"

function Header() {
  return (
    <header>
      <div className="navbar navbar-dark bg-dark box-shadow">
        <div className="container d-flex justify-content-between">
          <Link to="/" className="navbar-brand d-flex align-items-center">
            <House />
            <strong>Buy My House</strong>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
