alert("Programa que calcula qual o número é maior ou se são iguais e exibe uma mensagem.");

let numero01 = parseFloat(prompt("Digite o primeiro número:"));
let numero02 = parseFloat(prompt("Digite o segundo número:"));

if (numero01 > numero02) {
    alert("O primeiro número que você digitou é o maior.");
} else if (numero02 > numero01) {
    alert("O segundo número que você digitou é o maior.");
} else {
    alert("Os dois números são iguais.");
}