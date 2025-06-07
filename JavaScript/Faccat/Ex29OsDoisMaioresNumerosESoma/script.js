alert("Programa que calcula três números e soma os dois maiores entre eles");

let numero01 = parseFloat(prompt("Digite o primeiro número:"));
let numero02 = parseFloat(prompt("Digite o segundo número:"));
let numero03 = parseFloat(prompt("Digite o terceiro número:"));
let soma;
let maior;
let maior01;

if (numero01 < numero02 && numero01 < numero03) {
    soma = numero02 + numero03;
    maior = numero02;
    maior01 = numero03;
} else if (numero02 < numero01 && numero02 < numero03) {
    soma = numero01 + numero03;
    maior = numero01;
    maior01 = numero03;
} else {
    soma = numero01 + numero02;
    maior = numero01;
    maior01 = numero02;
}

alert("Os números " + maior + " + " + maior01 + " = " + soma);