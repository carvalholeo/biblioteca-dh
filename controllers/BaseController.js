const livros = require("../services/database");

const BaseController = {
  index: (req, res) => {
    res.render('index', { title: 'Biblioteca', livros });
  }
}

module.exports = BaseController;