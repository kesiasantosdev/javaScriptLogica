alert("Programa que calcula os gastos no posto de gasolina.");
alert("Digite se abastecerá com álcool ou gasolina.\nDigite (A) para álcool e (G) para gasolina.");

let combustivel = prompt("Digite A para álcool ou G para gasolina:").toUpperCase();
let litros = parseFloat(prompt("Digite quantos litros você está abastecendo seu carro:"));
let valor;
let desconto;
let valorFinal;

if (combustivel === "G") {
    if (litros < 21) {
        valor = litros * 3.30;
        desconto = valor * 0.03;
    } else {
        valor = litros * 3.30;
        desconto = valor * 0.05;
    }

    valorFinal = valor - desconto;

    alert("Você gastará R$ " + valorFinal.toFixed(2) + " para colocar " + litros + " litros de gasolina.");

} else if (combustivel === "A") {
    if (litros < 21) {
        valor = litros * 2.90;
        desconto = valor * 0.04;
    } else {
        valor = litros * 2.90;
        desconto = valor * 0.06;
    }

    valorFinal = valor - desconto;

    alert("Você gastará R$ " + valorFinal.toFixed(2) + " para colocar " + litros + " litros de álcool.");

} else {
    alert("Opção inválida! Digite 'A' para álcool ou 'G' para gasolina.");
}
