alert("Programa que compara dois valores e exibe de forma crescente.");
alert("Digite números diferentes!!!");

let numero01 = parseFloat(prompt("Digite o primeiro número:"));
let numero02 = parseFloat(prompt("Digite o segundo número:"));

if (numero01 > numero02) {
    alert(numero02 + " - " + numero01);
} else {
    alert(numero01 + " - " + numero02);
}