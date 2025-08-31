function getEventWeekday(number) {
    const date = new Date();
    const day = date.getDay();
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday" ]
    return days[(day + number - 1) % 7];
}
console.log(getEventWeekday(8))