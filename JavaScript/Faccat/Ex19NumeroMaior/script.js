alert("Programa que compara 2 números e exibe qual é o maior.");
alert("Digite números diferentes!!");

let numero01 = parseFloat(prompt("Digite o primeiro número:"));
let numero02 = parseFloat(prompt("Digite o segundo número:"));

if (numero01 > numero02) {
    alert("O primeiro número é o maior: " + numero01);
    alert("O segundo número é o menor: " + numero02);
} else{
    alert("O segundo número é o maior: " + numero02);
    alert("O primeiro número é o menor");
}