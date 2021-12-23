
const pessoas = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce']

const $convidadosAceitos = document.querySelector('.convidados-aceitos')
const $convidadosRecusados = document.querySelector('.convidados-recusados')

for(let i = 0 ; i < pessoas.length ; i++){
  const convidados =  pessoas[i]
  if(convidados === 'Phil' || convidados === 'Lola'){
  $convidadosRecusados.textContent += convidados + ' , '
  }else{
    $convidadosAceitos.textContent += convidados + ' , '
  }
}

