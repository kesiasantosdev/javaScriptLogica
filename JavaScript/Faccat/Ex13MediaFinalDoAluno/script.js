alert("Programa que calcula a média final do aluno com 3 pesos.");

let nota01 = parseFloat(prompt("Digite a primeira nota:"));
let nota02 = parseFloat(prompt("Digite a segunda nota:"));
let nota03 = parseFloat(prompt("Digite a terceira nota:"));
let mediaFinal = ((nota01 * 2) + (nota02 * 3) + (nota03 * 5)) / 10;

alert("A média final do aluno é: " + mediaFinal.toFixed(2));