
 //import questions from "./quizData.json" with { type: "json" };

 async function questiontData() {
    const url = "https://raw.githubusercontent.com/nigerabed/hyf-project-api/refs/heads/main/quizApi/quiz-data.json";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const questions = await response.json();
      console.log(questions);
      return questions;
    } catch (error) {
      console.error(error.message);
    }
    
  }
  const questions = await questiontData();


const urlParams = new URLSearchParams(window.location.search);
console.log(urlParams);
const sequence = urlParams.get('sequence');
console.log(sequence);

if(sequence === "random"){
    function shuffle(questionArr){
        // Fisher- yates shuffle algorithm 

        for(let i = questionArr.length-1 ; i > 0; i--){
            let random = Math.floor(Math.random() * (i + 1));
            [questionArr[i], questionArr[random]] = [questionArr[random], questionArr[i]];
        }
    }
    shuffle(questions);
}

if(sequence === "alphabetic"){
    questions.sort((a, b) => a.question.localeCompare(b.question));

    console.log(questions);
}



const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex  = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();

    console.log(currentQuestionIndex);
    console.log(questions);
    

    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    })
};

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
const selectedBtn = e.target;
const isCorrect = selectedBtn.dataset.correct === "true";
if(isCorrect){
    selectedBtn.classList.add("correct");
    score++
}else{
    selectedBtn.classList.add("incorrect"); 
}
Array.from(answerButtons.children).forEach(button => {
    if(button.dataset.correct === "true"){
        button.classList.add("correct");
    }
    button.disabled = true;
});
nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = ` you scroed ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play again";
    nextButton.style.display = "block";
}

function handleNextButton(){
currentQuestionIndex++;
if(currentQuestionIndex < questions.length){
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
})

startQuiz();