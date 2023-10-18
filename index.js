const express = require("express");
const app = express();

// load config from env file
require("dotenv").config();

const PORT = process.env.PORT || 4000;

//middleware to parse json req.body
app.use(express.json());

//import routes for TODO API
const TodoRoutes = require("./routes/todos");

//mount the todo
app.use("/api/v1", TodoRoutes);

// start the server
app.listen(PORT, () => {
  console.log(`App started at ${PORT}`);
});

// connect to the database
const dbConnect = require("./config/database");
dbConnect();

// default roues
app.get("/", (req, res) => {
  res.send(`<h1>this is home page for testing  </h1>`);
});
