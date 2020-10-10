const knex = require('knex');

const configuracao = require('../knexfile');
const ambiente = process.env.NODE_ENV || 'development';

const config = configuracao[ambiente]

const conexao = knex(config);

module.exports = conexao;