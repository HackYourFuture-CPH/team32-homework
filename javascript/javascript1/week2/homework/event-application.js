
function getEventWeekday(days){
    const weekDays = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday" ]
    const today = new Date();
    let eventDay = (today.getDay() + days) % 7;
    return weekDays[eventDay-1];
}
// With todays weekday a current day
console.log(getEventWeekday(1)); // Logs out "Thursday"

//With todays weekday a Current day
console.log(getEventWeekday(2));