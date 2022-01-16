// Write your code here!
const main = document.getElementById("main");
main.remove();

const newHeader = document.createElement("h1");
//newHeader.setAttribute("id", "victory");
//or
newHeader.id = 'victory';
newHeader.textContent = "Olga is the champion";
//or
//newHeader.append('Olga is the champion');
const parent = document.querySelector('body');
parent.appendChild(newHeader);