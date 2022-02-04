function verificaPrecoLivro(req, res, next) {
  if (req.session.precoLivro === 29.99) {
    console.log('conexão cortada')
    return res.send('VOCÊ É O PREMIADO')
  }

  console.log('conexão passou')

  next()
}

module.exports = verificaPrecoLivro;
