alert("Programa que mostra a idade em formato de dias");

alert("Vamos precisar que você informe quantos anos, meses e dias você já viveu");

let idade = parseInt(prompt("Digite sua idade:"));
let meses = parseInt(prompt("Digite os meses:"));
let dias = parseInt(prompt("Digite os dias:"));
let anosEmDias = idade * 365;
let mesesEmDias = meses * 30;
let total = anosEmDias + mesesEmDias + dias;

alert("Você viveu " + total + " dias");