alert("Programa que calcula o desconto do preço da maçã.");

let quantidadeDeMaca = parseInt(prompt("Digite quantas maçãs você deseja comprar:"));

let valor;

if (quantidadeDeMaca >= 12) {
    valor = quantidadeDeMaca * 1.00;
} else {
    valor = quantidadeDeMaca * 1.30;
}

alert("O valor a pagar é de R$ " + valor.toFixed(2));
