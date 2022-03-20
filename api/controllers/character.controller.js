const Character = require('../models/Character.model');

const getAllCharacters = async (req, res) => {
    try {
        const characters = await Character.find({}, { _id: 0, __v: 0, createdAt: 0, updatedAt: 0 });
        return res.status(200).json(characters)
    } catch (err) {
        return res.status(500).json(err);
    }
};

const postCharacter = async (req, res, next) => {
    try {
        const newCharacter = new Character(req.body);
        const createdCharacter = await newCharacter.save();
        return res.status(201).json(createdCharacter);
    } catch (error) {
        next(error);
    }
};

const deleteCharacter = async (req, res, next) => {
    try {
        const { id } = req.params;
        await Character.findByIdAndDelete(id);
        return res.status(200).json('Character deleted!');
    } catch (error) {
        return next(error);
    }
};

const putCharacter = async (req, res, next) => {
    try {
        const { id } = req.params;
        const characterModify = new Character(req.body);
        characterModify._id = id;
        const characterUpdated = await Character.findByIdAndUpdate(id, characterModify, { new: true });
        return res.status(200).json(characterUpdated);
    } catch (error) {
        return next(error);
    }
};

const getById = async (req, res) => {
    const id = req.params.id;
    try {
        const characterID = await Character.findById(id);
        if (characterID) {
            return res.status(200).json(characterID);
        } else {
            return res.status(404).json('No character found by this id');
        }
    } catch (err) {
        return res.status(500).json(err);
    }
};

const getFilteredName = async (req, res) => {
    const name = req.params.name;
    try {
        const characterByName = await Character.find({ name });
        return res.status(200).json(characterByName)
    } catch (err) {
        return res.status(500).json(err);
    }
};

const getFilteredRace = async (req, res) => {
    const race = req.params.race;
    try {
        const characterByRace = await Character.find({ race });
        return res.status(200).json(characterByRace)
    } catch (err) {
        return res.status(500).json(err);
    }
};

const getFilteredGenre = async (req, res) => {
    const genre = req.params.genre;
    try {
        const characterByGenre = await Character.find({ genre });
        return res.status(200).json(characterByGenre)
    } catch (err) {
        return res.status(500).json(err);
    }
};

const getFilteredNationality = async (req, res) => {
    const nationality = req.params.nationality;
    try {
        const characterByNationality = await Character.find({ nationality });
        return res.status(200).json(characterByNationality)
    } catch (err) {
        return res.status(500).json(err);
    }
};

const getFilteredBirth = async (req, res) => {
    const { birth } = req.params;

    try {
        const characterBybirth = await Character.find({ birth: { $gt: birth } });
        return res.status(200).json(characterBybirth);
    } catch (err) {
        return res.status(500).json(err);
    }
};

const postPicture = async (req, res, next) => {
    try {
        req.body.picture = req.file_url;
        const newCharacter = new Character(req.body);
        const createdCharacter = await newCharacter.save();
        return res.status(201).json(createdCharacter);
    } catch (error) {
        next(error);
    }
};

module.exports = { getAllCharacters, getById, getFilteredName, getFilteredRace, getFilteredGenre, getFilteredNationality, getFilteredBirth, postCharacter, deleteCharacter, putCharacter, postPicture };
