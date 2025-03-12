const peopleService = require("../service/people.service");

const PeopleController = {
  createPerson: async (req, res) => {
    try {
      const personData = req.body;
      const person = await peopleService.createPerson(personData);
      res.status(201).json(person);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  getAllPeople: async (req, res) => {
    try {
      const people = await peopleService.getAllPeople();
      res.status(200).json(people);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  getPerson: async (req, res) => {
    try {
      const { uid } = req.params;
      const person = await peopleService.getPerson(parseInt(uid));
      person
        ? res.status(200).json(person)
        : res.status(404).json({ error: "Person not found" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  updatePerson: async (req, res) => {
    try {
      const { uid } = req.params;
      const updatedData = req.body;
      const updatedPerson = await peopleService.updatePerson(
        parseInt(uid),
        updatedData
      );
      res.status(200).json(updatedPerson);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  deletePerson: async (req, res) => {
    try {
      const { uid } = req.params;
      await peopleService.deletePerson(parseInt(uid));
      res.status(204).send();
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
};

module.exports = PeopleController;
