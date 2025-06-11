let soma = 0;
let contador = 0;
let nota;

alert("Digite notas de 0 a 10.\nAo digitar um valor inválido, o programa será encerrado e mostrará a média.");

do {
  nota = parseFloat(prompt("Digite uma nota:"));

  if (nota >= 0 && nota <= 10) {
    soma += nota;
    contador += 1;
  }

} while (nota >= 0 && nota <= 10);

if (contador > 0) {
  let media = soma / contador;
  alert("Média das notas: " + media.toFixed(2));
} else {
  alert("Nenhuma nota válida foi inserida.");
}
