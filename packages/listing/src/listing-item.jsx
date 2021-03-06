import * as React from "react"

function formatPrice(price) {
  return `£${price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}`
}

function ListingItem({ listing }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-5">
          <img
            className="rounded mx-auto d-block img-fluid img-thumbnail"
            alt={listing.displayable_address}
            src={listing.image_url}
          />
        </div>
        <div className="col-md-7 text-center  text-md-left">
          <h2 className="mt-4 mt-md-0">{listing.displayable_address}</h2>
          <p className="small">
            {`${listing.property_type} - Asking price of ${formatPrice(
              listing.price
            )}`}
          </p>
          <p
            className="lead"
            dangerouslySetInnerHTML={{
              __html: `${listing.short_description}`
            }}
          />
          <button type="button" className="btn btn-primary">
            Buy now
          </button>
        </div>
      </div>
    </div>
  )
}

export default ListingItem
