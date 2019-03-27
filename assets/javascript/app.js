var timeLeft = 10;
var correct = 0;
var incorrect = 0;
var unanswered = 0;

// hides questions at load of page
$("#myQuiz").hide();

// hides submit button
$(".submit").hide();

$(".countdown").hide();

// BEGIN BUTTON
// variable to hold button
var button1 = $("<button>");
// adding text to button
button1.text("Begin Quiz");
// appending button1 variable to HTML
var startbutton = $(".start").append(button1);

// opening image

// hide "begin quiz" button after clicked, but show questions and start timer
$(button1).click(function () {

  // hide begin button, show quiz/submit button
  $(button1).hide();
  $("#myQuiz").show();
  $(".submit").show();
  $(".countdown").show();

  // start and display timer
  var timer = setInterval(function () {
    $(".countdown").text("Time remaining: " + timeLeft + " seconds");
    timeLeft--;
    if (timeLeft <= 0) {
      clearInterval(timer);
      $(".countdown").html("Time is up!");
      $(".results").show();
    }
  }, 1000 );

});


// SUBMIT BUTTON
// variable to hold button
var button2 = $("<button>");
// adding text to button
button2.text("Submit");
// appending button1 variable to HTML
var submitButton = $(".submit").append(button2);

$(button2).click(function () {
  $("#myQuiz").hide();
  $(".results").show();
  $(".submit").hide();
});


  // show all trivia questions with correlating answer options (in HTML)
  function check() {
    var question1 = document.myQuiz.q1.value;
    var question2 = document.myQuiz.q2.value;
    var count = 0;

    if (question1 == "d") {
      correct++;
    } else {
      incorrect++;
    }

    if (question2 == "a") {
      correct++;
    } else {
      incorrect++;
    }

  }; $(submitButton).click(check());





