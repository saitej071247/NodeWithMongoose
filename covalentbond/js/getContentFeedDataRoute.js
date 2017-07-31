'use strict'

const dbStore = require('./onecdkDb/contentFeedDbStore');

module.exports = {

    getFeedUsingAHashtag: dbStore.getFeedUsingHashtag,
    getFeedUsingAnAssociateId: dbStore.getFeedUsingAssociateId

};