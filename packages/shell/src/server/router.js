import home from "./controllers/home"

function createRoutes(app) {
  app.get("/", home.get)
}

export default createRoutes
