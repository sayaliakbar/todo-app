const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("../config/database");
const colors = require("colors");
const todos = require("../routes/todos");
const morgan = require("morgan");

dotenv.config();

connectDB();

const corsOptions = {
  origin: [process.env.FRONTEND_URL, process.env.FRONTEND_URL_PROD],
};

const app = express();
app.use(express.json());

app.use(cors(corsOptions));

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
