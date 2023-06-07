var cars = ["Ford", "Ferrari"]

// function forEach para recorrer array

function mostrarElementos (item, index) {
    console.log("Nombre: " + item + ". Posición: " + index)
}

// cars.forEach(mostrarElementos)

// añadir elementos
cars.push("Skoda")

// eliminar elementos con splice se le pasa la posición en la que comienza y el nº de elemento a eliminar
cars.splice(0, 2)
cars.forEach(mostrarElementos)