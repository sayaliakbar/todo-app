const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
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

app.get("/api", (req, res) => {
  res.json({
    todoList: [
      { task: "dance", id: 1 },
      { task: "play", id: 2 },
      { task: "care", id: 3 },
    ],
  });
});

app.listen(8080, () => {
  console.log("Server started on port 5000");
});
