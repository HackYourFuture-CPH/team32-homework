const user = {
    name: "Emil",
    age: 25,
    role: "Teacher",
    classes: ["Javascript 1", "Javascript 2"],
    hobbies: {
      favourite: "computers",
      sports: "running to class",
    },
  };

  user["name"] = "Maria";
user[0] = "Hello world";
user["world"] = "my Hello world";

console.log(user);

