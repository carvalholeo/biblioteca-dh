const listaDeLivros = require("../services/database");

const BaseController = {
  index: (request, response) => {
    response.render('index', {
      title: 'Estante Virtual',
      theBookIsOnTheTable: listaDeLivros,
      ehUsuario: false
    })
  },
  delete: '',
  list: '',
}

module.exports = BaseController;