const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const countrySchema = new Schema(
    {
        name: { type: String, required: true },
        flag: { type: String },
        places: [ { type: mongoose.Types.ObjectId, ref: 'Place' } ]
    },
    { timestamps: true, }
);

const Country = mongoose.model('Country', countrySchema);
module.exports = Country;