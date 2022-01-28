const fs = require('fs');

module.exports = function(req, res, next) {
  let valor = fs.readFileSync('contador.txt')
  valor = Number(valor)
  valor++;
  fs.writeFileSync('contador.txt', valor.toString())
  console.log('página inicial acessada ' + valor + ' vez(es)')
  next()
}