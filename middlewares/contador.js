const fs = require('fs');

module.exports = function(req, res, next) {
  let valor = fs.readFileSync('contador.txt')
  valor = Number(valor)
  valor++;
  req.session.meuContadorPredileto = valor;
  fs.writeFileSync('contador.txt', valor.toString())
  next()
}