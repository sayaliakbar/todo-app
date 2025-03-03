const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/database");
const colors = require("colors");
const todos = require("./routes/todos");
const morgan = require("morgan");

dotenv.config();

connectDB();

const corsOptions = {
  origin: ["http://localhost:5173"],
};

const app = express();
app.use(express.json());

app.use(cors(corsOptions));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:5173"); // Allow requests from this specific origin
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE"); // Specify allowed methods
  res.header("Access-Control-Allow-Headers", "Content-Type"); // Specify allowed headers
  next();
});

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
} else if (process.env.NODE_ENV === "production") {
  app.use(morgan("combined"));
} else {
  console.error(
    "Invalid NODE_ENV value. Please check your .env file.".red.underline.bold
  );
  process.exit(1);
}

app.use("/api/todos", todos);

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the API" });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  if (process.env.NODE_ENV === "development") {
    console.log(
      `Server running in development mode on port ${PORT}`.yellow.bold
    );
  } else if (process.env.NODE_ENV === "production") {
    console.log(
      `Server running in production mode on port ${PORT}`.yellow.bold
    );
  } else {
    console.error(
      "Invalid NODE_ENV value. Please check your .env file.".red.underline.bold
    );
    process.exit(1);
  }
});
