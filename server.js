const express = require('express');
const dotenv = require('dotenv');

//get routers

const bootcamp = require('./routes/bootcampRoutes');

dotenv.config({ path: './config/config.env' });
const logger = require('./middlewares/logger');
const app = express();

app.use(logger);
app.use('/api/v1/bootcamps', bootcamp);

const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on ${PORT}`)
);
