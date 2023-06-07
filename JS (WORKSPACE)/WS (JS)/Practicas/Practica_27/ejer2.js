var num1 = prompt("Introduce un 1er número") / 1;
var num2 = prompt("Introduce un 2º número") / 1;
var num3 = prompt("Introduce un 3er número") / 1;
var max = num1 - 1;

var numeros = [num1, num2, num3];

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > max) {
        max = numeros[i];
    }
}

alert("El número más grande es: " + max);