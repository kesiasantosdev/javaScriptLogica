alert("Programa que calcula as idades dos mais velhos e mais novos.")

let idade1Homem = parseInt(prompt("Digite a idade do primeiro homem:"));
let idade2Homem = parseInt(prompt("Digite a idade do segundo homem:"));
let idade1Mulher = parseInt(prompt("Digite a idade da primeira mulher:"));
let idade2Mulher = parseInt(prompt("Digite a idade da segunda mulher:"));
let maiorHomem;
let menorHomem;
let maiorMulher;
let menorMulher;

if (idade1Homem > idade2Homem) {
    maiorHomem = idade1Homem;
    menorHomem = idade2Homem;
} else {
    maiorHomem = idade2Homem;
    menorHomem = idade1Homem;
} if (idade1Mulher > idade2Mulher) {
    maiorMulher = idade1Mulher;
    menorMulher = idade2Mulher;
} else {
    maiorMulher = idade2Mulher;
    menorMulher = idade1Mulher;
}

let somaIdade1 = maiorHomem + menorMulher;
let somaIdade2 = maiorMulher + menorHomem;

alert(
  "A soma das idades do homem mais velho e da mulher mais nova é: " + somaIdade1 +
  "\nA soma das idades do homem mais novo e da mulher mais velha é: " + somaIdade2
);