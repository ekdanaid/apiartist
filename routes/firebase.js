var firebase = require("firebase");
var express = require("express");
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

//findAll
router.get("/", function(req, res, next) {
  firebase
    .database()
    .ref("/artist")
    .on("value", function(success) {
      res.json(success.val());
    });
});

//findById
router.get("/:id", function(req, res, next) {
  console.log(`ID : ${req.params.id}`);
  id = req.params.id;
  firebase
    .database()
    .ref(`artist/${id}`)
    .on("value", function(snapshot) {
      res.json(snapshot.val());
    });
});

//findByname
router.get("/name/:name", function(req, res, next) {
  console.log(`Name : ${req.params.name}`);
  firebase
    .database()
    .ref(`/artist`)
    .orderByChild(`name`)
    .equalTo(req.params.name)
    .on("value", function(snapshot) {
      res.json(snapshot.val());
    });
});

//findBygenre
router.get("/genre/:genre", function(req, res, next) {
  console.log(`Genre : ${req.params.genre}`);
  firebase
    .database()
    .ref(`/artist`)
    .orderByChild(`genre`)
    .equalTo(req.params.genre)
    .on("value", function(snapshot) {
      res.json(snapshot.val());
    });
});

//create
router.post("/create", function(req, res, next) {
  var name = req.body.name;
  var genre = req.body.genre;
  console.log(`Name : ${name} , Genre : ${genre}`);
  firebase
    .database()
    .push()
    .set(
      {
        name: name,
        genre: genre
      },
      function(error) {
        if (error) {
          res.json({ responseMessage: "Data could not be saved." });
        } else {
          res.json({ responseMessage: "Data saved successfully." });
        }
      }
    );
});

//update
router.put("/update/:id", function(req, res, next) {
  var name = req.body.name;
  var genre = req.body.genre;
  firebase
    .database()
    .ref(`artist/${req.params.id}`)
    .update(
      {
        name: name,
        genre: genre
      },
      function(error) {
        if (error) {
          res.json({ responseMessage: "Data could not be updated." });
        } else {
          res.json({ responseMessage: "Data updated successfully." });
        }
      }
    );
});

//delete
router.delete("/delete/:id", function(req, res, next) {
  console.log(`ID: ${req.params.id}`);
  firebase
    .database()
    .ref(`artist/${req.params.id}`)
    .remove(function(error) {
      if (error) {
        res.json({ responseMessage: "Can't delete." });
      } else {
        res.json({ responseMessage: "Data deleted successfully" });
      }
    });
});

module.exports = router;
