
exports.seed = function(knex) {
  return knex('livros').del()
    .then(() => {
      return knex('livros').insert([
        {
          titulo: 'Mais esperto que o Diabo',
          ano_lancamento: 2014,
          autor: 'Napoleon Hill',
          disponivel_venda: true
        },
        {
          titulo: 'A coragem de ser imperfeito',
          ano_lancamento: 2016,
          autor: 'Brené Brown',
          disponivel_venda: true
        },
        {
          titulo: 'Uma terra prometida',
          ano_lancamento: 2020,
          autor: 'Barack Obama',
          disponivel_venda: false
        },
        {
          titulo: 'Crer ou não crer',
          ano_lancamento: 2017,
          autor: 'Leandro Karnal e Pe. Fávio de Melo',
          disponivel_venda: true
        },
        {
          titulo: 'Gás natural aplicado a indústria e ao grande comércio',
          ano_lancamento: 0,
          autor: 'José Roberto Nunes Moreira da Silva',
          disponivel_venda: false
        },
        {
          titulo: 'Redes industriais para automação industrial',
          ano_lancamento: 2019,
          autor: 'Max Mauro Dias dos Santos',
          disponivel_venda: false
        }
      ]);
    });
};
