alert("Vamos somar os números positivos até que um número negativo seja digitado.");

let soma = 0;
let numero;

do {
  numero = parseFloat(prompt("Digite um número:"));

  if (numero >= 0) {
    soma = soma + numero;
  }

} while (numero >= 0);

alert("A soma dos números positivos digitados é: " + soma.toFixed(2));
