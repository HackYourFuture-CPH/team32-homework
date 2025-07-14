const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};

function calculateTravelTime(tInfo) {
  let calculateTimeInHours = tInfo.destinationDistance / tInfo.speed;
  let hour = Math.floor(calculateTimeInHours);
  let calculateMinute = Math.round((calculateTimeInHours - hour) * 60);

  return `${hour} and ${calculateMinute}`;
}

const travelTime = calculateTravelTime(travelInformation);
console.log(travelTime); // 8 hours and 38 minutes
