const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const characterSchema = new Schema(
    {
        name: { type: String, required: true },
        image: { type: String },
        alias: [],
        race: { type: String, required: true },
        gender: { type: String, required: true },
        status: { type: String },
        birth: { type: Number },
        nationality: { type: String },
        titles: { type: String },
        profession: { type: String },
        affiliations: { type: String },
        abilities: { type: String },
    },
    { timestamps: true, }
);

const Character = mongoose.model('Character', characterSchema);
module.exports = Character;