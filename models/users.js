var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    user_name : {type:String, required:true, unique: true},
    password : {type: String, required:true},
    address: String,
    full_name: String,
    age: Number
});

mongoose.model('user', UserSchema);
var User = mongoose.model('user');
module.exports = User