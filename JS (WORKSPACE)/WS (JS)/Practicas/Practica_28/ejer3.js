var nombres = ["Pepe", "maría", "koala", "Mario", "Marion", "peach"];

function mostrarLikes (nombres) {
    var num = nombres.length;
    if (num == 0) {
        console.log("Nadie ha dado like.");
    } else if (num == 1) {
        console.log(nombres[0] + " ha dado like.");
    } else if (num == 2) {
        console.log(nombres[0] + " y " + nombres[1] + " han dado like.");
    } else if (num == 3) {
        console.log(nombres[0] + ", " + nombres[1] + " y " + nombres[2] + " han dado like.");
    }  else if (num > 3) {
        console.log(nombres[0] + ", " + nombres[1] + " y " + (nombres.length-2) + " personas más han dado like.");
    }
}

mostrarLikes(nombres);