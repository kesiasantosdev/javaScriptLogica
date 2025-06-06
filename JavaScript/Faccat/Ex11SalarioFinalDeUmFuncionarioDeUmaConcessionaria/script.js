alert("Programa que calcula o salario final de um funcionario de uma concessionária");

let carrosVendidos = parseInt(prompt("Digite quantos carros foram vendidos:"));
let valorDaVenda = parseFloat(prompt("Digite quanto foi arrecadado na venda dos carros:"));
let salarioFixo = parseFloat(prompt("Digite seu salario fixo:"));
let comissao = parseFloat(prompt("Digite a sua comissão fixa:"));
let comissaoTotal = comissao * carrosVendidos;
let comissaoDoTotalDeVendas = valorDaVenda * (5 / 100);
let totalDeComissoes = comissaoTotal + comissaoDoTotalDeVendas;
let totalReceber = salarioFixo + totalDeComissoes;

alert("Seu salario final desse mês é de R$ " + totalReceber.toFixed(2));