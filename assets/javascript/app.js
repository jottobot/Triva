// when time hits 0, show number of correct, incorrect and unanswered questions
$(document).ready(function () {

  // variable to hold button
  var button1 = $("<button>");
  // adding text to button
  button1.text("Begin Quiz");
  // appending button1 variable to HTML
  var startbutton = $(".start").append(button1);
  // hide "begin quiz" button after clicked
  $(button1).click(function(){
    $(button1).hide();
    
  });

  // variable to hold button
  var button2 = $("<button>");
  // adding text to button
  button2.text("Submit");
  // appending button1 variable to HTML
  var submitButton = $(".submit").append(button2);


  // click start button to start game and timer immediately begins
  // start quiz when start button is clicked
  /* $(startbutton).click(function () {
  alert("hi!");
  }); */

  // show all trivia questions with correlating answer options (in HTML)

  var correct = 0;
  var incorrect = 0;

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

});



