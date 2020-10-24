// For this API you will use the V1 URL as show in the examples here. Just replace the "1" test key with your new private key. Please also check out the beta v2 of the API on the forums.

// https://www.thesportsdb.com/api.php 

// As an example your new URL will be:


// https://www.thesportsdb.com/api/v1/json/4013017/searchplayers.php?t=Arsenal  


$('#search-button').on("click", function() {
  var value = $('#search-input').val();
  var queryURL = "https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?p=" + value;
  $('.player-profile').empty();
  $('.player-socialMedias').empty();
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
    var playerIMG = response.player[0].strCutout;
    console.log(playerIMG);
    var playerTwitter = response.player[0].strTwitter;
    console.log(playerTwitter);
    var playerFacebook = response.player[0].strFacebook;
    console.log(playerFacebook);
    var playerInstagram = response.player[0].strInstagram;
    console.log(playerInstagram);
    var createPlayerIMG = $('<img>');
    createPlayerIMG.attr('src', playerIMG);
    // createPlayerIMG.attr('id', 'playerImage');
    createPlayerIMG.attr('style', 'max-width: 200px; max-height: 200px;')
    var createPlayerTwitter = $('<a>');
    createPlayerTwitter.attr('class', 'fab fa-twitter');
    createPlayerTwitter.attr('href', 'https://' + playerTwitter);
    createPlayerTwitter.attr('role', 'button');
    createPlayerTwitter.attr('target', '_blank');
    // <i class="fab fa-facebook-f"></i>
    var createPlayerFacebook = $('<a>');
    createPlayerFacebook.attr('class', 'fab fa-facebook-f');
    createPlayerFacebook.attr('href', 'https://' + playerFacebook);
    createPlayerFacebook.attr('role', 'button');
    createPlayerFacebook.attr('target', '_blank');
    // <i class="fab fa-twitter"></i>
    var createPlayerInstagram = $('<a>');
    createPlayerInstagram.attr('class', 'fab fa-instagram')
    createPlayerInstagram.attr('href', 'https://' + playerInstagram);
    createPlayerInstagram.attr('role', 'button');
    createPlayerInstagram.attr('target', '_blank');
    // <i class="fab fa-instagram"></i>
    $('.player-profile').append(createPlayerIMG);
    $('.player-socialMedias').append(createPlayerTwitter, createPlayerInstagram, createPlayerFacebook)
  })    
})

