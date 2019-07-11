'use strict';

const mongoose = require('mongoose');

const urlSchema = mongoose.Schema({
    urlCode: {
        type: String
    },
    longUrl: {
        type: String
    },
    shortUrl: {
        type: String
    },
    date: {
        type: mongoose.SchemaTypes.Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Url', urlSchema);