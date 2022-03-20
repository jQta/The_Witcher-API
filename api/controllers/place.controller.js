const Place = require('../models/Place.model');

const getAllPlaces = async (req, res) => {
    try {
        const Places = await Place.find({}, { _id: 0, __v: 0, createdAt: 0, updatedAt: 0 }).populate('characters', { _id: 0, __v: 0, createdAt: 0, updatedAt: 0 });
        return res.status(200).json(Places)
    } catch (err) {
        return res.status(500).json(err);
    }
};

const postPlace = async (req, res, next) => {
    try {
        const newPlace = new Place({
            name: req.body.name,
            type: req.body.type,
            owner: req.body.owner,
            country: req.body.country,
            location: req.body.location,
            region: req.body.region,
            badge: req.body.badge,
        });
        const createdPlace = await newPlace.save();
        return res.status(201).json(createdPlace);
    } catch (error) {
        next(error);
    }
};

const getById = async (req, res) => {
    const id = req.params.id;
    try {
        const PlaceID = await Place.findById(id);
        if (PlaceID) {
            return res.status(200).json(PlaceID);
        } else {
            return res.status(404).json('No Place found by this id');
        }
    } catch (err) {
        return res.status(500).json(err);
    }
};

const getFilteredName = async (req, res) => {
    const name = req.params.name;
    try {
        const PlaceByName = await Place.find({ name });
        return res.status(200).json(PlaceByName)
    } catch (err) {
        return res.status(500).json(err);
    }
};

const getFilteredCountry = async (req, res) => {
    const country = req.params.country;
    try {
        const CountryByName = await Place.find({ country });
        return res.status(200).json(CountryByName)
    } catch (err) {
        return res.status(500).json(err);
    }
};

const getFilteredOwner = async (req, res) => {
    const owner = req.params.owner;
    try {
        const OwnerByName = await Place.find({ owner });
        return res.status(200).json(OwnerByName)
    } catch (err) {
        return res.status(500).json(err);
    }
};

const postRelation = async (req, res, next) => {
    try {
        const newPlace = new Place({
            name: req.body.name,
            loot: req.body.loot,
            characters: []
        });
        const createdPlace = await newPlace.save();
        return res.status(201).json(createdPlace);
    } catch (error) {
        next(error);
    }
};

const putRelation = async (req, res, next) => {
    try {
        const { placeId } = req.body;
        const { characterId } = req.body;
        const updatedPlace = await Place.findByIdAndUpdate(
            placeId,
            { $push: { characters: characterId } },
            { new: true }
        );
        return res.status(200).json(updatedPlace);
    } catch (error) {
        return next(error);
    }
};

module.exports = { getAllPlaces, getById, getFilteredName, getFilteredCountry, getFilteredOwner, postPlace, postRelation, putRelation };