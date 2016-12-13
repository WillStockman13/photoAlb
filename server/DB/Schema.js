var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/data');
var Schema = mongoose.Schema;
var userSchema = new Schema({
	username: String,
	password: String,
	pictures: Array
})

var User = mongoose.model('users', userSchema)

module.exports = {
	User
}