const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const oilSchema = new Schema(
    {
        name: { type: String, required: true },
        ingredients: { type: String, required: true },
        effects: { type: String, required: true },
        charges: { type: Number, required: true },
    },
    { timestamps: true, }
);

const Oil = mongoose.model('Oil', oilSchema);
module.exports = Oil;