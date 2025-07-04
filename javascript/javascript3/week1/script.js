// import questions from "./quizData.json" with { type: "json" };
// console.log("questions", questions);

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


const addQuestionBtn = document.getElementById("addQuestionBtn");
addQuestionBtn.addEventListener("click", handleOpenForm);
function handleOpenForm(){
    const Form = document.getElementById("addQuestion");  
    Form.classList.toggle("formHide"); 
}


function handleShowCorrectAnswer(event){
    const btnSpan = event.target;
    const sibling = btnSpan.nextElementSibling; // Get the next sibling
    sibling.classList.toggle("hide");
 
}
function randerQuestions(){
    const ol = document.getElementById("ol");
    ol.innerHTML = "";
    questions.forEach(question =>{
        const li = document.createElement("li");
        li.className = "allQuestions-style";
        let allQuestionsSpan = document.createElement("span");
        allQuestionsSpan.innerText = question.question;
        li.appendChild(allQuestionsSpan);
        let showAnswerBtn = document.createElement("button");
        showAnswerBtn.classList.add("showAnswerBtn");
        showAnswerBtn.innerText = "show answer"
        li.appendChild(showAnswerBtn);
        let showAnsBtnSpan = document.createElement("span");
        const correctAnswer = question.answers.find(answer => answer.correct === true);
        showAnsBtnSpan.classList.toggle("hide");
        showAnsBtnSpan.innerText = correctAnswer.text;

        showAnsBtnSpan.style.background = "green";
        showAnsBtnSpan.style.color = "#fff";
        li.appendChild(showAnsBtnSpan);
        showAnswerBtn.addEventListener("click", handleShowCorrectAnswer);


        const optionsUl = document.createElement("ul");
        question.answers.forEach(answer =>{
               const optionsLi = document.createElement("li");
               optionsLi.innerHTML = answer.text;
               optionsUl.appendChild(optionsLi);
           });
        li.appendChild(optionsUl)
        ol.appendChild(li);
    });
    
}

randerQuestions();


const addQuestionForm = document.getElementById("addQuestion");
addQuestionForm.addEventListener("submit", handleSubmit);


function handleSubmit(e){

    e.preventDefault();
    const q = document.getElementsByName("question");
    const inputTextA = document.getElementsByName("textA");
    const inputTextB = document.getElementsByName("textB");
    const inputTextC = document.getElementsByName("textC");
    const inputTextD = document.getElementsByName("textD");

    const correctAns = document.getElementsByName("correctAns");
 
    
   const newQuestion =  {
        "question":  q[0].value,
        "answers": [
          { "text": inputTextA[0].value, "correct": correctAns[0].checked },
          { "text": inputTextB[0].value, "correct": correctAns[1].checked },
          { "text": inputTextC[0].value, "correct": correctAns[2].checked },
          { "text": inputTextD[0].value, "correct": correctAns[3].checked }
        ]
      }

      questions.push(newQuestion);

      randerQuestions();
    console.log(questions)
}
