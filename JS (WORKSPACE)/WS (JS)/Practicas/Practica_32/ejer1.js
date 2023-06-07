var formulario = document.querySelector ("#form");
var input = document.querySelector("#input");
var parrafo = document.querySelector("#parrafo");

formulario.addEventListener("submit", cambiarP);

function cambiarP(event) {
    event.preventDefault();
    parrafo.textContent = input.value;

    if (input.value.length < 5) {
        parrafo.classList.add("red");

    } else {
        parrafo.classList.remove("red");
    }

    formulario.reset();
}