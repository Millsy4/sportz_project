// For this API you will use the V1 URL as show in the examples here. Just replace the "1" test key with your new private key. Please also check out the beta v2 of the API on the forums.

// https://www.thesportsdb.com/api.php 

// As an example your new URL will be:


// https://www.thesportsdb.com/api/v1/json/4013017/searchplayers.php?t=Arsenal  


$('#search-button').on("click", function() {
  var value = $('#search-input').val();
  var queryURL = "https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?p=" + value;
  $('.player-profile').empty();
  $('.player-socialMedias').empty();
  $('#player-description').empty();
//   $('.player-data').empty();
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    var playerSport = response.player[0].strSport;
    if (playerSport !== 'Basketball') {
        alert('Must be a basketball player!');
        return;
    }
    console.log(playerSport);
    console.log(response);
    var playerName = response.player[0].strPlayer;
    console.log(playerName);
    var playerIMG = response.player[0].strCutout;
    // console.log(playerIMG);
    var playerTwitter = response.player[0].strTwitter;
    // console.log(playerTwitter);
    var playerFacebook = response.player[0].strFacebook;
    // console.log(playerFacebook);
    var playerInstagram = response.player[0].strInstagram;
    // console.log(playerInstagram);
    var playerTeam = response.player[0].strTeam;
    console.log(playerTeam);
    var playerPosition = response.player[0].strPosition;
    console.log(playerPosition);
    var playerHeight = response.player[0].strHeight;
    console.log(playerHeight);
    var playerWeight = response.player[0].strWeight;
    console.log(playerWeight);
    var playerNumber = response.player[0].strNumber;
    console.log(playerNumber);
    var playerDescription = response.player[0].strDescriptionEN;
    console.log(playerDescription);
    var createPlayerIMG = $('<img>');
    createPlayerIMG.attr('src', playerIMG);
    // createPlayerIMG.attr('id', 'playerImage');

    createPlayerIMG.attr('style', 'max-width: 200px; max-height: 200px; margin-top: 5px')
    if (playerName !== "") {
      var createPlayerName = $('<p>');
      createPlayerName.text("Name: " + playerName);
    }

    if (playerTeam !== "") {
      var createPlayerTeam = $('<p>');
      createPlayerTeam.text("Team: " + playerTeam);
    }

    if (playerPosition !== "") {
      var createPlayerPosition = $('<p>');
      createPlayerPosition.text("Position: " + playerPosition);
    }

    if (playerHeight !== "") {
      var createPlayerHeight = $('<p>');
      createPlayerHeight.text("Height: " + playerHeight);
    }
    
    if (playerWeight !== "") {
      var createPlayerWeight = $('<p>');
      createPlayerWeight.text("Weight: " + playerWeight);
    }

    if (playerNumber !== null) {
      var createPlayerNumber = $('<p>');
      createPlayerNumber.text("Number: " + playerNumber);
    }

    if (playerDescription !== "") {
      var createPlayerDescription = $('<p>');
      createPlayerDescription.text(playerDescription);
    }

    createPlayerIMG.attr('style', 'max-width: 200px; max-height: 200px;')
    if (playerTwitter !== "") {
    var createPlayerTwitter = $('<a>');
      createPlayerTwitter.attr('class', 'fab fa-twitter');
      createPlayerTwitter.attr('href', 'https://' + playerTwitter);
      createPlayerTwitter.attr('role', 'button');
      createPlayerTwitter.attr('target', '_blank');
    }
    // <i class="fab fa-facebook-f"></i>
    
    if (playerFacebook !== "") {
    var createPlayerFacebook = $('<a>');
      createPlayerFacebook.attr('class', 'fab fa-facebook-f');
      createPlayerFacebook.attr('href', 'https://' + playerFacebook);
      createPlayerFacebook.attr('role', 'button');
      createPlayerFacebook.attr('target', '_blank');
    }
    // <i class="fab fa-twitter"></i>
    if (playerInstagram !== "") {
    var createPlayerInstagram = $('<a>');
      createPlayerInstagram.attr('class', 'fab fa-instagram')
      createPlayerInstagram.attr('href', 'https://' + playerInstagram);
      createPlayerInstagram.attr('role', 'button');
      createPlayerInstagram.attr('target', '_blank');
    }
    // <i class="fab fa-instagram"></i>
    $('.player-data').append(createPlayerName, createPlayerTeam, createPlayerPosition, createPlayerHeight, createPlayerWeight, createPlayerNumber);
    $('.player-profile').append(createPlayerIMG);
    $('.player-socialMedias').append(createPlayerTwitter, createPlayerInstagram, createPlayerFacebook);
    $('#player-description').append(createPlayerDescription);
  })    
})

