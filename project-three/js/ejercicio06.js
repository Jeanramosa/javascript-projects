// Escribe un programa que solicite al usuario un número que represente grados Celsius y conviértelo a Fahrenheit utilizando la fórmula: F = (C × 9/5) + 32.

let celsius = parseFloat(prompt("Introduce la temperatura en grados Celsius:"));

let fahrenheit = (celsius * 9/5) + 32;

console.log(`${celsius}°C equivale a ${fahrenheit}°F`);
