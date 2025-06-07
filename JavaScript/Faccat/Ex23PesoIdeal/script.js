alert("Programa que calcula e exibe qual o peso ideal para você.");

let nome = prompt("Digite o seu nome:");
let altura = parseFloat(prompt("Digite a sua altura"));
let genero = prompt("Digite o seu gênero (M/F)").toUpperCase();
let pesoIdeal;

if (genero === "M") {
    pesoIdeal = (72.7 * altura) - 58;
} else {
    pesoIdeal = (62.1 * altura) - 44.7;
}

alert(nome + ", o peso ideal é de: " + pesoIdeal.toFixed(2) + " kg");
