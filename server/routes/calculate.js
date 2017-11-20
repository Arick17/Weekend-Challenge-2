var express = require('express');
var router = express.router();

var mathFuncs = require('../modules/mathFuncs');
// var addition = require('../modules/addition');
// var subtraction = require('../modules/subtraction');
// var multiplication = require('../modules/multiplication');
// var division = require('../modules/division');

router.post('/' , function(req, res){
    let inputOne = mathFuncs(req.body.inputOne)
    console.log('in inputOne', inputOne);
    res.send(inputOne)
})

router.post('/' , function(req, res){
    let inputTwo = mathFuncs(req.body.inputTwo)
    console.log('in inputOne', inputTwo);
    res.send(inputTwo)
})

module.exports = router;



router.post()