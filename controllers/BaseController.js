const listaDeLivros = require("../services/database");

const BaseController = {
  index: (request, response) => {
    const paginaAnterior = request.session.paginaAnterior;
    const paginaAtual = request.session.paginaAcessada;
    const contador = request.session.meuContadorPredileto;

    request.session.usuario = 'usuario1';

    response
    .cookie('texto', 'esta é minha senha do facebook', {
      maxAge: new Date('2022-02-04T00:03:00'),
      expires: 300,
      httpOnly: true,
      signed: true
    })
    .cookie('batata_frita', '1', {
      maxAge: new Date('2022-02-04T00:03:00'),
      expires: 300,
      httpOnly: true,
      signed: true,
      secret: 'senha super secreta da KGB'
    })
    .cookie('quantidade_acessos', contador)
    .render('index', {
      title: 'Estante Virtual',
      theBookIsOnTheTable: listaDeLivros,
      ehUsuario: false,
      paginaAnterior,
      paginaAtual,
      contador
    })
  },
  delete: '',
  list: '',
}

module.exports = BaseController;