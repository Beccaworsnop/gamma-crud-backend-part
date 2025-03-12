const {
  createDoor,
  getDoor,
  getAllDoors,
  updateDoor,
  deleteDoor,
} = require("../src/service/door.service");

const Door = require("../src/model/door.model");

// CREATE
const newDoor = new Door("Main Entrance", "Building A - Ground Floor");
createDoor(newDoor)
  .then((createdDoor) => {
    console.log("New door created:", createdDoor);
  })
  .catch((error) => {
    console.error("Error creating door:", error);
  });

// READ
getDoor(1) // Replace with actual UID
  .then((retrievedDoor) => {
    if (retrievedDoor) {
      console.log("Retrieved Door:", retrievedDoor);
    } else {
      console.log("Door not found.");
    }
  })
  .catch((error) => {
    console.error("Error getting door:", error);
  });

getAllDoors(1) // Replace with actual UID
  .then((retrievedDoors) => {
    if (retrievedDoors) {
      console.log("Retrieved Doors:", retrievedDoors);
    } else {
      console.log("No doors found.");
    }
  })
  .catch((error) => {
    console.error("Error getting doors:", error);
  });

// UPDATE
getDoor(1)
  .then((doorToUpdate) => {
    if (doorToUpdate) {
      doorToUpdate.doorName = "Updated Entrance";
      doorToUpdate.location = "Building B - First Floor";

      updateDoor(doorToUpdate)
        .then((updatedDoor) => {
          console.log("Updated Door:", updatedDoor);
        })
        .catch((error) => {
          console.error("Error updating door:", error);
        });
    } else {
      console.log("Door not found.");
    }
  })
  .catch((error) => {
    console.error("Error retrieving door for update:", error);
  });

// DELETE
deleteDoor(1) // Replace with actual UID
  .then((deleted) => {
    if (deleted) {
      console.log("Door deleted successfully.");
    } else {
      console.log("Door not found or not deleted.");
    }
  })
  .catch((error) => {
    console.error("Error deleting door:", error);
  });
