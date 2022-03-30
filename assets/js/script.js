//These variables stores the main containers
var instructionsContainer = $('#instructions-button-container');
var displayQuestion = $('#question-answer-container');
var quizFinished = $('#quizDone');
var mainHighscoresContainer = $('#highscores-main-container');

//This variable store the container for my highscores
var highscores = $('#highscores-container');

//These variables stores buttons
var startGame = $('#startButton');
var showHighscores = $('#showScores');

//This variable store my timer
var timer = $('#spanTimer');


//My container for my questions
var questionContainer = $('#question');

//Container for my answers
var answers = $('#answers');


// var arrayAnswers = []

//Function to display the highscores
showHighscores.on('click', function(){
    highscores.css('display', 'flex');
});




/*

var displayQuestion = $('#displayQuestion');

var question = "jaksdjkakldjaskldjfkasjdkfljaskldjfkasjdfkljaskdfkalsf";

displayQuestion.append(question);
*/


//Function to start the game
startGame.on('click', function(event){

    event.preventDefault();
    //Display the container that stores my questions
    displayQuestion.css('display', 'flex' );
    //Hides the container that stores my instructions before play
    instructionsContainer.css('display', 'none');
    mainHighscoresContainer.css('display', 'none');

    //Start to count down the timer
    countDown();

    //Variable to append my questions to my questionContainer
    var question = $('<h3>HOlaaaaaa</h3>');
    questionContainer.append(question);
});


//Function top count down the timer
function countDown(){
    var timeLeft = 120;

    //Timer start to count 
var timeInterval = setInterval(function(){

    timer.text(timeLeft);
    timeLeft--;

    if(timeLeft === -1){
    clearInterval(timeInterval)
    }

    }, 1000) 
}




// var myQuestions = {

//     question1:"What is JavaScript?",
//     option1: "It is a videogame.",
//     option1: "It is a text editor.",
//     option1: "It is a microprocessor.",
//     option1: "It is an interpreted programming language.",

//     answer: option1,
// },

// {

// }

for(var i = 1; i < 5; i++){
    var createAnswer = $('<li>' + i + '.'+ ' holaaa</li>');
    answers.append(createAnswer);
    
}




