var playername = "";

function getPlayerByName() {
  $("#search-button").on("click", function () {
    var value = $("#search-input").val();

    var queryURL = "https://www.balldontlie.io/api/v1/players/?search=" + value;

    $(".form-errors")
      .text("Please enter an ID of the player or team you want to search for!")
      .hide();

    $.ajax({
      url: queryURL,
      method: "GET",
      error: (err) => {
        $(".form-errors")
          .text(
            "Please enter an ID of the player or team you want to search for!"
          )
          .show();
        return;
      },
    }).then(function (response) {
      console.log(response);

      var playerID = response.data[0].id;

      console.log(playerID);

      var seasons = 2019;

      var queryURL =
        "https://www.balldontlie.io/api/v1/stats/?seasons[]=" +
        seasons +
        "&per_page=10" +
        "&player_ids[]=" +
        playerID;

      $(".form-errors")
        .text(
          "Please enter an ID of the player or team you want to search for!"
        )
        .hide();

      $.ajax({
        url: queryURL,
        method: "GET",
        error: (err) => {
          $(".form-errors")
            .text(
              "Please enter an ID of the player or team you want to search for!"
            )
            .show();
          return;
        },
      }).then(function (response) {
        console.log(response);
      });
    });
  });
}

$(document).ready(function () {
  getPlayerByName();
});