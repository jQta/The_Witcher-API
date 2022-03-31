const express = require('express');
const { connect } = require('./config/db');
const cors = require("cors");
const passport = require('passport');
require('./api/authentication/passport');

const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CNAME,
  api_key: process.env.CKEY,
  api_secret: process.env.CSECRET
});

const userRoutes = require('./api/routes/user.routes');
const authRoutes = require('./api/routes/auth.routes');
const charactersRoutes = require("./api/routes/characters.routes");
const placesRoutes = require("./api/routes/places.routes");
const oilsRoutes = require("./api/routes/oils.routes");
const bestiaryRoutes = require("./api/routes/bestiary.routes");
const signsRoutes = require("./api/routes/signs.routes");
const countryRoutes = require("./api/routes/country.routes");

require('dotenv').config();;

connect();

const PORT = process.env.PORT;
const server = express();
server.set("secretKey", process.env.KEY);

server.use(cors({
  origin: [ '*' ],
  credentials: true,
}));

server.use((req, res, next) => {
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(passport.initialize())

server.use('/characters', charactersRoutes);
server.use('/places', placesRoutes);
server.use('/oils', oilsRoutes);
server.use('/bestiary', bestiaryRoutes);
server.use('/signs', signsRoutes);
server.use('/country', countryRoutes);

server.use('/users', userRoutes);
server.use('/', authRoutes);

server.use('*', (req, res, next) => {
  const error = new Error('Route not found');
  error.status = 404;
  next(error);
});

server.use((error, req, res, next) => {
  return res.status(error.status || 500).json(error.message || 'Unexpected error');
});

server.listen(PORT, () => {
  console.log(`Server listening in http://localhost:${PORT}`);
});