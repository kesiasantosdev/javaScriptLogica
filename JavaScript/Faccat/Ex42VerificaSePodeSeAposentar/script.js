alert("Programa que verifica se você já pode se aposentar.");

let idade = parseInt(prompt("Digite a sua idade:"));
let anosDeContribuicao = parseInt(prompt("Digite quantos anos de contribuição você possui:"));

if (idade > 64) {
    alert("Você já pode fazer o pedido de aposentadoria.")
} else if (anosDeContribuicao > 29) {
    alert("Você já pode fazer o pedido de aposentadoria.")
} else if (idade > 59 && anosDeContribuicao > 24) {
    alert("Você já pode fazer o pedido de aposentadoria.")
} else {
    alert("Você ainda não pode fazer o pedido de aposentadoria, pois não atinge nenhuma das exigências.")
}