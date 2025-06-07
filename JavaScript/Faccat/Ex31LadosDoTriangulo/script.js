alert("Programa que calcula três medidas dos lados de um triângulo e exibe se formam ou não um triângulo.");

let A = parseFloat(prompt("Digite o primeiro lado do triângulo:"));
let B = parseFloat(prompt("Digite o segundo lado do triângulo:"));
let C = parseFloat(prompt("Digite o terceiro lado do triângulo:"));

if (A < B + C && B < A + C && C < A + B) {
    alert("Os valores informados formam um triângulo!");
} else {
    alert("Os valores informados não formam um triângulo!");
}
