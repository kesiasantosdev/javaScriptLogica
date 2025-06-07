alert("Programa que calcula três valores e exibe os números em ordem crescente.");

let numero01 = parseFloat(prompt("Digite o primeiro número"));
let numero02 = parseFloat(prompt("Digite o segundo número:"));
let numero03 = parseFloat(prompt("Digite o terceiro número"));
let temporario;

if (numero01 > numero02) {
    temporario = numero01;
    numero01 = numero02;
    numero02 = temporario;
} if (numero01 > numero03) {
    temporario = numero01;
    numero01 = numero03;
    numero03 = temporario;
} if (numero02 > numero03) {
    temporario = numero02;
    numero02 = numero03;
    numero03 = temporario;
}

alert("Valores em ordem crescente: " + numero01 + ", " + numero02 + ", " + numero03);