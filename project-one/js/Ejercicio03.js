// Pide al usuario un número y muestra en un alert si el número es par o impar.

let numero = prompt("Introdue un número entero")

numero = parseInt(numero)

if (numero % 2 === 0)  {
    alert(`El número ${numero} es par`)
} else {
    alert(`El número ${numero} es impar`)
}

console.log("Fin del Script")
