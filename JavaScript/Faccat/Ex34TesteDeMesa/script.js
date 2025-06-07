alert("Teste de Mesa");

let valorX = parseFloat(prompt("Digite o valor de X:"));
let valorY = parseFloat(prompt("Digite o valor de Y:"));
let valorZ = (valorX * valorY) + 5;
let resposta;

if (valorZ <= 0) {
    resposta = "A";
} else if (valorZ <= 100) {
    resposta = "B";
} else {
    resposta = "C";
}

alert(valorZ + " " + resposta);