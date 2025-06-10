let limite = parseInt(prompt("Digite até qual número deseja ver os pares:"));
let numero = 0;

do {
  if (numero % 2 === 0) {
    console.log("Número par:", numero);
  }
  numero = numero + 1;
} while (numero <= limite);
