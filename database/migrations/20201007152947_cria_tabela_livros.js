
exports.up = function(knex) {
  return knex.schema.createTable('livros', table => {
    table.increments('id').primary();
    table.string('titulo');
    table.integer('ano_lancamento');
    table.string('autor');
    table.boolean('disponivel_venda');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('livros');
};
