'use strict'

axios.get('https://api.github.com/users?since=135')

  .then(function (response) {
    console.log(response)
  })

  .catch(function (error) {
    console.warn(error)
  })