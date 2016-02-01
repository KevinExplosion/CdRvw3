var pingPong = function(number) {
  var pingPongArray = [];
    for(var i = 1; i <= number; i ++) {
      if (i % 15 === 0) {
        pingPongArray.push("pingpong");
      } else if (i % 5 === 0){
        pingPongArray.push("pong");
      } else if (i % 3 === 0) {
        pingPongArray.push("ping");
      } else {
        pingPongArray.push(i);
      }
  } return pingPongArray;
};

//start of UI
$(document).ready(function() {

  //runs the below blocks of code when the ping pong button is submitted
  $("#submitPingPong").click(function(event) {
    event.preventDefault();

    //converts the variable 'number' to an integer and use as function argument
    var number = parseInt($("#numberInput").val());
    // assigns a variable named "result" to the pingPong function
    var result = pingPong(number);
    var pingPongArray = [];

    for(var i = 1; i <= number; i++) {
        if (i % 15 === 0) {
          pingPongArray.push("pingpong");
        } else if (i % 5 === 0){
          pingPongArray.push("pong");
        } else if (i % 3 === 0) {
          pingPongArray.push("ping");
        } else {
          pingPongArray.push(i);
        }
    } $("#resultP").append("<blockquote>" + pingPongArray + "</blockquote>");

  $("#resultDisplay").show();

  });
});
