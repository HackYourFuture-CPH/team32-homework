// Age-ify (a future age calculator)
const yearOfBirth = 1991;
const yearFuture = 2045;
const age = (yearFuture - yearOfBirth);
console.log("You will be " + age + " years old in " + yearFuture);


// Goodboy-Oldboy (A dog age calculator)
const dogYearOfBirth = 2000;
const dogYearFuture  = 2010;
const dogYear = (dogYearFuture - dogYearOfBirth);
let shouldShowResultInDogYears = true;
if(shouldShowResultInDogYears){
   console.log("your dog will be " + dogYear * 7 + " dog years old in " + dogYearFuture );
   
}else{
   console.log("your dog will be " + dogYear + " human years old in " + dogYearFuture);
   
}

//Housey pricey (A house price estimator)
const peterVolumeInMeters = (8*10*10);
const gardenSizeInM2 = 100;
const peterHouseCost = (2500000);
const peterHousePrice = (peterVolumeInMeters *2.5* 1000 + gardenSizeInM2 * 300);
console.log("Peters house prise is " + peterHousePrice);
console.log("Peter is paying more " + (peterHouseCost-peterHousePrice));

const juliaVolumeInMeters = (5*11*8);
const juliaGardenSizeInM2 = 70;
const juliaHouseCost = (1000000);
const juliaHousePrice = (peterVolumeInMeters *2.5* 1000 + gardenSizeInM2 * 300);
console.log("julia house prise is " + juliaHousePrice);
console.log("Julia is paying less " + (juliaHouseCost-juliaHousePrice));

//z Namey (Startup name generator) Optional
const firstWords = ["Easy", "Awesome", "Corporate", "Swift", "Brilliant", "Elevate", "Noble", "Bold", "Prime", "Vivid"];
const secondWords = ["Pioneer", "NextGen", "Summit", "Visionary", "Strive", "Synergy", "Momentum", "Elevate", "Pulse", "Inspire"];

const randomNumber1 = Math.floor(Math.random() * firstWords.length);
const randomNumber2 = Math.floor(Math.random() * secondWords.length);


const startupName = `${firstWords[randomNumber1]} ${secondWords[randomNumber2]}`;
 

console.log(`The startup: "${startupName}" contains ${startupName.length} characters`);
 




