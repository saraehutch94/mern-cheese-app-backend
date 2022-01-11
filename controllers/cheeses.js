// Require dependencies
const express = require("express");
const Cheese = require("../models/cheese");

// Set up router object
const cheeseRouter = express.Router();

// Mount routes

// index route
cheeseRouter.get("/", (req, res) => {
  Cheese.find({}, (error, allCheeses) => {
    res.json(allCheeses);
  });
});

// delete route
cheeseRouter.delete("/:id", (req, res) => {
  Cheese.findByIdAndDelete(req.params.id, (error, deletedCheese) => {
    res.json(deletedCheese);
  });
});

// update route
cheeseRouter.put("/:id", (req, res) => {
  Cheese.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (error, updatedCheese) => {
      res.json(updatedCheese);
    }
  );
});

// create route
cheeseRouter.post("/", (req, res) => {
  Cheese.create(req.body, (error, createdCheese) => {
    res.json(createdCheese);
  });
});

module.exports = cheeseRouter;
