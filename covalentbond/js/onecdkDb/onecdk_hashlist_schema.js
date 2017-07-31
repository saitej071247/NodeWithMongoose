'use strict'
const db = require('./dbStore'),
    mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    onecdk_hashlist = new Schema({
        hashtag: {type: String},
        isPredefined: {type: String}
    });

var onecdk_hashlist_instance = db.model('oneCdkHashTagMaster', onecdk_hashlist);

module.exports = onecdk_hashlist_instance;