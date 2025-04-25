// Solicita al usuario un número entero y calcula la multiplicación de todos los números desde 1 hasta ese número. Se debe imprimir por consola.

let numero = parseInt(prompt("Introduce un número entero positivo:"));
let resultado = 1;

if (numero > 0) {
    for (let i = 1; i <= numero; i++) {
        resultado *= i;
    }
    console.log(`El resultado de la multiplicación de 1 hasta ${numero} es: ${resultado}`);
} else {
    console.log("Por favor, introduce un número entero positivo mayor que 0.");
}