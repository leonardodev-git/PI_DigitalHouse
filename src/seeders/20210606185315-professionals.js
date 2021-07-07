'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Profissionais', [{
      nome: 'Bruno',
      sobrenome: 'Guedes',
      avatar: 'https://bit.ly/2SKi5HZ',
      createdAt: '2021-06-06 18:30:22',
      updatedAt: '2021-06-06 18:30:22'
    },
    {
      nome: 'Leonardo',
      sobrenome: 'Magalhães',
      avatar: 'https://bit.ly/35HaQ6n',
      createdAt: '2021-06-06 18:30:22',
      updatedAt: '2021-06-06 18:30:22'
    },
    {
      nome: 'Eduardo',
      sobrenome: 'Amorim',
      avatar: 'https://bit.ly/2TNM162',
      createdAt: '2021-06-06 18:30:22',
      updatedAt: '2021-06-06 18:30:22'
    },
    {
      nome: 'Guilherme',
      sobrenome: 'Totoli',
      avatar: 'https://bit.ly/3gHnAjD',
      createdAt: '2021-06-06 18:30:22',
      updatedAt: '2021-06-06 18:30:22'
    },
    {
      nome: 'Jonas',
      sobrenome: 'Lobo',
      avatar: 'https://bit.ly/3d32av5',
      createdAt: '2021-06-06 18:30:22',
      updatedAt: '2021-06-06 18:30:22'
    },
    {
      nome: 'João',
      sobrenome: 'Marcos',
      avatar: 'https://bit.ly/2SS71se',
      createdAt: '2021-06-06 18:30:22',
      updatedAt: '2021-06-06 18:30:22'
    },
    {
      nome: 'Renato',
      sobrenome: 'Napoli',
      avatar: 'https://bit.ly/3xx8Olc',
      createdAt: '2021-06-06 18:30:22',
      updatedAt: '2021-06-06 18:30:22'
    },
    {
      nome: 'Julia',
      sobrenome: 'Ramos',
      avatar: 'https://bit.ly/3cZDHqD',
      createdAt: '2021-06-06 18:30:22',
      updatedAt: '2021-06-06 18:30:22'
    },
    {
      nome: 'Pedro',
      sobrenome: 'Braga',
      avatar: 'https://bit.ly/3gZlrP4',
      createdAt: '2021-06-06 18:30:22',
      updatedAt: '2021-06-06 18:30:22'
    }

    ], {});

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('Clientes', null, {});

  }
};
