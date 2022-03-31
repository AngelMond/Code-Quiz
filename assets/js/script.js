//These variables stores the main containers
var instructionsContainer = $('#instructions-button-container');
var displayQuestionField = $('#question-answer-container');
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





//Function to display the highscores
showHighscores.on('click', function(){
    highscores.css('display', 'flex');
});





///////////////////////////////////////////////////////////////////

//Function to start the game
startGame.on('click', function(event){

    event.preventDefault();
    //Display the container that stores my questions
    displayQuestionField.css('display', 'flex' );
    //Hides the container that stores my instructions before play
    instructionsContainer.css('display', 'none');
    mainHighscoresContainer.css('display', 'none');

    //The timer start to count down from 120 seconds
    countDown();
    showQuestion();
});




var timeLeft = 120;
//Function to count down the timer
function countDown(){

    //Timer start to count 
var timeInterval = setInterval(function(){

    timer.text(timeLeft);
    timeLeft--;

    if(timeLeft === -1){
    clearInterval(timeInterval)
    }

    }, 1000) 
}


//botones tienen atributo disable
//////////////////////////////////////////////////////////////////






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

// //Create li elements for my answers
// for(var i = 1; i < 5; i++){
//     var createAnswer = $('<li>' + i + '.'+ ' holaaa</li>');
//     answers.append(createAnswer);
// }



// var question = $('<h3>'+ arrayQuestions.question +'</h3>');
//     questionContainer.append(question);

//Selecciono mi <h3> donde va la pregunta y mis <li> donde iran mis respuestas
var questionH3 = $('#displayQuestion')
var answer1 = $('#option1');
var answer2 = $('#option2');
var answer3 = $('#option3');
var answer4 = $('#option4');


//Mis preguntas, respuestas y respuesta correcta
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
        answer: 'Length',
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
let totalQuestions = arrayQuestions.length;//esto solo me da el numero de indices que tengo dentro de mi array




//Function to display a question

function showQuestion(){

    //Question agarra mi todo mi objeto dentro de array
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

        score++
        alert('correct answer');
    }else{

        timeLeft-=10;
        alert('wrong answer');
    }
}


// Function to change the question on clicking the next button
function nextQuestion() {
    currentQuestion++;
    if (currentQuestion === totalQuestions) {
        alert("Quiz Over");
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
// Display the first question
displayQuestion();










