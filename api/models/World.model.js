const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const worldSchema = new Schema(
    {
        country: [ { type: mongoose.Types.ObjectId, ref: 'Country' } ],
    },
    { timestamps: true, }
);

const World = mongoose.model('World', worldSchema);
module.exports = World;