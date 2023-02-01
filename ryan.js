const names = ["John", "Jane", "Michael", "Emily", "Daniel", "Natalie", "Matthew", "Olivia", "William", "Ava"];
const generateButton = document.querySelector("#generate-button");
const name1 = document.querySelector("#name1");
const name2 = document.querySelector("#name2");
const name3 = document.querySelector("#name3");

generateButton.addEventListener("click", function() {
  let randomIndex1 = Math.floor(Math.random() * names.length);
  let randomIndex2 = Math.floor(Math.random() * names.length);
  let randomIndex3 = Math.floor(Math.random() * names.length);
  
  while (randomIndex1 === randomIndex2) {
    randomIndex2 = Math.floor(Math.random() * names.length);
  }
  
  while (randomIndex1 === randomIndex3 || randomIndex2 === randomIndex3) {
    randomIndex3 = Math.floor(Math.random() * names.length);
  }
  
  name1.textContent = names[randomIndex1];
  name2.textContent = names[randomIndex2];
  name3.textContent = names[randomIndex3];
});
