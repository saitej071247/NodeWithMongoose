'use strict'
const hashtagsDb = require('./onecdk_hashlist_schema');

module.exports = {
    getHashtagsList: function (req, res) {
        return hashtagsDb.find({}, function (err, resp) {
            if (err) {
                res.send(err);
            } else {
                res.send(resp);
            }
        })

    },
    getUniqueHashTagData: function (req, res) {
        //{hashtag:{$in:[req.params.uniqueHashtag]}}
        console.log("#" + req.params.uniqueHashtag);
        return hashtagsDb.find({hashtag: "#" + req.params.uniqueHashtag}, function (err, resp) {
            if(!err){
                res.send(resp);
            }else{
                res.send(err);
            }
        });
    }
};
