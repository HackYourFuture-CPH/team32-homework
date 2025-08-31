function getFullname(firstName, secondName, useFormalName) {
  useFormalName === true;
  let fullname = `${firstName} ${secondName}`;
  if (useFormalName) {
    return `Lord ${fullname}`;
  } else if (useFormalName === false || useFormalName === undefined) {
    return fullname;
  }
}

// Fix for women //
function getFullnameWithGender(firstName, secondName, useFormalName, gender) {
  if (firstName === "" || secondName === "") {
    return "Please specify your name";
  }
  useFormalName = true;
  formal = "";
  if (gender === "") {
    formal = undefined;
    useFormalName = false;
  } else if (gender === "Male") {
    formal = "Lord";
  } else if ((gender = "Female")) {
    formal = "Lady";
  }
  let fullname = `${firstName} ${secondName}`;
  if (useFormalName) {
    return `${formal} ${fullname}`;
  } else if (useFormalName === false || useFormalName === undefined) {
    return fullname;
  }
}

console.log(getFullnameWithGender("Mark", "Kars", true, "Male"));
