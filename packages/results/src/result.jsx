/* eslint-disable react/no-danger */
import * as React from "react"
import { Link } from "react-router-dom"

import styles from "./styles.module.scss"

function Result({ listing }) {
  return (
    <div className="col-md-4">
      <Link to={`/listing/${listing.listing_id}`} className={styles.link}>
        <div className="card mb-4 box-shadow">
          <img
            className="card-img-top"
            style={{ height: "225px", display: "block" }}
            alt={listing.displayable_address}
            src={listing.image_url}
          />
          <div className="card-body">
            <p
              className="card-text"
              dangerouslySetInnerHTML={{
                __html: `${listing.short_description.substring(0, 250)}...`
              }}
            />
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
                <button
                  type="button"
                  className="btn btn-sm btn-outline-secondary"
                >
                  View
                </button>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Result
