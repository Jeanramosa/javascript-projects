//Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (hay que decir todos por los que es divisible)

let numero = parseInt(prompt("Introduce un número:"));
let divisores = [];

if (numero % 2 === 0) {
    divisores.push(2);
}
if (numero % 3 === 0) {
    divisores.push(3);
}
if (numero % 5 === 0) {
    divisores.push(5);
}
if (numero % 7 === 0) {
    divisores.push(7);
}

if (divisores.length > 0) {
    console.log(`El número ${numero} es divisible por: ${divisores.join(", ")}`);
} else {
    console.log(`El número ${numero} no es divisible por 2, 3, 5 ni 7.`);
}
