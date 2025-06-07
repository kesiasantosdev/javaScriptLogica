alert("Programa que calcula quanto o funcionario receberá de hora extra.");

let horasTrabalhadas = parseFloat(prompt("Digite o total de horas trabalhadas no mês:"));
let valorDaHora = parseFloat(prompt("Digite quanto você recebe por hora:"));
let horasSemanais = 40
let semanasPorMes = 4
let horasMensalNormal = horasSemanais * semanasPorMes;
let horasExtras;
let salarioBase;

if (horasTrabalhadas > horasMensalNormal) {
    horasExtras = horasTrabalhadas - horasMensalNormal;
    salarioBase = horasMensalNormal * valorDaHora;
} else {
    horasExtras = 0
    salarioBase = horasTrabalhadas * valorDaHora
}

   let salarioExtra = horasExtras * valorDaHora * 1.5;
   let salarioTotal = salarioBase + salarioExtra;

   alert("Ele recebeu de extra: R$ " + salarioExtra.toFixed(2));
   alert("O salário total do funcionário é: R$ " + salarioTotal.toFixed(2));