const infoEstacao = [
  "MAN675847583748sjt567654;Manchester Piccadilly",
  "GNF576746573fhdg4737dh4;Greenfield",
  "LIV5hg65hd737456236dch46dg4;Liverpool Lime Street",
  "SYB4f65hf75f736463;Stalybridge",
  "HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield",
];

const lista = document.querySelector('.lista')

for(let i = 0 ; i < infoEstacao.length ;  i++){
  const estacao = infoEstacao[i]
  const siglaCidade = estacao.slice(0,3)
  const indicePontoEVirgula = estacao.indexOf(';')
  const cidade = estacao.slice(indicePontoEVirgula + 1)
  
  const itemDaLista = document.createElement('li')
  itemDaLista.textContent = `${siglaCidade}: ${cidade}`

  lista.appendChild(itemDaLista)
}
