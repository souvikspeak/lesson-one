var readlineSync = require('readline-sync');

var userName = readlineSync.question("what is your name? ");

console.log("Hi "+ userName+"! welcome to how well do you know Souvik");

var score = 0;
function play(question,answer){
   var userAnswer = readlineSync.question(question).toLowerCase();

  if (userAnswer === answer) {
    console.log("you are right!");
    score = score + 1;
  } else {
    console.log ("you are wrong!");
  }

  console.log("current score: "+score);
  console.log("-------------");

}


var questions = [{
  question: "where do i live? ",
  answer: "kolkata"
}, {
  question: "who is my favourite superhero? ",
  answer: "batman"
}];

for (var i=0; i<questions.length; i++){
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer);
}

console.log("Yay! you scored ", score);