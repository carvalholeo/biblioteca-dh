const express = require('express');
const router = express.Router();

const LivrosController = require('../controllers/LivrosController');

/* GET home page. */
router.get('/', LivrosController.formulario);

router.post('/criar', LivrosController.criarLivro)

module.exports = router;
