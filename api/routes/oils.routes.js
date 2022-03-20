const express = require("express");
const router = express.Router();

const { getAllOils, getById, getFilteredName, getFilteredIngredients, getFilteredCharges, postOil } = require('../controllers/oil.controller');

router.get("/", getAllOils);
router.get("/id/:id", getById);
router.get("/name/:name", getFilteredName);
router.get("/ingredients/:ingredients", getFilteredIngredients);
router.get("/charges/:charges", getFilteredCharges);

router.post("/", postOil);

module.exports = router;
