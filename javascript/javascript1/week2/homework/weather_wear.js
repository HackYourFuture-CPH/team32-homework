function clothsToWearDependsOnTemperature(temperature) {
  if (temperature < 10) {
    return "Wear winter jacket";
  } else if (temperature >= 10 && temperature <= 15) {
   return "wear windy jacket";
  } else {
   return "shorts and t-shirt";
  }
  
}

const clothsToWear = clothsToWearDependsOnTemperature(10);
console.log("clothsToWear", clothsToWear);
