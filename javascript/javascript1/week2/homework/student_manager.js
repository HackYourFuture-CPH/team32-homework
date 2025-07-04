const class07Students = [];
function addStudentToClass(studentName) {
  if (!class07Students.includes(studentName)) {
    if (class07Students.length < 6 || studentName.toLowerCase() === "queen") {
      class07Students.push(studentName);
    }else{
        console.log("Can not add " + studentName +  " students to class 07");
    }
  }else{
    console.log("Student " + studentName + " is already in the class");
  }

//   if (class07Students.length < 6) {
//     if (class07Students.includes(studentName)) {
//       console.log("Student " + studentName + " is already in the class");
//     } else {
//       class07Students.push(studentName);
//     }
//   } else {
//     console.log("Can not add more students to class 07");
//   }
}

function getNumberOfStudents() {
  // You write code here
  return class07Students.length;
}

addStudentToClass("Niger");
addStudentToClass("abed");

addStudentToClass("ayash");
addStudentToClass("niil");
addStudentToClass("siraat");
addStudentToClass("arshi");
addStudentToClass("arshi2");
addStudentToClass("Queen");


console.log(getNumberOfStudents());

console.log(class07Students);