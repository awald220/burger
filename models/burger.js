// Inside burger.js, import orm.js into burger.js


// Also inside burger.js, create the code that will call the ORM functions using burger specific input for the ORM.


// Export at the end of the burger.js file.

//Import ORM
var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb){
        orm.selectAll('burgers', function(res){
            cb(res);
        });
    },

    insertOne: function(cols, vals, cb){
        orm.insertOne('burgers', cols, vals, function(res){
            cb(res);
        });
    },

    updateOne: function(objColVals, con, cb){
        orm.updateOne('burgers', objColVals, con, function(res){
            cb(res);
        });
    }
};

//export
module.exports = burger;