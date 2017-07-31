'use strict'
const contentFeedDb = require('./onecdk_content_schema');

module.exports = {
    saveContentFeed: function (req, res) {
        const feed = {
                name: req.body.name,
                associateId: req.body.associateId,
                //date: Date.now(),
                contentFeed: req.body.contentFeed,
                hashTags: req.body.hashTags
            },
            data = new contentFeedDb(feed);
        return data.save(function (err, resp) {
            if (!err) {
                //res.send(200);
                res.send(resp);
            } else {
                //res.send(200);
                res.send(err);
            }
        })
    }
};