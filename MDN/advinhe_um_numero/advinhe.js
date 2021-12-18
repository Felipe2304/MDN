const $enviarPalpite = document.querySelector('.palpite')
const $campoDoPalpite = document.querySelector('.palpitar-numero')
const $botaoVerificar = document.querySelector('.botao-verificar')
const $palpites = document.querySelector('.texto-palpites')
const $baixoOuAlto = document.querySelector('.baixo-ou-alto')
const $caixaDoJogo = document.querySelector('.caixa-do-jogo')


const gerarNumeroAleatorio = ()=>{

  return Math.floor(Math.random()*100)
}

let tentativas = 1

const verificarPalpite = (evento)=>{
  evento.preventDefault()
  const numeroAleatorioGerado = gerarNumeroAleatorio()
  const valorDoPalpiteEnviado = Number($enviarPalpite.value)
  if(tentativas === 1){
    $palpites.textContent = 'palpites anteriores :'
  }
   $palpites.textContent += valorDoPalpiteEnviado + ' '
  if(numeroAleatorioGerado > valorDoPalpiteEnviado){
    $baixoOuAlto.textContent = 'Valor muito baixo '
    $baixoOuAlto.classList.add('erro')
  }else if(numeroAleatorioGerado < valorDoPalpiteEnviado ){
    $baixoOuAlto.textContent  = 'valor muito alto'
    $baixoOuAlto.classList.add('erro')
  }else if(numeroAleatorioGerado === valorDoPalpiteEnviado){
    $baixoOuAlto.textContent = 'Parabéns você acertou o número gerado '
    $baixoOuAlto.classList.add('acertou')
    desabilitarJogo()
  }
  if(tentativas == 10){
    desabilitarJogo()
  }
  $enviarPalpite.value = ''

  tentativas++
  console.log(tentativas)
}

$botaoVerificar.addEventListener('click', verificarPalpite)

const botaoReiniciar = document.createElement('button')
botaoReiniciar.classList.add('botao')
botaoReiniciar.textContent = 'Reiniciar'

const desabilitarJogo = ()=>{
  $enviarPalpite.disabled = true
  $botaoVerificar.disabled = true
  $baixoOuAlto.textContent = 'Fim de jogo'
  $caixaDoJogo.appendChild(botaoReiniciar)
  botaoReiniciar.addEventListener('click', reiniciarJogo)
}

const reiniciarJogo = ()=>{
  tentativas = 1

  $baixoOuAlto.textContent = ''
  $palpites.textContent = ''
  $enviarPalpite.disabled = false
  $botaoVerificar.disabled = false
  botaoReiniciar.remove()

  gerarNumeroAleatorio()
}
