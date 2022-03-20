const Bestiary = require('../models/Bestiary.model');

const getAllBeast = async (req, res) => {
    try {
        const bestiary = await Bestiary.find({}, { _id: 0, __v: 0, createdAt: 0, updatedAt: 0 });
        return res.status(200).json(bestiary)
    } catch (err) {
        return res.status(500).json(err);
    }
};

const getById = async (req, res) => {
    const id = req.params.id;
    try {
        const beastID = await Bestiary.findById(id);
        if (beastID) {
            return res.status(200).json(beastID);
        } else {
            return res.status(404).json('No beast found by this id');
        }
    } catch (err) {
        return res.status(500).json(err);
    }
};

const getFilteredName = async (req, res) => {
    const name = req.params.name;
    try {
        const beastIDByName = await Bestiary.find({ name });
        return res.status(200).json(beastIDByName)
    } catch (err) {
        return res.status(500).json(err);
    }
};

const getFilteredClass = async (req, res) => {
    const classBeast = req.params.class;
    try {
        const characterByClass = await Bestiary.find({ classBeast });
        return res.status(200).json(characterByClass)
    } catch (err) {
        return res.status(500).json(err);
    }
};

module.exports = { getAllBeast, getById, getFilteredName, getFilteredClass };