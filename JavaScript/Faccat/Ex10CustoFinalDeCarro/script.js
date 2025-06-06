alert("Programa que mostra o custo de um carro novo");

let custoDeFabrica = parseFloat(prompt("Digite o custo de fábrica do carro:"));
let distribuidor = custoDeFabrica * (28 / 100);
let imposto = custoDeFabrica * (45 / 100);
let totalDoCusto = custoDeFabrica + distribuidor + imposto;

alert("O custo total do carro é R$ " + totalDoCusto.toFixed(2));