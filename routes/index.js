var express = require('express');
var router = express.Router();
var userModel = require('../models/users');
/* GET home page. */
router.get('/', function(req, res, next) {
  var querry = userModel.find();
    querry.select('user_name age address full_name');
    querry.exec(function(err, user){
        if(err) return console.error(err);
        res.render('index', { title: 'List Users',list_users: user });
    });
  
});

module.exports = router;
