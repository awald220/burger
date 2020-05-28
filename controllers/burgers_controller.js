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
    burger.selectAll(function(data){
        var hbsObject = {
            burgers: data
        };
    });
});

router.post("/burgers", function(req, res){
    burger.insertOne([
        "burger_name"
    ],[
        req.body.burger_name
    ], function(data){
        res.redirect("/");
    });
});

router.put("/burger/:id", function(req, res){
    var con = 'id = ' + req.params.id;

    burger.updateOne({
        devoured: true
    }, con, function(data){
        res.redirect("/");
    });
});

//Export module
module.exports = router;