// Calcular el área de un rectángulo: Pide al usuario la base y la altura de un rectángulo, y muestra el área en la consola.

let base = prompt("Introduce la base del rectángulo")

base = parseInt(base)

let altura = prompt("Introduce la altura del rectángulo")

altura = parseInt(altura)

let area =  base * altura

console.log(`El área del rectángulo es ${area}, según la base ${base} y la altura ${altura}`)

console.log("Fin del Script")