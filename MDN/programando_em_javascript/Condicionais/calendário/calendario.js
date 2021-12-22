const $selecionar = document.querySelector('#selecionar-mes')


const todosMesesDoAno = ['meses do ano ','janeiro','fevereiro','março','abril','maio','junho','julho','agosto','setembro','outubro','novembro','dezembro']

const listaDeDiasDaSemana = ['Domingo','Segunda-feira','terça-feira','quarta-feira','quinta-feira','Sexta-feira','Sábado']

const criarMesDoAno = (TodosMesesDoAno)=>{

  for(let i = 0 ; i < TodosMesesDoAno.length ; i++){
    const mes = document.createElement('option')
    mes.setAttribute('value', TodosMesesDoAno[i])
    mes.textContent = TodosMesesDoAno[i]

    $selecionar.appendChild(mes)
  }
}
criarMesDoAno(todosMesesDoAno)

const BuscarMesMencionado = () =>{
  const selecionarMes = $selecionar.value
  let diasMes = 0

  switch(selecionarMes){
    case 'janeiro': diasMes = 31
    break
    case 'fevereiro' : diasMes = 29
    break
    case 'março': diasMes = 31
    break
    case 'abril':diasMes = 30
    break
    case 'maio':diasMes = 31
    break
    case 'junho':diasMes = 30
    break
    case 'julho':diasMes = 31
    break
    case 'agosto':diasMes = 31
    break
    case 'setembro':diasMes = 30
    break
    case 'outubro':diasMes = 31
    break
    case 'novembro':diasMes = 30
    break
    case 'dezembro':diasMes = 31
    break
  }
  quantidadeDeDias(diasMes)
  alterarNomeDoMes(selecionarMes)
}
const imprimirDiasNoCalendario = (numeroDeDias)=>{
  const $listaDedias = document.querySelector('.lista-de-dias')
  $listaDedias.textContent = ''
  for(let i = 1 ; i <= numeroDeDias ; i++){
    const diaDoMes = document.createElement('li')
    diaDoMes.classList.add('dia-do-mes')
    diaDoMes.textContent = i
    $listaDedias.appendChild(diaDoMes)
  }
}
const quantidadeDeDias = (quantidade)=>{
  const numeroDeDias = quantidade 
  imprimirDiasNoCalendario(numeroDeDias)
}

const alterarNomeDoMes = (nomeDoMes)=>{
  const MesDoAno = document.querySelector('.mes')
  MesDoAno.textContent = nomeDoMes
  if(nomeDoMes === todosMesesDoAno[0]){
    return false 
  }
}
const imprimirDiasDaSemana = (listaDeDiasDaSemana) =>{
  const $diasSemana = document.querySelector('.dias-semana')

  for(let i = 0 ; i < listaDeDiasDaSemana.length ;i++){
    const dias = document.createElement('div')
    dias.classList.add('dias')
    dias.textContent = listaDeDiasDaSemana[i]

    $diasSemana.appendChild(dias)
  }
}

imprimirDiasDaSemana(listaDeDiasDaSemana)

$selecionar.addEventListener('change', BuscarMesMencionado)