const express = require("express");
const router = express.Router();

const { getAllCountry, getById, getFilteredName, putRelation } = require('../controllers/country.controller');

router.get("/", getAllCountry);
router.get("/id/:id", getById);
router.get("/name/:name", getFilteredName);

router.put("/add-place", putRelation)

module.exports = router;