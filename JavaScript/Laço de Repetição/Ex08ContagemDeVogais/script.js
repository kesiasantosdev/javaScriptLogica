alert("Contagem de vogais (digite 'sair' para encerrar)");

let palavra = prompt("Digite uma palavra:").toLowerCase();

while (palavra !== "sair") {
  let totalVogais = 0;

  for (let i = 0; i < palavra.length; i++) {
    let letra = palavra[i];

    if ("aeiou".includes(letra)) {
      totalVogais++;
    }
  }

  alert(`A palavra '${palavra}' tem ${totalVogais} vogal(is).`);

  palavra = prompt("Digite uma palavra:").toLowerCase();
}

alert("Programa encerrado.");
