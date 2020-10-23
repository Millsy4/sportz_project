var playername = '';

function getPlayerByName() {

    $("#search-button").on("click", function() {

    var value = $("#search-input").val();

    var queryURL = 'https://www.balldontlie.io/api/v1/players/?search=' + value;
    
    $(".form-errors").text("Please enter an ID of the player or team you want to search for!").hide();

    $.ajax({
    url: queryURL,
    method: 'GET',
    error: (err) => {
        $(".form-errors").text("Please enter an ID of the player or team you want to search for!").show();
        return;
	},
	
    }).then(function(response) {
        console.log(response)
    	})
    })
}

function getPlayerStats() {

    $("#search-button").on("click", function() {

    var value = $("#search-input").val();

    var queryURL = 'https://www.balldontlie.io/api/v1/stats/?search=' + value;
    
    $(".form-errors").text("Please enter an ID of the player or team you want to search for!").hide();

    $.ajax({
    url: queryURL,
    method: 'GET',
    error: (err) => {
        $(".form-errors").text("Please enter an ID of the player or team you want to search for!").show();
        return;
	},
	
    }).then(function(response) {
        console.log(response)
    	})
    })
}

$(document).ready(function() {
	getPlayerByName();
	getPlayerStats();
});



