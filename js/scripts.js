$(document).ready(function() {
  $("button#invert").click(function() {
    $("body").removeClass();
    $("body").addClass("black-background");
  });

  $("button#go-back").click(function() {
    $("body").removeClass();
    $("body").addClass("white-background");
  });


});
