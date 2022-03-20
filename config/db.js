const mongoose = require('mongoose');
require('dotenv').config();

const urlDB = process.env.MONGO_DB;

const connect = async () => {
    try {
        const DB = await mongoose.connect(urlDB, { useNewUrlParser: true, useUnifiedTopology: true });
        const { name, host } = DB.connection;
        console.log(`Conected to ${name} DB succesfully in host ${host}`);
    } catch (error) {
        console.log('Error to connect with DB', error)
    };
}

module.exports = { connect };