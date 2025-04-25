//Dado un array de palabras, crea un programa que devuelva un nuevo array con palabras que tengan más de 5 letras. Por ejemplo: ["casa", "programación", "sol", "javascript", “texto”, “html”, “bootstrap”, “css”, “nodejs”, “reactjs”, “for”] ;

let palabras = ["casa", "programación", "sol", "javascript", "texto", "html", "bootstrap", "css", "nodejs", "reactjs", "for"];

let palabrasLargas = [];

for (let i = 0; i < palabras.length; i++) {
    if (palabras[i].length > 5) {
        palabrasLargas.push(palabras[i]);
    }
}
console.log(palabras)
console.log("Palabras con más de 5 letras:", palabrasLargas);