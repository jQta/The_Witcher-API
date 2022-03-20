const Country = require('../models/Country.model');

const getAllCountry = async (req, res) => {
    try {
        const country = await Country.find({}, { _id: 0, __v: 0, createdAt: 0, updatedAt: 0 }).populate('places', { _id: 0, __v: 0, createdAt: 0, updatedAt: 0 });
        return res.status(200).json(country)
    } catch (err) {
        return res.status(500).json(err);
    }
};

const getById = async (req, res) => {
    const id = req.params.id;
    try {
        const countryID = await Country.findById(id);
        if (countryID) {
            return res.status(200).json(countryID);
        } else {
            return res.status(404).json('No country found by this id');
        }
    } catch (err) {
        return res.status(500).json(err);
    }
};

const getFilteredName = async (req, res) => {
    const name = req.params.name;
    try {
        const countryIDByName = await Country.find({ name });
        return res.status(200).json(countryIDByName)
    } catch (err) {
        return res.status(500).json(err);
    }
};

const putRelation = async (req, res, next) => {
    try {
        const { countryId } = req.body;
        const { placeId } = req.body;
        const updatedCountry = await Country.findByIdAndUpdate(
            countryId,
            { $push: { places: placeId } },
            { new: true }
        );
        return res.status(200).json(updatedCountry);
    } catch (error) {
        return next(error);
    }
};


module.exports = { getAllCountry, getById, getFilteredName, putRelation };