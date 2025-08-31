function calculateTravelTime(travelInformation) {
  const totalTimeInHours =
    travelInformation.destinationDistance / travelInformation.speed;
  const hours = Math.floor(totalTimeInHours);
  const minutes = Math.round((totalTimeInHours - hours) * 60);
  return `${hours} hours and ${minutes} minutes`;
}
