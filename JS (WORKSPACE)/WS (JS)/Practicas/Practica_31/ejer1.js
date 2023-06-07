const board = document.querySelector(".board");
const ciudades = ["Cuenca", "Granada", "Soria", "Madrid", "Teruel"];

const ulContainer = document.createElement("ul");

ciudades.forEach((city) => {
    var liElement = document.createElement("li");
    liElement.textContent = city;

    if (liElement.textContent === "Madrid") {
        liElement.classList.add("mad");
    }

    if (liElement.textContent === "Granada") {
        liElement.title = "Tierra Soñada";
    }

    ulContainer.append(liElement);
});

board.append(ulContainer);