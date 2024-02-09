const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://iris:anjalisingh@cluster0.424vpke.mongodb.net/chamber?retryWrites=true&w=majority";


const connectToMongo = () => {
    mongoose.connect(mongoURI);

    mongoose.connection.on('connected', () => {
        console.log("Connected to MongoDB");
    });
}

module.exports = connectToMongo;
