// Get the player name from localstorage and showing in html
const player = JSON.parse(localStorage.getItem("player"));
const playerElm = document.getElementById("player");
playerElm.innerHTML = `Player : ${player.name}`;

// Fetching data from github API
async function questiontData() {
  const url =
    "https://raw.githubusercontent.com/nigerabed/hyf-project-api/refs/heads/main/quizApi/quiz-data.json";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(error.message);
  }
}
const questions = await questiontData();

const urlParams = new URLSearchParams(window.location.search);
const sequence = urlParams.get("sequence");
// schuffle the questions by sequence type
if (sequence === "random") {
  shuffleRandom(questions);
} else if (sequence === "alphabetic") {
  questions.sort((a, b) => a.question.localeCompare(b.question));
}

function shuffleRandom(questionArr) {
  // Fisher- yates shuffle algorithm
  for (let i = questionArr.length - 1; i > 0; i--) {
    let random = Math.floor(Math.random() * (i + 1));
    [questionArr[i], questionArr[random]] = [
      questionArr[random],
      questionArr[i],
    ];
  }
}

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const progressQuestion = document.getElementById("progress-question");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  console.log(questions);

  let currentQuestion = questions[currentQuestionIndex];
  progressQuestion.innerHTML = `Question No : ${
    currentQuestionIndex + 1
  } out of ${questions.length}`;
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function showScore() {
  resetState();
  questionElement.innerHTML = ` you scroed ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "Play again";
  nextButton.style.display = "block";

  // save the score in localstorage
  player.correctScore = score;
  player.wrongScore = questions.length - score;
  player.totalQuestion = questions.length;
  localStorage.setItem("player", JSON.stringify(player));
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

startQuiz();
