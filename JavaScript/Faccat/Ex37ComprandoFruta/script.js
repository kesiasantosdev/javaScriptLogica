alert("Programa que calcula o preço das frutas.");

let morango = parseFloat(prompt("Digite quantos quilos de morango deseja comprar:"));
let maca = parseFloat(prompt("Digite quantos quilos de maçã deseja comprar:"));
let valorMorango;
let valorMaca;
let custoFinalComDesconto;

if (morango > 5) {
    valorMorango = morango * 2.20;
} else {
    valorMorango = morango * 2.50;
}

if (maca > 5) {
    valorMaca = maca * 1.50;
} else {
    valorMaca = maca * 1.80;
}

let quantidadeTotal = morango + maca;
let custoFinal = valorMorango + valorMaca;

if (quantidadeTotal > 8 || custoFinal > 25) {
    custoFinalComDesconto = custoFinal - (custoFinal * 0.10);
    alert("O valor final da compra com o desconto é de: R$ " + custoFinalComDesconto.toFixed(2));
} else {
    alert("O valor final da compra é de: R$ " + custoFinal.toFixed(2));
}
