'use strict';
const express = require('express'),
    router  = express.Router();

router.get('/', require('./getRoot'));
router.get('/getHashList', require('./getHashList').getAlltags);
router.get('/getFeedUsingHashTag/:inputUniqueHashTag', require('./getContentFeedDataRoute').getFeedUsingAHashtag);
router.get('/getFeedUsingAssociateId/:inputAssociateId', require('./getContentFeedDataRoute').getFeedUsingAnAssociateId);
router.post('/validateUser', require('./onecdkDb/validateuser'));
//router.get('/getHashList/:uniqueHashtag', require('./getHashList').uniquetag);
router.get('/getuser',require('./userInfo').getusersList);
router.post('/saveContentFeed', require('./saveContentFeed'));
router.post('/deleteContentFeed/:inputDocumentId', require('./onecdkDb/contentFeedDbStore').deleteFeedUsingId);
module.exports = router;


