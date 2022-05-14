const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./db");
const colors = require("colors");
const errorHandler = require("./middlewares/errorHandler");
//get routers

const bootcamp = require("./routes/bootcampRoutes");

dotenv.config({ path: "./config/config.env" });

const logger = require("./middlewares/logger");

const app = express();

//bodyParser
app.use(express.json());

connectDB();
// app.use(logger);
app.use("/api/v1/bootcamps", bootcamp);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
const server = app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on ${PORT}`.yellow.bold
  )
);

process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`.red);
  server.close(() => {
    process.exit(1);
  });
});
