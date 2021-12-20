let produtos = [
  "Underpants:6.99",
  "Socks:5.99",
  "T-shirt:14.99",
  "Trousers:31.99",
  "Shoes:23.99",
];

const $listaDeProdutos = document.querySelector(".lista-de-produtos");
const $valorTotal = document.querySelector('.valor-total')
let total = 0;

for (let i = 0; i < produtos.length; i++) {
  const infoProduto = produtos[i];
  const pontoEVirgula = infoProduto.indexOf(":");
  const nomeDoProduto = infoProduto.slice(0, pontoEVirgula);
  const precoDoProduto = Number(infoProduto.slice(pontoEVirgula + 1));
  total += precoDoProduto;

  const produtoDaLista = document.createElement('li')
  produtoDaLista.textContent = nomeDoProduto

  $listaDeProdutos.appendChild(produtoDaLista)
}

$valorTotal.textContent = `Total : $ ${total.toFixed(2)}`


