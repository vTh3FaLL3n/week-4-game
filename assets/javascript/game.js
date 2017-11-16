$(document).ready(function () {

  var targetNumber = Math.floor(Math.random() * 120) + 19;;
  var counter = 0;
  var wins = 0;
  var losses = 0;
  // numbers = [12, 9, 5, 3]
  $("#dragonPointsGoal").text(targetNumber);
  $("#dragonPoints").text(counter);
  $("#wins").text(wins);
  $("#losses").text(losses);

  newCrystals();

  // for (var i = 0; i < numbers.length; i++) {
  //   var dragonballImage = $("<img>");
  //   dragonballImage.addClass("ball-image");
  //   dragonballImage.attr("src", "https://static.giantbomb.com/uploads/original/5/57719/1114015-dragon.jpg");
  //   dragonballImage.attr("data-crystalvalue", numbers[i]);
  //   $("#dragonBalls").append(dragonballImage);
  // }
  function newCrystals() {
    var numbers = []
    while (numbers.length < 4) {
      var randomnumber = Math.ceil(Math.random() * 12)
      var found = false;
      for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] == randomnumber) {
          found = true;
          break
        }
      }
      if (!found) numbers[numbers.length] = randomnumber;
    }

    for (var i = 0; i < numbers.length; i++) {
      var dragonballImage = $("<img>");
      dragonballImage.attr("data-crystalvalue", numbers[i]);
      dragonballImage.attr("src", "https://static.giantbomb.com/uploads/original/5/57719/1114015-dragon.jpg");
      dragonballImage.addClass("ball-image")
      $("#dragonBalls").append(dragonballImage);
    }
  }


  $(".ball-image").on("click", function () {
    var ballValue = ($(this).attr("data-crystalvalue"));
    ballValue = parseInt(ballValue);
    counter += ballValue;
    $("#dragonPoints").text(counter);

    function reset() {
      counter = 0
      $("#dragonPoints").text(counter);
     targetNumber = Math.floor(Math.random() * 120) + 19;;
      $("#dragonPointsGoal").text(targetNumber);
      console.log("reset", targetNumber);
    }


    console.log("cond", targetNumber);
    if (counter === targetNumber) {
      alert("Make a Wish!");
      wins++;
      reset();
      $("#wins").text(wins);
    } else if (counter > targetNumber) {
      alert("You must find the Dragon Balls once more!");
      losses++;
      reset();
      $("#losses").text(losses);
    }
  });
});