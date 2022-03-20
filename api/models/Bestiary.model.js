const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const beastSchema = new Schema(
    {
        name: { type: String, required: true },
        class: { type: String },
        variations: { type: String },
        occurrence: { type: String },
        immunity: { type: String },
        susceptibility: { type: String },
        tactics: { type: String },
        loot: { type: String },
        alchemy: { type: String },
        othernames: { type: String },
        languages: { type: String },
        distinctions: { type: String }
    },
    { timestamps: true, }
);

const Beast = mongoose.model('Beast', beastSchema);
module.exports = Beast;