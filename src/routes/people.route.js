const express = require("express");
const PeopleController = require("../controllers/people.controller");

const peopleRouter = express.Router();

// CREATE
peopleRouter.post("/people", PeopleController.createPerson);

// READ
peopleRouter.get("/people", PeopleController.getAllPeople);
peopleRouter.get("/people/:uuid", PeopleController.getPerson);

// UPDATE
peopleRouter.put("/people/:uuid", PeopleController.updatePerson);

// DELETE
peopleRouter.delete("/people/:uuid", PeopleController.deletePerson);

module.exports = peopleRouter;

//