// Dado un array con elementos repetidos [1, 2, 3, 1, 4, 5, 2, 6, 5, 1, 2, 4, 2, 1,5, 8, 7, 4], crea un programa que devuelva un nuevo array sin duplicados.

let arrayOriginal = [1, 2, 3, 1, 4, 5, 2, 6, 5, 1, 2, 4, 2, 1, 5, 8, 7, 4];
let arraySinDuplicados = [];

for (let i = 0; i < arrayOriginal.length; i++) {
    if (!arraySinDuplicados.includes(arrayOriginal[i])) {
        arraySinDuplicados.push(arrayOriginal[i]);
    }
}

console.log(arrayOriginal);
console.log("Array sin duplicados:", arraySinDuplicados);
