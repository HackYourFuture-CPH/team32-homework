let numbers = process.argv.slice(2).map(Number);
let sum = 0;
numbers = numbers.filter((num) => !isNaN(num));
numbers.forEach((num) => {
  if (numbers.length > 1) {
    sum += num;
  }
});
if (numbers.length === 0) {
  console.log("No numbers provided.");
} else if (numbers.length > 1) {
  console.log(sum / numbers.length);
} else if (numbers.length === 1) {
  console.log(numbers[0]);
}
