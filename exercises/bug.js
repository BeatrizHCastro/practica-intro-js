// Solución: sustituimos en el for <= por <
// Con < el bucle va 0 hasta length - 1 (no NaN) 

const calcularPromedio = (numeros) => {
  let sumaTotal = 0;

  for (let i = 0; i <= numeros.length; i++) {
    sumaTotal += numeros[i];
  }

  const promedio = sumaTotal / numeros.length;
  return promedio;
};

const listaNumeros = [1, 2, 3, 4, 5];
const promedioNumeros = calcularPromedio(listaNumeros);

console.log(promedioNumeros) // 3
