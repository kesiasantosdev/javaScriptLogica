alert("Programa que calcula a média de aproveitamento.")

let N1 = parseFloat(prompt("Digite a nota da 1ª verificação (N1):"));
let N2 = parseFloat(prompt("Digite a nota da 2ª verificação (N2):"));
let N3 = parseFloat(prompt("Digite a nota da 3ª verificação (N3):"));
let mediaExercicio = parseFloat(prompt("Digite a média dos exercícios:"));
let mediaAproveitamento = (N1 + N2 * 2 + N3 * 3 + mediaExercicio) / 7;
let conceito;

if (mediaAproveitamento >= 10.0) {
   conceito = "A+";
} else if (mediaAproveitamento >= 9.0) {
   conceito = "A";
} else if (mediaAproveitamento >= 7.5) {
   conceito = "B";
} else if (mediaAproveitamento >= 6.0) {
   conceito = "C";
} else if (mediaAproveitamento >= 5.0) {
   conceito = "D";
} else if (mediaAproveitamento >= 4.0) {
   conceito = "E";
} else {
   conceito = "F";
}

alert("Média de aproveitamento: " + mediaAproveitamento.toFixed(2) +
   "\nConceito: " + conceito);
