const senha = "1593456721";
let valor;

do {
  valor = prompt("Digite sua senha:");
  if (valor !== senha) {
    alert("Senha incorreta. Tente novamente.");
  }
} while (valor !== senha);

alert("Acesso permitido.");