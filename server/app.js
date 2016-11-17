var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(express.static(__dirname + '/../client'));

app.use(bodyParser.json());

app.use(express.static('Client'))

// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())
mongoose.connect('mongodb://localhost/data');
var Schema = mongoose.Schema;
var userSchema = new Schema({
	username: String,
	password: String,
	pictures: Array
})

var User = mongoose.model('users', userSchema)

app.get('/', function(req, res) {
  res.sendfile('index.html', { root: '../client'})
})

app.post('/users', function(req, res) {
  User.find({}, function(err, users) {
    users.forEach(function(user) {
    	if(user.username === req.body.username && user.password === req.body.password) {
    		var pictures = JSON.stringify(user.pictures)
    		res.send()
    	}
    })

  })
  
 })

app.post('/user', function(req, res) {
  User.find({}, function(err, users) {
  	var userExists = 0;
    users.forEach(function(user) {
    	if(user.username === req.body.username) {
          userExists = 1
    	}
    })
    if(userExists === 0){
    	var newUser = new User({
    	  username: req.body.username,
    	  password: req.body.password
    	})
    	newUser.save(function(err) {
    		if(err) console.log(err)
    	})
    	res.send()
    }

  })
})

app.post('/getPics', function(req, res) {
	var pics;
  User.find({}, function(err, users) {
    users.forEach(function(user) {
    	if(user.username === req.body.username) {
    		pics = user.pictures
			  res.send(pics)
    	}
    })

  })
  
})

app.post('/picture', function(req, res) {
	User.find({}, function(err, users) {
	  users.forEach(function(user) {
	  	if(user.username === req.body.username) {
	  		user.pictures.push(req.body.picture)
		  	user.save(function(err) {
		  		console.log(err)
		  	})
	  	}
	  })

	})
    res.send('success')
})

app.listen(3000, function() {
  console.log('i am listening')
})