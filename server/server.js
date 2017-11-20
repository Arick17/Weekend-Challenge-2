console.log('Server.js');
var express = require('express');
var bodyParser = require('body-parser');
var calculate = require('./routes/calculate');
var app = express();
var port = 5000;


app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true})); 
app.use('/calculate',calculate);

//app.use('/calculate',calculate);

app.use(express.static('server/public'));
app.listen(port,function(){
    console.log('listening on port', port)

});

