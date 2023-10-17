const questions= [
    {
        question:"Commonly used data types DO NOT include?",
        answers:[ 
            { text: "Alerts", correct: true},
            { text: "Boolean", correct: false},
            { text: "Strings", correct: false},
            { text: "Numbers", correct: false},
         ]
    },
    {   question:"The condition in an if/else statement is enclosed within _____.",
        answers:[ 
            { text: "Quotes", correct: false},
            { text: "Curly brackets", correct: false},
            { text: "Parentheses", correct: true},
            { text: "Square brackets", correct: false},
        ]

    },
    {   question:"Arrays in JavaScript can be used to store _____.",
        answers:[ 
            { text: "Nuymbers and strings", correct: false},
            { text: "Other arrays", correct: false},
            { text: "Booleans", correct: false},
            { text: "All of the above", correct: true},
        ]

    },
    {   question:"What does HTML stand for?",
        answers:[ 
            { text: "Hypertext Markup Language", correct: true},
            { text: "Hypertext Model Language", correct: false},
            { text: "Hyper Modulus Language", correct: false},
            { text: "None of the above", correct: false},
        ]

    },
    {   question:"String values must be enclosed within ____ when being assigned to variables.",
        answers:[ 
            { text: "Commas", correct: false},
            { text: "Quotation marks", correct: true},
            { text: "Curly brackets", correct: false},
            { text: "Parenetheses", correct: false},
        ]

    },
];
const questionElement = document.getElementById("questions");
const answers = document.getElementById("answers");
const nextButton = document.getElementById("next-btn");
 
let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerhtml = ("Next");
    
}
function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex = + 1;
    questionElement.innerhtml = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerhtml = answer.text;
    button.classList.add("btn");
    answerButton.appendChild(button);
    if(answer.correct){
        button.dataset.correct = answer.correct
    }
    button.addEventListener(click, selectAnswer);
});
}
//timer here
var timeEl = document.querySelector(".time");
var secondsLeft = 60;

function setTime() {
  
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft;
    }, 1000);
}
//reset questions
function resetState(){
    nextButton.style.display = ("none");
    
}
//ansers correct/incorect 
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dadaset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.class.add("incorrect");

    }
    Array.form(answerButtons.children).forEach(button =>{
        if(button.dataset.correct ==="true"){
            button.classList.add("correct");
        }
    })
    nextButton.style.display = "block";
}
function showScore(){
    resetState();
    questionElement.innerhtml = "You scored ${score} out of ${questions.length}."; 
    nextButton.innerhyml = "Play again";
    nextButton.style.display = "block";
}
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex <question.length){
        showQuestion();
    }else{
        showScore();
    }
}
nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});

startQuiz()