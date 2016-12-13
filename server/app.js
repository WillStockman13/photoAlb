var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');
var requestHandler = require('./requestHandler/requestHandler.js')

app.use(bodyParser.json());
app.use('/api', requestHandler.userHandler)

app.use(express.static(path.join(__dirname, './../client')));


app.use(express.static('Client'))


app.listen(3000, function() {
  console.log('i am listening on 3000')
})