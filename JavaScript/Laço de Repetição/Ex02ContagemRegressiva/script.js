console.log("Vamos fazer uma contagem regressiva\n");

let contador = parseInt(prompt("Digite de que número começaremos a contar:"));

do {
  console.log("Número:", contador);
  contador = contador - 1;
} while (contador >= 0);
