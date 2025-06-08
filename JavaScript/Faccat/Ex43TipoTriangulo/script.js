alert("Programa que identifica o tipo de triângulo com base nos lados informados.");

let a = parseFloat(prompt("Digite o valor do lado A:"));
let b = parseFloat(prompt("Digite o valor do lado B:"));
let c = parseFloat(prompt("Digite o valor do lado C:"));
let mens;

if (a < b + c && b < a + c && c < a + b) {
    if (a == b && b == c) {
        mens = "Triângulo Equilátero";
    } else if (a == b || b == c || a == c) {
        mens = "Triângulo Isósceles";
    } else {
        mens = "Triângulo Escaleno";
    }
} else {
    mens = "Não é possível formar um triângulo";
}

alert("Resultado: " + mens);

