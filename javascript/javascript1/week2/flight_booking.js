function getFullname(firstName, secondName) {
    return `${firstName} ${secondName}`;
}
const fullname1 = getFullname("Maksym", "Dronov");
const fullname2 = getFullname("John", "Doe");
console.log(fullname1 + ", " + fullname2)