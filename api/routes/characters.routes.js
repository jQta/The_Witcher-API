const express = require("express");
const router = express.Router();
const { isAuth } = require("../../api/middlewares/auth.middlewares");
const { upload, uploadToCloudinary } = require("../../api/middlewares/file.middlewares")

const { getAllCharacters, getById, getFilteredName, getFilteredRace, getFilteredGenre, getFilteredNationality, getFilteredBirth, postCharacter, deleteCharacter, putCharacter, postPicture } = require('../controllers/character.controller');

router.get("/", getAllCharacters);
router.get("/id/:id", [ isAuth ], getById);
router.get("/name/:name", getFilteredName);
router.get("/race/:race", getFilteredRace);
router.get("/genre/:genre", getFilteredGenre);
router.get("/nationality/:nationality", getFilteredNationality);
router.get("/birth/:birth", getFilteredBirth);

router.post("/", postCharacter);
router.post("/create", [ upload.single('picture'), uploadToCloudinary ], postPicture)

router.delete("/:id", deleteCharacter);
router.put("/:id", putCharacter);

module.exports = router;
