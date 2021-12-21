const $caixaDeTexto = document.querySelector(".entrada-de-dados");
const $lista = document.querySelector(".lista");
const $botaoAdicionar = document.querySelector(".botao");

const listaDeItens = [];

const adicionarItem = (evento) => {
  evento.preventDefault();
  const valorTexto = $caixaDeTexto.value;

  if (valorTexto) {
    listaDeItens.unshift(valorTexto);

    $lista.innerHTML = ''
    
    for (let i = 0; i < listaDeItens.length; i++) {

      const itens = listaDeItens[i];
      const itenDaLista = document.createElement("li");
      itenDaLista.textContent = itens;
      $lista.appendChild(itenDaLista);
    }
    if (listaDeItens.length >= 5) {
      listaDeItens.pop();
    }

    $caixaDeTexto.value = "";
    $caixaDeTexto.focus();
    console.log(listaDeItens);
  }
};

$botaoAdicionar.addEventListener("click", adicionarItem);
