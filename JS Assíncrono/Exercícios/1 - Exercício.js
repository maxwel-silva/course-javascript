'use strict'

/*

Crie uma função que recebe a idade de um usuário e retorna uma Promise que depois de 2
segundos retornará se usuário é maior ou não que 18 anos

*/

function verificar(idade) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      return idade >= 18 ? resolve() : reject()
    }, 2000)
  })
}

verificar(15)
  .then(function () {
    console.log('Maior que 18')
  })

  .catch(function () {
    console.warn('Menor que 18')
  })