$(document).ready(function () {

  // hides form (questions) at load of page
  $("#myQuiz").hide();

  // hides submit button
  $("#button2").hide();

  // hides timer
  $(".countdown").hide();

  $("#text").hide();
  $("#correct").hide();

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

    // hide begin button and image, show quiz/submit button and timer
    $(button1).hide();
    $("#open").hide();
    $("#myQuiz").show();
    $("#button2").show();
    $(".countdown").show();

    setTimeout(function () {
      check();
    }, 10000);

    var timeLeft = 10;
    // start and display timer
    var timer = setInterval(function () {
      $(".countdown").text("Time remaining: " + timeLeft + " seconds");
      timeLeft--;
      if (timeLeft === 0) {
        // clear timer
        clearInterval(timer);
        // show time is up
        $(".countdown").html("Time is up!");
        // show message and number correct
        $("#text").show();
        $("#correct").show();
        // hide quiz and submit button
        $("#myQuiz").hide();
        $("#button2").hide();
      }
    }, 1000);
  });

  // show all trivia questions with correlating answer options (in HTML)
  function check() {
    var question1 = document.myQuiz.q1.value;
    var question2 = document.myQuiz.q2.value;
    var correct = 0;
    var incorrect = 0;

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

    var answerMessage = ["You know the body!", "Ah - so close!", "Better luck next time."];

    var range;
    if (correct < 1) {
      range = 2;
    }

    else if (correct < 2 && correct > 0) {
      range = 1
    }

    else if (correct > 1) {
      range = 0;
    }

    $("#text").text(answerMessage[range]);
    $("#correct").text("You answered " + correct + " out of 2 questions correctly.");

  }; check();

  $("#button2").click(function () {
    $("#myQuiz").hide();
    $("#text").show();
    $("#correct").show();
    $(".submit").hide();
  });

});



