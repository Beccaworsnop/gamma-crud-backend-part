const express = require("express");
const DoorController = require("../controllers/door.controller");

const doorRouter = express.Router();

// CREATE
doorRouter.post("/create-doors", DoorController.createDoor);

// READ
doorRouter.get("/door", DoorController.getDoor);
doorRouter.get("/doors", DoorController.getAllDoors);

// UPDATE
doorRouter.put("/door/:uid", DoorController.updateDoor);

// DELETE
doorRouter.delete("/door/:uid", DoorController.deleteDoor);

module.exports = doorRouter;