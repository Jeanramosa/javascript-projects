// Dado un array de números [10, 20, 30, 40, 50, 60, 63, 79, 81, 95], crea un programa que calcule e imprima el promedio de los números en el array.

let numeros = [10, 20, 30, 40, 50, 60, 63, 79, 81, 95];
let suma = 0;

for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
}

let promedio = suma / numeros.length;
console.log(numeros);
console.log("El promedio es:", promedio);