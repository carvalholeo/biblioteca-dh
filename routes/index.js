const express = require('express');
const router = express.Router();

const conexao = require('../database/conexao');

/* GET home page. */
router.get('/', async (req, res, next) => {
  const livros = await conexao('livros')
    .select('*')
    .orderBy('disponivel_venda', 'DESC')
    .orderBy('titulo', 'asc');

  res.render('index', { title: 'Biblioteca', livros });
});

module.exports = router;
