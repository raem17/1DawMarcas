var container = document.querySelector("div.color-container");
var h2 = document.querySelector("h2.color-code");
var btn = document.querySelector(".btn");

btn.addEventListener("click", cambiarColor);

function cambiarColor() {
    var bgColor = "#" + Math.floor(Math.random() * 16777215).toString(16).toUpperCase();
    
    h2.textContent = bgColor;
    container.style.backgroundColor = bgColor;

}
