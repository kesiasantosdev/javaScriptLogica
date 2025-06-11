let numeroSecreto = Math.floor(Math.random() * 10) + 1;
let contador = 0;
let tentativa;

alert("Tente adivinhar o número que estou pensando (entre 1 e 10)!");

do {
  tentativa = parseInt(prompt("Digite sua tentativa:"));
  contador++;

  if (tentativa < numeroSecreto) {
    alert("O número é MAIOR que " + tentativa);
  } else if (tentativa > numeroSecreto) {
    alert("O número é MENOR que " + tentativa);
  }

} while (tentativa !== numeroSecreto);

alert("\nParabéns! Você acertou! O número era: " + numeroSecreto + "\nTotal de tentativas: " + contador);