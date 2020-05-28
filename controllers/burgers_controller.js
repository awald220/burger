// Inside the burgers_controller.js file, import the following:

// Express
// burger.js



// Create the router for the app, and export the router at the end of your file.

var express = require("express");

var router = express.Router();


//imports the burger file 
var burger = require ('../models/burger.js')

//Create the needed Routes



//Export module
module.exports = router;