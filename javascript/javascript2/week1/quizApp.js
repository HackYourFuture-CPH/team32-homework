const quizQuestion = {
  id: 1,
  question: "What is the capital of Denmark?",
  options: [
    { text: "Berlin", isCorrect: false },
    { text: "Copenhagen", isCorrect: true },
    { text: "Madrid", isCorrect: false },
    { text: "Rome", isCorrect: false },
  ],
  explanation: "Copenhagen is the capital of Denmark.",
};

const quizContainer = document.getElementById("quiz-container");

function createQuestionTitle(qQuestion) {
  const questionNumberElementP = document.createElement("p");
  questionNumberElementP.classList.add("question-number");
  questionNumberElementP.innerHTML = `${qQuestion.id}. <span class="question-text">${qQuestion.question}</span>`;
  quizContainer.append(questionNumberElementP);
}
// first create the question element
createQuestionTitle(quizQuestion);

const form = document.createElement("form");
form.className = "options";

createOptions(quizQuestion.options);

const buttonDiv = document.createElement("div");
buttonDiv.className = "bottom-section";
const randomButton = document.createElement("button");
randomButton.innerText = "Randomize";
randomButton.classList.add("next-button");
randomButton.addEventListener("click", ()=>{
    const randomOptions = [];
    randomOptions.push(quizQuestion.options[1]);
    randomOptions.push(quizQuestion.options[3]);
    randomOptions.push(quizQuestion.options[2]);
    randomOptions.push(quizQuestion.options[0]);
    createOptions(randomOptions);
})
buttonDiv.appendChild(randomButton);

const nextButton = document.createElement("button");
nextButton.innerText = "Next";
nextButton.classList.add("next-button");
buttonDiv.appendChild(nextButton);

quizContainer.appendChild(buttonDiv);

nextButton.addEventListener("click", (e) => e.preventDefault());




function clearOptions(allOptions) {
    for (let i = 0; i < allOptions.length; i++) {
      allOptions[i].classList.remove("green");
      allOptions[i].classList.remove("red");
    }
  }

function createOptions(qOptions) {
    form.innerHTML = "";
    for (let i = 0; i < qOptions.length; i++) {
      // Create the label element
      const label = document.createElement("label");
      label.classList.add("option");
  
      // Create the input element
      const input = document.createElement("input");
      input.type = "radio";
      input.name = "answer";
      input.dataset.correct = qOptions[i].isCorrect;
      input.value = `${qOptions[i].text}`;
  
      // Create the span element
      const span = document.createElement("span");
      span.textContent = `${qOptions[i].text}`;
  
      input.addEventListener("change", () => {
        // when clicked an option
        // read all the options using querySelectorAll in this case class "option"
        // then reset options clases, meaning remove "green" and "red" class
        const allOptions = document.querySelectorAll(".option");
        clearOptions(allOptions);
  
        if (input.dataset.correct === "true") {
          label.classList.add("green");
        } else {
          label.classList.add("red");
        }
      });
  
      // Append input and span to label
      label.appendChild(input);
      label.appendChild(span);
      
      // Append label to form
      form.appendChild(label);
      // Append form to quizContainer
      quizContainer.appendChild(form);
    }
  }