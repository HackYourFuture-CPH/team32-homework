let username = "";
let todo = [];

function help() {
  const help = {
    "Hello my name is *your name*": "Saves your name in the system",
    "What is my name": "Tells you your name",
    "Add *something* to my todo": "Adds *something* to your todo list",
    "Remove *something* from my todo":
      "Removes *something* from your todo list ",
    "What is on my todo?": "Gives you the whole todo list",
    "What day is it today?": "Tells you the current date",
    "What is *math operation*": "Solves math operation(fx 1+2)",
    "Set a timer for x minutes/seconds/hours":
      "Sets a timer for x minutes/seconds/hours",
    help: "Shows this list",
    "Forget my name": "Removes your name from the system",
  };
  for (const [key, value] of Object.entries(help)) {
    console.log(`${key}: ${value}`);
  }
}
function addToDo(activity) {
  todo.push(activity);
}

function removeFromToDo(activity) {
  let index = todo.indexOf(activity);
  if (index > -1) {
    todo.splice(index, 1);
  }
}

function showToDos() {
  const message = "You have the following todos:";
  let toDoList = ``;
  for (let i = 0; i < todo.length; i++) {
    toDoList += `\n${i + 1}. ${todo[i]}\n`;
  }
  return message + toDoList;
}

function showToday() {
  const today = new Date();
  const day = today.toLocaleString("en", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return day;
}
function timerFinish() {
  console.log("Your timer is done!");
}

function mathCheck(string) {
  if (
    string.includes("+") ||
    string.includes("-") ||
    string.includes("*") ||
    string.includes("/")
  ) {
    return true;
  }
}

function getReply(command) {
  let splitCommand = command.split(" ");
  if (command.startsWith("Hello my name is")) {
    if (username != "") {
      console.log(`I already know your name, ${username}!`);
    } else {
      let helloMessage = command.split(" ");
      username = helloMessage[helloMessage.length - 1];
      let firstLetter = username[0].toUpperCase();
      username = username.replace(username[0], firstLetter);
      console.log(`Nice to meet you, ${username}`);
    }
  } else if (command === "What is my name?") {
    if (username === "") {
      console.log("I don't know, please specify your name");
    } else {
      console.log(username);
    }
  } else if (command === "Forget my name") {
    console.log("Done, goodbye!");
    username = "";
  } else if (command.startsWith("Add")) {
    let newToDo = splitCommand.slice(1, splitCommand.length - 3).join(" ");
    addToDo(newToDo);
    console.log(`${newToDo} is added to your todos`);
  } else if (command.startsWith("Remove")) {
    let toDelete = splitCommand.slice(1, splitCommand.length - 3).join(" ");
    removeFromToDo(toDelete);
    console.log(`${toDelete} removed from your todos`);
  } else if (command === "What is on my todo?") {
    console.log(showToDos());
  } else if (command === "What day is it today?") {
    console.log(`Today is ${showToday()}`);
  } else if (command.includes("Set") && command.includes("timer")) {
    let timerNumber = splitCommand[splitCommand.length - 2];
    timerNumber = parseInt(timerNumber);
    console.log(
      `Starting timer for ${timerNumber} ${
        splitCommand[splitCommand.length - 1]
      }`
    );
    if (command.endsWith("seconds") || command.endsWith("second")) {
      timer = setTimeout(timerFinish, timerNumber * 1000);
    } else if (command.endsWith("minutes") || command.endsWith("minute")) {
      timer = setTimeout(timerFinish, timerNumber * 60000);
    } else if (command.endsWith("hours") || command.endsWith("hour")) {
      timer = setTimeout(timerFinish, timerNumber * 3600000);
    } else {
      console.log("Invalid time unit");
    }
  } else if (mathCheck(command)) {
    let calculation = splitCommand.slice(
      splitCommand.length - 3,
      splitCommand.length
    );
    console.log(`It equals to ${eval(calculation.join(""))}`);
  } else if (command === "help") {
    console.log("Here is the list of available commands:");
    help();
  } else {
    console.log(
      "Incorrect command, run help command to see a list of commands"
    );
  }
}
