function verificaSessao(req, res, next) {
  if (typeof req.session.usuario === 'undefined') {
    return res.redirect('/');
  }

  console.log(req.session)

  return next();
}

module.exports = verificaSessao;
