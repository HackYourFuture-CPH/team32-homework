const ulAastronauts = document.getElementById("astronauts");
fetch("http://api.open-notify.org/astros.json")
  .then((response) => {
    if (response.status == 200) {
      return response.json();
    } else {
      return { people: [] };
    }
  })
  .then((astronautsData) => {
    console.log("astronautsData", astronautsData.people);
    astronautsData.people.map((person) => {
      const li = document.createElement("li");
      li.innerHTML = person.name;
      ulAastronauts.appendChild(li);
      console.log(person.name);
    });
  });
