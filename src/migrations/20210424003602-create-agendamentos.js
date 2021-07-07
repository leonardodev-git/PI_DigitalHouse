'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Agendamentos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Start: {
        allowNull: false,
        type: Sequelize.DATE
      },
      End: {
        type: Sequelize.DATE
      },
      Valor_Total: {
        allowNull: false,
        type: Sequelize.FLOAT,
      },
      Profissional_ID: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Profissionais',
          key: 'id'
        }
      },
      Cliente_ID: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Clientes',
          key: 'id'
        }
      },
      Servico_ID: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Servicos',
          key: 'id'
        }
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Agendamentos');
  }
};