'use strict';

const express = require('express');
const dotenv = require('dotenv');

const connectDB = require('./db/db');
const homeRoutes = require('./routes/homeRoutes');
const urlRoutes = require('./routes/urlRoutes');

// Load the environment variables
dotenv.config({path: './config/.env'});

// Connect to MongoDB
connectDB();

const app = express();
const PORT = process.env.PORT || 3000

// Set up middleware
app.use(express.json());

//Define the routes
app.use('/', homeRoutes);
app.use('/api/url', urlRoutes);


// Start the server
app.listen(PORT, () => {
    console.log(`Server is up and running on port ${PORT}`);
});