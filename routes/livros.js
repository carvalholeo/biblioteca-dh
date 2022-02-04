const express = require('express');
const router = express.Router();

const LivrosController = require('../controllers/LivrosController');
const verificaPrecoLivro = require('../middlewares/verificaPrecoLivro');

/* GET home page. */
router.get('/', LivrosController.formulario);

router.post('/criar', LivrosController.criarLivro)

router.get('/comprar', verificaPrecoLivro, (req, res) => {
  console.log('conexão no controller')
  req.session.livroComprado = 'Admirável Mundo Novo';
  req.session.precoLivro = 29.99;

  res.send(req.session.livroComprado)
})

module.exports = router;
