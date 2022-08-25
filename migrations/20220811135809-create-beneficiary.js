'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Beneficiaries', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      identification: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      lastname: {
        type: Sequelize.STRING
      },
      birth_date: {
        type: Sequelize.DATE
      },
      affiliation: {
        type: Sequelize.DATE
      },
      relationship: {
        type: Sequelize.STRING
      },
      observations: {
        type: Sequelize.STRING
      },
      idIncumbent: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Incumbents',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Beneficiaries');
  }
};