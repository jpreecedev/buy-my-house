/* eslint-disable react/no-danger */
import * as React from "react"

import styles from "./styles.module.scss"

function formatPrice(price) {
  return `£${price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}`
}

function Result({ listing }) {
  return (
    <div className="col-md-4">
      <a href={`/listing/${listing.listing_id}`} className={styles.link}>
        <div className="card mb-4 box-shadow">
          <img
            className="card-img-top"
            style={{ height: "225px", display: "block" }}
            alt={listing.displayable_address}
            src={listing.image_url}
          />
          <div className="card-body">
            <h5 className="card-title">{listing.displayable_address}</h5>
            <p className="small">
              <strong>{formatPrice(listing.price)}</strong>
            </p>
            <p
              className="card-text"
              dangerouslySetInnerHTML={{
                __html: `${listing.short_description.substring(0, 250)}...`
              }}
            />
          </div>
        </div>
      </a>
    </div>
  )
}

export default Result
