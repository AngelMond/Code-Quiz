//These variables stores the main containers
var instructionsContainer = $('#instructions-button-container');
var displayQuestionField = $('#question-answer-container');
var quizFinished = $('#quizDone');
var mainHighscoresContainer = $('#highscores-main-container');

//This variable store the container for my highscores
var highscoresContainer = $('#highscores-container');
var highscoreButtonScoreContainer = $('#scoresButton');

//ol container to create <li> to save player score
var initialsContainer = $('#initialsContainer');

//Input to enter initials
var enterInitials = $('#inputInitials');

//Variable to store my score
var playerScore = $('#score');
var finalScore = $('#finalScore');

//These variables stores buttons
var startGame = $('#startButton');
var showHighscores = $('#showScores');
var goBack = $('#goBack');
var clearScores = $('#clearScores');
var submitScore = $('#submitScore');

//This variable store my timer
var timer = $('#spanTimer');


//My container for my questions
var questionContainer = $('#question');

//Container for my answers
var answers = $('#answers');



///////////////////////////////////////////////////////////////////



//Function to start the game
startGame.on('click', function(event){

    event.preventDefault();
    //Display the container that stores my questions
    displayQuestionField.css('display', 'flex' );
    //Hides the container that stores my instructions before play
    instructionsContainer.css('display', 'none');
    mainHighscoresContainer.css('display', 'none');

    //The timer start to count down from 80 seconds
    countDown();
    showQuestion();
});



//Time variable started from 80 seconds
var timeLeft = [];

//Function to count down the timer
function countDown(){

    //set 80 second when count down begins
    timeLeft.push(80);
    //Timer start to countdown
var timeInterval = setInterval(function(){

    timer.text(timeLeft);
    timeLeft--;

    if(timeLeft < 0){
    clearInterval(timeInterval);
        
    }

    }, 1000) 
}



///////////////////////////////////////////////////////////////////





//Select my <h3> where I show my questions and my <li> to display my answers
var questionH3 = $('#displayQuestion');
var answer1 = $('#option1');
var answer2 = $('#option2');
var answer3 = $('#option3');
var answer4 = $('#option4');


//All my questions and answers
let arrayQuestions = [
    {
        questionTitle:'What is JavaScript?',
        options:['It is a videogame.', 'It is a text editor.', 'It is a microprocessor.', 'It is an interpreted programming language.'  ],
        answer:'It is an interpreted programming language.'
    },

    {
        questionTitle:'Which of the following is a primitive data type?',
        options:['Array', 'Symbol', 'Function', 'Variable'],
        answer:'Symbol',
    },

    {
        questionTitle: 'This array method organize the elements inside an array',
        options:['Sort', 'Push', 'Slice', 'Length'],
        answer: 'Sort',
    },

    {
        questionTitle: 'How can you access to the value of a property inside an object?',
        options:['Just typing the value', 'By the name of the object', 'By the name of the object and the name of the property', 'By the name of the function '],
        answer: 'By the name of the object and the name of the property' ,
    },

    {
        questionTitle: 'This is an aritmetic operator',
        options:['&&', '%', '>', '|'],
        answer: '%' ,
    },
];


//Global variables
let currentQuestion = 0;
let score = 0;
//Gives me just the index number inside my array
let totalQuestions = arrayQuestions.length;//esto solo me da el numero de indices que tengo dentro de mi array




//Function to display a question
function showQuestion(){

    //Agarra mi todo mi objeto dentro de array
    let question = arrayQuestions[currentQuestion];

    //My questions
    questionH3.text(question.questionTitle);

    //My answers
    answer1.text(question.options[0]);
    answer2.text(question.options[1]);
    answer3.text(question.options[2]);
    answer4.text(question.options[3]);
}


//Function to check the answer
function checkAnswer(answer){
    if(answer === arrayQuestions[currentQuestion].answer ){

        var actualScore = score+= 20
        playerScore.text(actualScore);
        alert('correct answer');

        finalScore.text(actualScore);
    }else{

        timeLeft-=10;
        alert('wrong answer');
    }

}


// Function to change the question on clicking an answer
function nextQuestion() {
    currentQuestion++;
    if (currentQuestion === totalQuestions || timeLeft < 0) {
        
        alert("Quiz Over");
        displayQuestionField.css('display', 'none' );
        quizFinished.css('display', 'flex');

    } else {
        showQuestion();
    }
}


//function to change the question on click and check the answer
function changeQuestion(event) {
    event.preventDefault();
    let answer = event.target.innerHTML;
    checkAnswer(answer);
    nextQuestion();
}

// Add event listener to the question options
answer1.on('click', changeQuestion);
answer2.on('click', changeQuestion);
answer3.on('click', changeQuestion);
answer4.on('click', changeQuestion);



//Function to submit the score
submitScore.on('click', function(event){
    event.preventDefault();
    quizFinished.css('display', 'none');
    mainHighscoresContainer.css('display', 'flex');
    highscoreButtonScoreContainer.css('display', 'none');
    highscoresContainer.css('display', 'flex');


    // Capture the text initials entered by the player
    var initials = enterInitials.val();
    
    //Create a <li> element with the initials of the player
    initialsContainer.append('<li>'+ initials + ' - '+ score+'</li>');
    

});

/************ FUNCTIONS TO NAVIGATE THROUGH THE PAGE **********/

//Function to display the highscores
showHighscores.on('click', function(event){
    event.preventDefault();

    highscoresContainer.css('display', 'flex');
    instructionsContainer.css('display', 'none');
    highscoreButtonScoreContainer.css('display', 'none');

});

//Function to go back when the highscores screen is displayed
goBack.on('click', function(event){
    event.preventDefault();

    instructionsContainer.css('display', 'flex');
    highscoresContainer.css('display', 'none');
    highscoreButtonScoreContainer.css('display', 'flex', );
});


//Function to clear score
clearScores.on('click', function(event){
    event.preventDefault();
    initialsContainer.remove();
    
});










