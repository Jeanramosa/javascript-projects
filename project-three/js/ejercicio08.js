// Dado un array de números [5, -1, -7, 10, 3, -2, 8, -9, 4, -4, 7, 1, 6], escribe un programa que cree un nuevo array solo con los números positivos y lo imprima.

let numeros = [5, -1, -7, 10, 3, -2, 8, -9, 4, -4, 7, 1, 6];
let positivos = [];

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > 0) {
        positivos.push(numeros[i]);
    }
}
console.log(numeros);
console.log("Números positivos:", positivos);
