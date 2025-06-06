alert("Programa que mostra o reajuste salarial");

let salarioAtual = parseFloat(prompt("Digite seu salario atual:"));
let reajuste = parseFloat(prompt("Digite o percentual do reajuste:"));
let reajusteTotal = salarioAtual * (reajuste / 100);
let salarioReajustado = salarioAtual + reajusteTotal;

alert("Seu novo salario com reajuste é de R$ " + salarioReajustado.toFixed(2));