var express = require('express');
var router = express.Router();

var userModel = require('../models/users');


router.get('/getProfile', function(req, res) {
    
    var querry = userModel.findOne({'user_name':req.query.user_name});
    querry.select('user_name age address full_name');
    querry.exec(function(err, user){
        if(err) return console.error(err);
        res.json(user);
    });

});

module.exports = router;