const mensagensSaudacoes = [
  'tenha um otimo natal',
  'feliz aniversario',
  'feliz ano novo',
  'feliz natal',
  'o natal esse ano esta belo '
]

const lista = document.querySelector('.lista')

for(let i = 0 ; i < mensagensSaudacoes.length ; i++){
   let mensagens =  mensagensSaudacoes[i]

   const itemDaLista = document.createElement('li')
   itemDaLista.textContent = mensagens
   
   lista.appendChild(itemDaLista)

   if(mensagens.indexOf('natal') !== -1){
     itemDaLista.classList.add('mudar-cor')
   }
}