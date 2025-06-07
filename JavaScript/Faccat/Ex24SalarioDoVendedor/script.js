alert("Programa que calcula o salário fixo mais a comissão e exibe o valor total.");

let salarioFixo = parseFloat(prompt("Digite o seu salário fixo do mês:"));
let valorDasVendas = parseFloat(prompt("Digite o valor total das vendas efetuadas:"));
let comissao;

if (valorDasVendas < 1501) {
    comissao = valorDasVendas * 0.03;
} else {
    comissao = valorDasVendas * 0.05;
}

let salarioFinal = salarioFixo + comissao;

alert("O seu salário será de: R$ " + salarioFinal.toFixed(2));
