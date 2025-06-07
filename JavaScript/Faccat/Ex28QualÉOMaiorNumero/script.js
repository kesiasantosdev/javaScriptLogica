alert("Programa que calcula três números e exibe qual é o maior");

let numero01 = parseFloat(prompt("Digite o primeiro número:"));
let numero02 = parseFloat(prompt("Digite o segundo número:"));
let numero03 = parseFloat(prompt("Digite o terceiro número:"));
let maior;

if (numero01 > numero02 && numero01 > numero03) {
   maior = numero01;
} else if (numero02 > numero03) {
   maior = numero02;
} else {
   maior = numero03;
}

alert("O número " + maior + " é o maior");