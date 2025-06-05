alert("Programa que calcula a área de um Trapézio");

let baseMaior = parseFloat(prompt("Digite o valor da base maior:"));
let baseMenor = parseFloat(prompt("Digite o valor da base menor:"));
let altura = parseFloat(prompt("Digite o valor da altura:"));
let area = ((baseMaior+baseMenor)*altura)/2;

alert("O valor da área do trapézio é " + area.toFixed(2) + " cm²");
