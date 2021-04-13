// Global variable definitions
let indexMainContent;

let jsonData = [
  {
    "id" : 1,
    "name" : "Perry",
    "breed" : "Samoyed",
    "location" : "East Rutherford, NJ",
    "price" : "$2,500",
    "imageURL" : "perry.jpg",
    "status" : "Adoptable"
  },
  {
    "id" : 2,
    "name" : "Jay",
    "breed" : "Chihuahua",
    "location" : "Boston, MA",
    "price" : "$2,000",
    "imageURL" : "jay.jpg",
    "status" : "Adoptable"
  },
  {
    "id" : 3,
    "name" : "Lila",
    "breed" : "Siberian Husky",
    "location" : "East Rutherford, NJ",
    "price" : "$2,500",
    "imageURL" : "lila.jpg",
    "status" : "Adoptable"
  },
  {
    "id" : 4,
    "name" : "Sammy",
    "breed" : "Poodle Mix",
    "location" : "New York City, NY",
    "price" : "$3,000",
    "imageURL" : "sammy.jpg",
    "status" : "Adoptable"
  },
  {
    "id" : 5,
    "name" : "Kerry",
    "breed" : "Golden Retriever",
    "location" : "Philadelphia, PA",
    "price" : "$2,500",
    "imageURL" : "kerry.jpg",
    "status" : "Adoptable"
  },
  {
    "id" : 6,
    "name" : "Roro",
    "breed" : "Pomeranian",
    "location" : "New York City, NY",
    "price" : "$3,000",
    "imageURL" : "roro.jpg",
    "status" : "Adoptable"
  },
  {
    "id" : 7,
    "name" : "Talia",
    "breed" : "Samoyed",
    "location" : "East Rutherford, NJ",
    "price" : "$2,500",
    "imageURL" : "talia.jpg",
    "status" : "Adoptable"
  },
  {
    "id" : 8,
    "name" : "Sunny",
    "breed" : "Golden Retriever",
    "location" : "Harrisburg, NJ",
    "price" : "$2,500",
    "imageURL" : "sunny.jpg",
    "status" : "Adopted"
  },
  {
    "id" : 9,
    "name" : "Saint",
    "breed" : "Poodle Mix",
    "location" : "York, PA",
    "price" : "$2,500",
    "imageURL" : "saint.jpg",
    "status" : "Adopted"
  },
];

// Initalize DOM specific global variables
window.addEventListener("DOMContentLoaded", function() {
  indexMainContent = document.getElementById("indexMainContent");

  for(var i = 0; i < jsonData.length; i++) {
    createElement(jsonData[i]);
  }
});

// Create and add new DOM element from JSON data input
function createElement(jsonInp) {
  let newContentElement = document.createElement("div");
  newContentElement.classList.add("indexContentElement");

  if(jsonInp["status"] == "Adoptable") {
    newContentElement.style.backgroundColor = "#6cd998";
  }
  else {
    newContentElement.style.backgroundColor = "#8a8a8a";
  }


  let newContentHeaderImage = document.createElement("img");
  newContentHeaderImage.classList.add("indexContentHeaderImage");
  newContentHeaderImage.src = jsonInp["imageURL"];
  newContentElement.appendChild(newContentHeaderImage);

  if(jsonInp["status"] == "Adopted") {
    newContentElement.style.filter = "grayscale(100%)";
  }

  let newContentPetName = document.createElement("h2");
  newContentPetName.innerText = jsonInp["name"];
  newContentPetName.classList.add("indexContentH2");
  newContentElement.appendChild(newContentPetName);

  let newContentPetBreed = document.createElement("p");
  newContentPetBreed.innerText = jsonInp["breed"];
  newContentPetBreed.classList.add("indexContentP");
  newContentElement.appendChild(newContentPetBreed);

  let newContentPetLocation = document.createElement("p");
  newContentPetLocation.innerText = jsonInp["location"];
  newContentPetLocation.classList.add("indexContentP");
  newContentElement.appendChild(newContentPetLocation);

  let newContentPetPrice = document.createElement("p");
  newContentPetPrice.innerText = jsonInp["price"];
  newContentPetPrice.classList.add("indexContentP");
  newContentElement.appendChild(newContentPetPrice);

  indexMainContent.appendChild(newContentElement);
}
