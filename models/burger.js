// Inside burger.js, import orm.js into burger.js


// Also inside burger.js, create the code that will call the ORM functions using burger specific input for the ORM.


// Export at the end of the burger.js file.
var orm = require("../config/orm.js")

var burger = {
    all: function(cb){
        orm.all("burgers", function(res){
            cb(res)
        });
    },
    create: function(cols, vals, cb){
        orm.create("burgers", cols, vals,  function(res){
            cb(res);
        });
    },
    update: function(objColVals, condition, cb){
        orm.update("burgers", objColVals, condition, function(res){
           cb(res);
        });
    }
}

// $(".devour-it").on("click", function(event){
//     var id = $(this).data("id");

//     var newDevourState = {
//         devoured: true
//     };

//     $.ajax("/api/burgers" + id, {
//         type: "PUT", 
//         data: newDevourState
//     }).then (
//         function(){
//             console.log("changed state to", newDevour)
//             //Reload the page to get the update
//             location.reload();
//         }
//     );
// });


// $(".create-form").on("submit", function(event){
//     event.preventDefault();
    
//     var name = $("[name=burger-name]"). val().trim();

//     if(name !== ""){
//         var newBurger = {
//             name: name
//         }
    

//     //send the POST request
//         $.ajax("/api/burgers", {
//             type: "POST",
//             data: newBurger
//         }).then(
//         function(){
//             console.log("created the burger");
//             //reload the page to get the new content
//             location.reload();
   
//         });
//     } else{
//         $("[name=burger-name]").val("");
//     }
// });


// // Make sure we wait to attach our handlers until the DOM is fully loaded.
// $(function() {
//     //Click event for adding a burger.
//     $(".create-form").on("submit", function(event) {
//         // Make sure to preventDefault on a submit event.
//         event.preventDefault();

//         //Grab burger name from form field.
//         //When user submits burger name, set devoured state to false.
//         var newBurger = {
//         burger_name: $("#burgerToGo").val().trim(),
//         devoured: 0
//         };

//         // Send the POST request using ajax.
//         $.ajax("/api/burgers", {
//         type: "POST",
//         data: newBurger
//         }).then(
//         function() {
//             console.log("created new burger");
//             // Reload the page to get the updated list
//             location.reload();
//         }
//         );
//     });

  

//     //Click event for "Devour me" button.
//     $(".devour-it").on("click", function(event) {
//         var id = $(this).data("id");
//         var newDevour = $(this).data("newdevour");
    
//         var newDevourState = {
//           devoured: "true"
//         };
    
//         // Send the PUT request using ajax.
//         $.ajax("/api/burgers/" + id, {
//           type: "PUT",
//           data: newDevourState
//         }).then(
//           function() {
//             console.log("changed devour to", newDevour);
//             // Reload the page to get the updated list
//             location.reload();
//           }
//         );
//       });   
// });


//export
module.exports = burger;