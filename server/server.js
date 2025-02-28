const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/database.js");


dotenv.config();
connectDB();

const corsOptions = {
  origin: ["https://localhost:5173"],
};

const app = express();
app.use(cors(corsOptions));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:5173"); // Allow requests from this specific origin
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE"); // Specify allowed methods
  res.header("Access-Control-Allow-Headers", "Content-Type"); // Specify allowed headers
  next();
});

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the API" });
});

app.listen(process.env.PORT, () => {
  console.log("Server started on port " + process.env.PORT);
});
