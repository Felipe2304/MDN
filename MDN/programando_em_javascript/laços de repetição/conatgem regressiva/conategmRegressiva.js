const $div = document.querySelector('div')
let teste = 0
for(let i = 10 ; i >= teste ;i--){
  const paragrafo = document.createElement('p')
  paragrafo.textContent = i
  $div.appendChild(paragrafo)
  if(i == 10){
    paragrafo.textContent = 'contagem regressiva 10 '
  }else if(i == 0){
    paragrafo.textContent = 'Lançar'
  }
}