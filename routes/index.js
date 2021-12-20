const express = require('express');
const router = express.Router();

const livros = require("../services/database");

const BaseController = require('../controllers/BaseController');

/* GET home page. */
router.get('/', BaseController.index);

module.exports = router;
