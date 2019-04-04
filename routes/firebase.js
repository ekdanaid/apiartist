var firebase = require('firebase');
var express = require('express');
var router = express.Router();

var config = {
    apiKey: "AIzaSyDfoBRLi9qw2GU08GmmGpPUJz-v7SnAJWI",
    authDomain: "artistforlensod.firebaseapp.com",
    databaseURL: "https://artistforlensod.firebaseio.com",
    projectId: "artistforlensod",
    storageBucket: "artistforlensod.appspot.com",
    messagingSenderId: "1075173745505"
};
firebase.initializeApp(config);

var database = firebase.database().ref('/artist/');

//findAll
router.get('/', function (req, res, next) {
    database.on('value',
        function (success) {
            res.json(success.val())
        })
});

//create
router.post('/create', function (req, res, next) {
    var name = req.body.name;
    var genre = req.body.genre;
    console.log(`Name : ${name} , Genre : ${genre}`);
    let items = {
        name: name, genre: genre
    }
    database.push().set(items,
        function (error) {
            if (error) {
                res.send(`Data could not be saved.`)
            } else {
                res.send(`Data saved successfully.`);
            }
        })
})

module.exports = router;
