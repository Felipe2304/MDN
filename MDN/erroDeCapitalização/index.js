const cidadesReinoUnido = ["lonDon", "ManCHESTer", "BiRmiNGHAM", "liVERpoOL"];

const lista = document.querySelector('.lista')

for(let i = 0 ; i < cidadesReinoUnido.length ; i++){

  const listaCidades = cidadesReinoUnido[i] 
  const listaCapitalizada = listaCidades.toLowerCase()
  const primeiraLetra = listaCapitalizada.slice(0,1)
  const maiuscula = primeiraLetra.toUpperCase()
  const resultado = listaCapitalizada.replace(primeiraLetra , maiuscula) 
  const itemDaLista = document.createElement('li')
  itemDaLista.textContent = resultado

  lista.appendChild(itemDaLista)
  
}
