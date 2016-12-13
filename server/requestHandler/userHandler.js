const express = require('express');
let User = require('../DB/Schema.js')
const router = express.Router();
User = User.User


router.route('/users')
.post(function(req, res) {
  User.find({}, function(err, users) {
    users.forEach(function(user) {
      if(user) {
      	if(user.username === req.body.username && user.password === req.body.password) {
      		var pictures = JSON.stringify(user.pictures)
      		res.send()
      	}   
      }
    })

  })
  
 })

router.route('/user')
.post(function(req, res) {
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

router.route('/getPics')
.post(function(req, res) {
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

router.route('/picture')
.post(function(req, res) {
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

module.exports = router;