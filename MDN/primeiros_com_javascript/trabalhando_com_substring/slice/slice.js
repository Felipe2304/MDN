const nome = 'felipe'

console.log(nome.slice(2)) // quando utilizado apenas um parametro significa que o conteudo sera extraido apartir
                          // da posição em que foi ordenada , neste caso ira nos retornar "lipe"

console.log(nome.slice(0,nome.length -1)) // neste caso o primeiro parametro significa o ponto de partida da extração
                            // o segundo o ponto de parada , neste nosso caso nos retorna "felip" ja que o segundo 
                            //parametro indica a ultima posição da string 