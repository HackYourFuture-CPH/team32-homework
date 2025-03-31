//If sentences
// Create an if sentence that will give a user a message based on his bank account balance. Use the balance variable and change that.

// If a user has 0 or less balance log out 'Please deposit some money!'
// If a user has more than 0 and at most 1000 log out 'Your balance is looking okay'
// If a user has more than 1000 and at most 3000 log out 'Your balance is looking good'
// If a user has more than 3000 and at most 10000 log out 'Your balance is fantastic'
// If a user has more than 10000 log out 'Your balance is AMAZING!'

 const balance = 3001;

if(balance <= 0){
    console.log("Please deposit some money!");
    
}else if(balance > 0 && balance <= 1000 ){
console.log("Your balance is looking okay");

}else if(balance > 1000 && balance < 3000){
    console.log("Your balance is looking good");
    
}else if(balance > 3000 && balance < 10000){
console.log("Your balance is fantastic");

}else if(balance > 10000){
console.log("Your balance is AMAZING!");

}


//Function
// 1.Create a function called getCircleArea. It should have the radius of the circle as parameter and return the circle area. What happens if we dont return anything in the function?


//3.Try call the function and check with google if the function returns the right value.

function getCircleArea(radius){
    let circleArea = Math.PI * radius * radius;
    return circleArea;
}
const resultCircleArea =  getCircleArea(2);
console.log("resultCircleArea",  resultCircleArea);


//2.Create a function called celciusToFahreneit it should have a parameter called celcius. It should return the temperature in fahrenheit.
// formula : °F=(°C * 9/5) + 32
function celciusToFahrenheit(celcius){
let F = (celcius * 9/5) + 32;
return F;
}
const resultCelciusToFahrenheit = celciusToFahrenheit(100);
console.log("resultCelciusToFahrenheit", resultCelciusToFahrenheit );



//Simple for loop
//Create a for loop that logs out the numbers from 74 - 98

for(let i=74; i<=98; i++){
    console.log(i);
    
}

//For loop in a function
//Create a function that has two parameters: stringToLog and numberOfTimesToLog

//When calling the function it should log out the stringToLog the amount of times specified in numberOfTimesToLog. Use a for loop.

function excerciseLoop(stringToLog, numberOfTimesToLog){
    for(let i= 1; i<= numberOfTimesToLog; i++){
        console.log(stringToLog);
        
    }
}
excerciseLoop("hello", 3);

//Send emails
//Imagine we work at a company. Peter from the HR department wants us to send out a couple of emails to some recepients. The only problem is that he sent us the email in a weird format: benjamin@gmail.com|peter@gmail.com|hans@gmail.com|ahmad@gmail.com|sana@gmail.com|virgeen@gmail.com|mohammed@gmail.com

//Use the sendEmailTo function to send an email to all the recepients that we got from Peter.

//Hint use the .split method and look up iterating an array js for loop on google.

const emails = "benjamin@gmail.com|peter@gmail.com|hans@gmail.com|ahmad@gmail.com|sana@gmail.com|virgeen@gmail.com|mohammed@gmail.com";
const emailsArray = emails.split("|");
console.log(emailsArray);
 function sendEmailTo(recepients){
    for(let i = 0; i <= emailsArray.length; i++){
console.log(recepients[i]);

    }
 }
 sendEmailTo(emailsArray);
