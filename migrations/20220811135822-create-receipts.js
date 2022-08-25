'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Receipts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      lastname: {
        type: Sequelize.STRING
      },
      payment_date: {
        type: Sequelize.DATE
      },
      cost: {
        type: Sequelize.STRING
      },
      months: {
        type: Sequelize.STRING
      },
      collector_name: {
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
      idCondition: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Conditions',
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
    await queryInterface.dropTable('Receipts');
  }
};