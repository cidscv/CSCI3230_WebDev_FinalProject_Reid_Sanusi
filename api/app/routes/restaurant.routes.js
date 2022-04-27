module.exports = (app) => {
  const rests = require("../controllers/restaurant.controller.js");
  var router = require("express").Router();
  // Create a new restaurant
  router.post("/", rests.create);
  // Retrieve all restaurants
  router.get("/", rests.findAll);
  // Retrieve a single restaurant with id
  router.get("/:id", rests.findOne);
  // Update a restaurant with id
  router.put("/:id", rests.update);
  // Delete a restaurant with id
  router.delete("/:id", rests.delete);
  // Create a new restaurant
  router.delete("/", rests.deleteAll);
  app.use("/api/rests", router);
};
