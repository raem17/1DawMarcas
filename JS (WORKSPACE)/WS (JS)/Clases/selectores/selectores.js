/* eslint-disable semi */
const antesScript = document.getElementById("antesScript");
console.log(antesScript);


const listItems = document.querySelectorAll(".listItem");
console.log(listItems);
/*
for (let i = 0; i < listItems.length; i++) {
    console.log(listItems[i].textContent);
    
}
*/
// recorremos con forEach
listItems.forEach((items => console.log(items.textContent)));

//
const listItemFirst = document.querySelector(".first");
console.log(listItemFirst);

//
const ul = document.querySelector("ul");
console.log(ul);

const primerElemento = ul.querySelector(".first");
console.log(primerElemento);

//
const nameFisrt = document.getElementById("despuesScript");
console.log(nameFisrt);

//
const parrafos = document.getElementsByTagName("p");
console.log(parrafos);

//
