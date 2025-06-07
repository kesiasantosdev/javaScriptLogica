alert("Programa que calcula e exibe qual time venceu ou se houve empate.");

let nomeDoTime01 = prompt("Digite o nome do primeiro time:");
let gol01 = parseInt(prompt("Digite quantos gols o time " + nomeDoTime01 + " marcou"));
let nomeDoTime02 = prompt("Digite o nome do segundo time:");
let gol02 = parseInt(prompt("Digite quantos gols o time " + nomeDoTime02 + " marcou"));

if (gol01 > gol02) {
    alert("O time " + nomeDoTime01 + " venceu.");
} else if (gol02 > gol01) {
    alert("O time " + nomeDoTime02 + " venceu.");
} else {
    alert("Foi empate!");
}