alert("Programa que calcula e exibe se um número é positivo, negativo ou zero");

let numero = parseFloat(prompt("Digite o número:"));

if (numero >0 ) {
    alert("Esse número " + numero + " é positivo")
} else if (numero === 0 ){
    alert("Esse número é " + numero);
} else {
    alert("Esse número " + numero + " é negativo");
}
