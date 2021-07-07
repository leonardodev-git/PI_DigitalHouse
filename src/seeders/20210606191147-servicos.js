'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Servicos', [{
      nome: 'Corte',
      preco: 30,
      profissional_ID: '1',
      createdAt: '2021-06-06 18:30:22',
      updatedAt: '2021-06-06 18:30:22'
    },
    {
      nome: 'Barba',
      preco: 30,
      profissional_ID: '1',
      createdAt: '2021-06-06 18:30:22',
      updatedAt: '2021-06-06 18:30:22'
    },
    {
      nome: 'Corte',
      preco: 30,
      profissional_ID: '2',
      createdAt: '2021-06-06 18:30:22',
      updatedAt: '2021-06-06 18:30:22'
    },
    {
      nome: 'Barba',
      preco: 30,
      profissional_ID: '2',
      createdAt: '2021-06-06 18:30:22',
      updatedAt: '2021-06-06 18:30:22'
    },
    {
      nome: 'Corte',
      preco: 30,
      profissional_ID: '3',
      createdAt: '2021-06-06 18:30:22',
      updatedAt: '2021-06-06 18:30:22'
    },
    {
      nome: 'Barba',
      preco: 30,
      profissional_ID: '3',
      createdAt: '2021-06-06 18:30:22',
      updatedAt: '2021-06-06 18:30:22'
    }
    ], {});

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('Clientes', null, {});

  }
};
