// Define un objeto auto donde se especifiquen al menos 6 propiedades que lo conformen, si se les ocurren más propiedades del número solicitado colocarlas. Mostrar el resultado en un console log.
// Hacer un document.write para mostrar un mensaje dinámico en base a 2 propiedades que hayan elegido, ejemplo:
// document.write(`El auto objeto.propiedad1 es uno de los autos más potentes en el mercado alcanzando una velocidad de object.propiedad2 por hora!`)

let auto = {
    marca: "Toyota",
    modelo: "Corolla",
    año: 2021,
    color: "Blanco",
    motor: "2.0",
    precio: 30000
}

console.log(auto)
document.write(`El auto ${auto.marca} ${auto.modelo} es uno de los autos más potentes, tiene un motor de ${auto.motor}`)

console.log("Fin del Script")