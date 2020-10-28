$(document).ready(function() {
var storeLastPlayer = "";


$('#search-button').on("click", function() {
  var value = $('#search-input').val();
  renderPlayer(value);
  getPlayerByName(value);
});

function renderPlayer(searchPlayer) {
  var queryURL = "https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?p=" + searchPlayer;
  $('.player-profile').empty();
  $('.player-socialMedias').empty();
  $('#player-description').empty();
  $('.player-data').empty();
  $(".statistics-report").empty();
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    var playerSport = response.player[0].strSport;
    if (playerSport !== 'Basketball') {
        return;
    }
    storeLastPlayer = localStorage.setItem('value', searchPlayer);
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
    // if (playerName !== "") {
    //   var createPlayerName = $('<p>');
    //   createPlayerName.text("Name: " + playerName);
    // }
    if (playerName !== "") {
      var playername = $('<div class="player-name text-center">').html(playerName);
      $(".statistics-report").append(playername);
    }

    if (playerTeam !== ""  && playerTeam !== "_Retired Basketball") {
      var createPlayerTeam = $('<p>');
      createPlayerTeam.text("Team: " + playerTeam);
    }

    if (playerTeam === "_Deceased Basketball") {
      var createPlayerTeam = $('<p>');
      createPlayerTeam.text("Team: Retired");
    }

    if (playerPosition !== "") {
      var createPlayerPosition = $('<p>');
      createPlayerPosition.text("Position: " + playerPosition);
    }

    if (playerHeight !== "") {
      var createPlayerHeight = $('<p>');
      createPlayerHeight.text("Height: " + playerHeight);
    }

    if (playerTeam === "_Retired Basketball") {
      var createPlayerTeam = $('<p>');
      createPlayerTeam.text('Team: Retired');
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

    createPlayerIMG.attr('style', 'max-width: 250px; max-height: 250px;')
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
    $('.player-data').append(createPlayerTeam, createPlayerPosition, createPlayerHeight, createPlayerWeight, createPlayerNumber);
    $('.player-profile').append(createPlayerIMG);
    $('.player-socialMedias').append(createPlayerTwitter, createPlayerInstagram, createPlayerFacebook);
    $('#player-description').append(createPlayerDescription);
});
}

function renderLastPlayer() {
  value = localStorage.getItem('value');
  renderPlayer(value);
  getPlayerByName(value);
}


function getPlayerByName(value) {

    var queryURL = "https://www.balldontlie.io/api/v1/players/?search=" + value;

    $.ajax({
      url: queryURL,
      method: "GET",
    }).then(function (response) {
      // $(".player-data").empty();

      console.log(response);

      // var getPlayerTeam = response.data[0].team.full_name;

      var getPlayerID = response.data[0].id;

      var getFirstname = response.data[0].first_name;

      var getLastname = response.data[0].last_name;

      // var getHeightFeet = response.data[0].height_feet;

      // var getHeightInches = response.data[0].height_inches;

      // var getPlayerPosition = response.data[0].position;

      // var getPlayerWeight = response.data[0].weight_pounds;

     

      // var playerTeam = $("<p>").html("Team: " + getPlayerTeam);
      // $(".player-data").append(playerTeam);

      // var playerPosition = $("<p>").html("Position: " + getPlayerPosition);
      // $(".player-data").append(playerPosition);

      // // Gets the players Height and shows on the statistics report
      // var playerHeight = $("<p>").html(
      //   "Height: " + getHeightFeet + "'" + getHeightInches + '"'
      // );
      // $(".player-data").append(playerHeight);

      // var playerWeight = $("<p>").html("Weight: " + getPlayerWeight + "lbs");
      // $(".player-data").append(playerWeight);

      var seasons = 2019;

      var queryURL =
        "https://www.balldontlie.io/api/v1/season_averages/?seasons[]=" +
        seasons +
        "&per_page=10" +
        "&player_ids[]=" +
        getPlayerID;

      $(".player-averages").empty();

      $.ajax({
        url: queryURL,
        method: "GET",
      }).then(function (response) {
        console.log(response);
        if (response.data.length === 0) {
          $(".player-averages").html("NO CONTENT AVAILABLE!").addClass("text-center");
        } else {
          var playerAverageContent = `<h1 class="player-averages-text">19'-20' Season Averages</h1>
        <before::>
        <div class='table-scroll'>
          <table class="player-averages">
            <tr>
              <th class="player-assists">AST</th>
              <th class="player-blocks">BLK</th>
              <th class="player-defensive-rebounds">DREB</th>
              <th class="player-offensive-rebounds">OREB</th>
              <th class="player-free-throw-percentage">FTPCT</th>
              <th class="player-rebounds">REB</th>
              <th class="player-turnovers">TO</th>
              <th class="player-points">PTS</th>
              <th class="player-free-throw-attempts">FTA</th>
            </tr>
          </table>
        </div>`;

          document.getElementById(
            "player-averages"
          ).innerHTML = playerAverageContent;

          var getPlayerAssists = response.data[0].ast;

          if (getPlayerAssists !== null) {
            var playerAssists = $('<td class="text-center">').html(
              getPlayerAssists
            );
          }

          var getPlayerBlocks = response.data[0].blk;

          if (getPlayerBlocks !== null) {
            var playerBlocks = $("<td class='text-center'>").html(
              getPlayerBlocks
            );
          }

          var getPlayerDefensiveRebounds = response.data[0].dreb;

          if (getPlayerDefensiveRebounds !== null) {
            var playerDefRebounds = $("<td class='text-center'>").html(
              getPlayerDefensiveRebounds
            );
          }

          var getPlayerOffensiveRebounds = response.data[0].oreb;

          if (getPlayerOffensiveRebounds !== null) {
            var playerOffRebounds = $("<td class='text-center'>").html(
              getPlayerOffensiveRebounds
            );
          }

          var getPlayerFreeThrowPct = response.data[0].ft_pct;

          if (getPlayerFreeThrowPct !== null) {
            var playerFreeThrowPct = $("<td class='text-center'>").html(
              getPlayerFreeThrowPct
            );
          }

          var getPlayerRebounds = response.data[0].reb;

          if (getPlayerRebounds !== null) {
            var playerRebounds = $("<td class='text-center'>").html(
              getPlayerRebounds
            );
          }

          var getPlayerTurnovers = response.data[0].turnover;

          if (getPlayerTurnovers !== null) {
            var playerTurnovers = $("<td class='text-center'>").html(
              getPlayerTurnovers
            );
          }

          var getPlayerPoints = response.data[0].pts;

          if (getPlayerPoints !== null) {
            var playerPoints = $("<td class='text-center'>").html(
              getPlayerPoints
            );
          }

          var getPlayerFta = response.data[0].fta;

          if (getPlayerFta !== null) {
            var playerFTA = $("<td class='text-center'>").html(getPlayerFta);
          }

          $("table").append(
            playerAssists,
            playerBlocks,
            playerDefRebounds,
            playerOffRebounds,
            playerFreeThrowPct,
            playerRebounds,
            playerTurnovers,
            playerPoints,
            playerFTA
          );
        }
      });
    });

}

renderLastPlayer();
getPlayerByName();
});
