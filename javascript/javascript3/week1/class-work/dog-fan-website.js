// setInterval(()=>{
//     fetch("https://dog.ceo/api/breeds/image/random")
//     .then(response => response.json())
//     .then(dogRandomImg => {
//         console.log("dogRandomImg", dogRandomImg.message);

//     })
// },10000)

const randomDogImg = document.querySelector("#randomDogsImg");
setInterval(() => {

  fetch("https://dog.ceo/api/breeds/image/random?")
    .then((response) => response.json())
    .then((dogRandomImg) => {
      console.log(dogRandomImg);
      let image = document.createElement("img");
      image.src = dogRandomImg.message;
      image.width="200"
      randomDogImg.innerHTML = "";
      randomDogImg.appendChild(image) 
    });
}, 2000);

const breedImg = document.getElementById("breedImg");
const breedName = document.createElement("p");

fetch("https://dog.ceo/api/breeds/list/all")
.then(response => response.json())
.then(data => {
    console.log("data", data.message);

    const breeds = Object.keys(data.message);
    const randomBreed = Math.floor(Math.random() * breeds.length);

    console.log(randomBreed);
     

    
    fetch(`https://dog.ceo/api/breed/${breeds[randomBreed]}/images/random`)
    .then(response => response.json())
    .then(breedData => {
        console.log(breedData);
        
       let image = document.createElement("img");
       image.src = breedData.message;
       image.width = "300";
       image.height = "300";
       breedImg.appendChild(image);
       breedName.textContent = breeds[randomBreed];
       breedImg.appendChild(breedName);
    })
})
