// Pide al usuario una frase y cuenta cuántas palabras tiene.

let frase = prompt("Introduce una frase:");
let palabras = frase.trim().split(/\s+/);

console.log(`La frase tiene ${palabras.length} palabra(s).`);
