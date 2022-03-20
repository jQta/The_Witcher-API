const express = require("express");
const router = express.Router();

const { getAllBeast, getById, getFilteredName, getFilteredClass } = require('../controllers/bestiary.controller');

router.get("/", getAllBeast);
router.get("/id/:id", getById);
router.get("/name/:name", getFilteredName);
router.get("/class/:class", getFilteredClass);

module.exports = router;