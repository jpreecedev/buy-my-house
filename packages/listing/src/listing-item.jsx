import * as React from "react"

function ListingItem({ listing }) {
  return (
    <div className="row featurette">
      <div className="col-md-7 order-md-2">
        <h2 className="featurette-heading">
          Oh yeah, its that good.
          {" "}
          <span className="text-muted">See for yourself.</span>
        </h2>
        <p className="lead">
          Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id
          ligula porta felis euismod semper. Praesent commodo cursus magna, vel
          scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.
        </p>
      </div>
      <div className="col-md-5 order-md-1">
        <img
          className="featurette-image img-fluid mx-auto"
          data-src="holder.js/500x500/auto"
          alt="500x500"
          src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22500%22%20height%3D%22500%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20500%20500%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_167208e8d17%20text%20%7B%20fill%3A%23AAAAAA%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A25pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_167208e8d17%22%3E%3Crect%20width%3D%22500%22%20height%3D%22500%22%20fill%3D%22%23EEEEEE%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22185.125%22%20y%3D%22261.1%22%3E500x500%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
          data-holder-rendered="true"
          style={{ width: "500px", height: "500px" }}
        />
      </div>
    </div>
  )
}

export default ListingItem
