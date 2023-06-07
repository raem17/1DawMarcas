const edad = 69;

function calcularMayorEdad (edad) {
  if (edad > 17) {
    console.log("Eres mayor de edad");
  } else {
    console.log("Eres menor de edad");
  }
}

calcularMayorEdad(edad);

function saludar() {
  console.log("antes del return");
  return "Hola";
  console.log("después del return");
}

console.log(saludar());