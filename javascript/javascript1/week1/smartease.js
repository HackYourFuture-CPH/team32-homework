//1.Age-ify//
let yearOfBirth = 1998;
let yearFuture = 2027;
let age = yearFuture - yearOfBirth;
console.log(`You will be ${age} years old in ${yearFuture}`);
// .    .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   //
//2.Goodboy-Oldboy//
let dogYearOfBirth = 2015;
let dogYearFuture = 2027;
let dogAge = dogYearFuture - dogYearOfBirth;
let dogYear = 7;
shouldShowResultInDogYears = true;
shouldShowResultInDogYears ? console.log(`Your dog will be ${dogAge * dogYear} dog years old in ${dogYearFuture}`) : console.log(`Your dog will be ${dogAge} human years old in ${dogYearFuture}`);
// .    .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   //
//3.Housey pricey//
let peterHouseWide = 8;
let peterHouseDeep = 10;
let peterHouseHigh = 10;
let peterGardenSize = 100;
let peterHouseVolume = peterHouseWide * peterHouseDeep * peterHouseHigh;
let peterHousePrice = peterHouseVolume * 2.5 * 1000 + peterGardenSize * 300;
if (peterHousePrice > 2500000) {
    console.log('Peter pays too much!')
} else if (peterHousePrice < 2500000) {
    console.log('Peter pays too little!')
} else {
    console.log("Good counting!")
}

let juliaHouseWide = 5;
let juliaHouseDeep = 11;
let juliaHouseHigh = 8;
let juliaGardenSize = 70;
let juliaHouseVolume = juliaHouseWide * juliaHouseDeep * juliaHouseHigh;
let juliaHousePrice = juliaHouseVolume * 2.5 * 1000 + juliaGardenSize * 300;
if (juliaHousePrice > 1000000) {
    console.log('Julia pays too much!')
} else if (juliaHousePrice < 1000000) {
    console.log('Julia pays too little!')
} else {
    console.log("Good counting!")
};
// .    .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   //
//Ez Namey//
let firstWords = ['Crazy', 'Funny', 'Awesome', 'Sneaky', 'Cheerful', 'Evil', 'Perfect', 'Balancing', 'Struggling', 'Fantastic'];
let secondWords = ['Cat', 'Dog', 'Pig', 'Horse', 'Cow', 'Chimp', 'Chair', 'Wizard', 'Cup', 'Finger'];
let startupName = firstWords[Math.floor(Math.random() * firstWords.length)] + ' ' + secondWords[Math.floor(Math.random() * firstWords.length)];
console.log(`The startup: "${startupName}" contains ${startupName.length} characters`);