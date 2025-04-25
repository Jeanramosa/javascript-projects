// Crea un programa que solicite la fecha de nacimiento del usuario (en formato YYYY-MM-DD) y calcule su edad en días.

let fechaNacimiento = prompt("Introduce tu fecha de nacimiento (formato YYYY-MM-DD):");

if (fechaNacimiento) {
    let nacimiento = new Date(fechaNacimiento);
    let hoy = new Date();
    
    let diferenciaEnMilisegundos = hoy - nacimiento;
    let edadEnDias = Math.floor(diferenciaEnMilisegundos / (1000 * 60 * 60 * 24));
    
    console.log("Tu edad en días es:", edadEnDias);
} else {
    console.log("No introdujiste una fecha válida.");
}