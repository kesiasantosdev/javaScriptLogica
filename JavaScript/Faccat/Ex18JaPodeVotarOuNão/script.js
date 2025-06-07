alert("Programa que calcula e exibe se você já pode votar.");

let ano = parseInt(prompt("Digite o ano atual:"));
let anoNascimento = parseInt(prompt("Digite o ano em que você nasceu:"));
let idade = ano - anoNascimento;

if (idade >= 16) {
    alert("Você já pode votar!");
} else {
    alert("Você ainda não pode votar.");
}