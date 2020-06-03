var express = require("express");
var methodOverride = require('method-override');
var bodyParser = require('body-parser');

var PORT = process.env.PORT || 8080;

var app = express()

app.use(express.static(process.cwd() + '/public'));

app.use(bodyParser.urlencoded({
	extended: false
}))
// override with POST having ?_method=DELETE
app.use(methodOverride('_method'));
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

var routes = require('./controllers/burgers_controller.js');
app.use('/', routes);


app.listen(PORT, function(){
    console.log("App now listening at http://localhost:" + PORT);
});

