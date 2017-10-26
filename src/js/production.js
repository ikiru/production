$(document).ready(function() {
  yourArray = ["Costumes", "Stage", "Production"];

  var options = {
    fadeInSpeed: 1000,
    displayDuration: 3000,
    fadeOutSpeed: 1000,
    delay: 500
  };
  $("#cycletext").cycleText(yourArray, options);
});
