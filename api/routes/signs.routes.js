const express = require("express");
const router = express.Router();

const { getAllSign, getById, getFilteredName } = require('../controllers/signs.controlller');

router.get("/", getAllSign);
router.get("/id/:id", getById);
router.get("/name/:name", getFilteredName);

module.exports = router;