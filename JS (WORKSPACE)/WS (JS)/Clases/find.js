// devuelve el primer valor que encuentre cumpliendo la condición
const numeros = [1, 2, 3, 4, 5, 6]

const encontrarElementos = numeros.find(function (numeros) {
  return numeros > 3
})

console.log(encontrarElementos);