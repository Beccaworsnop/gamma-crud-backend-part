const Door = require("../models/door.model");
const pool = require("../config/db");

// CREATE a new door
async function createDoor(door) {
  const { door_name, location } = door;

  try {
    const result = await pool.query(
      "INSERT INTO gamma.doors (door_name, location) VALUES ($1, $2) RETURNING *",
      [door_name, location]
    );
    return new Door(result.rows[0].door_name, result.rows[0].location);
  } catch (error) {
    console.error("Error creating door:", error);
    throw error;
  }
}

// READ a single door by UID
async function getDoor(uid) {
  try {
    const result = await pool.query(
      "SELECT * FROM gamma.doors WHERE uid = $1",
      [uid]
    );

    if (result.rows.length === 0) {
      return null;
    }

    const doorData = result.rows[0];
    return new Door(doorData.door_name, doorData.location);
  } catch (error) {
    console.error("Error getting door:", error);
    throw error;
  }
}

// READ all doors
async function getAllDoors() {
  try {
    const result = await pool.query("SELECT * FROM gamma.doors");
    return result.rows.map(
      (doorData) => new Door(doorData.door_name, doorData.location)
    );
  } catch (error) {
    console.error("Error getting all doors:", error);
    throw error;
  }
}

// UPDATE door details
async function updateDoor(door) {
  const { uid, door_name, location } = door;
  try {
    const result = await pool.query(
      "UPDATE gamma.doors SET door_name = $1, location = $2 WHERE uid = $3 RETURNING *",
      [door_name, location, uid]
    );

    if (result.rows.length === 0) {
      return null;
    }

    return new Door(result.rows[0].door_name, result.rows[0].location);
  } catch (error) {
    console.error("Error updating door:", error);
    throw error;
  }
}

// DELETE a door by UID
async function deleteDoor(uid) {
  try {
    const result = await pool.query("DELETE FROM gamma.doors WHERE uid = $1", [
      uid,
    ]);
    return result.rowCount > 0; // Returns true if a row was deleted, false otherwise
  } catch (error) {
    console.error("Error deleting door:", error);
    throw error;
  }
}

module.exports = {
  createDoor,
  getDoor,
  getAllDoors,
  updateDoor,
  deleteDoor,
};
