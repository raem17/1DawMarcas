const colors = ["red", "green", "blue", "yellow", "pink", "purple", "orange"];
const container = document.querySelector("div.app");

var p = document.createElement("p");
p.textContent = "Soy un cuadrado en el centro.";

var divSquare = document.createElement("div");
divSquare.append(p);

divSquare.style.cssText = "width: 100px; height: 100px; color: white; text-align: center; display: flex; align-items: center; justify-content: center;";
divSquare.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

container.append(divSquare);

if (divSquare.style.backgroundColor === "red" || divSquare.style.backgroundColor === "green" || divSquare.style.backgroundColor === "blue") {
    divSquare.style.width = "100px";
    divSquare.style.height = "100px";
} else if (divSquare.style.backgroundColor === "yellow" || divSquare.style.backgroundColor === "pink" || divSquare.style.backgroundColor === "purple") {
    divSquare.style.width = "200px";
    divSquare.style.height = "200px";
} else if (divSquare.style.backgroundColor === "orange") {
    divSquare.style.width = "300px";
    divSquare.style.height = "300px";
}