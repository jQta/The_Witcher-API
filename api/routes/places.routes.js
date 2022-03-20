const express = require("express");
const router = express.Router();

const { getAllPlaces, getById, getFilteredName, getFilteredCountry, getFilteredOwner, postPlace, postRelation, putRelation } = require('../controllers/place.controller');

router.get("/", getAllPlaces);
router.get("/id/:id", getById);
router.get("/name/:name", getFilteredName);
router.get("/country/:country", getFilteredCountry);
router.get("/owner/:owner", getFilteredOwner);

router.post("/", postPlace);
router.post("/create", postRelation);

router.put("/add-character", putRelation)

module.exports = router;
