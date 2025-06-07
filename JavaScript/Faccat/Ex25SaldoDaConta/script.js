alert("Programa que calcula e exibe se sua conta está positiva ou negativa.");

let numeroDaConta = prompt("Digite o número da sua conta:");
let saldoAtual = parseFloat(prompt("Digite o saldo atual da conta:"));
let debito = parseFloat(prompt("Digite o débito que você tem a pagar:"));
let credito = parseFloat(prompt("Digite o crédito que você tem a receber:"));

let saldoAtualDaConta = saldoAtual - debito + credito;

if (saldoAtualDaConta >= 0) {
    alert("Saldo Positivo. Saldo final: R$ " + saldoAtualDaConta.toFixed(2));
} else {
    alert("Saldo Negativo. Saldo final: R$ " + saldoAtualDaConta.toFixed(2));
}
