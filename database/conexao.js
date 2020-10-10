const knex = require('knex');

const configuracao = require('../knexfile');
const ambiente = "development";

const config = configuracao[ambiente]

const conexao = knex(config);

module.exports = conexao;