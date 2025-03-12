const express = require("express");
const { Pool } = require("pg");
const app = express();
const PORT = 3000;

app.use(express.json());

const pool = new Pool({
  user: "postgres", 
  host: "localhost",
  database: "gamma", 
  password: "gamma", 
  port: 5432, 
});

app.get("/", (req, res) => {
  res.send("Server is running!");
});

app.get("/people", (req, res) => {
  res.json([
    { full_name: "BECCA", email: "becca@test.com" },
  ]);
});

app.get("/test-db", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.json({ message: "DB Connected!", time: result.rows[0].now });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post("/people", async (req, res) => {
  try {
      const { full_name, email, password, rfid, role } = req.body;

      // Log the received request body
      console.log("Received request body:", req.body);

      // Make sure all required fields are provided
      if (!full_name || !email || !password || !rfid || !role) {
          return res.status(400).json({ error: "Missing required fields" });
      }

      // Insert into the database
      const newPerson = await pool.query(
          "INSERT INTO gamma.people (full_name, email, password, rfid, role) VALUES ($1, $2, $3, $4, $5) RETURNING *",
          [full_name, email, password, rfid, role]
      );

      res.json(newPerson.rows[0]);
  } catch (err) {
      console.error("Database error:", err.message);
      res.status(500).json({ error: "Server error", details: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});