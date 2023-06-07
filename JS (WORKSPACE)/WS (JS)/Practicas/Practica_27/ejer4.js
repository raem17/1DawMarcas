var pin = 6745;

for (let i = 0; i < 3; i++) {
    var num = prompt("Introduce el pin de cuatro dígitos.") / 1;

    if (num == pin) {
        alert("¡Eso fue correcto!");
        break;

    } else {
        alert("Lo siento, eso estaba mal.");
    }
  
}