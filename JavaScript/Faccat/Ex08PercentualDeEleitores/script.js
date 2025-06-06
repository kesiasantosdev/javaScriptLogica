alert("Percentual de votos");

let totalEleitores = parseInt(prompt("Digite o número total de eleitores:"));
let votosBrancos = parseInt(prompt("Digite o número de votos brancos:"));
let votosNulos = parseInt(prompt("Digite o número de votos nulos:"));
let votosValidos = totalEleitores - (votosBrancos + votosNulos);

let percentualBrancos = (votosBrancos * 100) / totalEleitores;
let percentualNulos = (votosNulos * 100) / totalEleitores;
let percentualValidos = (votosValidos * 100) / totalEleitores;

alert("Percentual de votos brancos: " + percentualBrancos.toFixed(2) + "%");
alert("Percentual de votos nulos: " + percentualNulos.toFixed(2) + "%");
alert("Percentual de votos validos: " + percentualValidos.toFixed(2) + "%");