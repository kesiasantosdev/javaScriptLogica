alert("Programa para calcular a área do Circulo");

let raio = parseFloat(prompt("Digite o valor do raio:"));
let area = Math.PI * Math.pow(raio, 2);

alert("O valor da área é " + area.toFixed(2) + " cm²");