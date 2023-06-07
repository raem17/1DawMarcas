var h1 = document.querySelector("h1");

h1.style.color = "blue";
h1.style.backgroundColor= "red";

console.log(h1.style.cssText);

h1.style.cssText = "background-color:orange;padding:2rem;";

// forma óptima
// vemos que clases tiene asignado el elemento
console.log(h1.className);

// sustituir clases
h1.className = "ruby";
console.log(h1.className);

//
h1.classList.add("bigger");
console.log(h1.className);

// lo que más se utiliza es toggle, permite añadir o quitar una clase
h1.classList.toggle("bigger"); // como la tiene, la quita
console.log(h1.className);

h1.classList.toggle("bigger"); // como no la tiene, la pone
console.log(h1.className);