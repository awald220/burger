// Inside the burgers_controller.js file, import the following:

// Express
// burger.js



// Create the router for the app, and export the router at the end of your file.

var express = require("express");

var router = express.Router();


//imports the burger file 
var burger = require ('../models/burger.js')

//Create the needed Routes

router.get("/", function(req, res){
  res.redirect('/burgers');
});

router.get('/burgers', function (req, res) {
    burger.all(function (data) {
      var hbsObject = { burgers: data };
    //  console.log(hbsObject);
      res.render('index', hbsObject);
    });
  });

router.post("/api/burgers", function(req, res){
    burger.create([req.body.burger_name], function(data){
       res.redirect('/burgers');
    });
});

router.put("/api/burger/:id", function(req, res){
    var condition = 'id = ' + req.params.id;

    burger.update({ devoured: req.body.devoured }, condition, function () {
        res.redirect('/burgers');
      });
});

//Export module
module.exports = router;