const $select = document.querySelector('#times')
const $resultado = document.querySelector('.resultado')

const buscarResultadoDoTime = ()=>{
  const timeSelecionado = $select.value

  switch(timeSelecionado){
    case 'corinthians':
      $resultado.textContent = '1910 A fundação. Às 20h30 do dia 1º de setembro, à luz de um lampião, na esquina das ruas José Paulino e Cônego Martins, no bairro do Bom Retiro, o grupo de operários formado por Anselmo Corrêa, Antônio Pereira, Carlos Silva, Joaquim Ambrósio e Raphael Perrone fundaram o Sport Club Corinthians Paulista.'
      break
    case 'são paulo':
      $resultado.textContent = 'O tricolor paulista surgiu através da fusão de dois antigos clubes: o Paulistano, grande campeão no início do século XX e a Associação Atlética das Palmeiras, que se uniram em 1930 dando origem ao Clube Athlético São Paulo ou São Paulo da Floresta, como muitos o chamavam.'
      break
    case 'palmeiras':
      $resultado.textContent = 'O Palmeiras surgiu no dia 26 de agosto de 1914. Fundado por imigrantes italianos, seu primeiro nome foi Società Sportiva Palestra Italia. ... O Palmeiras foi campeão paulista logo em sua primeira partida com o novo nome. Foram, ao todo, 22 títulos estaduais.'
      break
    case 'santos':
      $resultado.textContent = 'O Santos Futebol Clube foi fundado por iniciativa de três esportistas da cidade, Francisco Raymundo Marques, Mário Ferraz de Campos e Argemiro de Souza Júnior. ... Em sua homenagem o nome do estádio que foi erguido, no ano de 1916, leva seu nome como reconhecimento de seu amor ao Alvinegro Praiano.' 
     break
    case 'flamengo':
      $resultado.textContent = 'O Flamengo foi fundado em 17 de novembro de 1895 para as disputas de remo. A entrada da equipe no futebol aconteceu em 1912. Atualmente, o time rubro-negro é o maior vencedor da história do Campeonato Carioca, com 31 títulos. Segundo diversas pesquisas, é o clube com o maior número de torcedores do País.'
  }
}
$select.addEventListener('change', buscarResultadoDoTime)