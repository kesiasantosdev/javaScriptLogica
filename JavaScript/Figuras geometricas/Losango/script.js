alert("Programa que calcula a área do losango");

let diagonalMaior = parseFloat(prompt("Digite o valor da diagonal maior:"));
let diagonalMenor = parseFloat(prompt("Digite o valor da diagonal menor:"));
let area = (diagonalMaior * diagonalMenor)/2;

alert("O valor da área do losango é " + area.toFixed(2) + " cm²");

