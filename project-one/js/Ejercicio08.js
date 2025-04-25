// Calcular el IVA de un producto
// Solicita al usuario el precio de un producto en dolares y su precio final a pesos (1dolar = $1130), además tenemos que sumarle el IVA (21%). Muestra el precio total en un alert.

let precioDol = prompt("Introduce el precio de un producto en dólares")

precioDol = parseFloat(precioDol)

precioPeso = precioDol * 1139

precioIVA = precioPeso * 1.21

alert(`Este producto cuesta  ${precioDol} dólares, que son ${precioPeso} pesos, más el IVA del 21% sería un total de ${precioIVA.toFixed(2)} pesos`)

console.log("Fin del Script")
