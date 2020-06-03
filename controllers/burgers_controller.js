var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

router.get('/', function(req,res) {
	res.redirect('/index')
});

router.get('/index', function(req,res) {
	burger.all(function(data){
		var hbsObject = {burgers : data}
		res.render('index', hbsObject);
	});
});

router.post('/index/create', function(req,res) {
	burger.create(['burger_name', 'devoured'], [req.body.burger_name, req.body.devoured], function(data){
		res.redirect('/index')
	});
});

router.put('/index/update/:id', function(req,res) {
	var condition = 'id = ' + req.params.id;

	burger.update({'devoured' : req.body.devoured}, condition, function(data){
		res.redirect('/index');
	});
});

module.exports = router;