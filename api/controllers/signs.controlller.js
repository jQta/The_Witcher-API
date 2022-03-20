const Signs = require('../models/Signs.model');

const getAllSign = async (req, res) => {
    try {
        const sign = await Signs.find({}, { _id: 0, __v: 0, createdAt: 0, updatedAt: 0 });
        return res.status(200).json(sign)
    } catch (err) {
        return res.status(500).json(err);
    }
};

const getById = async (req, res) => {
    const id = req.params.id;
    try {
        const signID = await Signs.findById(id);
        if (signID) {
            return res.status(200).json(signID);
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
        const signIDByName = await Signs.find({ name });
        return res.status(200).json(signIDByName)
    } catch (err) {
        return res.status(500).json(err);
    }
};

module.exports = { getAllSign, getById, getFilteredName };