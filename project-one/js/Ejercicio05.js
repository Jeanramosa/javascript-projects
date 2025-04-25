// Pide al usuario tres números, calcula el promedio y muestra el resultado en la consola.

let num1 = prompt("Introduce el primer número")
let num2 = prompt("Introduce el segundo número")
let num3 = prompt ("Introduce el tercer número")

num1 = parseFloat(num1)
num2 = parseFloat(num2)
num3 = parseFloat(num3)

promedio = (num1 + num2 + num3) / 3

console.log(`El promedio de los números ${num1}, ${num2} y ${num3} es ${promedio.toFixed(2)}`)

console.log("Fin del Script")

