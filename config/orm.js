// Create an orm.js file inside config directory.

// Import (require) connection.js into orm.js

// In the orm.js file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.

// selectAll()
// insertOne()
// updateOne()

// Export the ORM object in module.exports.

//import the connection to mysql
var connection = require("../config/connection.js");

function printQuestionMarks(mun){
    var arr = [];

    for (var i = 0; i < num; i++){
        arr.push("?")
    }
    return arr.toString();
}

function objToSql(ob){
    var arr = [];

    for(var key in ob) {
        var value = ob[key];

        if(Object.hasOwnProperty.call(ob, key)){
            if(typeof value === "string" && value.indexOf(" ") >= 0){
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value);
        }
    }
    return arr.toString();
}

function selectAll() {

}

function insertOne() {

}

function updateOne() {

}


module.exports = orm;