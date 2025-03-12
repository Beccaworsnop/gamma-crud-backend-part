const express = require("express");
const peopleRoutes = require("./routes/people.route");
const doorRoutes = require("./routes/door.route");

const app = express();

app.use(express.json());

app.use("/api", peopleRoutes);
app.use("/api", doorRoutes);

module.exports = app;
