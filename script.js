let questions = [
    { q: "What was I for Halloween 2026?", answers: ["Chain Chomp", "Bullet Bill", "Luigi", "Waluigi"], correct: 0 },
    { q: "What's my favorite horror film?", answers: ["The Shining", "The Thing", "The Thing 2011 remake (wrong answer)", "Evil Dead"], correct: 1 },
    { q: "What adaptation does Stephen King hate?", answers: ["Pet Cemetary", "IT", "The Shining", "Carrie"], correct: 2 },
    { q: "What is the correct serving of candy to hand out on Halloween?", answers: ["A Mint", "Fun Size", "King Size", "Nothing"], correct: 2 },
    { q: "Who was the killer in Scary Movie?", answers: ["Cindy", "Brenda", "Doofy", "Greg"], correct: 2 },
    { q: "What was the most recent Evil Dead movie called?", answers: ["The Evil Dead", "Evil Dead Rise", "Evil Dead", "Evil Dead Burn"], correct: 3 },
    { q: "What's the iconic quote from IT?", answers: ["Here's Johnny!", "You'll float too!", "What's your favorite scary movie?", "I see dead people."], correct: 1 },
    { q: "In the original The Thing movie, what was The Thing originally?", answers: ["Cat", "Human", "Dog", "Polar Bear"], correct: 2 },
    { q: "What classic film didn't tell the actors what was going to happen during production?", answers: ["Psycho", "Night Of The Living Dead", "The Blair Witch Project", "Halloween"], correct: 2 },
    { q: "What movie should you absolutely go watch?", answers: ["The Thing", "Scary Movie (2026)", "Any Leprechaun film", "The Thing 2011 Remake"], correct: 0 }
];

let startScreen = document.getElementById("startScreen");
let quiz = document.getElementById("quizScreen");
let result = document.getElementById("resultScreen");

let startButton = document.getElementById("startButton");
let nextButton = document.getElementById("nextButton");
let restartButton = document.getElementById("restartButton");

let questionNumber = document.getElementById("questionNumber");
let progressBar = document.getElementById("progressBar");
let questionText = document.getElementById("questionText");
let answerOptions = document.getElementById("answerOptions");
let finalScore = document.getElementById("finalScore");

let current = 0;
let score = 0;
 
function startQuiz() {
    current = 0;
    score = 0;
    startScreen.hidden = true;
    result.hidden = true;
    quiz.hidden = false;

    showQuestion();
}
 
function showQuestion(){
    var x = current + 1
    questionNumber.textContent = "Question " + x + " of " + questions.length
    questionText.textContent = questions[current].q

    let percent = current / questions.length
    percent = percent * 100
    progressBar.style.width = percent + "%"
    nextButton.disabled = true

    if(current == questions.length - 1){
        nextButton.textContent = "See Results"
    }
    if(current != questions.length - 1){
        nextButton.textContent = "Next Question"
    }

    answerOptions.innerHTML = ""

    let button1 = document.createElement("button")
    button1.textContent = questions[current].answers[0]
    button1.className = "answerButton"
    button1.onclick = function(){
        checkAnswer(0)
    }
    answerOptions.appendChild(button1)

    let button2 = document.createElement("button")
    button2.textContent = questions[current].answers[1]
    button2.className = "answerButton"
    button2.onclick = function(){
        checkAnswer(1)
    }
    answerOptions.appendChild(button2)

    let button3 = document.createElement("button")
    button3.textContent = questions[current].answers[2]
    button3.className = "answerButton"
    button3.onclick = function(){
        checkAnswer(2)
    }
    answerOptions.appendChild(button3)

    let button4 = document.createElement("button")
    button4.textContent = questions[current].answers[3]
    button4.className = "answerButton"
    button4.onclick = function(){
        checkAnswer(3)
    }
    answerOptions.appendChild(button4)
}

function checkAnswer(picked){
    let right = questions[current].correct
    let buttons = answerOptions.children
    if(picked == right){
        score = score + 1
        buttons[right].classList.add("correct")
    }
    if(picked != right){
        buttons[picked].classList.add("incorrect")
        buttons[right].classList.add("correct")
    }
    buttons[0].disabled = true
    buttons[1].disabled = true
    buttons[2].disabled = true
    buttons[3].disabled = true
    nextButton.disabled = false
}

function nextQuestion() {
    current = current + 1;
    if (current == questions.length) {
        quiz.hidden = true;
        result.hidden = false;
        progressBar.style.width = "100%";
        finalScore.textContent = score + "/" + questions.length;
    }
//dude was the progress bar really needed 
    else {
        showQuestion();
    }
}

if(startButton) {
    startButton.onclick = startQuiz
}
if(restartButton){
    restartButton.onclick = startQuiz
}
if(nextButton){
    nextButton.onclick = nextQuestion
}