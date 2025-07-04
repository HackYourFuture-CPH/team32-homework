const gameStartPlayer = document.getElementById("gameStartPlayer");
gameStartPlayer.addEventListener("click", handleGameStartFromPlayer);

function handleGameStartFromPlayer(e) {
  e.preventDefault();
  const playerName = document.getElementsByName("player");
  const gameSequenceElm = document.getElementsByName("gameSequence");

  let gameSequence;

  if (gameSequenceElm[0].checked) {
    gameSequence = gameSequenceElm[0].value;
  } else if (gameSequenceElm[1].checked) {
    gameSequence = gameSequenceElm[1].value;
  }

  const playerOne = {
    name: playerName[0].value,
    correctScore: 0,
    wrongScore: 0,
    totalQuestion: 0,
    gameSequence: gameSequence,
  };

  localStorage.setItem("player", JSON.stringify(playerOne));

  console.log(
    "player form localstroe after submit ",
    localStorage.getItem("player")
  );

  window.location.href = "quiz.html?sequence=" + gameSequence;
}

console.log("player form localstore", localStorage.getItem("player"));
