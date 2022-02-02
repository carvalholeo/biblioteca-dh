const listaDeLivros = require("../services/database");

const BaseController = {
  index: (request, response) => {
    const paginaAnterior = request.session.paginaAnterior;
    const paginaAtual = request.session.paginaAcessada;
    const contador = request.session.meuContadorPredileto;

    request.session.usuario = 'usuario1';

    response.render('index', {
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