const $select = document.querySelector('#selecionar-tema')
const $conteiner = document.querySelector('.conteiner')
const $texto = document.querySelector('label')

const MudarTema = (corDeFundo,corTexto)=>{
 $conteiner.style.background = corDeFundo
 $texto.style.color = corTexto
}

$select.addEventListener('change', function(){
  ($select.value ==='escuro')? MudarTema('black','white'): MudarTema('white','black')
})