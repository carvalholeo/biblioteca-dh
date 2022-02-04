const express = require('express');

const router = express.Router();

const livros = require("../services/database");

const BaseController = require('../controllers/BaseController');
const contador = require('../middlewares/contador')
const verificaSessao = require('../middlewares/verificaSessao');

/* GET home page. */
// criar arquivo de contador
// chamar esse arquivo no middleware de rota
// incrementar o número do arquivo
// exibir o novo número no console
// guardar o novo número no arquivo = substituir a informação anterior
// executar o next


router.get('/', contador, BaseController.index);

// router.use(verificaSessao)

router.get('/teste', (req, res) => {
  res.send('logado')
})

module.exports = router;
