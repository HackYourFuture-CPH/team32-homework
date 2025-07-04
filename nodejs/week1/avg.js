
// const inputs = process.argv.slice(2).map(Number).filter(n => !isNaN(n));

const val = process.argv.slice(2);
 
const numberList = val.filter(n=> !isNaN(n))

  const total = numberList.reduce((sum, num) => sum + parseInt(num), 0);
  const average = total / numberList.length;

console.log(average);

