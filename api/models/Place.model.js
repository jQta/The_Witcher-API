const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const placeSchema = new Schema(
    {
        name: { type: String, required: true },
        type: { type: String },
        owner: { type: String },
        country: { type: String },
        location: { type: String },
        region: { type: String },
        badge: { type: String },
        characters: [ { type: mongoose.Types.ObjectId, ref: 'Character' } ],
    },
    { timestamps: true, }
);

const Place = mongoose.model('Place', placeSchema);
module.exports = Place;