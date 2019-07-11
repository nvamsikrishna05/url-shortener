'use strict';

const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL, {
            useNewUrlParser: true
        });
        console.log('Successfully established connection to the DB');
    } catch (e) {
        console.log(`Error in connecting to MongoDB : ${e}`);
    }

    mongoose.connection.on('error', (e) => {
        console.log(`Connection to MongoDB lost. Error: ${e}`);
    });

}


module.exports = connectDB;
