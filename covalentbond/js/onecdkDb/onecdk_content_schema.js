'use strict'
const mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    db = require('./dbStore'),
    onecdk_content_Schema = new Schema({
        name: {type: String},
        associateId: {type: Number},
        date: {type: Date, default: Date.now },
        contentFeed: {type: String},
        hashTags:[String]
    });

var onecdk_instance = db.model('onecdkcontents', onecdk_content_Schema);

module.exports = onecdk_instance;