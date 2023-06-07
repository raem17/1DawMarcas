var body = document.querySelector("body");
var select = document.querySelector("#select");
var p = document.createElement("p");

select.addEventListener("change", mostrarLenguaje);

function mostrarLenguaje() {
    p.textContent = "El lenguaje elegido es: " + select.value;
}

body.append(p);