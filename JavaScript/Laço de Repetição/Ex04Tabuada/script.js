alert("Vamos fazer a tabuada do 1 ao 10 do número que desejar.");

let numero = parseInt(prompt("Digite o número que deseja fazer a tabuada:"));
let contador = 0;

do {
  let multiplicacao = numero * contador;
  console.log(`A multiplicação do número: ${numero} * ${contador} = ${multiplicacao}`);
  contador = contador + 1;
} while (contador <= 10);
