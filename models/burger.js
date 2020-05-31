// Inside burger.js, import orm.js into burger.js


// Also inside burger.js, create the code that will call the ORM functions using burger specific input for the ORM.


// Export at the end of the burger.js file.

$(".devour-it").on("click", function(event){
    var id = $(this).data("id");
    var newDevour = $(this).data("newdevour");

    var newDevourState = {
        devoured: newDevour
    };

    $.ajax("/api/burgers" + id, {
        type: "PUT", 
        data: newDevourState
    }).then (
        function(){
            console.log("changed state to", newDevour)
            //Reload the page to get the update
            location.reload();
        }
    );
});


$(".create-form").on("submit", function(event){
    event.preventDefault();

    var newBurger = {
        name: ("#create").val().trim(),
        devoured: ("[name-devoured]:checked").val().trim();
    };

    //send the POST request
    $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
    }).then(
        function(){
            console.log("created the burger");
            //reload the page to get the new content
            location.reload();
        }
    )
})
//export
module.exports = burger;