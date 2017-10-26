$(document).ready(function() {
  yourArray = ["Hello!", "Wonderful!", "You're the best!", "Hooray!"];

  var options = {
    fadeInSpeed: 1000,
    displayDuration: 2000,
    fadeOutSpeed: 1000,
    delay: 500
  };

  $("#cycletext").cycleText(yourArray, options);
});
