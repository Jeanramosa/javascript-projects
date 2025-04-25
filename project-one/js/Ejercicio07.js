// Pide al usuario un número de minutos. Convierte ese valor a segundos y también a horas. Muestra el resultado en un alert.

let minutos = prompt("Introduce un número de minutos")

minutos = parseInt(minutos)

let segundos = minutos * 60

let horas = minutos / 60

alert(`El número de minutos ${minutos} es igual a ${segundos} segundos y a ${horas} horas`)

console.log("Fin del Script")