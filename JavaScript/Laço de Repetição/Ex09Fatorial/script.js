let numero = parseInt(prompt("Digite o número para calcular o fatorial:"));

if (numero < 0) {
  alert("Não é possível calcular o fatorial de um número negativo.");
} else {
  let fatorial = 1;
  let contador = numero;
  let resultadoTexto = `${numero}! = `;

  while (contador > 0) {
    resultadoTexto += contador;
    if (contador > 1) {
      resultadoTexto += " x ";
    }
    fatorial *= contador;
    contador--;
  }

  resultadoTexto += ` = ${fatorial}`;
  alert(resultadoTexto + `\nO fatorial de ${numero} é: ${fatorial}`);
}