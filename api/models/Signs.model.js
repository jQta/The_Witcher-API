const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const signSchema = new Schema(
    {
        name: { type: String, required: true },
        description: { type: String, required: true },
        sign: { type: String },
    },
    { timestamps: true, }
);

const Sign = mongoose.model('Sign', signSchema);
module.exports = Sign;