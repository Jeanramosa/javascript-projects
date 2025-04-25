// Solicita al usuario el radio de un círculo y calcula el perímetro usando la fórmula P=2πr. Muestra el resultado en la consola.

let radio  = prompt("Introduce el radio de un círculo")

radio = parseFloat(radio)

let perimetro = 2 * Math.PI * radio

console.log(`El resultado del perímetro es ${perimetro.toFixed(2)}`)

console.log("Fin del Script")