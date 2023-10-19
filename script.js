const questions = [
  {
    question: 'Commonly used data types DO Not Include:',
    correctAnswer: 'Numbers'
  },
  {
    question: 'The condition in an if /else statement is enclosed with ____. ?',
    correctAnswer: 'Parenthesis'
  },
  {
    question: 'Arrays in JavaScript can be used to store _____.',
    correctAnswer: 'All of the above'
  },
  {
    question: 'String values must be enclosed within _____ when being assigned to variables.',
    correctAnswer: 'Quotes'
  },
  {
    question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
    correctAnswer: 'console.log'
  }
];

let currentQuestionIndex = 0;
let score = 0;
let time = 60;
let timerInterval;

const startButton = document.getElementById('start-button');
const questionElement = document.getElementById('question');
const answerInput = document.getElementById('answer-input');
const timerElement = document.getElementById('timer');
const scoreElement = document.getElementById('score');
const submitButton = document.getElementById('submit-button');
const saveScoreButton = document.getElementById('save-score-button');
const feedbackElement = document.getElementById('feedback');

startButton.addEventListener('click', startQuiz);
submitButton.addEventListener('click', submitAnswer);
saveScoreButton.addEventListener('click', saveScore);

function startQuiz() {
  startButton.disabled = true;
  timerInterval = setInterval(updateTimer, 1000);
  loadNextQuestion();
}

function updateTimer() {
  if (time > 0) {
    time--;
    timerElement.textContent = time;
  } else {
    endGame();
  }
}

function loadNextQuestion() {
  if (currentQuestionIndex >= questions.length) {
    endGame();
    return;
  }

  const questionData = questions[currentQuestionIndex];
  questionElement.textContent = questionData.question;
  answerInput.value = '';
  answerInput.focus();

  currentQuestionIndex++;
}

function submitAnswer() {
  const questionData = questions[currentQuestionIndex - 1];
  const userAnswer = answerInput.value.trim().toLowerCase();
  const correctAnswer = questionData.correctAnswer.toLowerCase();

  if (userAnswer === correctAnswer) {
    score++;
    feedbackElement.textContent = 'Correct!';
  } else {
    feedbackElement.textContent = 'Incorrect. The correct answer is: ' + correctAnswer;
    time -= 10;
  }

  loadNextQuestion();
}

function endGame() {
  clearInterval(timerInterval);
  questionElement.textContent = 'Game Over!';
  answerInput.style.display = 'none';
  submitButton.style.display = 'none';
  saveScoreButton.disabled = false;
}

function updateTimer() {
  if (time > 0) {
    time--;
    timerElement.textContent = time;
  } else {
    endGame();
  }
}
function saveScore() {
  const initials = prompt('Enter your initials:');
  
  alert(`Your score is: ${score}`);
}


