
const ulAastronauts= document.getElementById("astronauts");
fetch("http://api.open-notify.org/astros.json")
.then(response => response.json())
.then(astronautsData => {
    console.log("astronautsData", astronautsData.people);
    astronautsData.people.map(person =>{
        const li = document.createElement("li");
        li.innerHTML = person.name;
        
        ulAastronauts.appendChild(li);
        console.log(person.name);
        
    })
    
})



