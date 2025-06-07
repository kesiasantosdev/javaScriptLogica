alert("Programa que calcula a duração de uma partida de xadrez.");

let inicioDaPartida = parseFloat(prompt("Digite a hora que a partida iniciou (0 a 23):"));
let fimDaPartida = parseFloat(prompt("Digite a hora que a partida terminou (0 a 23):"));
let duracao;

if (fimDaPartida >= inicioDaPartida) {
    duracao = fimDaPartida - inicioDaPartida;
} else {
    duracao = (24 - inicioDaPartida) + fimDaPartida;
}

alert("O jogo durou " + duracao + " horas");