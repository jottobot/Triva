// variables
var timeLeft = 10;
$("#time").text("Time left to answer: 10 seconds");

// count down timer
$("#start").on("click", function () {
  timer = setInterval(function () {
    $("#time").text("Time left to answer: " + timeLeft-- + " seconds");
    if (timeLeft == -1) {
      clearInterval(timer);
      $("#answers").append("<p>The correct answer is: </p>");
    }
  }, 1000);
});

var triviaQuestions = [
  {
    question: "what color am i?",
    choices: ["red", "blue", "green"],
    correctAnswer: 1,
  },

  {
    question: "what color are you?",
    choices: ["red", "blue", "green"],
    correctAnswer: 2,
  },
];
var currentQuestion = 0;
var correctAnswers = 0;

function showQuestion() {
  $("#question").text(parseInt(currentQuestion) + 1 + "." + triviaQuestions[currentQuestion].question);
  var options = triviaQuestions[currentQuestion].choices;
  var layout = '';
  for (var i = 0; i < options.length; i++) {
    layout += '<div><input type="radio" name="option" value="' + i + '" id="option' + i + '"><label for="option' + i + '">' + triviaQuestions[currentQuestion].choices[i] + '</label></div><br/>';
  }
    $("#layout").text(layout);
    $("#option0").prop("checked", true);
  };

  function checkAnswer() {
    if ($("input[name=option]:checked").val() == triviaQuestions[currentQuestion].correctAnswer) {
      correctAnswers++;
    };
  };

  $(document).ready(function () {

    $(".game-container").hide();
    $("#start").click(function() {
      $(".game-container").show();
      $(this).hide();
    });

    $(function() {
      $("#progressbar").progressbar({
        max: trivaQuestions.length - 1,
        value: 0
      });
    });

    showQuestion();

    $("#next").click(function () {
      event.preventDefault();
      checkAnswer();
      currentQuestion++;
      $(function () {
        $("#progressbar").progressbar({
          value: currentQuestion
        });
      });
      if (currentQuestion < triviaQuestions.length) {
        showQuestion();
        if (currentQuestion == triviaQuestions.length - 1) {
          $("#next").text("Submit");
          $("#next").click(function () {
            $("#game.container").hide();
            $("#results").text("You correctly answered " + correctAnswers + " out of " + currentQuestion + " questions! ").hide();
            $("#results").fadeIn(1500);
          });
        };
      };
    });
  });









