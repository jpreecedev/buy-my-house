import home from "./controllers/home"
import listing from "./controllers/listing"

function createRoutes(app) {
  app.get("/listing/:listingId", listing.get)
  app.get("/", home.get)
}

export default createRoutes
