alert("Programa que calcula e exibe a quantidade de estoque e se pode efetuar a compra ou não");

let estoqueAtual = parseFloat(prompt("Digite a quantidade atual no estoque:"));
let quantidadeMaxima = parseFloat(prompt("Digite a quantidade máxima no estoque:"));
let quantidadeMinima = parseFloat(prompt("Digite a quantidade mínima no estoque:"));

let quantidadeMedia = (quantidadeMaxima + quantidadeMinima) / 2;

if (estoqueAtual >= quantidadeMedia) {
    alert("Não efetuar compra");
} else {
    alert("Efetuar compra");
}