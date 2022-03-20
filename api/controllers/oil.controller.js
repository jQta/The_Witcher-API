const Oil = require('../models/Oil.model');

const getAllOils = async (req, res) => {
    try {
        const Oils = await Oil.find({}, { _id: 0, __v:0, createdAt:0,updatedAt:0 });
        return res.status(200).json(Oils)
    } catch (err) {
        return res.status(500).json(err);
    }
};

const postOil = async (req, res, next) => {
    try {
        const newOil = new Oil({
            name: req.body.name,
            ingredients: req.body.ingredients,
            effects: req.body.effects,
            charges: req.body.charges,
        });
        const createdOil = await newOil.save();
        return res.status(201).json(createdOil);
    } catch (error) {
        next(error);
    }
};

const getById = async (req, res) => {
    const id = req.params.id;
    try {
        const OilID = await Oil.findById(id);
        if (OilID) {
            return res.status(200).json(OilID);
        } else {
            return res.status(404).json('No Oil found by this id');
        }
    } catch (err) {
        return res.status(500).json(err);
    }
};

const getFilteredName = async (req, res) => {
    const name = req.params.name;
    try {
        const OilByName = await Oil.find({ name });
        return res.status(200).json(OilByName)
    } catch (err) {
        return res.status(500).json(err);
    }
};

const getFilteredIngredients = async (req, res) => {
    const ingredients = req.params.ingredients;
    try {
        const IngredientsByName = await Oil.find({ ingredients });
        return res.status(200).json(IngredientsByName)
    } catch (err) {
        return res.status(500).json(err);
    }
};

const getFilteredCharges = async (req, res) => {
    const { charges } = req.params;

    try {
        const characterBycharges = await Oil.find({ charges: { $gt: charges } });
        return res.status(200).json(characterBycharges);
    } catch (err) {
        return res.status(500).json(err);
    }
};

module.exports = { getAllOils, getById, getFilteredName, getFilteredIngredients, getFilteredCharges, postOil };