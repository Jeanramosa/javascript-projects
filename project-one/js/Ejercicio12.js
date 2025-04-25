// Películas o series para ver
// Define un array miListaDePendientes con títulos de cuatro películas o series que quieres ver.
// Pide al usuario que ingrese una nueva película y usa el método push para agregar una quitan película.
// Modifica el nombre de la 2da película del array por una nueva.
// Muestra el array actualizado por consola.

let miListaDePendientes = ["Dan Dan Dan", "La Casa de Papel", "Capitán América", "Sherk"]

let nuevaPelicula = prompt("Introduce una nueva película o serie que quieras ver")

miListaDePendientes.push(nuevaPelicula)

miListaDePendientes[1] = "El Señor de los Anillos"

console.log(miListaDePendientes)