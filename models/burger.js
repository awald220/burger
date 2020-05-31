// Inside burger.js, import orm.js into burger.js


// Also inside burger.js, create the code that will call the ORM functions using burger specific input for the ORM.


// Export at the end of the burger.js file.

//Import ORM
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