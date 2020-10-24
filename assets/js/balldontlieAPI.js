function getPlayerByName() {
  $("#search-button").on("click", function () {
    var value = $("#search-input").val();

    var queryURL = "https://www.balldontlie.io/api/v1/players/?search=" + value;

    $.ajax({
      url: queryURL,
      method: "GET",
    }).then(function (response) {
      $(".statistics-report").empty();
      $(".player-data").empty();

      console.log(response);

      // var getPlayerTeam = response.data[0].team.full_name;

      var getPlayerID = response.data[0].id;

      // var getFirstname = response.data[0].first_name;

      // var getLastname = response.data[0].last_name;

      // var getHeightFeet = response.data[0].height_feet;

      // var getHeightInches = response.data[0].height_inches;

      // var getPlayerPosition = response.data[0].position;

      // var getPlayerWeight = response.data[0].weight_pounds;

      // var playername = $('<div class="player-name text-center">').html(
      //   getFirstname + " " + getLastname
      // );
      // $(".statistics-report").append(playername);

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
  });
}

$(document).ready(function () {
  getPlayerByName();
});
