// Create a connection.js file inside config directory.

// Inside the connection.js file, setup the code to connect Node to MySQL.

// Export the connection.

// set up the MySQL connection
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "burgers_db"
});

//Make connection
connection.connect(function(err){
    if (err) {
        console.log("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId)
});

//export the connection for orm
module.exports = connection;