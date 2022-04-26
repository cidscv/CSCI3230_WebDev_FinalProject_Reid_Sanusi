const db = require("../models");
const Rest = db.rests;
// Create and Save a new restaurant
exports.create = (req, res) => {
  // Validate request
  if (!req.body.restName) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }
  // Create a restaurant
  const rest = new Rest({
    restName: req.body.restName,
    price: req.body.price,
  });
  // Save user in the database
  rest
    .save(rest)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the restaurant.",
      });
    });
};
// Retrieve all restaurants from the database.
exports.findAll = (req, res) => {
  const restName = req.query.restName;
  var condition = restName
    ? { restName: { $regex: new RegExp(restName), $options: "i" } }
    : {};
  Rest.find(condition)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving restaurants.",
      });
    });
};
// Find a single restaurant with an id
exports.findOne = (req, res) => {
  const id = req.params.id;
  Rest.findById(id)
    .then((data) => {
      if (!data)
        res.status(404).send({ message: "Not found restaurant with id " + id });
      else res.send(data);
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: "Error retrieving restaurant with id=" + id });
    });
};
// Update a restaurant by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!",
    });
  }
  const id = req.params.id;
  Rest.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update restaurant with id=${id}. Maybe restaurant was not found!`,
        });
      } else res.send({ message: "restaurant was updated successfully." });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating restaurant with id=" + id,
      });
    });
};
// Delete a restaurant with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;
  Rest.findByIdAndRemove(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete restaurant with id=${id}. Maybe restaurant was not found!`,
        });
      } else {
        res.send({
          message: "restaurant was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete restaurant with id=" + id,
      });
    });
};
// Delete all restaurantss from the database.
exports.deleteAll = (req, res) => {
  Rest.deleteMany({})
    .then((data) => {
      res.send({
        message: `${data.deletedCount} restaurants were deleted successfully!`,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all restaurants.",
      });
    });
};
