alert("Programa que transforma a temperatura de Fahrenheit para graus Celsius");

let temperaturaFahrenheit = parseFloat(prompt("Digite o valor da temperatura Fahrenheit:"));
let grausCelsius = ((temperaturaFahrenheit - 32) * 5 ) / 9;

alert("A temperatura é " + grausCelsius.toFixed(2) + "°C");