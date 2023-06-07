var ciudades = [];
var num = parseInt(prompt("¿Cuántas ciudades quieres añadir?"));

for (let i = 0; i < num; i++) {
    ciudades.push(prompt("Introduce una ciudad:"));
}

var ciudadesStr = "";
for (let i = 0; i < ciudades.length; i++) {
    if (i != ciudades.length-1) {
        ciudadesStr += ciudades[i] + "\n";
    } else {
        ciudadesStr += ciudades[i];
    }
}

alert(ciudadesStr);