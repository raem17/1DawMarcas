const board = document.querySelector(".board");

// con createElement creo elementos HTML
const container = document.createElement("div");
// const item1 = document.createElement("p");
// const item2 = document.createElement("p");

// item1.textContent = "Item 1 Cómo están";
// item1.textContent = "Item 2 los máquinas primero";

// container.append(item1, item2);
// board.append(container);

const items = ["item1", "item2"];

items.forEach((item) => {
    const pElement = document.createElement("p");
    pElement.textContent = item;
    container.append(pElement);
});

board.append(container);