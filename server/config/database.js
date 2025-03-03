const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    if (process.env.NODE_ENV === "development") {
      const conn = await mongoose.connect(process.env.MONGO_URI_DEV);

      console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.bold);
    } else if (process.env.NODE_ENV === "production") {
      const conn = await mongoose.connect(process.env.MONGO_URI_PROD);

      console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.bold);
    } else {
      console.error(
        "Invalid NODE_ENV value. Please check your .env file.".red.underline
          .bold
      );
      process.exit(1);
    }
  } catch (error) {
    console.error(`Error: ${error.message}`.red.underline.bold);
    process.exit(1);
  }
};

module.exports = connectDB;
