// Solicita al usuario dos números y una operación (+, -, *, /) usando prompt. Muestra el resultado de la operación en un alert.

let num1 = prompt("Introduce un número entero")

let num2 = prompt("Introduce otro número entero")

num1 = parseInt(num1)
num2 = parseInt(num2)

let operador = prompt("Introduce una operación (+, -, *, /)")

if (operador === "+") {
    alert(`El resultado de la suma de ${num1} y ${num2} es ${num1 + num2}`)
} else if (operador === "-") {
    alert(`El resultado de la resta de ${num1} y ${num2} es ${num1 - num2}`)
} else if (operador === "*") {
    alert(`El resultado de la multiplicación de ${num1} y ${num2} es ${num1 * num2}`)
} else if (operador === "/") {
    alert(`El resultado de la división de ${num1} y ${num2} es ${num1 / num2}`)
}
