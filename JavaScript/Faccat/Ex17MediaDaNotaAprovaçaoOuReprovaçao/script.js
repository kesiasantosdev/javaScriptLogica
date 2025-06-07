alert("Programa que soma duas avaliações e calcula a média do aluno.");

let avaliacao01 = parseFloat(prompt("Digite a nota da primeira avaliação:"));
let avaliacao02 = parseFloat(prompt("Digite a nota da segunda avaliação:"));

let media = (avaliacao01 + avaliacao02) / 2

if (media >= 6) {
    alert("O aluno(a) foi aprovado!");
} else {
    alert("O aluno(a) foi reprovado!");
}
