'use strict'
var mongoose = require('mongoose'),
    db = mongoose.connect('mongodb://127.0.0.1/oneCDK');

module.exports = db;
