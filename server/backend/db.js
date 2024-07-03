require('dotenv').config({path: './.env'});
const mongoose = require('mongoose');
const mongoURI = process.env.MY_MONGO_URL;


const connectToMongo = () => {
    mongoose.connect(mongoURI);

    mongoose.connection.on('connected', () => {
        console.log("Connected to MongoDB");
    });
}

module.exports = connectToMongo;
