alert("Programa que calcula a área de um Hexágono");

let lado = parseFloat(prompt("Digite o valor do lado para saber o perímetro:"));
let perimetro = 6 * lado;
alert("O valor do perímetro é " + perimetro);

let apotema = parseFloat(prompt("Digite o valor da apotema:"));
let area = (perimetro*apotema)/2;
alert("O valor da área do hexágono é " + area.toFixed(2) + " cm²");