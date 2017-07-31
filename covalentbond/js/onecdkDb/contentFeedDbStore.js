'use strict'
const contentFeedDb = require('./onecdk_content_schema');
    //db =  mongoose.createConnection('mongodb://127.0.0.1/contentFeed');

module.exports = {

    getFeedUsingHashtag: function (req, res) {
        // db.find({}, hashTags:{$elemMatch:$eq{req.}})
        //{ hashTags: { $in: [req.params.inputUniqueHashTag.toString()] }}
        return contentFeedDb.find({ hashTags: { $in: [req.params.inputUniqueHashTag.toString()] }},{associateId:1, contentFeed:1, date:1}, function (err, resp) {
            if (!err) {
                res.status(200);
                res.send(resp);
            } else {
                res.send(200);
                res.send(err);
            }
        });
    },
    getFeedUsingAssociateId: function (req, res) {
        return contentFeedDb.find({associateId: req.params.inputAssociateId}, function (err, resp) {
            if (!err) {
                res.status(200);
                res.send(resp);
            } else {
                res.send(200);
                res.send(err);
            }
        });
    },
    getFeedUsingAssociatename: function (name) {
        console.log('inside ass ' + name );

        return contentFeedDb.find({name: name}, function (err, resp) {
            if (!err) {
                console.log('inside resp ' +  resp)
               return resp;
            } else {
                console.log('inside err ' +  err)
                return err;
            }
        });
    },
    deleteFeedUsingId: function (req, res) {
        console.log(req.params.inputDocumentId);
        return contentFeedDb.findOneAndRemove({_id: req.params.inputDocumentId}, function (err, resp) {
            if (!err) {
                console.log(resp);
               res.send(resp);
            } else {
                res.status(500).send(err);
            }
        });
    }
};
