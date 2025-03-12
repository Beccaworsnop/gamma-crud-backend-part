const doorService = require("../service/door.service");

const DoorController = {
  createDoor: async (req, res) => {
    try {
      const doorData = req.body;
      const door = await doorService.createDoor(doorData);
      res.status(201).json(door);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  getDoor: async (req, res) => {
    try {
      const { uid } = req.params;
      const door = await doorService.getDoor(parseInt(uid));
      if (door) {
        res.status(200).json(door);
      } else {
        res.status(404).json({ error: "Door not found" });
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  getAllDoors: async (req, res) => {
    try {
      const doors = await doorService.getAllDoors();
      res.status(200).json(doors);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  updateDoor: async (req, res) => {
    try {
      const { uid } = req.params;
      const updatedData = req.body;
      // Include the UID in the updatedData object
      updatedData.uid = parseInt(uid);
      const updatedDoor = await doorService.updateDoor(updatedData);
      if (updatedDoor) {
        res.status(200).json(updatedDoor);
      } else {
        res.status(404).json({ error: "Door not found" });
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  deleteDoor: async (req, res) => {
    try {
      const { uid } = req.params;
      const isDeleted = await doorService.deleteDoor(parseInt(uid));
      if (isDeleted) {
        res.status(204).send();
      } else {
        res.status(404).json({ error: "Door not found" });
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
};

module.exports = DoorController;
