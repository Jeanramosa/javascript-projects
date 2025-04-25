// Dado un array de números [15, 42, 3, 18, 90, 67, 29], escribe un programa que encuentre e imprima el segundo número más grande del array.

let numeros = [15, 42, 3, 18, 90, 67, 29];

let mayor = -Infinity;
let segundoMayor = -Infinity;

for (let i = 0; i < numeros.length; i++) {
    let actual = numeros[i];
    
    if (actual > mayor) {
        segundoMayor = mayor;
        mayor = actual;
    } else if (actual > segundoMayor && actual !== mayor) {
        segundoMayor = actual;
    }
}

console.log(numeros)
console.log("El segundo número más grande es:", segundoMayor);
